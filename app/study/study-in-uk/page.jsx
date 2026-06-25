import { ALSONEED, PGDR, RDCAC, TAC, UGDR, whyStudyInTheUK } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CTABanner from '@/components/CTABanner'

const cities = {
  england: {
    title: "England",
    description: "England, a remarkable destination for students, plays a pivotal role in the grand tapestry of the United Kingdom. Its diverse landscapes and rich cultural heritage create a unique backdrop for academic adventures. As the revered birthplace of football, England stands out as a paradise for aspiring football enthusiasts. It houses some of the world's finest football academies, offering a golden pathway for those passionate about the beautiful game. Moreover, England's educational institutions are among the best globally, providing a world-class learning experience in a land where history and innovation coexist seamlessly.",
    places: [
      {
        name: "London",
        image: "/london.webp",
        content: "Welcome to London, the vibrant heart of England and the largest city in the UK. This sprawling metropolis is a global beacon, home to over 14 million people who, like its iconic red buses, come from all corners of the globe. In London, the world truly is your oyster. You can dive into the endless treasures of the British Library, the largest national library on the planet. Relive Shakespearean masterpieces at the Globe Theatre, stroll through architectural marvels that bridge centuries of history, savor the diverse and delectable street food, and catch world-class sporting events. London stands as an academic powerhouse, boasting 18 universities and 48 colleges. It's a veritable academic hotspot and wears the crown for the most universities in the UK."
      },
      {
        name: "Manchester",
        image: "/manchester.webp",
        content: "Welcome to Manchester, a city pulsing with excitement and culture in the heart of the UK. Here, the passion for football runs deep, and you'll find the legendary Manchester United Football Club at its epicenter. But that's not all. Manchester is a city of knowledge and learning, with prestigious institutions like the John Rylands Research Institute and Library offering an academic haven for curious minds. Education thrives in Manchester with three notable universities: the University of Manchester, Manchester Metropolitan College, and the Royal Northern College. These institutions pave the way for bright futures and groundbreaking discoveries."
      },
      {
        name: "Liverpool",
        image: "/liverpool.webp",
        content: "Welcome to Liverpool, a city that resonates with the sweet melodies of The Beatles and the roar of passionate football fans. As the proud home of Liverpool Football Club, it's a must-visit destination for football enthusiasts. Situated in the enchanting northwest of England, Liverpool is where the River Mersey gracefully embraces the Irish Sea. Education thrives here with five esteemed higher institutions, including Liverpool John Moores University, the University of Liverpool, and the Liverpool Institute for Performing Arts (LIPA). These institutions fuel the city's intellectual vitality, making Liverpool a hub of both culture and learning."
      },
      {
        name: "Birmingham",
        image: "/birmingham.webp",
        content: "Birmingham, nestled in the heart of England's West Midlands region, offers a warm Brummie welcome, known for its exceptionally friendly locals. As one of the fastest-growing cities in the UK, Birmingham's rapid development is awe-inspiring. This vibrant city is a treasure trove of world-class venues, historic gems, and a thriving culinary scene. Academic excellence thrives here with eight esteemed higher institutions, including the University of Birmingham, Aston University, Birmingham City University, and the prestigious Aston Business School. Birmingham isn't just growing; it's flourishing as a hub of culture, knowledge, and warm Brummie hospitality."
      }
    ]
  },
  wales: {
    title: "Wales",
    description: "Wales, an integral jewel within the United Kingdom, shares its border with England. This enchanting land is a repository of age-old traditions and is world-renowned for its captivating choral heritage. The landscapes of Wales are nothing short of breathtaking. Here, nature thrives in its full glory, offering a sanctuary for diverse and thriving wildlife. In Wales, the Welsh language, known simply as Welsh, lends a melodious cadence to everyday life. This linguistic treasure has bestowed upon Wales its affectionate moniker, the land of the song. It's a land where every conversation is a harmonious tune, and where the echoes of history blend seamlessly with the wonders of the present.",
    places: [
      {
        name: "Swansea",
        image: "/swansea.webp",
        content: "Swansea, proudly holding the title of Wales' second-largest city, is a true gem awaiting discovery. This vibrant city is a magnetic tourist attraction, pulling in over 5 million visitors annually. When the sun sets, Swansea comes alive with its electrifying nightlife, offering a taste of the local culture. One of Swansea's crown jewels is its stunning beaches, among the most beautiful in all of Wales. Within Swansea's embrace are three esteemed higher institutions: Cardiff University, the University of South Wales, and the renowned Royal Welsh College of Music and Drama. Swansea is a city of contrasts, where nature's beauty meets a bustling cultural scene."
      },
      {
        name: "Cardiff",
        image: "/cardiff.webp",
        content: "Cardiff, the dynamic capital and largest city of Wales, is a place where history meets modernity in a captivating blend. With a storied past rooted in the production and exportation of coal, Cardiff has emerged as a vibrant and culturally rich hub. Sports aficionados flock to this city, as it proudly stands as the heart of Welsh rugby. The iconic Millennium Stadium is a grand arena that hosts a wide array of sporting events. Home to a diverse population of 1,097,000, Cardiff houses four esteemed higher institutions, including Cardiff University, the University of South Wales, and the prestigious Royal Welsh College of Music and Drama."
      }
    ]
  },
  scotland: {
    title: "Scotland",
    description: "Scotland, a captivating country for international students, welcomes more than 40,000 learners from around the globe. Its allure lies in the remarkable diversity of its landscapes and experiences. In Scotland, you'll discover a land of stark contrasts, from the gently rolling countryside to the vibrant rhythm of bustling cities. Majestic, icy mountain peaks stand in awe-inspiring contrast to the tranquil charm of its villages. Scotland also takes great pride in its world-renowned events that bring people together from all corners of the Earth, celebrating the arts, culture, and more. For those seeking not only a world-class education but also an adventure through diverse landscapes and rich traditions, Scotland beckons as a land of endless exploration and discovery.",
    places: [
      {
        name: "Edinburgh",
        image: "/edinburg.webp",
        content: "Edinburgh, the majestic capital of Scotland, is a city adorned with a hilly topography. It's a place where the echoes of history blend seamlessly with the vibrant pulse of contemporary life. This enchanting city is not just a seat of government; it's a guardian of Scotland's crown jewels and the legendary Stone of Destiny. Edinburgh doesn't simply shine in the light of history; it's also a city of dynamic energy. The nightlife here is legendary, with bustling festivals celebrating everything from arts to culture. The city is home to a diverse community of 901,445 people and four esteemed universities: the University of Edinburgh, Heriot-Watt University, Edinburgh Napier University, and Queen Margaret University Edinburgh."
      },
      {
        name: "Glasgow",
        image: "/glasgow.webp",
        content: "Glasgow, the bustling heart of Scotland, stands as a testament to the charm and vibrancy of urban life in the United Kingdom. As the most populous city in Scotland, Glasgow reigns supreme, situated as a thriving port city on the banks of the majestic River Clyde in the country's western lowlands. Glasgow is much more than a visual delight. It's a cultural powerhouse, home to esteemed institutions like the Scottish Opera, the Scottish Ballet, and the National Theatre of Scotland. The city is home to six esteemed institutions: the University of Glasgow, the University of Strathclyde, Glasgow Caledonian University, the University of the West of Scotland, The Glasgow School of Art, and the Royal Conservatoire of Scotland."
      }
    ]
  },
  northernIreland: {
    title: "Northern Ireland",
    description: "Northern Ireland, nestled in the northeast of the island of Ireland, is a land of unique significance, offering a tapestry of cultural, natural, and historical marvels. Sharing a border with the Republic of Ireland, Northern Ireland stands as one of the United Kingdom's cherished constituent states. A population of 1,900,000 people calls this place home, and they are custodians of a truly splendid natural heritage. Northern Ireland is famed for hosting one of the world's most extraordinary coastal road trips, where the untamed beauty of the coastline unfolds at every turn. It's a place where the echoes of history resonate alongside the whispers of the wind through its verdant landscapes.",
    places: [
      {
        name: "Belfast",
        image: "/belfast.webp",
        content: "Belfast, the thriving capital and the largest city of Northern Ireland, beckons with its intriguing blend of history, culture, and modern vibrancy. It may be the 12th largest city in the UK, but it stands as a rising star in its own right. What truly sets Belfast apart is its people, known for their warmth and hospitality, making newcomers feel right at home. Belfast extends a warm welcome to students and budget-conscious adventurers alike, providing an array of pocket-friendly accommodation options. It's the birthplace of the legendary Titanic, and the echoes of its story still resonate through the city. When it comes to higher education, Belfast offers two outstanding universities: Queen's University Belfast and Ulster University."
      }
    ]
  }
}

