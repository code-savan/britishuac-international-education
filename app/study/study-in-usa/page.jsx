import { USAADMISSIONPRROCESS, USAGDR, USAPGDR, USAUGDR, USAUGDRDOC, whyStudyInTheUSA } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CTABanner from '@/components/CTABanner'

const cities = [
  {
    name: "Texas",
    image: "/texas.webp",
    content: "Texas, a state situated in the vibrant south-central region of the USA, is nothing short of magnificent. Boasting a thriving population of 29.1 million residents, it proudly holds the title of being the second-largest state in both land area and number of inhabitants. Everything in Texas is synonymous with grandeur, from their legendary BBQ feasts to the hearty Tex-Mex cuisine that graces every plate. This state is steeped in history, echoing tales of pioneers and cowboys, while resonating with the sounds of live music, as Austin stands proudly as the live music capital of the world. For those seeking academic excellence, Texas is home to 38 distinguished colleges and universities, including The University of Texas at Austin, Texas A&M University, William March Rice University, University of Houston, and the University of North Texas."
  },
  {
    name: "Florida",
    image: "/florida.webp",
    content: "Florida, located in the enchanting southeastern region of the USA, is a sun-kissed paradise nestled between the Atlantic Ocean and the Gulf of Mexico. Its coastline is adorned with hundreds of pristine beaches. Miami, a vibrant city within Florida, pulses with a Latin-American influence, and it's here that you'll discover flourishing art scenes and a cultural tapestry that's nothing short of awe-inspiring. Florida is the proud home of the world-famous Disney World, where magical adventures await visitors of all ages. For those who seek higher education, Florida boasts a magnificent array of 40 universities, including esteemed institutions like the University of Florida, Florida State University, Florida A&M University, and the University of Central Florida."
  },
  {
    name: "New York",
    image: "/ny.webp",
    content: "New York, often hailed as the most famous city in the world, is a place of dreams and limitless possibilities. The iconic borough of Manhattan stands out as a bustling, densely populated district that reigns as one of the globe's foremost commercial, financial, and cultural epicenters. Manhattan is adorned with architectural marvels, including the iconic Empire State Building and the sprawling wonder that is Central Park. As a city of boundless diversity, New York warmly welcomes tourists from all corners of the earth. With 238 higher institutions of learning, New York provides a wealth of educational opportunities, including Adelphi University, Colgate University, Fordham University, Hofstra University, and Manhattan College."
  },
  {
    name: "San Francisco",
    image: "/sanfran.webp",
    content: "San Francisco, nestled in the northern region of California, stands as the 17th most populous city in the United States and holds the fourth position within the state of California. With a population of 874,961 residents, San Francisco blends the charms of a bustling urban hub with the allure of nature. One of San Francisco's greatest attractions lies in its climate, widely acclaimed as one of the best in the world. The city's culinary scene is renowned for its diversity, offering a delightful array of international cuisines. San Francisco's allure extends to its iconic attractions including the Golden Gate Bridge, Alcatraz Island, and the beauty of wine country in nearby Napa Valley. The city boasts 25 institutions of learning, including the University of California, San Francisco State University, and Golden Gate University."
  },
  {
    name: "Los Angeles",
    image: "/la.webp",
    content: "Los Angeles, commonly abbreviated as LA, holds the distinction of being the largest city in California. Nestled in the southern region of the state, it serves as the epicenter of the renowned Hollywood entertainment industry. One of the city's most iconic features is the world-famous Hollywood sign, which stands proudly against the California sky. Known as the Entertainment Capital of the World, Los Angeles pulses with creativity and offers a stage for dreams to come to life. The city enjoys almost perfect weather year-round, creating an environment that's conducive to both work and play. For those seeking higher education, Los Angeles provides a multitude of options including UCLA, the American Academy of Dramatic Arts, the University of Southern California (USC), and the Los Angeles Film School."
  },
  {
    name: "South Carolina",
    image: "/southcarolina.webp",
    content: "South Carolina, located in the southeastern USA, is celebrated for its extensive shoreline featuring subtropical beaches and marsh-like sea islands. The state enjoys a mild climate, making it an attractive destination for those who appreciate beautiful weather year-round. Alongside this climatic advantage, South Carolina boasts a relatively lower cost of living, making it an affordable place to call home. The state has the distinction of being the birthplace of beach music and a dance known as 'the shag,' two cultural treasures that enrich its vibrant cultural scene. For those seeking higher education, South Carolina offers 60 higher institutions, including Charleston Southern University, Allen University, Claflin University, Columbia College, and Furman University."
  }
]

