'use client'

import React, { useState } from 'react'
import { Link, Check, Facebook, Twitter } from 'lucide-react'

const ShareButtons = ({ url, title }) => {
  const [copied, setCopied] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-[12px] text-[#6B7D9B] mr-1">Share:</span>
      <button
        onClick={handleCopyLink}
        className="w-8 h-8 border border-[#E8ECF0] flex items-center justify-center hover:border-[#0066FF] hover:text-[#0066FF] transition-colors text-[#6B7D9B]"
        aria-label="Copy link"
      >
        {copied ? <Check size={14} className="text-green-500" /> : <Link size={14} />}
      </button>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 border border-[#E8ECF0] flex items-center justify-center hover:border-[#0066FF] hover:text-[#0066FF] transition-colors text-[#6B7D9B]"
        aria-label="Share on Facebook"
      >
        <Facebook size={14} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 border border-[#E8ECF0] flex items-center justify-center hover:border-[#0066FF] hover:text-[#0066FF] transition-colors text-[#6B7D9B]"
        aria-label="Share on X"
      >
        <Twitter size={14} />
      </a>
    </div>
  )
}

export default ShareButtons
