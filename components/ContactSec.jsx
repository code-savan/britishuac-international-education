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
            <div className="relative h-[220px] overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-[#0A1628]/80 px-3 py-1.5">
                <span className="text-white text-[11px] font-semibold uppercase tracking-[0.08em]">London Office</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2635280087934!2d-0.09081892337876156!3d51.526726171817735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sng!4v1729153840310!5m2!1sen!2sng"
                title="London office map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="space-y-5">
                {inq1.map((item) => {
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
              <p className="text-[#6B7D9B] text-xs uppercase tracking-[0.08em] mt-8 pt-6 border-t border-[#1A2A4A]">
                International Toll Line
              </p>
            </div>
          </div>

          <div className="bg-[#0A1628]">
            <div className="relative h-[220px] overflow-hidden">
              <div className="absolute top-3 left-3 z-10 bg-[#0A1628]/80 px-3 py-1.5">
                <span className="text-white text-[11px] font-semibold uppercase tracking-[0.08em]">Abuja Office</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.754554342161!2d7.456561375019561!3d9.086110190977537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1729153977276!5m2!1sen!2sng"
                title="Abuja office map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="space-y-5">
                {inq2.map((item) => {
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
              <p className="text-[#6B7D9B] text-xs uppercase tracking-[0.08em] mt-8 pt-6 border-t border-[#1A2A4A]">
                Africa Toll Line
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSec
