'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const CopyField = ({ label, value }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <div className="flex items-center justify-between gap-3 py-2.5 px-4 bg-white/5 hover:bg-white/10 transition-colors group">
      <div className="min-w-0">
        <span className="text-[11px] font-semibold text-[#6B7D9B] uppercase tracking-[0.06em] block">{label}</span>
        <span className="text-[14px] text-white font-medium break-all">{value}</span>
      </div>
      <button
        onClick={handleCopy}
        className="shrink-0 w-7 h-7 flex items-center justify-center bg-white/10 hover:bg-[#0066FF] transition-colors"
        aria-label={`Copy ${label}`}
      >
        {copied ? (
          <Check size={14} className="text-green-400" />
        ) : (
          <Copy size={14} className="text-white/60 group-hover:text-white" />
        )}
      </button>
    </div>
  )
}

const PaymentCard = ({ bankDetails }) => {
  if (!bankDetails) return null

  const fields = [
    { label: 'Bank', value: bankDetails.bankName },
    { label: 'Address', value: bankDetails.bankAddress },
    { label: 'Account Name', value: bankDetails.accountName },
    { label: 'Account Number', value: bankDetails.accountNumber },
    { label: 'Sort Code', value: bankDetails.sortCode },
    { label: 'IBAN', value: bankDetails.iban },
  ]

  return (
    <div className="md:col-span-3 bg-[#0A1628] border border-[#1A2A4A]">
      <div className="border-b border-[#1A2A4A] px-6 py-4">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          <h3 className="font-display text-[16px] font-bold text-white">Payment Details</h3>
          <span className="text-[10px] font-semibold text-[#6B7D9B] uppercase tracking-[0.08em] ml-auto">Copy to clipboard</span>
        </div>
      </div>
      <div className="p-4">
        <div className="divide-y divide-white/10">
          {fields.map((field) => (
            <CopyField key={field.label} label={field.label} value={field.value} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentCard
