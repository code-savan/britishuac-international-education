"use client"
import { why } from '@/constants'
import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-14 lg:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
            Why Choose <span className="text-[#0066FF]">Us</span>
          </h2>
          <div className="w-12 h-px bg-[#0066FF] mb-5" />
          <p className="text-[16px] text-[#5A6A82] leading-relaxed">
            We are committed to helping students achieve their dreams of studying abroad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {why.map((item) => (
            <div key={item.key} className="border border-[#E8ECF0] p-8 hover:border-[#1a56ff] transition-colors duration-200">
              <div className="w-12 h-12 bg-[#1a56ff]/5 flex items-center justify-center mb-5">
                <Image src={item.image} alt="" width={24} height={24} className="opacity-80" />
              </div>
              <p className="text-[15px] text-[#5A6A82] leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
