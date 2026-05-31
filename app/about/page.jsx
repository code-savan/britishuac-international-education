import React from 'react'
import WhyChooseUs from '@/components/WhyChooseUs'
import Partners from '@/components/Partners'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneCall, Book } from 'lucide-react'

const teamList = [
  {
    key: 1,
    img: "/collins.png",
    name: "Collins Onyeaji",
    role: "Senior Director - Programmes"
  },
  {
    key: 2,
    img: "/vitalis.webp",
    name: "Vitalis Nwaogu",
    role: "Chairman - Board of Directors"
  },
  {
    key: 3,
    img: "/rachel.webp",
    name: "Rachel Borland",
    role: "Director - Business Partnerships"
  },
  {
    key: 4,
    img: "/david.png",
    name: "David Hobson",
    role: "Director - Quality Assurance"
  },
  {
    key: 5,
    img: "/doris.webp",
    name: "Doris Okoro",
    role: "Director - Visas & Compliance"
  },
  {
    key: 6,
    img: "/patience.webp",
    name: "Patience Ikpor",
    role: "Senior Manager - Recruitment"
  },
]

const teamCards = [...teamList, ...teamList]

const Page = () => {
  return (
    <div>
      <section className="relative bg-white min-h-[70vh] pt-16 lg:pt-[150px] overflow-hidden">
        <div className="hidden md:block absolute right-0 top-16 lg:top-[170px] bottom-0 w-1/2">
          <Image
            src="/about.webp"
            alt="British AUC team"
            width={550}
            height={500}
            className="h-full w-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full">
          <div className="flex items-center min-h-[calc(70vh-64px)] lg:min-h-[calc(70vh-150px)]">
            <div className="w-full md:w-1/2 max-w-xl py-16 md:py-20">
              <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">About Us</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                Meet <span className="text-[#0066FF]">British AUC</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#5A6A82] leading-relaxed mb-8" style={{ maxWidth: '48ch' }}>
                We are a leading visa and admission application centre dedicated to helping Nigerian students achieve their dreams of studying at world-class universities across the globe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5">
                    <Book size={16} />
                    Speak to an Advisor
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

        <div className="md:hidden w-full mt-8">
          <Image
            src="/about.webp"
            alt="British AUC team"
            width={550}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              Our <span className="text-[#0066FF]">Team</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed">
              Meet the dedicated professionals behind British AUC.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee gap-6 lg:gap-8" style={{ width: "fit-content" }}>
              {teamCards.map((member, i) => (
                <div key={i} className="w-[220px] lg:w-[260px] flex-shrink-0">
                  <div className="relative aspect-square overflow-hidden bg-[#F5F6F8] mb-4">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="260px"
                    />
                  </div>
                  <p className="text-[12px] font-semibold text-[#0066FF] uppercase tracking-[0.06em] mb-0.5">{member.role}</p>
                  <p className="text-[16px] font-bold text-[#0A1628]">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Partners />
      <FAQ />
      <CTABanner />
    </div>
  )
}

export default Page
