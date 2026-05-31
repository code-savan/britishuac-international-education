'use client';

import { useState } from 'react';

export default function RegionTabs({ regions }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex overflow-x-auto pb-2 mb-4 border-b border-[#E8ECF0]">
        {regions.map((region, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap px-4 py-2 text-[13px] font-medium mr-1 shrink-0 transition-colors ${
              activeTab === index
                ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                : 'text-[#5A6A82] hover:text-[#0A1628]'
            }`}
          >
            {region.title.split(',')[0]}
          </button>
        ))}
      </div>

      <div>
        {regions.map((region, index) => (
          <div
            key={index}
            className={activeTab === index ? 'block' : 'hidden'}
          >
            <h3 className="font-display text-[16px] font-bold text-[#0A1628] mb-3">{region.title}</h3>
            <ul className="space-y-2">
              {region.schools.map((school, idx) => (
                <li key={idx} className="text-[14px] text-[#5A6A82] flex items-start gap-2">
                  <span className="text-[#0066FF] mt-1 shrink-0">•</span>
                  <span>{school}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
