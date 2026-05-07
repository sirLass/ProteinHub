"use client";

import React, { useState, useEffect, useRef } from "react";
import { faqs } from "./FAQ";

interface Message {
  role: "bot" | "user";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm the Protein Hub Assistant. How can I help you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleQuestionClick = (q: string, a: string) => {
    setMessages((prev) => [...prev, { role: "user", content: q }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", content: a }]);
    }, 1000);
  };

  const handleCustomQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement;
    const val = input.value.trim();
    if (!val) return;

    setMessages((prev) => [...prev, { role: "user", content: val }]);
    input.value = "";
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      // Simple keyword matching
      const found = faqs.find((f) => 
        val.toLowerCase().includes(f.q.toLowerCase()) || 
        f.q.toLowerCase().split(' ').some(word => word.length > 3 && val.toLowerCase().includes(word))
      );

      if (found) {
        setMessages((prev) => [...prev, { role: "bot", content: found.a }]);
      } else {
        setMessages((prev) => [...prev, { role: "bot", content: "I'm sorry, I don't have the answer to that specific question yet. You can check our FAQ section or contact support for more details." }]);
      }
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[calc(100vw-3rem)] sm:w-[350px] flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
          {/* Header */}
          <div className="flex items-center justify-between bg-zinc-900 p-4 dark:bg-white">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center">
                 <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              </div>
              <span className="text-sm font-bold text-white dark:text-black">Protein Hub Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white dark:text-black/60 dark:hover:text-black">
               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  msg.role === "user" 
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-black" 
                    : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl px-4 py-2 flex gap-1">
                   <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce" />
                   <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
                   <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-zinc-100 dark:border-zinc-800">
             {faqs.map((faq, i) => (
               <button 
                key={i}
                onClick={() => handleQuestionClick(faq.q, faq.a)}
                className="text-[10px] font-bold uppercase tracking-wider bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 px-3 py-1.5 rounded-full transition-colors"
               >
                 {faq.q}
               </button>
             ))}
          </div>

          {/* Input */}
          <form onSubmit={handleCustomQuestion} className="p-4 border-t border-zinc-100 dark:border-zinc-800">
             <div className="relative">
                <input 
                  name="message"
                  type="text" 
                  placeholder="Type a message..."
                  className="w-full bg-zinc-50 dark:bg-zinc-800 rounded-xl px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </button>
             </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-xl transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        )}
      </button>
    </div>
  );
}
