import React from 'react'
import CTABanner from '@/components/CTABanner'
import { helpContent } from '@/constants'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <section className="relative bg-white pt-16 lg:pt-[150px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="py-16 md:py-20">
            <div className="max-w-[55ch]">
              <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">What We Offer</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                Our <span className="text-[#0066FF]">Services</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#5A6A82] leading-relaxed" style={{ maxWidth: '48ch' }}>
                Comprehensive support for every step of your study abroad journey — from career counselling to post-arrival assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="space-y-16 lg:space-y-24">
            {helpContent.map((service, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : ''}`}>
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={550}
                        height={400}
                        className="w-full h-auto"
                      />
                      <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#1a56ff]/10 pointer-events-none hidden lg:block" />
                    </div>
                  </div>
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.08em]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1628] mt-3 mb-5 leading-tight">
                      {service.title}
                    </h2>
                    <div
                      className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] [&_br]:mb-3"
                      dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default Page