const Page = () => {
  return (
    <div>
      <section className="relative min-h-[75vh] pt-16 lg:pt-[150px] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/studyinusa.webp"
            alt="Study in the USA"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0A1628]/80 to-[#0A1628]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-full">
          <div className="flex items-center min-h-[calc(75vh-64px)] lg:min-h-[calc(75vh-150px)]">
            <div className="w-full md:w-3/5 max-w-2xl py-16 md:py-20">
              <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Study Destination</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                Study in the <span className="text-[#0066FF]">United States</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#B0C0D4] leading-relaxed mb-8" style={{ maxWidth: '48ch' }}>
                Studying in the USA from Nigeria is a fantastic idea. The USA boasts the world&apos;s largest international student population, with over 1,000,000 students opting to enrich their education and life experience in this diverse nation. The American education system is renowned for its diversity, making it one of the most varied educational systems globally.
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
              Why Study in the <span className="text-[#0066FF]">USA</span>?
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
          </div>
          <div className="space-y-8">
            {whyStudyInTheUSA.map((item) => (
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
                About the <span className="text-[#0066FF]">USA</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                The United States, often abbreviated as the USA, is a vast and diverse nation located in North America. Comprising 50 states, it boasts a wide geographical range. While 48 states occupy the heart of the continent, the state of Alaska stretches to the northwestern extremes of North America, and Hawaii is an island paradise in the mid-Pacific Ocean.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                Spanning as the fourth largest country in the world, the United States is a land of immense diversity and opportunity. Its capital, Washington, D.C., is a global hub known for its multiculturalism. With a history spanning over 250 years, the United States is home to a dynamic population of 327 million people.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                Cost of <span className="text-[#0066FF]">Living</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                The cost of obtaining a degree in the USA can vary significantly, ranging from approximately 10,000 USD to 40,000 USD per year. These costs depend on several factors, including the specific course of study and the institution you choose to attend.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                On average, accommodation and living costs range from about 10,000 USD to 32,000 USD annually. Major cities like New York or Los Angeles tend to be more expensive, while smaller towns and rural areas may offer more affordable living options.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                Scholarships, financial aid, and part-time work opportunities can help offset the costs of studying and living in the USA.
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
              Here are the documents and requirements needed for undergraduate and postgraduate admissions in the USA.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="border-t-2 border-[#0A1628] pt-6">
              <h3 className="font-display text-xl font-bold text-[#0A1628] mb-6">Undergraduate Requirements</h3>
              <ul className="space-y-3">
                {USAUGDR.map((item) => (
                  <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1628] pt-6">
              <h3 className="font-display text-xl font-bold text-[#0A1628] mb-6">Postgraduate Requirements</h3>
              <ul className="space-y-3">
                {USAPGDR.map((item) => (
                  <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
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
              USA Admission <span className="text-[#0066FF]">Process</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
          </div>
          <div className="space-y-6">
            {USAADMISSIONPRROCESS.map((item) => (
              <div key={item.key} className="border-l-2 border-[#0066FF] pl-5">
                <h3 className="font-display text-base font-bold text-[#0A1628] mb-1">{item.title}</h3>
                <p className="text-[15px] text-[#5A6A82] leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                USA Student <span className="text-[#0066FF]">Visa</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                As a Nigerian student, you&apos;ll need to secure a study visa (F1 visa) to pursue your education in the United States. This process involves completing specific forms, presenting essential documents, and attending a visa interview. It can be quite challenging, but fortunately, British AUC is here to guide you through every step.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                Both undergraduate and graduate programmes are available, with undergraduate programmes typically lasting four years. However, professional courses like medicine and law follow a 4+4 model.
              </p>
              <Link href="/contact">
                <button className="mt-6 px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer">
                  Start My Application
                </button>
              </Link>
            </div>
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                Visa <span className="text-[#0066FF]">Documents</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <div className="mb-8">
                <h3 className="font-display text-base font-bold text-[#0A1628] mb-4">Graduate</h3>
                <ul className="space-y-3">
                  {USAGDR.map((item) => (
                    <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-[#0A1628] mb-4">Undergraduate</h3>
                <ul className="space-y-3">
                  {USAUGDRDOC.map((item) => (
                    <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              Top States &amp; Cities in the <span className="text-[#0066FF]">USA</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed">
              Discover the best destinations for Nigerian students across the United States.
            </p>
          </div>
          <div className="space-y-16 lg:space-y-20">
            {cities.map((city, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className={`${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <Image
                      src={city.image}
                      alt={city.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#1a56ff]/10 pointer-events-none hidden lg:block" />
                  </div>
                </div>
                <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#0A1628] mb-5">Study in {city.name}</h3>
                  <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">{city.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
              Start Your Admission <span className="text-[#0066FF]">Application Today</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mx-auto mb-6" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed mb-8">
              Take the first step towards studying in the USA. Our team is here to guide you through every stage of the application process.
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
