'use client'
import React, { useEffect, useRef, useState } from 'react'

type Sender = 'user' | 'eden'
interface Message {
  id: string
  text: string
  sender: Sender
  timestamp: Date
}
type Role = 'Investor' | 'Business Owner' | 'VC' | 'Just Curious'

export default function EdenChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    // Regular messages will populate after onboarding
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>('')
  const [needsOnboarding, setNeedsOnboarding] = useState<boolean>(true)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState<Role | ''>('')
  const [profile, setProfile] = useState<{ firstName?: string; email?: string; role?: Role }>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Generate or retrieve session ID on mount
  useEffect(() => {
    const getOrCreateSessionId = () => {
      let sid = localStorage.getItem('eden_session_id')
      if (!sid) {
        sid = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
        localStorage.setItem('eden_session_id', sid)
      }
      return sid
    }
    setSessionId(getOrCreateSessionId())

    // Restore onboarding status if previously completed in this browser
    const onboarded = localStorage.getItem('eden_onboarded') === 'true'
    if (onboarded) {
      setNeedsOnboarding(false)
      try {
        const saved = JSON.parse(localStorage.getItem('eden_profile') || '{}')
        if (saved?.firstName) setProfile(saved)
      } catch {}
      // Seed a greeting message for existing users
      setMessages([
        {
          id: 'hello',
          text: `👋 Hi${profile?.firstName ? `, ${profile.firstName}` : ''}! I'm EDEN. Ask me anything about our platform!`,
          sender: 'eden',
          timestamp: new Date(),
        },
      ])
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const formatBotText = (text: string) => {
    if (!text) return ''
    let t = text.replace(/\r\n/g, '\n')
    t = t.replace(/\s*•\s*/g, '\n• ')
    t = t.replace(/([.!?])\s+(?=[A-Z])/g, '$1\n')
    t = t.replace(/\n{3,}/g, '\n\n')
    return t.trim()
  }

  // Single-flight send with one automatic retry for transient errors/timeouts
  const sendToEden = async (msg: string): Promise<string> => {
    const attempt = async () => {
      const res = await fetch('/api/eden', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sendMessage', message: msg, sessionId, metadata: profile }),
      })
      const data = await res.json().catch(() => ({} as any))
      if (!res.ok) throw new Error((data as any)?.error || 'Upstream error')
      const reply =
        (data as any)?.response ??
        (data as any)?.message ??
        (data as any)?.output ??
        (typeof data === 'string' ? data : JSON.stringify(data))
      return reply
    }
    try { return await attempt() } catch (e) {
      // brief backoff then one retry
      await new Promise(r => setTimeout(r, 1200))
      return await attempt()
    }
  }

  // Convert URLs in text to clickable links while preserving the rest as plain text
  const linkify = (input: string): React.ReactNode[] => {
    const nodes: React.ReactNode[] = []
    if (!input) return nodes
    const urlRegex = /(https?:\/\/[^\s<>\)]+)(?![^<]*>)/g
    let lastIndex = 0
    let match: RegExpExecArray | null
    let k = 0
    while ((match = urlRegex.exec(input)) !== null) {
      const url = match[0]
      const start = match.index
      if (start > lastIndex) nodes.push(input.slice(lastIndex, start))
      nodes.push(
        <a
          key={`link-${k++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand)] underline underline-offset-2 decoration-[var(--brand)] hover:text-[var(--brand-600)] transition-colors break-all"
        >
          {url}
        </a>
      )
      lastIndex = start + url.length
    }
    if (lastIndex < input.length) nodes.push(input.slice(lastIndex))
    return nodes
  }

  const handleSend = async () => {
    if (!input.trim()) return
    const userText = input
    setInput('')

    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), text: userText, sender: 'user', timestamp: new Date() },
    ])
    setIsLoading(true)

    try {
      const reply = await sendToEden(userText)
      setMessages((prev) => [
        ...prev,
        { id: String(Date.now() + 1), text: reply, sender: 'eden', timestamp: new Date() },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 2),
          text: '❌ Sorry, I had trouble connecting. Please try again.',
          sender: 'eden',
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) handleSend()
  }

  const handleNewChat = () => {
    setMessages([])
    localStorage.removeItem('eden_session_id')
    localStorage.removeItem('eden_onboarded')
    localStorage.removeItem('eden_profile')
    setNeedsOnboarding(true)
    setFirstName('')
    setEmail('')
    setRole('')
    const newSid = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('eden_session_id', newSid)
    setSessionId(newSid)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  const emailOk = (e: string) => /^(?:[a-zA-Z0-9_'^&\/+{}!#$%*=?`{|}~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(e)
  const roleOk = (r: any): r is Role => ['Investor','Business Owner','VC','Just Curious'].includes(r)
  const formValid = firstName.trim().length > 0 && emailOk(email) && roleOk(role)

  const submitOnboarding = async () => {
    if (!formValid || isLoading) return
    const payload = { firstName: firstName.trim(), email: email.trim(), role: role as Role }
    setProfile(payload)
    localStorage.setItem('eden_profile', JSON.stringify(payload))
    localStorage.setItem('eden_onboarded', 'true')

    // Construct user's first message with the form details
    const onboardingUserText = `Onboarding details:\nFirst name: ${payload.firstName}\nEmail: ${payload.email}\nRole: ${payload.role}`

    // Hide the form and append the user message
    setNeedsOnboarding(false)
    setMessages((prev) => ([
      ...prev,
      { id: String(Date.now()), text: onboardingUserText, sender: 'user', timestamp: new Date() },
    ]))

    // Send to backend and wait for assistant reply
    setIsLoading(true)
    try {
      const reply = await sendToEden(onboardingUserText)
      setMessages((prev) => ([
        ...prev,
        { id: String(Date.now() + 1), text: reply, sender: 'eden', timestamp: new Date() },
      ]))
    } catch {
      setMessages((prev) => ([
        ...prev,
        { id: String(Date.now() + 2), text: '❌ Sorry, I had trouble connecting. Please try again.', sender: 'eden', timestamp: new Date() },
      ]))
    } finally {
      setIsLoading(false)
      setTimeout(() => inputRef.current?.focus(), 120)
    }
  }

  return (
    <div className="eden-widget">
      {/* Floating launcher with helper label */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
        {/* Helper pill shown when widget is closed */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full px-3 py-1 text-[13px] font-medium bg-[var(--bg-panel)] text-[var(--txt-primary)]
                       border border-[var(--border-accent)] shadow-[var(--glow)] hover:shadow-[inset_0_0_0_1px_rgba(184,255,77,.55),0_0_24px_rgba(184,255,77,.12)]
                       transition-[box-shadow] duration-150 ease-eden-out"
            aria-label="Open EDEN chat"
            title="Open EDEN chat"
          >
            Need help?
          </button>
        )}

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="h-14 w-14 rounded-full bg-[var(--bg-base)] text-[var(--txt-primary)]
                     shadow-[inset_0_0_0_1px_rgba(184,255,77,.55)] hover:shadow-[inset_0_0_0_1px_rgba(184,255,77,.75),0_0_16px_rgba(184,255,77,.12)]
                     transition-[box-shadow,transform] duration-150 ease-eden-out hover:scale-105 focus:outline-none focus-visible:eden-focus"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          title={isOpen ? 'Close' : 'Chat'}
        >
          <span className="text-lg">{isOpen ? '✕' : '💬'}</span>
        </button>
      </div>

      {/* Backdrop for fullscreen */}
      {isOpen && isFullscreen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          onClick={() => setIsFullscreen(false)}
        />
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={
            isFullscreen
              ? 'fixed inset-0 z-[70] flex items-center justify-center p-4'
              : 'fixed bottom-24 right-6 z-[70]'
          }
        >
          <div
            className={
              (isFullscreen ? 'h-[90vh] w-full max-w-3xl' : 'h-[600px] w-[412px]') +
              ' flex flex-col rounded-eden overflow-hidden shadow-[var(--glow)] bg-[var(--bg-panel)] text-[var(--txt-primary)]'
            }
          >

            {/* Header */}
            <header className="eden-header px-4 py-3 flex-shrink-0 text-[var(--txt-primary)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="eden-status-dot" aria-hidden />
                  <div className="flex flex-col">
                    <h2 className="text-[18px] md:text-[20px] font-semibold tracking-[0.01em]">EDEN</h2>
                    <p className="text-[12px] text-[var(--txt-secondary)] leading-none mt-0.5">Always-on assistant</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleNewChat}
                    className="rounded-xl px-3.5 py-2 text-[14px] md:text-[15px] font-semibold bg-[var(--brand)] text-[var(--bg-base)]
                               hover:bg-[var(--brand-600)] disabled:opacity-40 transition-colors duration-150 ease-eden-out focus:outline-none focus-visible:eden-focus"
                    title="Start a new conversation"
                  >
                    New Chat
                  </button>
                  <button
                    onClick={() => setIsFullscreen((v) => !v)}
                    className="rounded-full w-9 h-9 flex items-center justify-center bg-[var(--bg-base)]
                               shadow-[inset_0_0_0_1px_rgba(184,255,77,.55)] hover:shadow-[inset_0_0_0_1px_rgba(184,255,77,.75),0_0_16px_rgba(184,255,77,.12)]
                               transition-[box-shadow] duration-150 ease-eden-out focus:outline-none focus-visible:eden-focus"
                    title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                    aria-label="Fullscreen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" className="text-[var(--txt-primary)]" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" />
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            {/* Conversation / Onboarding */}
            <div className="flex-1 overflow-y-auto px-3 pt-3 pb-3 space-y-3">
              {needsOnboarding && (
                <div className="flex justify-start">
                  <div className="max-w-[92%] rounded-eden px-4 py-4 text-[16px] leading-[1.6] bg-[var(--bubble-ai)] border border-[var(--border-muted)] text-[var(--txt-primary)] shadow-[var(--shadow-s)] eden-welcome-glow animate-scaleIn">
                    <div className="space-y-3">
                      <p className="whitespace-pre-wrap">{"Hi! 👋 Welcome to Resilution. I'm Eden, your guide here.\n\nBefore we get started, could you share:"}</p>
                      <div className="mt-2 grid gap-3">
                        <label className="text-[14px] text-[var(--txt-secondary)]">Your first name</label>
                        <input
                          value={firstName}
                          onChange={(e)=>setFirstName(e.target.value)}
                          placeholder="First name"
                          className="bg-transparent border border-[var(--border-muted)] rounded-eden px-3 py-2 outline-none text-[var(--txt-primary)] placeholder-[var(--txt-secondary)] focus:eden-focus"
                        />
                        <label className="text-[14px] text-[var(--txt-secondary)] mt-2">Your email</label>
                        <input
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          placeholder="you@example.com"
                          type="email"
                          className={`bg-transparent border rounded-eden px-3 py-2 outline-none text-[var(--txt-primary)] placeholder-[var(--txt-secondary)] focus:eden-focus ${email.length? (emailOk(email)?'border-[var(--border-muted)]':'border-red-500/60'):'border-[var(--border-muted)]'}`}
                        />
                        <label className="text-[14px] text-[var(--txt-secondary)] mt-2">Which best describes you?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {(['Investor','Business Owner','VC','Just Curious'] as Role[]).map((r)=> (
                            <button key={r}
                              type="button"
                              onClick={()=>setRole(r)}
                              className={`rounded-xl px-3 py-2 text-sm border transition-colors duration-150 ${role===r? 'bg-[var(--brand)] text-[var(--bg-base)] border-transparent':'bg-[var(--bubble-ai)] text-[var(--txt-primary)] border-[var(--border-muted)] hover:border-[var(--border-accent)]'}`}
                            >{r}</button>
                          ))}
                        </div>
                        <p className="mt-2">{"Thanks! Let's get you started. ✨"}</p>
                        <div className="pt-2">
                          <button
                            onClick={submitOnboarding}
                            disabled={!formValid || isLoading}
                            className="rounded-xl px-4 py-2 text-[14px] font-semibold bg-[var(--brand)] text-[var(--bg-base)] hover:bg-[var(--brand-600)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150 ease-eden-out"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {messages.map((m, idx) => (
                <div key={m.id} className={(m.sender === 'eden' ? 'justify-start' : 'justify-end') + ' flex'}>
                  <Bubble role={m.sender === 'eden' ? 'assistant' : 'user'} isFirstWelcome={idx === 0 && m.sender === 'eden'}>
                    <p className="whitespace-pre-wrap break-words">{linkify(m.sender === 'eden' ? formatBotText(m.text) : m.text)}</p>
                  </Bubble>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <Bubble role="assistant"><p className="text-[var(--txt-secondary)]">Typing...</p></Bubble>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - hidden until onboarding is complete */}
            {!needsOnboarding && (
              <div className="px-3 pb-3 flex-shrink-0">
                <form onSubmit={(e) => { e.preventDefault(); if (!isLoading) handleSend(); }}>
                  <div className="flex items-center gap-2 bg-[var(--bubble-ai)] border border-[var(--border-muted)] rounded-eden px-3 py-2 focus-within:eden-focus transition-shadow duration-150 ease-eden-out">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message…"
                      className="flex-1 bg-transparent outline-none text-[var(--txt-primary)] placeholder-[var(--txt-secondary)] text-[16px] leading-[1.6]"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      className="rounded-xl px-4 py-2 text-[14px] md:text-[15px] font-semibold bg-[var(--brand)] text-[var(--bg-base)]
                                 hover:bg-[var(--brand-600)] disabled:opacity-40 transition-colors duration-150 ease-eden-out focus:outline-none focus-visible:eden-focus"
                      aria-label="Send"
                      title="Send"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" className="text-[var(--bg-base)]" fill="currentColor">
                          <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                        </svg>
                        Send
                      </span>
                    </button>
                  </div>
                  <div className="text-[11px] text-[var(--txt-secondary)] mt-2 text-center">Press Enter to send</div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Bubble({ role, children, isFirstWelcome }: { role: 'assistant' | 'user'; children: React.ReactNode; isFirstWelcome?: boolean }) {
  const isAI = role === 'assistant'
  return (
    <div
      className={
        `max-w-[84%] rounded-eden px-4 py-4 text-[16px] leading-[1.6] animate-slideUp ` +
        (isAI
          ? `bg-[var(--bubble-ai)] border border-[var(--border-muted)] text-[var(--txt-primary)] shadow-[var(--shadow-s)] ${isFirstWelcome ? 'eden-welcome-glow animate-scaleIn' : ''}`
          : 'bg-[var(--bubble-user)] text-[var(--txt-primary)] shadow-[var(--shadow-s)]')
      }
    >
      {children}
    </div>
  )
}
