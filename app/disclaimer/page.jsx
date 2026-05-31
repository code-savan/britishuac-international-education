import React from 'react'

const Page = () => {
  return (
    <div className="mt-[40px]">
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-[55ch] mb-14 lg:mb-16">
            <p className="text-[13px] font-semibold text-[#0066FF] uppercase tracking-[0.1em] mb-4">Legal</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#0A1628] leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
              <span className="text-[#0066FF]">Disclaimer</span>
            </h1>
            <div className="w-12 h-px bg-[#0066FF] mb-5" />
            <p className="text-[16px] text-[#5A6A82] leading-relaxed">
              Important information regarding the limitations of our services.
            </p>
          </div>

          <div className="max-w-3xl space-y-8">
            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">1. General Information</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                The information provided on this website is for general informational purposes only. It does not constitute legal advice, professional advice, or a binding representation of any kind. You should not rely solely on the information on this website when making decisions regarding your visa application, admission process, or study abroad plans.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">2. No Guarantee of Outcomes</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                While British AUC maintains a strong track record of successful visa and admission applications, we make no guarantees regarding specific outcomes. Visa approvals, admission decisions, and immigration status determinations are solely at the discretion of the respective embassies, immigration authorities, and educational institutions. We cannot and do not guarantee that any application will be approved.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">3. Accuracy of Information</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                We strive to ensure that all information on this website is accurate and up to date. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website. University requirements, visa policies, and immigration rules are subject to change without notice. Students are encouraged to verify all details directly with the relevant institutions and authorities.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">4. Third-Party Content</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                This website may contain links to third-party websites, resources, and content. British AUC does not endorse, control, or assume responsibility for the accuracy, legality, or content of any third-party sites. Accessing third-party links is done at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">5. Limitation of Liability</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                To the fullest extent permitted by law, British AUC, its directors, employees, and affiliates shall not be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising from or in connection with the use of this website or the services provided.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">6. Personal Responsibility</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                Users of our services acknowledge that they are responsible for their own decisions and actions. British AUC provides support and guidance, but the ultimate responsibility for ensuring the accuracy and completeness of application materials rests with the applicant.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[22px] font-bold text-[#0A1628] mb-3">7. Contact Us</h2>
              <p className="text-[16px] text-[#5A6A82] leading-relaxed">
                If you have any questions about this disclaimer, please contact us at <a href="mailto:info@britishauc.com" className="text-[#0066FF] hover:underline">info@britishauc.com</a> or visit our <a href="/contact" className="text-[#0066FF] hover:underline">Contact Us</a> page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
