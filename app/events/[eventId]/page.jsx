import { eventList } from '@/constants';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import EventAccordion from '@/components/EventAccordion';
import RegionTabs from '@/components/RegionTabs';
import PaymentCard from '@/components/PaymentCard';

export async function generateStaticParams() {
  // Get the list of event IDs from your constants
  const eventIds = eventList.map(event => ({ eventId: event.id }));
  return eventIds;
}

export default function EventDetailPage({ params }) {
  const { eventId } = params;

  // Find the event with the matching ID
  const event = eventList.find((event) => event.id === eventId);

  // If event not found, return 404
  if (!event) {
    notFound();
  }

  // Get regions from event data
  const getRegionsFromEvent = (event) => {
    if (event.scope && event.scope.schools) {
      // For 2025 format with scope.schools object
      return [
        {
          title: 'ABUJA, FCT SCHOOLS',
          schools: event.scope.schools.abuja || [],
        },
        {
          title: 'LAGOS SCHOOLS',
          schools: event.scope.schools.lagos || [],
        },
        {
          title: 'IBADAN, OYO SCHOOLS',
          schools: event.scope.schools.ibadan || [],
        },
        {
          title: 'PORT HARCOURT, RIVERS SCHOOLS',
          schools: event.scope.schools.portHarcourt || [],
        },
        {
          title: 'KANO, KANO SCHOOLS',
          schools: event.scope.schools.kano || [],
        },
        // Include these conditionally if they exist in the data
        ...(event.scope.schools.benin ? [{
          title: 'BENIN CITY, EDO SCHOOLS',
          schools: event.scope.schools.benin,
        }] : []),
        ...(event.scope.schools.enugu ? [{
          title: 'ENUGU, ENUGU SCHOOLS',
          schools: event.scope.schools.enugu,
        }] : []),
        ...(event.scope.schools.uyo ? [{
          title: 'UYO, AKWA IBOM SCHOOLS',
          schools: event.scope.schools.uyo,
        }] : []),
      ].filter(region => region.schools && region.schools.length > 0);
    }

    // Default static regions array for the 2024 format
    return [
    {
      title: 'ABUJA, FCT SCHOOLS',
      schools: [
        'Lead British International School, Gwarimpa, Abuja',
        'Starville Secondary School, Jabi, Abuja',
        'Pacesetters College, Wuye, Abuja',
        'The Centagon International School, Maitama, Abuja',
        'Funtaj International School, Kudu, Abuja',
        'Stella Maris College, Life Camp, Abuja',
        'Premiere Academy, Lugbe, Abuja',
        'Capital Science Academy, Kado, Abuja',
        'Cherryfield College, Jikwoyi, Abuja',
      ],
    },
    {
      title: 'LAGOS SCHOOLS',
      schools: [
        'Corona Schools, Agbara, Lagos',
        'Caleb International School, Magodo, Lagos',
        'Dowen College, Lekki, Lagos',
        'Caleb British International School, Lekki, Lagos',
        'Newhall International School, Lekki, Lagos',
        'Grace High Schools, Gbagada, Lagos',
        'Doregos Private Academy, Ipaga, Lagos',
        'Atlantic Hall, Epe, Lagos',
        'Rainbow College, Maba, Lagos',
      ],
    },
    {
      title: 'IBADAN, OYO SCHOOLS',
      schools: [
        'The Vale College, Ibadan',
        'The International School, University of Ibadan, Ibadan',
        'Rubies International School, Ibadan',
        'Lead British International School, Ibadan',
        'Lead City International School, Ibadan',
        'George and Duke International College, Ibadan',
        'Valencia College, Ibadan',
        'The Christ Ambassador International College, Ibadan',
        'Life-forte International School, Ibadan',
      ],
    },
    {
      title: 'BENIN CITY, EDO SCHOOLS',
      schools: [
        'Igbenidion Education Centre, Benin City',
        'St. Mary British International School, Benin City',
        'Divine Wisdom International School, Benin City',
        'Norman Edwards School, Benin City',
        'Henson Demonstration School, Benin City',
        'Word of Faith, Benin City',
        'Sacred Heart High School, Benin City',
        'University Preparatory School, Benin City',
        'Phelim High School, Benin City',
        'Greater Tomorrow Secondary School, Benin City',
        'Deeper Life High School, Benin City',
      ],
    },
    {
      title: 'KANO, KANO SCHOOLS',
      schools: [
        'Lebanon School, Kano',
        'Crescent International School, Kano',
        'Intercontinental School, Kano',
        'Prime College, Kano',
        'Queen Science Academy, Kano',
        'Yandutse College, Kano',
        'Excel College, Kano',
        'Asha International Model School, Kano',
        'Nigerian Tulip International College, Kano',
        'Lufaloy Schools, Kano',
      ],
    },
    {
      title: 'ENUGU, ENUGU SCHOOLS',
      schools: [
        'Pine Crest Secondary School, Enugu',
        'Mea Mater Elizabeth High School, Enugu',
        'Hillrange Secondary School, Enugu',
        'Graceland College, Enugu',
        'Roseville Secondary School, Enugu',
        'Providence High School, Enugu',
        'Adorable British College, Enugu',
        'Seat of Wisdom Secondary School, Enugu',
      ],
    },
    {
      title: 'UYO, AKWA IBOM SCHOOLS',
      schools: [
        'Pegasus Schools, Uyo',
        'St Johnpaul II School, Uyo',
        'Beulah International School, Uyo',
        'Ritman College, Uyo',
        'Top Faith Secondary School, Uyo',
        'Nobles International School, Uyo',
        'Tower of Ivory Schools, Uyo',
        'Full Life Secondary School, Uyo',
        'RayField International Secondary School, Uyo',
        'Bright Future College, Uyo',
      ],
    },
    {
      title: 'PORT HARCOURT, RIVERS SCHOOLS',
      schools: [
        'Jesuit Memorial College, Port Harcourt',
        'Charles Dale Memorial International School, Port Harcourt',
        'Green Oak International School, Port Harcourt',
        'Norwegian International School, Port Harcourt',
        'Chokmah International Academy, Port Harcourt',
        'Bereton Montessori Secondary School, Port Harcourt',
        'Trinitate International School, Port Harcourt',
      ],
    },
  ];
  };

  const regions = getRegionsFromEvent(event);
  const fees = event.fees || [];
  const benefits = event.benefits || [
    'Meet & Discuss with High-Quality Students & Parents from Top Secondary Schools in Nigeria',
    'Generate Quality Leads of Students for A Level, International Foundation Year, & Undergraduate Programmes',
    'Set Recruitment Target & work with British AUC to meet your Target Numbers for the 2025/2026 Recruitment Year',
    'Meet & network with Top High Schools\' Principals & Counselors in Lagos, Abuja, Port Harcourt, Ibadan, Benin City, Kano, Enugu & Uyo',
    'Meet & interact with Students from 64 Top Secondary Schools in Nigeria.',
    'Become a <strong>British AUC Priority Partner</strong> by joining the Study Tour'
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 lg:pt-[150px] pb-20">
        {/* Back link */}
        <Link href="/events" className="inline-flex items-center gap-2 text-[#5A6A82] hover:text-[#0066FF] transition-colors mb-8 text-[15px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Events
        </Link>

        {event.id.includes("study-tour") && (
          <section>
            {/* Tour Header */}
            <div className="relative bg-cover bg-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mb-12 md:mb-20 bg-[#0A1628] flex flex-col justify-center items-start text-white"
                 style={{ backgroundImage: `url('/${event.id.includes('2025') ? '2025bg.jpg' : '2024bg.webp'}')` }}>
              <div className="absolute inset-0 bg-[#0A1628]/80"></div>
              <div className="px-5 sm:px-10 md:px-16 py-10 md:py-0 relative z-10 max-w-3xl w-full">
                <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-3">Study Tour</p>
                <h1 className="font-display text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.1] mb-3">{event.title}</h1>
                <p className="text-[15px] sm:text-[16px] text-white/80 mb-2">{event.shortDescription}</p>
                <p className="text-[13px] sm:text-[14px] text-white/60 mb-6">{event.date} — {event.location}</p>
                <Link href="https://forms.gle/2r4NYYZwjVSLM5m37">
                  <button className="bg-[#1a56ff] text-white px-6 py-3 font-bold text-[14px] hover:bg-[#0066FF] transition-colors">
                    Register Now
                  </button>
                </Link>
                <div className="flex gap-3 mt-6">
                  {[
                    { href: "https://www.linkedin.com/company/british-auc/", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                    { href: "https://web.facebook.com/BritishAUC1/", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                    { href: "https://www.instagram.com/britishauc1/", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                    { href: "https://x.com/britishauc1/", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                    { href: "https://www.tiktok.com/@british_auc/", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d={social.path}/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About Event Section */}
            <div className="mb-16 md:mb-24">
              <h1 className="font-display text-[clamp(1.25rem,3vw,2rem)] font-bold text-[#0A1628] mb-8">
                About <span className="text-[#0066FF]">the Event</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-1 text-[15px] text-[#5A6A82] leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: event.detailedDescription.replace(/\n/g, '<br/>') }}></div>
                </div>
                <div className="flex-1 bg-[#F5F5F5]">
                  <Image src={event.image} alt="Event Image" width={500} height={500} className="w-full h-auto" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            </div>

            {/* Why Attend Section */}
            <div className="bg-[#0A1628] px-6 sm:px-10 md:px-16 py-12 md:py-16 mb-16 md:mb-24 text-white">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="flex-1">
                  <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold mb-4">Why Attend?</h2>
                  <p className="text-[15px] text-white/70 mb-4 leading-relaxed">
                    The purpose of this year&apos;s Study Tour is to create a space that fosters networking between you, students & stakeholders in the Education Industry generally across {event.id === "study-tour-2025" ? "5" : "8"} major cities in Nigeria.
                  </p>
                  <p className="text-[15px] text-red-400 font-semibold mb-6">
                    Kindly register on or before {event.registerBy}
                  </p>
                  <Link href="https://forms.gle/2r4NYYZwjVSLM5m37">
                    <button className="bg-[#1a56ff] text-white px-6 py-3 font-bold text-[14px] hover:bg-[#0066FF] transition-colors">
                      Register Now
                    </button>
                  </Link>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold mb-4">Take advantage of the following:</h2>
                  <div className="space-y-3">
                    {benefits.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                        <span className="text-[15px] text-white/80" dangerouslySetInnerHTML={{ __html: item }}></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scope Section */}
            <div className="mb-16 md:mb-24">
              <h1 className="font-display text-[clamp(1.25rem,3vw,2rem)] font-bold text-[#0A1628] mb-3">
                <span className="text-[#0066FF]">Scope</span> of Event
              </h1>
              <p className="text-[15px] text-[#5A6A82] mb-8">
                <strong>{event.title}</strong> will cover {event.id === "study-tour-2025" ? "48" : "64"} Private High Schools across the visited states.
              </p>
              <div className="hidden md:block">
                <div id="accordion-container">
                  <EventAccordion regions={regions} />
                </div>
              </div>
              <div className="md:hidden">
                <RegionTabs regions={regions} />
              </div>
            </div>

            {/* Event Schedule Section */}
            <div className="mb-16 md:mb-24">
              <h1 className="font-display text-[clamp(1.25rem,3vw,2rem)] font-bold text-[#0A1628] mb-8">
                Event <span className="text-[#0066FF]">Schedule</span>
              </h1>
              <div className="overflow-x-auto border border-[#E8ECF0]">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-[#0A1628] text-white text-[14px]">
                      <th className="p-3 border border-[#1a2a4a] font-semibold">DATE</th>
                      <th className="p-3 border border-[#1a2a4a] font-semibold">ACTIVITY</th>
                      <th className="p-3 border border-[#1a2a4a] font-semibold">LOCATION(S)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {event.schedule && event.schedule.map((item, index) => (
                      <tr key={index} className="border-b border-[#E8ECF0] text-[14px] text-[#5A6A82] hover:bg-[#FAFAFA] transition-colors">
                        <td className="p-3 border border-[#E8ECF0] font-medium text-[#0A1628]">{item.date}</td>
                        <td className="p-3 border border-[#E8ECF0]">{item.activity}</td>
                        <td className="p-3 border border-[#E8ECF0]">
                          {item.location && (
                            <>
                              {item.location}
                              {item.meetingPoint && (
                                <div className="mt-2 text-[13px] text-[#0066FF]">
                                  Meeting point: {item.meetingPoint}
                                </div>
                              )}
                              {item.remark && (
                                <div className="mt-2 text-[13px] text-[#5A6A82] italic">
                                  {item.remark}
                                </div>
                              )}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Info - Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hotel Accommodation */}
              <div className="md:col-span-2 border border-[#E8ECF0] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V7l6-4 6 4v14"/><path d="M13 21v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6"/><path d="M21 21V3l-6 4"/><path d="M7 3h10"/></svg>
                  <h3 className="font-display text-[18px] font-bold text-[#0A1628]">Hotel Accommodation</h3>
                </div>
                <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                  During the tour, we will be meeting and departing from major hotels in the city. Therefore, for convenience we recommend you consider staying at these hotels. Should you be interested in staying at these hotels, we are happy to facilitate this using British AUC rates. Kindly contact the respective hotels yourselves quoting <strong className="text-[#0A1628]">BRITISH AUC</strong> on your reservation.
                </p>
                <p className="mt-3 text-[14px] text-[#5A6A82] leading-relaxed">
                  <strong className="text-[#0A1628]">NB:</strong> Most of these hotels require early reservations and payments to secure your bookings.
                </p>
              </div>

              {/* Transportation */}
              <div className="border border-[#E8ECF0] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 21V9"/></svg>
                  <h3 className="font-display text-[18px] font-bold text-[#0A1628]">Transportation</h3>
                </div>
                <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                  Transportation and arrival to the schools will be in one group as most schools will not allow separate arrivals. Therefore, all delegates are encouraged to keep to departure time.
                </p>
              </div>

              {/* Visa */}
              <div className="border border-[#E8ECF0] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h10"/><path d="M7 9h10"/></svg>
                  <h3 className="font-display text-[18px] font-bold text-[#0A1628]">Visa</h3>
                </div>
                <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                  Should you require visa to travel to Nigeria, we are happy to provide you with a Letter of Invitation to facilitate your visa application. Kindly advise us should you require one.
                </p>
              </div>

              {/* Registration */}
              <div className="md:col-span-2 border border-[#E8ECF0] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  <h3 className="font-display text-[18px] font-bold text-[#0A1628]">Registration</h3>
                </div>
                <p className="text-[14px] text-[#5A6A82] leading-relaxed">
                  To join the {event.title}, please use the link provided below. We also encourage delegates to register early as this helps us to complete logistics arrangement in due time.
                </p>
                <div className="mt-5 p-4 bg-red-50 border border-red-200 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span className="text-[13px] font-bold text-[#DC2626] uppercase tracking-[0.04em]">Deadline:</span>
                    <span className="text-[14px] font-bold text-[#DC2626]">{event.registerBy}</span>
                  </div>
                  <Link href="https://forms.gle/2r4NYYZwjVSLM5m37" className="text-[#0066FF] font-semibold text-[14px] hover:underline sm:ml-auto">Register here →</Link>
                </div>
              </div>

              {/* Participation Fee */}
              <div className="md:col-span-3 md:row-span-2 border border-[#E8ECF0] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <h3 className="font-display text-[18px] font-bold text-[#0A1628]">Participation Fee</h3>
                </div>
                <p className="text-[14px] text-[#5A6A82] mb-4">The participation fee for a delegate per Institution is as follows:</p>
                <div className="overflow-x-auto border border-[#E8ECF0]">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0A1628] text-white text-[14px]">
                        <th className="p-2.5 border border-[#1a2a4a] font-semibold">S/N</th>
                        <th className="p-2.5 border border-[#1a2a4a] font-semibold">CITY</th>
                        <th className="p-2.5 border border-[#1a2a4a] font-semibold">FEE (£)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fees.map((fee, idx) => (
                        <tr key={idx} className="border-b border-[#E8ECF0] text-[14px] text-[#5A6A82]">
                          <td className="p-2.5 border border-[#E8ECF0]">{fee.sn || (idx + 1)}</td>
                          <td className="p-2.5 border border-[#E8ECF0]">{fee.city}</td>
                          <td className="p-2.5 border border-[#E8ECF0] font-medium text-[#0A1628]">{fee.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-[13px] text-[#5A6A82]"><strong className="text-[#0A1628]">NB:</strong> {event.feesNote || "Additional delegate per Institution attracts an extra charge of 30% on fees."}</p>
                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                  {event.feesIncludes && event.feesIncludes.length > 0 && (
                    <div>
                      <p className="text-[14px] font-semibold text-[#0A1628] mb-1">Fee Includes:</p>
                      <div className="space-y-1">
                        {event.feesIncludes.map((item, idx) => (
                          <p key={idx} className="text-[14px] text-[#5A6A82] flex items-start gap-2">
                            <span className="text-[#0066FF] mt-0.5">•</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {event.feesExcludes && event.feesExcludes.length > 0 && (
                    <div>
                      <p className="text-[14px] font-semibold text-[#0A1628] mb-1">Fee Does Not Cover:</p>
                      <div className="space-y-1">
                        {event.feesExcludes.map((item, idx) => (
                          <p key={idx} className="text-[14px] text-[#5A6A82] flex items-start gap-2">
                            <span className="text-[#0066FF] mt-0.5">•</span> {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="md:col-span-3 border border-[#E8ECF0] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <h3 className="font-display text-[18px] font-bold text-[#0A1628]">Terms &amp; Conditions</h3>
                </div>
                <div className="space-y-2">
                  {event.termsConditions && event.termsConditions.map((term, idx) => (
                    <p key={idx} className="text-[14px] text-[#5A6A82] flex items-start gap-2">
                      <span className="text-[#0066FF] mt-1 shrink-0">•</span>
                      <span>{term}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <PaymentCard bankDetails={event.bankDetails} />
            </div>
          </section>
        )}

        {/* For other events */}
        {!event.id.includes("study-tour") && (
          <div>
            <div className="mb-8">
              <h1 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-[#0A1628]">{event.title}</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Image
                  src={event.image}
                  width={600}
                  height={400}
                  alt={event.title}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="mt-6">
                  <h2 className="font-display text-xl font-bold text-[#0A1628] mb-2">Event Details</h2>
                  <p className="text-[15px] text-[#5A6A82] mb-3"><span className="font-semibold text-[#0A1628]">Date:</span> {event.date}</p>
                  <p className="text-[15px] text-[#5A6A82] mb-3"><span className="font-semibold text-[#0A1628]">Location:</span> {event.location}</p>
                  <div className="my-6">
                    <p className="text-[15px] text-[#5A6A82] leading-relaxed whitespace-pre-line">{event.detailedDescription}</p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="border border-[#E8ECF0] p-6 mb-6">
                  {event.benefits && event.benefits.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-display text-lg font-bold text-[#0A1628] mb-3">Benefits of Attending</h3>
                      <ul className="space-y-2">
                        {event.benefits.map((benefit, index) => (
                          <li key={index} className="text-[15px] text-[#5A6A82] flex items-start gap-2">
                            <span className="text-[#0066FF] mt-1 shrink-0">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {event.contactPerson && (
                    <div className="bg-blue-50 border border-blue-100 p-6 mb-6">
                      <h3 className="font-display text-lg font-bold text-[#0A1628] mb-3">Registration Information</h3>
                      <div className="space-y-2 text-[15px] text-[#5A6A82]">
                        <p><span className="font-semibold text-[#0A1628]">Register By:</span> {event.registerBy || "Contact for details"}</p>
                        <p><span className="font-semibold text-[#0A1628]">Contact Person:</span> {event.contactPerson}</p>
                        <p><span className="font-semibold text-[#0A1628]">Email:</span> {event.contactEmail}</p>
                        <p><span className="font-semibold text-[#0A1628]">Phone:</span> {event.contactPhone}</p>
                      </div>
                      <button className="mt-4 py-3 px-6 font-bold bg-[#1a56ff] text-white text-[14px] hover:bg-[#0066FF] transition-colors">
                        Register for Event
                      </button>
                    </div>
                  )}

                  <Link href="/events" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0066FF] hover:text-[#1a56ff] transition-colors group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><polyline points="12 19 5 12 12 5"/></svg>
                    Back to Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
