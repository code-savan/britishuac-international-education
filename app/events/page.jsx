import React from 'react'
import Image from 'next/image'
import { eventList } from '@/constants'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

const Page = () => {
  const showEvents = eventList.filter(item => item.showLink)
  const currentYear = new Date().getFullYear()
  const upcomingEvent = {
    id: "upcoming-event",
    key: "upcoming",
    title: `British AUC Study Tour | ${currentYear + 1}`,
    date: "TBD",
    location: "Major States in Nigeria | Multiple High Profile International Secondary Schools",
    shortDescription: "Explore, Learn, Experience; Join Our Study Tour!",
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-white pt-16 lg:pt-[150px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="py-16 md:py-20">
            <div className="max-w-[55ch]">
              <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Discover</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                Our <span className="text-[#0066FF]">Events</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#5A6A82] leading-relaxed" style={{ maxWidth: '48ch' }}>
                At our Nigeria events, you can meet university representatives and discuss your study prospects, campus life, and more in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showEvents.map((item) => (
            <Link
              key={item.key}
              href={`/events/${item.id}`}
              className="block border border-[#E8ECF0] hover:border-[#1a56ff] transition-colors duration-300 cursor-pointer group h-fit"
            >
              <div className="relative aspect-[1079/1080] overflow-hidden">
                <Image
                  src={item.image}
                  fill
                  className="object-contain bg-[#F5F5F5] w-full h-fit"
                  alt={item.title}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#5A6A82] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {item.date}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0A1628] mb-2 group-hover:text-[#0066FF] transition-colors">{item.title}</h3>
                <p className="text-[15px] text-[#5A6A82] mb-5">{item.shortDescription}</p>
                <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0066FF] group-hover:text-[#1a56ff] transition-colors">
                  More Information
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Event */}
      {upcomingEvent && (
        <section className="px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto pb-20">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 border border-dashed border-[#E8ECF0] p-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#5A6A82] mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {upcomingEvent.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {upcomingEvent.location}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-[#0A1628] mb-2">{upcomingEvent.title}</h3>
              <p className="text-[15px] text-[#5A6A82]">{upcomingEvent.shortDescription}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Page
