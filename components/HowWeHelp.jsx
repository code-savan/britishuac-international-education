"use client"
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { helpContent } from '@/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HowWeHelp = ({page}) => {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((i) => {
    if (animating) return
    setAnimating(true)
    setIndex(i)
    setTimeout(() => setAnimating(false), 400)
  }, [animating])

  const next = useCallback(() => {
    goTo((index + 1) % helpContent.length)
  }, [index, goTo])

  const prev = useCallback(() => {
    goTo((index - 1 + helpContent.length) % helpContent.length)
  }, [index, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const item = helpContent[index]

  return (
    <section className="bg-[#FAFAFA] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-14 lg:mb-20">
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance leading-[1.05]">
            {page ? "Our " : "How We "}
            <span className="text-[#0066FF]">{page ? "Services" : "Can Help"}</span>
          </h2>
          <div className="w-16 h-px bg-[#0066FF] mt-6" />
        </div>

        <div className="bg-white border border-[#E8ECF0]">
          <div className="grid lg:grid-cols-2 lg:h-[520px]">
            <div className="relative overflow-hidden h-[260px] sm:h-[300px] lg:h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={550}
                height={500}
                className="w-full h-full object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none lg:hidden" />
              <div className="absolute bottom-3 right-3 flex items-center gap-1 lg:hidden z-10">
                <button
                  onClick={prev}
                  className="p-2 bg-white/90 hover:bg-white transition-colors cursor-pointer text-[#5A6A82] hover:text-[#1a56ff]"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="p-2 bg-white/90 hover:bg-white transition-colors cursor-pointer text-[#5A6A82] hover:text-[#1a56ff]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-[13px] text-[#0066FF] font-semibold uppercase tracking-[0.08em]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A1628] mt-3 mb-5">
                  {item.title}
                </h3>
                <div
                  className="text-[15px] text-[#5A6A82] leading-[1.75] [&_br]:mb-2"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#E8ECF0] shrink-0">
                <div className="flex items-center gap-2">
                  {helpContent.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`h-1.5 transition-all duration-300 cursor-pointer ${
                        i === index ? 'w-6 bg-[#1a56ff]' : 'w-1.5 bg-[#D0D5DD] hover:bg-[#8899B0]'
                      }`}
                    />
                  ))}
                </div>
                <div className="hidden lg:flex items-center gap-1">
                  <button
                    onClick={prev}
                    className="p-2 border border-[#E8ECF0] hover:border-[#1a56ff] hover:text-[#1a56ff] transition-colors cursor-pointer text-[#5A6A82]"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 border border-[#E8ECF0] hover:border-[#1a56ff] hover:text-[#1a56ff] transition-colors cursor-pointer text-[#5A6A82]"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
