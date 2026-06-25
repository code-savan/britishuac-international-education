import { CANADAPGDR, CANADAUGDR, whyStudyInCanada } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CTABanner from '@/components/CTABanner'

const admissionProcess = [
  {
    title: "Select a course of your choice",
    content: "The first step in planning to study abroad is choosing your field of study. Your course selection is crucial for your application. If you're unsure about what to study, don't worry; we can assist you in the course selection process."
  },
  {
    title: "Pick a school",
    content: "Once you've decided on your course, the next step is to choose a school. Your choice of school should align with your selected course, your budget, and, in some cases, your academic results."
  },
  {
    title: "Review requirements and deadlines",
    content: "Understanding the admission requirements and application deadlines is essential. Some top-ranked schools close their admissions nearly ten months before the start of the semester. Missing deadlines can be costly."
  },
  {
    title: "Prepare for the English proficiency test",
    content: "If you're traveling to an English-speaking country like Canada from Nigeria, you'll need to take an English proficiency test. Adequate preparation is key."
  },
  {
    title: "Assemble required documents",
    content: "Collect all necessary documents as listed above for your application."
  },
  {
    title: "Register for any required exams",
    content: "Certain schools may mandate specific exams, such as the SAT. Make sure to meet these requirements if they apply."
  },
  {
    title: "Submit your application",
    content: "Once you've completed the above steps, it's time to submit your application to the chosen school."
  },
  {
    title: "Schedule a Visa appointment",
    content: "To obtain a Canadian visa, you'll need to attend an embassy interview. The outcome of this interview will determine whether you receive the visa or not."
  }
]

const provinces = [
  {
    name: "Ottawa (Ontario)",
    image: "/ottawa.webp",
    content: "Ottawa, the capital of Canada, is located in east-central Canada near the U.S. border. It is home to a population of approximately 14.57 million people. Ottawa is celebrated for its incredible provincial parks, the beauty of its Superior Lakes, the warm and friendly nature of its people, and the presence of two dynamic cities. Ontario holds the political capital, while Toronto serves as the commercial hub. In Ottawa, there are 24 schools, including institutions like Cambrian College, Durham College, Northern College, University of Toronto, and Algoma University, offering diverse educational opportunities."
  },
  {
    name: "Manitoba",
    image: "/manitoba.webp",
    content: "Manitoba, a Canadian province, is situated between Ontario and Saskatchewan. It boasts a diverse landscape, characterized by picturesque lakes, meandering rivers, majestic mountains, and lush forests. The province is home to over 80 provincial parks, renowned for outdoor activities like hiking, biking, camping, and fishing. Among its natural wonders, the Manitoba waterfall stands out as a breathtaking beauty. Manitoba's population totals approximately 1.369 million. The province is home to five universities, including the University of Manitoba, the University of Winnipeg, Brandon University, Canadian Mennonite University, and Université de Saint-Boniface."
  },
  {
    name: "British Columbia",
    image: "/vancouver.webp",
    content: "British Columbia, the westernmost province of Canada, is characterized by its stunning Pacific coastline and majestic mountain ranges. The province is renowned for its natural beauty, featuring diverse landscapes such as glaciers and a national park that boasts an extensive network of hiking and biking trails. The population of British Columbia stands at approximately 5.071 million. British Columbia is home to a total of 11 public universities, each offering unique educational opportunities. These institutions include Capilano University, Emily Carr University of Art and Design, Simon Fraser University, and the prestigious University of British Columbia."
  },
  {
    name: "Quebec",
    image: "/quebec.webp",
    content: "Quebec, predominantly French-speaking, is characterized by its distinctive stone architecture and charming narrow streets. The province is home to a population of 542,298 and is renowned for its unique culture, delectable cuisine, stunning natural landscapes, and a wealth of winter activities. Quebec houses a total of 19 universities, offering diverse linguistic environments. Among them, some universities conduct classes in English, referred to as Anglophone institutions, including esteemed names like McGill University, Bishop's University, and Concordia University. The Royal Military College in Quebec follows a bilingual approach, reflecting the province's linguistic diversity."
  }
]

