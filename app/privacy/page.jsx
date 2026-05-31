import React from 'react'

const Page = () => {
  return (
    <div className="mt-[40px]">
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Legal</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
              Privacy <span className="text-[#0066FF]">Policy</span>
            </h1>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed">
              How we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">1. Information We Collect</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We collect personal information that you voluntarily provide to us when you use our services, including but not limited to your name, email address, phone number, postal address, educational background, passport details, and any other information necessary to process your visa and admission applications.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">2. How We Use Your Information</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We use the information we collect to process your visa and admission applications, communicate with you regarding your applications, provide customer support, improve our services, and comply with legal obligations. We may also use your information to send you relevant updates about study opportunities, provided you have consented to receive such communications.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">3. Data Sharing and Disclosure</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We may share your personal information with educational institutions, embassies, immigration authorities, and other third parties as necessary to process your applications. We do not sell your personal information to third parties. We may also disclose your information if required to do so by law or in response to valid legal requests.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">4. Data Security</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">5. Data Retention</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. When your information is no longer needed, we will securely delete or anonymise it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">6. Your Rights</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                You have the right to access, correct, update, or request deletion of your personal information. You may also withdraw your consent for us to process your data at any time, subject to legal or contractual restrictions. To exercise these rights, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">7. Cookies</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain features on our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">8. Changes to This Policy</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">9. Contact Us</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@britishauc.com" className="text-[#0066FF] hover:underline">info@britishauc.com</a> or visit our <a href="/contact" className="text-[#0066FF] hover:underline">Contact Us</a> page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
