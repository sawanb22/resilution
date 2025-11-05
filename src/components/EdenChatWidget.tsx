'use client'
import React, { useEffect, useRef, useState } from 'react'

type Sender = 'user' | 'eden'
interface Message {
  id: string
  text: string
  sender: Sender
  timestamp: Date
}

export default function EdenChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi!\nI'm EDEN, your guide to Resilution.\nAsk me anything about our platform!",
      sender: 'eden',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>('')
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
      const res = await fetch('/api/eden', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sendMessage',
          message: userText,
          sessionId,
        }),
      })
      const data = await res.json().catch(() => ({} as any))
      if (!res.ok) throw new Error((data as any)?.error || 'Upstream error')

      const reply =
        (data as any)?.response ??
        (data as any)?.message ??
        (data as any)?.output ??
        (typeof data === 'string' ? data : JSON.stringify(data))

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
    setMessages([
      {
        id: '1',
        text: "👋 Hi!\nI'm EDEN, your guide to Resilution.\nAsk me anything about our platform!",
        sender: 'eden',
        timestamp: new Date(),
      },
    ])
    localStorage.removeItem('eden_session_id')
    const newSid = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    localStorage.setItem('eden_session_id', newSid)
    setSessionId(newSid)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <div className="eden-widget">
      {/* Floating launcher button - charcoal disc with green ring */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[var(--bg-base)] text-[var(--txt-primary)] z-[100]
                   shadow-[inset_0_0_0_1px_rgba(184,255,77,.55)] hover:shadow-[inset_0_0_0_1px_rgba(184,255,77,.75),0_0_16px_rgba(184,255,77,.12)]
                   transition-[box-shadow,transform] duration-150 ease-eden-out hover:scale-105 focus:outline-none focus-visible:eden-focus"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        title={isOpen ? 'Close' : 'Chat'}
      >
        <span className="text-lg">{isOpen ? '✕' : '💬'}</span>
      </button>

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
              (isFullscreen ? 'h-[90vh] w-full max-w-3xl' : 'h-[600px] w-[400px]') +
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

            {/* Conversation */}
            <div className="flex-1 overflow-y-auto px-3 pt-3 pb-3 space-y-3">
              {messages.map((m, idx) => (
                <div key={m.id} className={(m.sender === 'eden' ? 'justify-start' : 'justify-end') + ' flex'}>
                  <Bubble role={m.sender === 'eden' ? 'assistant' : 'user'} isFirstWelcome={idx === 0 && m.sender === 'eden'}>
                    <p className="whitespace-pre-wrap">{m.sender === 'eden' ? formatBotText(m.text) : m.text}</p>
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

            {/* Input */}
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