const Page = () => {
  return (
    <div>
      <section className="relative min-h-[75vh] pt-16 lg:pt-[150px] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/canada.webp"
            alt="Study in Canada"
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
                Study in <span className="text-[#0066FF]">Canada</span>
              </h1>
              <p className="text-[16px] sm:text-[17px] text-[#B0C0D4] leading-relaxed mb-8" style={{ maxWidth: '48ch' }}>
                Many Nigerians aspire to pursue both work and study opportunities in Canada. Canada is renowned for offering an exceptional quality of life, consistently ranking among the world&apos;s top countries in this regard. Moreover, it boasts one of the finest educational systems globally, ensuring that you receive an internationally recognized education.
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
              Why Study in <span className="text-[#0066FF]">Canada</span>?
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
          </div>
          <div className="space-y-8">
            {whyStudyInCanada.map((item) => (
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
                About <span className="text-[#0066FF]">Canada</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                Canada, in North America, with 13 provinces, shares a border with the US. It&apos;s the second-largest country globally. Ottawa, on the Ottawa River, is the capital. Canada offers stunning natural beauty from the Rockies to the Atlantic coast, with diverse landscapes that invite outdoor enthusiasts with hiking, skiing, and wildlife.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                Multicultural Canadian cuisine features poutine, butter tarts, and renowned beverages from wine regions and craft breweries. Urban centers like Toronto, Vancouver, and Montreal offer a high quality of life, job opportunities, and vibrant arts scenes. Canadians are known for their friendliness and warmth, making newcomers feel at home.
              </p>
            </div>
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                Cost of <span className="text-[#0066FF]">Living</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                Studying and living in Canada present a cost-effective option compared to other destinations while delivering a comparable standard of education. The affordability factor is a significant draw for international students. When considering pursuing a degree in Canada, the cost typically ranges from ₦4.7 million to ₦12.7 million, depending on the specific course of study and the institution you select.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                The annual accommodation and living expenses in Canada typically range from ₦2.3 million to ₦6.3 million, allowing students to manage their budgets effectively.
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
              Canada offers streamlined pathways for both undergraduate and graduate programmes. Undergraduate programmes typically span four years, with exceptions for professional courses like medicine and law.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="border-t-2 border-[#0A1628] pt-6">
              <h3 className="font-display text-xl font-bold text-[#0A1628] mb-6">Undergraduate Requirements</h3>
              <ul className="space-y-3">
                {CANADAUGDR.map((item) => (
                  <li key={item.Key} className="text-[15px] text-[#5A6A82] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-[#0066FF]">
                    {item.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1628] pt-6">
              <h3 className="font-display text-xl font-bold text-[#0A1628] mb-6">Postgraduate Requirements</h3>
              <ul className="space-y-3">
                {CANADAPGDR.map((item) => (
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
              Canada Admission <span className="text-[#0066FF]">Process</span>
            </h2>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
          </div>
          <div className="space-y-6">
            {admissionProcess.map((step, i) => (
              <div key={i} className="border-l-2 border-[#0066FF] pl-5">
                <h3 className="font-display text-base font-bold text-[#0A1628] mb-1">{step.title}</h3>
                <p className="text-[15px] text-[#5A6A82] leading-relaxed">{step.content}</p>
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
                Canada Student <span className="text-[#0066FF]">Visa</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">
                The Canadian visa application process shares similarities with that of the United States. However, it&apos;s essential to note that the minimum processing time for a Canadian visa is approximately four months. A well-prepared application with thorough documentation significantly increases the likelihood of success.
              </p>
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8] mt-4">
                During the application process, an interview is a pivotal step to determine the outcome. While the process may appear rigorous, with expert guidance, meticulous documentation, and thorough preparation, success can be confidently assured.
              </p>
              <Link href="/contact">
                <button className="mt-6 px-8 py-3.5 bg-[#1a56ff] text-white font-semibold text-[15px] hover:bg-[#1447d1] transition-colors active:scale-[0.98] cursor-pointer">
                  Start My Application
                </button>
              </Link>
            </div>
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold text-[#0A1628] tracking-[-0.03em] text-balance mb-4">
                Top Provinces in <span className="text-[#0066FF]">Canada</span>
              </h2>
              <div className="w-12 h-px bg-[#0066FF] mb-6" />
              <p className="text-[15px] sm:text-base text-[#5A6A82] leading-relaxed">
                Explore the best provinces in Canada for Nigerian students, each offering unique academic and lifestyle opportunities.
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

      <section className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="space-y-16 lg:space-y-20">
            {provinces.map((province, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className={`${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <Image
                      src={province.image}
                      alt={province.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#1a56ff]/10 pointer-events-none hidden lg:block" />
                  </div>
                </div>
                <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#0A1628] mb-5">Study in {province.name}</h3>
                  <p className="text-[15px] sm:text-base text-[#5A6A82] leading-[1.8]">{province.content}</p>
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
              Take the first step towards studying in Canada. Our team is here to guide you through every stage of the application process.
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
