import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="relative bg-[#0A1628] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-24 flex flex-col items-center text-center">
        <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white mb-8 tracking-[-0.02em]">
          Let&apos;s Get You an Admission Today
        </p>
        <Link href="/contact">
          <button className="px-10 py-4 bg-white text-[#0A1628] font-bold rounded-xl text-base hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer">
            Book A Consultancy
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CTA
