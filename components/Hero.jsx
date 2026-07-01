"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneCall, Book } from 'lucide-react'

const locations = [
  'the USA',
  'the UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Cyprus',
  'Turkey',
  'Ireland',
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % locations.length)
        setAnimating(false)
      }, 400)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-white min-h-screen pt-16 lg:pt-[150px] overflow-hidden">
      {/* Absolute image - md screens and above */}
      <div className="hidden md:block absolute right-0 top-16 lg:top-[170px] bottom-0 w-[50%] xl:w-[45%] 2xl:w-[40%] max-w-[700px]">
        <Image
          src="/hero-image.webp"
          alt="Students studying abroad"
          width={4096}
          height={2330}
          className="h-full w-full object-contain object-right-bottom"
          priority
          sizes="(max-width: 768px) 0px, (max-width: 1280px) 50vw, 40vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 md:h-full">
        <div className="flex items-center md:min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-150px)]">
          <div className="w-full md:w-1/2 max-w-xl md:py-16 py-12 md:py-20">
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
              Want to study <br className="hidden sm:block" />
              <span className="inline-grid overflow-hidden h-[1.15em] align-middle leading-[1.05]">
                <span
                  className="row-start-1 col-start-1 whitespace-nowrap text-[#0066FF]"
                  style={{
                    transform: animating ? 'translateY(-100%)' : 'translateY(0)',
                    opacity: animating ? 0 : 1,
                    transition: animating ? 'all 400ms ease-in-out' : 'none',
                  }}
                >
                  in {locations[index]}?
                </span>
                <span
                  className="row-start-1 col-start-1 whitespace-nowrap text-[#0066FF]"
                  style={{
                    transform: animating ? 'translateY(0)' : 'translateY(100%)',
                    opacity: animating ? 1 : 0,
                    transition: animating ? 'all 400ms ease-in-out' : 'none',
                  }}
                >
                  in {locations[(index + 1) % locations.length]}?
                </span>
              </span>
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#5A6A82] leading-relaxed mb-8" style={{ maxWidth: '48ch' }}>
                British AUC has helped over{' '}
                <strong className="text-[#0A1628] font-bold">1000+ Nigerian students</strong>
                {' '}gain admission into universities across 25+ countries worldwide. How can we help you? Book a free consultation to get started.
              </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5">
                  <Book size={16} />
                  Learn More
                </button>
              </Link>
              <a href="tel:+2348059000097">
                <button className="w-full sm:w-auto px-8 py-3.5 border border-[#0A1628] text-[#0A1628] font-semibold text-[15px] hover:bg-[#0A1628] hover:text-white transition-colors active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5">
                  <PhoneCall size={16} />
                  Call Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="md:hidden w-full mt-8">
        <Image
          src="/hero-image.webp"
          alt="Students studying abroad"
          width={4096}
          height={2730}
          className="w-full h-auto"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  )
}

export default Hero