const Page = () => {
  return (
    <div>
      <section className="relative min-h-[75vh] pt-16 lg:pt-[150px] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/study-hero.webp"
            alt="Study in the UK"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full">
          <div className="flex items-center min-h-[calc(75vh-64px)] lg:min-h-[calc(75vh-150px)]">
            <div className="w-full md:w-3/5 max-w-2xl py-16 md:py-20">
              <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Study Destination</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                Study in the <span className="text-[#0066FF]">United Kingdom</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#B0C0D4] leading-relaxed mb-8" style={{ maxWidth: '48ch' }}>
                Every year, thousands of Nigerian students choose to pursue their education in the UK. With its diverse population and a well-established reputation for providing prestigious education, the UK naturally emerges as an attractive destination for Nigerian students. For Nigerians seeking an English-language education, what better place to study than the very country where the language was born?
              </p>
              <Link href="/contact">
                <button className="px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer">
                  Start My Application
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              Why Study in the <span className="text-[#0066FF]">UK</span>?
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
          </div>
          <div className="space-y-8">
            {whyStudyInTheUK.map((item) => (
              <div key={item.key} className="border-l-2 border-[#0066FF] pl-5">
                <h3 className="font-display text-lg font-bold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="text-[15px] sm:text-base text-[#5A6A82] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                About the <span className="text-[#0066FF]">UK</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                The United Kingdom of Great Britain and Northern Ireland, commonly referred to as the United Kingdom or Britain, is a nation located in northwestern Europe. It encompasses a total land area of 93,628 square miles. The United Kingdom operates under a unitary parliamentary democracy and a constitutional monarchy.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                London, the capital and the largest city, stands as a global metropolis with a population exceeding 14 million residents. Other prominent urban centers within the United Kingdom include Birmingham, Manchester, Glasgow, Liverpool, and Leeds. The United Kingdom is comprised of four distinct countries: England, Scotland, Wales, and Northern Ireland.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                Cost of <span className="text-[#0066FF]">Living</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                Studying and residing in the United Kingdom offers a cost-effective alternative compared to the United States. The expenses associated with obtaining a degree in the UK vary based on factors such as the chosen course and the institution. On average, tuition fees range from ₦5 million to ₦12.3 million per year.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                The cost of living and accommodation also depends on the specific city you choose. While the UK, in general, provides relatively affordable living expenses, keep in mind that residing in London tends to be slightly pricier than other UK cities. On average, you can anticipate living costs ranging from ₦4.5 million to ₦6.1 million annually.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                Many universities offer scholarships and financial aid programmes, which can significantly offset the overall cost of your education.
              </p>
              <Link href="/contact">
                <button className="mt-6 px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer">
                  Start My Application
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              Admission <span className="text-[#0066FF]">Requirements</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed">
              Here are the documents and requirements needed for undergraduate and postgraduate admissions in the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="border-t-2 border-[#0A1628] pt-6">
              <h3 className="font-display text-xl font-bold text-[#0A1628] mb-6">Undergraduate Requirements</h3>
              <ul className="space-y-3">
                {UGDR.map((item) => (
                  <li key={item.key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1628] pt-6">
              <h3 className="font-display text-xl font-bold text-[#0A1628] mb-6">Postgraduate Requirements</h3>
              <ul className="space-y-3">
                {PGDR.map((item) => (
                  <li key={item.key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-[#FAFAFA] p-6 lg:p-8">
            <p className="text-[15px] sm:text-base text-[#5A6A82] leading-relaxed">
              When all the documents have been submitted and they meet the requirement of the school, a <strong className="text-[#0A1628]">CONDITIONAL OFFER</strong> is issued to the student. This offer is not final, hence the name &apos;conditional offer.&apos; The conditions for the offer will be stated in the offer, and upon completion, the offer becomes unconditional.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              After Your Conditional <span className="text-[#0066FF]">Offer</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
          </div>

          <div className="mb-12">
            <h3 className="font-display text-lg font-bold text-[#0A1628] mb-6">Fulfil the conditions of your offer:</h3>
            <ul className="space-y-3">
              {TAC.map((item) => (
                <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                  {item.content}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="font-display text-lg font-bold text-[#0A1628] mb-6">You also need to get this process started:</h3>
            <ul className="space-y-3">
              {ALSONEED.map((item) => (
                <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                  {item.content}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 lg:p-8">
            <p className="text-[15px] sm:text-base text-[#5A6A82] leading-relaxed mb-6">
              Once all these requirements are met the next step is to apply for <strong className="text-[#0A1628]">Confirmation of Acceptance for Studies (CAS)</strong>. Application for CAS is usually done from June to September after the WAEC result has been released (not restricting the fact that applications can still be ongoing).
            </p>
            <h3 className="font-display text-lg font-bold text-[#0A1628] mb-6">Required documents for CAS:</h3>
            <ul className="space-y-3">
              {RDCAC.map((item) => (
                <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                  {item.content}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <button className="mt-8 px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer">
                Start My Application
              </button>
            </Link>
          </div>
        </div>
      </section>

      {Object.entries(cities).map(([key, region]) => (
        <section key={key} className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-[55ch] mb-14 lg:mb-16">
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                Top Cities in <span className="text-[#0066FF]">{region.title}</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-5" />
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">{region.description}</p>
            </div>

            <div className="space-y-16 lg:space-y-20">
              {region.places.map((place, i) => (
                <div key={i} className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${i % 2 !== 0 ? '' : ''}`}>
                  <div className={`${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative">
                      <Image
                        src={place.image}
                        alt={place.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#1a56ff]/10 pointer-events-none hidden lg:block" />
                    </div>
                  </div>
                  <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#0A1628] mb-5">Study in {place.name}</h3>
                    <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">{place.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              Start Your Admission <span className="text-[#0066FF]">Application Today</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mx-auto mb-6" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed mb-8">
              Take the first step towards studying in the UK. Our team is here to guide you through every stage of the application process.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer">
                Start My Application
              </button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default Page
