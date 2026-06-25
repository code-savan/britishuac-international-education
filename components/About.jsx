import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Headset, ArrowRight } from 'lucide-react'

const About = ({about}) => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-16 lg:mb-20">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance leading-[1.05]">
            {about ? "Meet " : "Who We "}
            <span className="text-[#0066FF]">{about ? "British AUC" : "Are"}</span>
          </h2>
          <div className="w-16 h-px bg-[#0066FF] mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="space-y-7">
            {about ? (
              <>
                <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.75]">
                  <span className="font-semibold text-[#0A1628]">BRITISH AUC</span> is a leading organization that offers comprehensive support for students aspiring to study abroad. Our expert team assists students throughout the entire process, providing visa and admission application services to universities worldwide. With a proven track record, we have successfully guided thousands of students to renowned universities and colleges across the globe.
                </p>
                <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.75]">
                  We offer a one-stop shop, providing up-to-date information on universities, scholarships, accommodations, and pre-departure support. Our personalized guidance ensures a seamless and smooth experience. At <span className="font-semibold text-[#0A1628]">BRITISH AUC</span>, we are committed to helping students make informed decisions, unlock their potential, and embark on a transformative journey towards a brighter future.
                </p>
              </>
            ) : (
              <>
                <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.75]">
                  <span className="font-semibold text-[#0A1628]">BRITISH AUC</span> is a Visa and Admission Application Centre that support admission and visa application to universities and countries around the world.
                </p>
                <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.75]">
                  <span className="font-semibold text-[#0A1628]">BRITISH AUC&apos;s</span> Application Centre is a one-stop shop for all your study abroad support services. Our application centres have helped thousands of international students study in universities and colleges in the UK, USA, Canada, Australia, Ireland, Germany, Turkey, Cyprus, etc.
                </p>
              </>
            )}

            <div className="border-l-2 border-[#0066FF] pl-5 py-1 my-8">
              <span className="font-display text-[2.5rem] font-bold text-[#1a56ff] leading-none">14+</span>
              <p className="text-[13px] text-[#6B7D9B] uppercase tracking-[0.06em] mt-1.5">Years of excellence in education consulting</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5">
                  <Headset size={16} />
                  Speak to an Advisor
                </button>
              </Link>
              <Link href="/about">
                <button className="w-full sm:w-auto px-8 py-3.5 border border-[#0A1628] text-[#0A1628] font-semibold text-[15px] hover:bg-[#0A1628] hover:text-white transition-colors active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5">
                  <ArrowRight size={16} />
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          
          <div className="relative">
            <div className="relative">
              <Image
                src="/about.webp"
                alt="About British AUC"
                width={550}
                height={500}
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 border border-[#1a56ff]/30 hidden lg:block" />
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default About
