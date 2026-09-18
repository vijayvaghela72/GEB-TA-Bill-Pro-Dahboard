'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By downloading, installing, or using RSS - Rashtra Shakti ("the App", "we", "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.

These Terms constitute a legally binding agreement between you ("User", "you") and the developers of RSS - Rashtra Shakti.`
  },
  {
    title: '2. Use of the App',
    body: `You agree to use the App only for lawful purposes and in accordance with these Terms.

PERMITTED USE:
• Reading news articles from RSS feeds
• Bookmarking articles for personal use
• Tracking personal attendance via Sankalp service
• Customizing app settings (theme, preferences)

PROHIBITED USE:
• Using the App for any illegal or unauthorized purpose
• Attempting to reverse engineer, decompile, or disassemble the App
• Distributing, modifying, or creating derivative works of the App
• Using the App to harass, abuse, or harm others
• Attempting to gain unauthorized access to the App's systems`
  },
  {
    title: '3. Intellectual Property',
    body: `• The App's design, code, UI/UX, and original content are the intellectual property of the developers.
• The App name "RSS - Rashtra Shakti", logo, and branding are proprietary.
• You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.
• This license does not grant you any rights to the App's source code or proprietary technology.
• All rights not expressly granted are reserved.`
  },
  {
    title: '4. Content Disclaimer',
    body: `IMPORTANT — THIRD-PARTY CONTENT:

• The App displays news content fetched from external RSS feed sources.
• We do NOT create, author, edit, verify, or endorse any third-party content.
• We are NOT responsible for the accuracy, completeness, timeliness, or reliability of any RSS feed content.
• All content belongs to its respective owners and publishers.
• Views expressed in RSS feed articles do NOT represent our views or opinions.
• We act solely as an intermediary providing access to publicly available RSS feeds.
• We are NOT a news publisher, media house, or content creator.
• Users should verify information from official sources before acting on it.`
  },
  {
    title: '5. Sankalp Attendance Service',
    body: `• The Sankalp attendance feature is for personal tracking purposes only.
• Attendance records are stored locally on your device.
• We do NOT verify, validate, or certify attendance records.
• We are NOT responsible for any loss of attendance data due to device issues, App uninstallation, or data clearing.
• Users are responsible for maintaining their own backup if needed.`
  },
  {
    title: '6. Local Data Storage',
    body: `• All App data (bookmarks, attendance, settings) is stored locally on your device using Hive database.
• We do NOT store any user data on external servers.
• You are responsible for the security of your device and the data stored on it.
• We are NOT liable for any data loss due to device malfunction, theft, or user action.
• Uninstalling the App will permanently delete all locally stored data.`
  },
  {
    title: '7. Limitation of Liability',
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

• The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind.
• We do NOT guarantee uninterrupted, error-free, or secure operation of the App.
• We are NOT liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the App.
• We are NOT liable for any loss of data, revenue, or profits.
• We are NOT liable for any third-party content accessed through the App.
• We are NOT liable for any actions taken based on content read through the App.
• Our total liability shall not exceed INR 100 (One Hundred Rupees).`
  },
  {
    title: '8. Availability & Updates',
    body: `• We reserve the right to modify, suspend, or discontinue the App at any time without notice.
• We may release updates that change App functionality.
• Continued use after updates constitutes acceptance of changes.
• We do NOT guarantee backward compatibility with older versions.`
  },
  {
    title: '9. Termination',
    body: `• You may stop using the App at any time by uninstalling it.
• We reserve the right to terminate or restrict access to the App at our sole discretion.
• Upon termination, all locally stored data will be deleted when you uninstall the App.
• Sections relating to Intellectual Property, Limitation of Liability, and Governing Law survive termination.`
  },
  {
    title: '10. Governing Law',
    body: `• These Terms are governed by the laws of India.
• Any disputes shall be subject to the exclusive jurisdiction of courts in Gujarat, India.
• If any provision of these Terms is found unenforceable, the remaining provisions shall continue in effect.`
  },
  {
    title: '11. Changes to Terms',
    body: `• We reserve the right to update these Terms at any time.
• Changes are effective immediately upon posting within the App or on our website.
• Your continued use after changes constitutes acceptance of the revised Terms.
• It is your responsibility to review these Terms periodically.
• If you disagree with changes, you must stop using the App.`
  },
  {
    title: '12. Contact',
    body: `If you have any questions about these Terms and Conditions, please contact us:

Email: flutterdeveloper72@gmail.com
App: RSS - Rashtra Shakti`
  }
]

export default function RSSShaktiTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/rss_shakti" className="flex items-center gap-2">
              <span className="text-3xl">🚩</span>
              <span className="text-2xl font-black text-gray-900">RSS - Rashtra Shakti</span>
            </Link>
            <Link href="/rss_shakti" className="text-gray-600 hover:text-orange-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">Last Updated: July 2025</p>
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 font-medium">🚩 These terms apply to the RSS - Rashtra Shakti mobile application.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '12. Contact' && (
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">🚩 App: RSS - Rashtra Shakti</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using RSS - Rashtra Shakti, you agree to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 RSS - Rashtra Shakti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
