import { partners } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mx-auto text-center mb-14 lg:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
            Our <span className="text-[#0066FF]">Partners</span>
          </h2>
          <div className="w-12 h-px bg-[#0066FF] mx-auto mb-5" />
          <p className="text-[16px] text-[#5A6A82] leading-relaxed">
            We work with leading universities and institutions worldwide to provide the best opportunities for our students.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 lg:gap-x-16 lg:gap-y-12">
          {partners.map((partner) => (
            <div
              key={partner.key}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.image}
                alt="Partner university logo"
                width={130}
                height={70}
                className="h-[50px] lg:h-[60px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
