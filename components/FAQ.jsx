"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "What services does British AUC offer?",
    a: "British AUC provides comprehensive visa and admission application support for students aspiring to study abroad. Our services include education and career counseling, university application assistance, visa processing, scholarship guidance, accommodation arrangements, and pre-departure support."
  },
  {
    q: "Which countries can I study in through British AUC?",
    a: "We facilitate admissions to universities in the UK, USA, Canada, Australia, Germany, Turkey, Cyprus, Ireland, France, Netherlands, Spain, and Italy among other destinations."
  },
  {
    q: "What is your visa success rate?",
    a: "We maintain a 97% visa success rate. Our experienced team ensures that all documentation is correctly prepared and submitted, maximizing your chances of approval."
  },
  {
    q: "Do you guarantee university admission?",
    a: "We have a 98% university acceptance rate for our students. Our team works closely with you to select suitable institutions and programs that match your academic profile and preferences."
  },
  {
    q: "How long does the application process take?",
    a: "The timeline varies depending on the destination and program. Generally, we recommend starting the process 6-12 months before your intended start date to allow ample time for university applications, visa processing, and preparations."
  },
  {
    q: "Can I work while studying abroad?",
    a: "Yes, most study destinations allow international students to work part-time during their studies. For example, students in the UK can work up to 20 hours per week during term time, while US students can work on-campus up to 20 hours per week."
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mx-auto text-center mb-14 lg:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
            Frequently Asked <span className="text-[#0066FF]">Questions</span>
          </h2>
          <div className="w-12 h-px bg-[#0066FF] mx-auto mb-5" />
          <p className="text-[16px] text-[#5A6A82] leading-relaxed">
            Everything you need to know about studying abroad with British AUC.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#E8ECF0] last:border-b-0">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 lg:py-6 text-left cursor-pointer group"
              >
                <span className={`text-[15px] sm:text-base font-semibold transition-colors duration-200 ${
                  openIndex === i ? 'text-[#0A1628]' : 'text-[#0A1628] group-hover:text-[#0066FF]'
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#5A6A82] transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-[500px] pb-5 lg:pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-[15px] text-[#5A6A82] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
