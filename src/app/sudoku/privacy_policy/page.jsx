'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'May 4, 2025',
  appName: 'Sudoku Pro Puzzle',
  contactEmail: 'sudokupropuzzle@gmail.com',
  packageName: 'com.sudoku.level',
  sections: [
    {
      title: '1. Information We Collect',
      content: 'We Do NOT Collect:',
      list: [
        'Personal information (name, email, phone number, address)',
        'Account or login credentials',
        'Location data',
        'Contacts or photos',
        'Payment or financial information'
      ],
      note: 'The App stores game progress, statistics (games played, wins, best time), and theme preference locally on your device only. This data never leaves your device and is deleted when you uninstall the App.'
    },
    {
      title: '2. Advertising',
      content: 'We use Google AdMob to serve advertisements including banner ads, interstitial ads, rewarded ads, and app open ads. Google AdMob may collect:',
      list: [
        'Device identifiers (Advertising ID)',
        'IP address',
        'Device information (model, OS version)',
        'App usage data and interaction with ads'
      ],
      note: 'For more information: https://policies.google.com/privacy'
    },
    {
      title: "3. Children&apos;s Privacy",
      content: 'Sudoku Pro Puzzle is not directed at children under 13. We do not knowingly collect personal information from children.'
    },
    {
      title: '4. Data Security',
      content: 'All game data is stored locally on your device. No data is transmitted to external servers by the App.'
    },
    {
      title: '5. Data Retention',
      content: "Game data persists until you uninstall the App or clear the App&apos;s data from device settings."
    },
    {
      title: '6. Your Rights',
      content: 'Since we do not collect personal data on any server, you can clear all data by uninstalling the App or clearing App data in device settings.'
    },
    {
      title: '7. Permissions',
      list: [
        'Internet Access — Required for advertisements',
        'Network State — Required to check connectivity for ad loading'
      ]
    },
    {
      title: '8. Changes',
      content: 'We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last Updated" date.'
    },
    {
      title: '9. Contact',
      content: 'If you have any questions about this Privacy Policy, please contact us at:'
    }
  ]
}

export default function SudokuPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/sudoku" className="flex items-center gap-2">
              <span className="text-3xl">🧠</span>
              <span className="text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </Link>
            <Link href="/sudoku" className="text-gray-600 hover:text-emerald-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Effective Date: {PRIVACY_POLICY.lastUpdated} | Last Updated: {PRIVACY_POLICY.lastUpdated}</p>
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-emerald-800 font-medium">🧠 This privacy policy applies to {PRIVACY_POLICY.appName} ({PRIVACY_POLICY.packageName})</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-10">
            This Privacy Policy describes how {PRIVACY_POLICY.appName} (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) handles information when you use our mobile application.
          </p>

          <div className="space-y-10 text-gray-700">
            {PRIVACY_POLICY.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                {section.content && <p className="text-lg leading-relaxed mb-4">{section.content}</p>}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.note && (
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mt-4">
                    <p className="text-gray-700">{section.note}</p>
                  </div>
                )}
                {section.title === '9. Contact' && (
                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: {PRIVACY_POLICY.contactEmail}</p>
                    <p className="font-semibold text-lg">📦 Package: {PRIVACY_POLICY.packageName}</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                {PRIVACY_POLICY.appName} © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 {PRIVACY_POLICY.appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
