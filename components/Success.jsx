import Image from 'next/image'
import React from 'react'

const stories = [
  {
    key: 1,
    image: "/t1.webp",
    name: "Sarah Johnson",
    university: "University of Toronto, Canada",
    desc: "From Lagos to Toronto, Sarah achieved her dream of studying abroad."
  },
  {
    key: 2,
    image: "/t2.webp",
    name: "Michael Okafor",
    university: "Harvard University, USA",
    desc: "Michael secured a full scholarship to one of the worlds top universities."
  },
  {
    key: 3,
    image: "/t3.webp",
    name: "Amara Eze",
    university: "Kings College London, UK",
    desc: "Amara's journey to London opened doors to a global career in finance."
  },
]

const Success = () => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-14 lg:mb-16">
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
            Success <span className="text-[#0066FF]">Stories</span>
          </h2>
          <div className="w-12 h-px bg-[#0066FF] mb-5" />
          <p className="text-[16px] text-[#5A6A82] leading-relaxed">
            Real students, real journeys. See who we have helped achieve their dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <div
              key={story.key}
              className="group relative border border-[#E8ECF0] hover:border-[#1a56ff] transition-colors duration-200"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-bold text-[17px] mb-0.5">{story.name}</p>
                <p className="text-white/60 text-[13px]">{story.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Success
