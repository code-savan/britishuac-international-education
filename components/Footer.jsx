import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#0A1628] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-6">
              <Image
                src="/logo.webp"
                alt="British AUC"
                width={180}
                height={44}
                className="w-[140px] sm:w-[180px] h-auto  opacity-90"
              />
              <p className="text-[#6B7D9B] text-sm leading-relaxed max-w-xs">
                Connect with Us for Vital Study Abroad Tips and Unlock Your Global Potential.
              </p>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/british-auc/' },
                  { icon: Facebook, label: 'Facebook', href: 'https://web.facebook.com/BritishAUC1/' },
                  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/britishauc1/' },
                  { icon: Twitter, label: 'Twitter', href: 'https://x.com/britishauc1/' },
                  { icon: null, label: 'TikTok', href: 'https://www.tiktok.com/@british_auc/', isTikTok: true },
                ].map(({ icon: Icon, label, href, isTikTok }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-white/5 flex items-center justify-center hover:bg-[#0066FF] transition-all duration-200"
                  >
                    {isTikTok ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="white" className="text-white/60">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    ) : (
                      <Icon size={15} className="text-white/60" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6B7D9B] mb-6">Company</h3>
                <ul className="space-y-3">
                  {[
                    { href: '/about', label: 'Who We Are' },
                    { href: '/services', label: 'Our Services' },
                    { href: '/blog', label: 'Blogs' },
                    { href: '/events', label: 'Events' },
                    { href: '/contact', label: 'Contact Us' },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-[#8A9AB0] hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6B7D9B] mb-6">Support</h3>
                <ul className="space-y-3">
                  {[
                    { href: '/contact', label: 'Help Centre' },
                    { href: '/faqs', label: 'FAQs' },
                    { href: '/privacy', label: 'Privacy Policy' },
                    { href: '/terms', label: 'Terms of Use' },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-[#8A9AB0] hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6B7D9B]">Find Us</h3>
              {[
                { href: "https://maps.app.goo.gl/JMkDDmrpffF79Hyq7", address: "128 City Road, London, United Kingdom", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2635280087934!2d-0.09081892337876156!3d51.526726171817735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sng!4v1729153840310!5m2!1sen!2sng" },
                { href: "https://maps.app.goo.gl/SreHVgFx3ubhNUs16", address: "Kingfem GA247, Abuja, Nigeria", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.754554342161!2d7.456561375019561!3d9.086110190977537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e0!3m2!1sen!2sng!4v1729153977276!5m2!1sen!2sng" },
              ].map((loc, i) => (
                <div key={i}>
                  <Link target="_blank" href={loc.href} className="text-sm text-[#8A9AB0] hover:text-white transition-colors duration-200 block mb-2">
                    {loc.address}
                  </Link>
                  <div className="overflow-hidden border border-[#1A2A4A]">
                    <iframe src={loc.src} width="100%" height="90" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A2A4A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7D9B] text-xs sm:text-sm">&copy; 2023 British AUC. All Rights Reserved</p>
            <div className="flex gap-6 text-xs sm:text-sm text-[#6B7D9B]">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#060E1A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5">
          <p className="text-[11px] text-[#4A5A72] leading-relaxed text-center">
            Disclaimer: British AUC provides visa and admission application support services. While we maintain a 100% success rate, visa approvals are ultimately at the discretion of individual embassies and immigration authorities. We make no guarantees regarding specific outcomes. All information on this website is for general informational purposes only and does not constitute legal advice. Students are encouraged to verify all details directly with relevant institutions and authorities.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
