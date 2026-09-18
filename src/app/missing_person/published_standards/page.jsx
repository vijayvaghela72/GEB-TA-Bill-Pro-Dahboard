'use client'

import Link from 'next/link'

export default function PublishedStandards() {
  const developerName = 'Vijay Vaghela'
  const appName = 'Indian Missing Person Posters'
  const contactEmail = '<email>'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/missing_person" className="flex items-center gap-2">
              <span className="text-3xl">🔍</span>
              <span className="text-2xl font-black text-gray-900">{appName}</span>
            </Link>
            <Link href="/missing_person" className="text-gray-600 hover:text-red-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>

          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Published Standards</h1>
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 space-y-1">
              <p className="text-red-800 font-semibold text-lg">🛡️ Child Safety & Content Standards</p>
              <p className="text-red-700">Developer: {developerName}</p>
              <p className="text-red-700">App: {appName}</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">

            {/* Commitment */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Commitment to Child Safety</h2>
              <p className="text-lg leading-relaxed">
                <span className="font-bold">{developerName}</span>, the developer of <span className="font-bold">{appName}</span>, is fully committed to child safety. We strictly prohibit any form of <span className="font-bold text-red-700">Child Sexual Abuse and Exploitation (CSAE)</span> content on our platform, within our app, and across all associated services.
              </p>
            </section>

            {/* Prohibited Content */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Prohibited Content & Activities</h2>
              <p className="text-lg leading-relaxed mb-4">Our app does not permit any of the following:</p>
              <div className="space-y-4">
                {[
                  'Any content that sexually exploits or endangers children',
                  'Sharing, distribution, or creation of Child Sexual Abuse Material (CSAM)',
                  'Any activity that facilitates, promotes, or glorifies child exploitation in any form',
                  'Grooming behavior or any attempt to establish inappropriate contact with minors',
                  'Any content that sexualizes minors, including illustrations, AI-generated content, or any other medium',
                  'Using the app to locate, track, or target children for any exploitative purpose',
                  'Any misuse of missing person information to endanger, exploit, or harm children',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-red-50 rounded-xl p-4 border border-red-100">
                    <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-700 text-lg font-bold">✕</span>
                    </div>
                    <p className="text-lg text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Enforcement */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Enforcement & Reporting</h2>
              <p className="text-lg leading-relaxed mb-4">
                Any user found violating these standards will face immediate action, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Immediate ban and removal from the platform</li>
                <li>Reporting to the appropriate law enforcement authorities</li>
                <li>Reporting to <span className="font-bold">NCMEC</span> (National Center for Missing & Exploited Children)</li>
                <li>Reporting to <span className="font-bold">NCPCR</span> (National Commission for Protection of Child Rights, India)</li>
                <li>Full cooperation with law enforcement investigations</li>
              </ul>
            </section>

            {/* App Purpose */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">App Purpose</h2>
              <p className="text-lg leading-relaxed">
                <span className="font-bold">{appName}</span> is designed solely to help families and communities create and share missing person posters to aid in locating missing individuals. The app is intended to be a tool for good — helping reunite families and assisting in the safe recovery of missing persons. Any misuse of this app for illegal, harmful, or exploitative purposes is strictly prohibited.
              </p>
            </section>

            {/* Data & Privacy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Data & Privacy</h2>
              <p className="text-lg leading-relaxed mb-4">
                All poster data (photos, names, details) is processed locally on the user&apos;s device. We do not store, upload, or transmit any user data to external servers. For full details, please see our{' '}
                <Link href="/missing_person/privacy_policy_url" className="text-red-700 font-semibold underline hover:text-red-800">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Contact & Reporting</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you encounter any content or behavior that violates these standards, or if you have any concerns regarding child safety, please contact us immediately:
              </p>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-2">
                <p className="font-semibold text-lg">📧 Email: {contactEmail}</p>
                <p className="font-semibold text-lg">👤 Developer: {developerName}</p>
                <p className="font-semibold text-lg">📱 App: {appName}</p>
              </div>
              <div className="mt-6 bg-amber-50 p-6 rounded-xl border border-amber-200">
                <p className="font-bold text-amber-800 text-lg mb-2">🚨 Emergency Resources</p>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>NCMEC CyberTipline: <span className="font-semibold">www.missingkids.org</span></li>
                  <li>NCPCR (India): <span className="font-semibold">www.ncpcr.gov.in</span></li>
                  <li>Childline India: <span className="font-semibold">1098</span> (toll-free)</li>
                  <li>Police Emergency (India): <span className="font-semibold">112</span></li>
                </ul>
              </div>
            </section>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-lg">
                These standards are effective as of June 2025 and apply to all versions of {appName}.
              </p>
              <p className="text-gray-500 mt-2">
                Developer: {developerName} | App: {appName}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 {appName}. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/missing_person" className="text-gray-500 hover:text-white transition-colors">Home</Link>
            <Link href="/missing_person/privacy_policy_url" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
