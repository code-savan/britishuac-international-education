'use client';

import { useState } from 'react';

export default function EventAccordion({ regions }) {
  const [activeAccordionItem, setActiveAccordionItem] = useState(0);

  const AccordionItem = ({ title, schools, index }) => (
    <article
      className={`h-full transition-all duration-300 ease-in-out ${
        activeAccordionItem === index ? 'bg-[#0A1628] text-white' : 'bg-[#E8ECF0] hover:bg-[#d0d5dd] text-[#0A1628]'
      } w-full`}
    >
      {activeAccordionItem === index && (
        <div className="p-8 h-full flex flex-col justify-between items-start">
          <div className="mb-6">
            {schools.map((school, i) => (
              <p key={i} className="mb-3 flex items-start text-[15px] text-white/80">
                <span className="mr-2 text-[#0066FF] shrink-0">•</span> {school}
              </p>
            ))}
          </div>
          <h1 className="font-display text-xl font-bold text-white">{title}</h1>
        </div>
      )}
      {activeAccordionItem !== index && (
        <div className="p-8 h-full flex flex-col justify-center items-center">
          <span className="font-display text-sm font-bold text-[#5A6A82] [writing-mode:vertical-rl] rotate-180">{title}</span>
        </div>
      )}
    </article>
  );

  return (
    <div className="flex gap-1 h-[600px]">
      {regions.map((region, index) => (
        <div
          key={index}
          className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
            activeAccordionItem === index ? 'w-[70%]' : 'w-[6%] hover:w-[8%]'
          }`}
          onClick={() => setActiveAccordionItem(index)}
        >
          <AccordionItem
            title={region.title}
            schools={region.schools}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}
