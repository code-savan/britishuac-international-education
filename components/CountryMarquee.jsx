"use client"

const countries = [
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇹🇷", name: "Turkey" },
  { flag: "🇨🇾", name: "Cyprus" },
  { flag: "🇮🇪", name: "Ireland" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇳🇱", name: "Netherlands" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇮🇹", name: "Italy" },
]

const CountryMarquee = () => {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-[55ch] mb-14">
          <p className="text-[16px] sm:text-[17px] text-[#5A6A82] leading-relaxed">
            We have helped over <strong className="text-[#0A1628] font-bold">1,000 Nigerian students</strong> gain university admission in over 25 countries across the globe.
          </p>
          <div className="mt-6 w-12 h-px bg-[#0066FF]" />
        </div>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-2" style={{ width: "fit-content" }}>
            {[...countries, ...countries].map((country, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 border border-[#E8ECF0] text-sm font-medium 
                text-[#0A1628] hover:border-[#1a56ff] hover:bg-[#FAFBFF] transition-all duration-200 cursor-pointer w-fit"
              >
                <span className="text-base leading-none">{country.flag}</span>
                <span >{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountryMarquee
