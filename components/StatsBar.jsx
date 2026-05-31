const stats = [
  { number: "1,000+", label: "Students Placed" },
  { number: "25+", label: "Countries" },
  { number: "14", label: "Years Experience" },
  { number: "100%", label: "Acceptance Rate" },
]

const StatsBar = () => {
  return (
    <section className="bg-[#0A1628] py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative text-center lg:py-0 group">
              <div className="lg:px-8">
                <div className="w-8 h-[2px] bg-[#1a56ff] mx-auto mb-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" />
                <p className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-white tracking-tight mb-1">{stat.number}</p>
                <p className="text-[12px] text-[#6B7D9B] font-medium tracking-[0.1em] uppercase">{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[#1A2A4A] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
