'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By downloading, installing, or using Janazah ("the App", "we", "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, please do not use the App.`
  },
  {
    title: '2. Service Description',
    body: `Janazah provides the following services:

• Create Islamic memorial notice posters for Janazah (funeral) announcements
• Share notices digitally via messaging apps and social media
• Generate PDF versions of memorial notices for printing
• Access Islamic calendar features
• Multilingual support for Arabic, Urdu, English, and other languages`
  },
  {
    title: '3. User Responsibilities',
    body: `By using the App, you agree to:

• Provide accurate information when creating memorial notices
• Have proper rights to any photos you upload
• Use the App only for its intended purpose (creating memorial notices)
• Not use the App for any unlawful, harmful, or offensive purpose
• Not attempt to reverse-engineer, decompile, or disassemble the App
• Not use the App to create false or misleading notices
• Respect the dignity of the deceased and their families`
  },
  {
    title: '4. Content Ownership',
    body: `• You retain ownership of content you create (photos, text, details entered).
• App design, templates, code, UI/UX, and branding belong to the developer.
• Islamic calligraphy and template designs are proprietary.
• Sharing posters via the App grants no additional intellectual property rights to recipients.
• You grant us a limited license to process your content solely for generating notices.`
  },
  {
    title: '5. Advertisements',
    body: `• The App displays advertisements through Google AdMob to support free access.
• Ad types include banner ads, interstitial ads, and rewarded ads.
• We do not control the content of advertisements displayed.
• We do not endorse any advertised products or services.
• You can opt out of personalized ads via your device settings.`
  },
  {
    title: '6. Availability & Updates',
    body: `• We do not guarantee uninterrupted or error-free service.
• The App may be temporarily unavailable for maintenance or updates.
• Features may be added, modified, or removed at our discretion.
• We reserve the right to discontinue the App at any time.
• Continued use after updates constitutes acceptance of changes.`
  },
  {
    title: '7. Limitation of Liability',
    body: `• The App is provided "AS IS" without warranties of any kind.
• We are NOT liable for any direct, indirect, or consequential damages.
• We do NOT guarantee the accuracy of Islamic calendar features.
• We are NOT responsible for how shared notices are used by recipients.
• We are NOT liable for any loss of data due to device issues or app uninstallation.
• Our total liability shall not exceed the amount you paid for the App (which is free).`
  },
  {
    title: '8. Termination',
    body: `• You may stop using the App at any time by uninstalling it.
• We reserve the right to terminate or restrict access for violations of these Terms.
• Upon termination, your locally stored data will be removed when you uninstall.
• Sections on Intellectual Property, Limitation of Liability, and Governing Law survive termination.`
  },
  {
    title: '9. Governing Law',
    body: `• These Terms are governed by the laws of the user's local jurisdiction.
• Any disputes shall be resolved through appropriate legal channels in the applicable jurisdiction.
• If any provision is found unenforceable, the remaining provisions continue in effect.`
  },
  {
    title: '10. Changes to Terms',
    body: `• We may update these Terms at any time.
• Changes are effective immediately upon posting.
• Continued use after changes constitutes acceptance.
• It is your responsibility to review these Terms periodically.`
  },
  {
    title: '11. Contact',
    body: `If you have any questions about these Terms and Conditions:

Email: flutterdeveloper72@gmail.com
App: Janazah - Muslim Janazah Memorial Notice`
  }
]

export default function JanazahTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/janazah" className="flex items-center gap-2">
              <span className="text-3xl">☪️</span>
              <span className="text-2xl font-black text-gray-900">Janazah</span>
            </Link>
            <Link href="/janazah" className="text-gray-600 hover:text-emerald-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">Last Updated: January 2025</p>
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-emerald-800 font-medium">☪️ These terms apply to the Janazah - Muslim Janazah Memorial Notice mobile application.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '11. Contact' && (
                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">☪️ App: Janazah v1.0.0</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using Janazah, you agree to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 Janazah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
