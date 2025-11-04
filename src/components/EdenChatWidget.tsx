'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Trash2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'eden';
  timestamp: Date;
}

export default function EdenChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm EDEN, your guide to Resilution. Ask me anything about our platform!",
      sender: 'eden',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setIsLoading(true);
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), text: userText, sender: 'user', timestamp: new Date() },
    ]);

    try {
      // Use server proxy; no webhook URL in client
      const res = await fetch('/api/eden', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sendMessage', message: userText }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Upstream error');

      const reply =
        data?.response ??
        data?.message ??
        data?.output ??
        (typeof data === 'string' ? data : JSON.stringify(data));

      setMessages((prev) => [
        ...prev,
        { id: String(Date.now() + 1), text: reply, sender: 'eden', timestamp: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: String(Date.now() + 2), text: '❌ Sorry, I had trouble connecting. Please try again.', sender: 'eden', timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };


  const clearHistory = () => {
    if (confirm('Clear all messages?')) {
      setMessages([
        {
          id: '1',
          text: "👋 Chat cleared! How can I help you now?",
          sender: 'eden',
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Format EDEN text: normalize newlines, put • on new lines, and break long sentences
  const formatBotText = (text: string) => {
    if (!text) return '';
    let t = text.replace(/\r\n/g, '\n');          // CRLF -> LF
    t = t.replace(/Here’s how.*?works:/i, (m) => m + '\n'); // newline after “Here’s how…works:”
    t = t.replace(/\s*•\s*/g, '\n• ');            // each • starts on a new line
    t = t.replace(/([.!?])\s+(?=[A-Z])/g, '$1\n'); // sentence -> new line
    t = t.replace(/\n{3,}/g, '\n\n');             // collapse extra blank lines
    return t.trim();
  };

  return (
    <div className="eden-widget"> {/* ensure local color scope */}
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all z-40 hover:scale-110 ${
          !isOpen ? 'animate-bounce' : ''
        }`}
        aria-label="Open chat"
      >
        {isOpen ? (
          React.createElement(X as any, { className: "text-white", size: 24 })
        ) : (
          React.createElement(MessageCircle as any, { className: "text-white", size: 24 })
        )}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-gray-50 text-gray-800 rounded-xl shadow-2xl flex flex-col z-50 border border-green-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-xl">
            <h2 className="font-bold text-lg">EDEN</h2>
            <p className="text-xs opacity-90">Empowering Decentralized Economic Networks</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
            {/* Messages list */}
            {messages.map((m) => (
              <div key={m.id} className={m.sender === 'eden' ? 'bot-bubble' : 'user-bubble'}>
                <p className={`whitespace-pre-wrap leading-relaxed ${m.sender === 'eden' ? 'text-gray-800' : 'text-white'}`}>
                  {m.sender === 'eden' ? formatBotText(m.text) : m.text}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-900 placeholder:text-gray-400"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {React.createElement(Send as any, { size: 18 })}
            </button>
          </div>

          {/* Clear Button */}
          <div className="px-4 py-2 border-t bg-gray-50 rounded-b-xl">
            <button
              onClick={clearHistory}
              className="w-full flex items-center justify-center gap-2 text-xs text-red-600 hover:bg-red-50 py-2 rounded transition-all"
            >
              {React.createElement(Trash2 as any, { size: 14 })} Clear Chat History
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
