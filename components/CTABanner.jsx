import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTABanner = () => {
  return (
    <section className="bg-[#0A1628] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-white tracking-[-0.03em] text-balance mb-5">
          Ready to Start Your <span className="text-[#0066FF]">Journey?</span>
        </h2>
        <p className="text-[16px] text-[#8A9AB0] leading-relaxed max-w-lg mx-auto mb-10">
          Book a free consultation with our team and take the first step toward studying at a world-class university.
        </p>
        <Link href="/contact">
          <button className="px-10 py-4 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer inline-flex items-center gap-2.5">
            Book a Consultation
            <ArrowRight size={16} />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CTABanner
