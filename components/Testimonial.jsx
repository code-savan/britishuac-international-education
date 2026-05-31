'use client'

import { testimonials } from '@/constants'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handlers = {
      mousedown: (e) => { isDown = true; slider.classList.add('active'); startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; },
      mouseleave: () => { isDown = false; slider.classList.remove('active'); },
      mouseup: () => { isDown = false; slider.classList.remove('active'); },
      mousemove: (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - slider.offsetLeft; slider.scrollLeft = scrollLeft - (x - startX) * 2; },
      touchstart: (e) => { isDown = true; startX = e.touches[0].pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; },
      touchend: () => { isDown = false; },
      touchmove: (e) => { if (!isDown) return; const x = e.touches[0].pageX - slider.offsetLeft; slider.scrollLeft = scrollLeft - (x - startX) * 2; },
    };

    Object.entries(handlers).forEach(([event, handler]) => slider.addEventListener(event, handler, { passive: event !== 'mousemove' && event !== 'touchmove' }));
    return () => Object.entries(handlers).forEach(([event, handler]) => slider.removeEventListener(event, handler));
  }, []);

  return (
    <section className="bg-[#FAFAFA] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.02em] text-center mb-4">
          Our students <span className="text-[#0066FF]">share</span> their success stories
        </h2>
        <p className="text-center text-[#8A9AB0] mb-12 lg:mb-16">Real moments from real journeys</p>

        <div
          ref={sliderRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((item) => (
            <div key={item.key} className="min-w-[300px] sm:min-w-[350px] w-[85vw] flex-shrink-0 snap-start relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={item.image}
                  className="object-cover"
                  alt={`Testimonial from student ${item.key}`}
                  fill
                  sizes="(max-width: 640px) 85vw, 350px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
