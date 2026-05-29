'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Explicit Prohibition of CSAE & CSAM',
    body: `The application RSS - Rashtra Shakti and developer flutterdeveloper72@gmail.com maintain a strict, absolute zero-tolerance policy against any form of exploitation or abuse of children. In strict accordance with the Google Play Developer Program Policies:

• The creation, transmission, distribution, facilitation, or presentation of Child Sexual Abuse Material (CSAM) or Child Sexual Abuse and Exploitation (CSAE) is fundamentally and strictly prohibited.
• We do not design features that encourage, allow, or facilitate harmful contact with minors, nor do we allow any content that endangers the physical or mental well-being of children.`
  },
  {
    title: '2. App Operational Safeguards',
    body: `As a utility and informational application, RSS - Rashtra Shakti is designed with inherent structural safety controls:

• Local Storage Architecture: The app does not collect, harvest, or transmit personally identifiable data belonging to any user, including children under the age of 13.
• No Public User-Generated Content: The app does not allow public communication channels, chats, media uploads, or interactions between users that could be leveraged to distribute harmful content or compromise child safety.`
  },
  {
    title: '3. Compliance and Law Enforcement Escalation',
    body: `Any systemic attempt to bypass app security parameters or misuse app resources for activities linked to CSAE will result in immediate corrective action. We cooperate transparently with global legal frameworks, including local law enforcement authorities and the National Center for Missing & Exploited Children (NCMEC), to report any suspicious or malicious activity directly impacting child safety.`
  },
  {
    title: '4. Valid Child Safety Point of Contact',
    body: `In fulfillment of Google Play's compliance mandates, our organization retains a designated, active representative prepared to directly address questions concerning child safety practices, policy enforcement, and CSAM prevention:

• Designated Contact Person: Child Safety & Compliance Team
• Direct Operational Email: flutterdeveloper72@gmail.com

Note: This inbox is actively monitored and dedicated to addressing safety, privacy, and regulatory policy inquiries.`
  }
]

export default function RSSShaktiChildSafety() {
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
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Child Safety Standards & Policy</h1>
            <p className="text-xl text-gray-600">Effective Date: May 29, 2026</p>
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 font-medium">🚩 This dedicated public declaration sets forth the Child Safety Standards enforced by the developer for the mobile application RSS - Rashtra Shakti. We maintain an unyielding commitment to the safety, protection, and preservation of minors across all operational frameworks.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-4">Zero-Tolerance Policy: Child Sexual Abuse and Exploitation (CSAE) & Child Sexual Abuse Material (CSAM)</h2>
            </section>

            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '4. Valid Child Safety Point of Contact' && (
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">🚩 App: RSS - Rashtra Shakti</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                © 2026 RSS - Rashtra Shakti. All Rights Reserved. Publicly Accessible Compliance Standards.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2026 RSS - Rashtra Shakti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
