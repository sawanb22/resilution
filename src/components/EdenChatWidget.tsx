'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'eden'
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
  const messagesEndRef = useRef<HTMLDivElement>(null)

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
        body: JSON.stringify({ action: 'sendMessage', message: userText }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data?.error || 'Upstream error')

      const reply =
        data?.response ??
        data?.message ??
        data?.output ??
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

  return (
    <div className="eden-widget">
      {/* Floating launcher button - always visible */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300
                   bg-gradient-to-br from-sky-400 to-blue-600 text-white text-2xl z-[100] transition-transform hover:scale-105"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        title={isOpen ? 'Close' : 'Chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Backdrop for fullscreen */}
      {isOpen && isFullscreen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60]"
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
              ' flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-sky-100 bg-white'
            }
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-5 py-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-sm" />
                  <div>
                    <div className="font-semibold leading-tight">EDEN</div>
                    <div className="text-white/90 text-xs">
                      Empowering Decentralized Economic Networks
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsFullscreen((v) => !v)}
                  className="rounded-lg px-3 py-1.5 bg-white/20 hover:bg-white/30 transition text-lg"
                  title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? '⤢' : '⛶'}
                </button>
              </div>
            </div>

            {/* Conversation */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={(m.sender === 'eden' ? 'justify-start' : 'justify-end') + ' flex'}
                >
                  <div className={m.sender === 'eden' ? 'bot-bubble' : 'user-bubble'}>
                    <p className="whitespace-pre-wrap leading-relaxed text-sm">
                      {m.sender === 'eden' ? formatBotText(m.text) : m.text}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bot-bubble">
                    <p className="text-slate-500 text-sm">Typing...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-200 flex-shrink-0">
              <div className="flex items-center gap-2 bg-slate-50 rounded-xl border border-slate-200 px-3 py-2.5 shadow-sm">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent outline-none text-slate-900 placeholder:text-slate-400 text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Send
                </button>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 text-center">
                Press Enter to send
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
