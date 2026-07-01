import { inq1, inq2 } from '@/constants'
import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

const iconMap = {
  '/location.png': MapPin,
  '/mail.png': Mail,
  '/phone.png': Phone,
}

const ContactSec = ({page}) => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-14 lg:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
            {page ? "Speak to an " : "Contact "}
            <span className="text-[#0066FF]">{page ? "Advisor" : "British AUC"}</span>
          </h2>
          <div className="w-12 h-px bg-[#0066FF] mb-5" />
          <p className="text-[16px] text-[#5A6A82] leading-relaxed">
            {page ? "Got questions? Leave your details below and a customer representative will reach out to you within 24 hours." : "We appreciate your interest in British AUC. Please select from the options below."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0A1628]">
            <div className="p-8 lg:p-10">
              <h3 className="text-white font-semibold text-sm uppercase tracking-[0.08em] mb-6">London Office</h3>
              <div className="space-y-5">
                {inq1.filter(item => item.icon === '/location.png').map((item) => (
                  <div key={item.key} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-white/60" />
                    </div>
                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-5 mt-6 pt-6 border-t border-[#1A2A4A]">
                {inq1.filter(item => item.icon !== '/location.png').map((item) => {
                  const Icon = iconMap[item.icon] || MapPin
                  return (
                    <div key={item.key} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-white/60" />
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium leading-relaxed">{item.content}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="bg-[#0A1628]">
            <div className="p-8 lg:p-10">
              <h3 className="text-white font-semibold text-sm uppercase tracking-[0.08em] mb-6">Abuja Office</h3>
              <div className="space-y-5">
                {inq2.filter(item => item.icon === '/location.png').map((item) => (
                  <div key={item.key} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-white/60" />
                    </div>
                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-5 mt-6 pt-6 border-t border-[#1A2A4A]">
                {inq2.filter(item => item.icon !== '/location.png').map((item) => {
                  const Icon = iconMap[item.icon] || MapPin
                  return (
                    <div key={item.key} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-white/60" />
                      </div>
                      <p className="text-white text-sm sm:text-base font-medium leading-relaxed">{item.content}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSec
