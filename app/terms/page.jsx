import React from 'react'

const Page = () => {
  return (
    <div className="mt-[40px]">
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Legal</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
              Terms of <span className="text-[#0066FF]">Use</span>
            </h1>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">1. Acceptance of Terms</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                By accessing or using the British AUC website and services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">2. Services Description</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                British AUC provides visa application support, admission processing assistance, and study abroad advisory services. We act as an intermediary between students and educational institutions abroad. We do not guarantee specific outcomes regarding visa approvals or admissions, as these decisions rest solely with the respective embassies, immigration authorities, and institutions.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">3. User Responsibilities</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                You agree to provide accurate, complete, and up-to-date information when using our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You must not use our website for any unlawful purpose or in violation of any applicable laws or regulations.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">4. Intellectual Property</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of British AUC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">5. Limitation of Liability</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                British AUC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services. Our total liability for any claim arising from these terms shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">6. Third-Party Links</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by British AUC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">7. Changes to Terms</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We reserve the right to modify or replace these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">8. Contact Information</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at <a href="mailto:info@britishauc.com" className="text-[#0066FF] hover:underline">info@britishauc.com</a> or visit our <a href="/contact" className="text-[#0066FF] hover:underline">Contact Us</a> page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
