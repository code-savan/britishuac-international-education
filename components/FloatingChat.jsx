"use client"

import { useState } from 'react'
import { X, ChevronRight } from 'lucide-react'

const ChatBubbleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    <path d="M8 9h8" strokeWidth="2"/>
    <path d="M8 13h6" strokeWidth="2"/>
  </svg>
)

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.691 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    <path d="M12 16.64l-6.545-4.91v9.273h13.09V11.73L12 16.64z" fill="#FBBC05"/>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l6.545 4.91 3.819-2.909V5.457z" fill="#34A853"/>
    <path d="M0 5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64l.545.327v9.273L0 5.457z" fill="#C5221F"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] bg-white shadow-2xl border border-[#e8ecf0]">
          {/* Header */}
          <div className="bg-[#1a56ff] px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <ChatBubbleIcon />
              </div>
              <div>
                <p className="text-white font-semibold text-[14px]">Chat with us</p>
                <p className="text-white/70 text-[12px]">We typically reply in minutes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors cursor-pointer">
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-6">
            <p className="text-[14px] text-[#4A5A72] leading-relaxed mb-5">
              Hi there! 👋 How can we help you? Choose your preferred way to reach us.
            </p>

            <a
              href="https://wa.me/2348135840721"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full px-4 py-3.5 border border-[#e8ecf0] hover:border-[#25D366] hover:bg-[#f0faf4] transition-all group mb-3"
            >
              <WhatsAppIcon />
              <div className="flex-1 text-left">
                <p className="text-[14px] font-semibold text-[#0A1628]">WhatsApp</p>
                <p className="text-[12px] text-[#8A9AB0]">+234 813 584 0721</p>
              </div>
              <ChevronRight size={16} className="text-[#8A9AB0] group-hover:text-[#25D366] transition-colors" />
            </a>

            <a
              href="mailto:admin@britishauc.com"
              className="flex items-center gap-4 w-full px-4 py-3.5 border border-[#e8ecf0] hover:border-[#EA4335] hover:bg-[#fef0ee] transition-all group"
            >
              <GmailIcon />
              <div className="flex-1 text-left">
                <p className="text-[14px] font-semibold text-[#0A1628]">Email</p>
                <p className="text-[12px] text-[#8A9AB0]">admin@britishauc.com</p>
              </div>
              <ChevronRight size={16} className="text-[#8A9AB0] group-hover:text-[#EA4335] transition-colors" />
            </a>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-[#e8ecf0]">
            <p className="text-[11px] text-[#8A9AB0] text-center">We typically reply within 24 hours on weekdays</p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1a56ff] hover:bg-[#1447d1] transition-all flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <ChatBubbleIcon />
        )}
      </button>
    </>
  )
}

export default FloatingChat