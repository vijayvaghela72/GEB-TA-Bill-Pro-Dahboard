'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'January 2024',
  appName: 'GEB TA Bill Pro',
  contactEmail: 'privacy@gebtabill.com',
  sections: [
    {
      title: '1. Introduction',
      content: 'Welcome to GEB TA Bill Pro. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Travel Allowance bill management application designed for Gujarat Electricity Board employees.'
    },
    {
      title: '2. Information We Collect',
      content: 'We collect minimal information that you provide directly through the app, including:',
      list: [
        'TA Bill entry data (travel dates, routes, amounts)',
        'Employee details you enter for bill generation',
        'App usage preferences and settings',
        'Device information for crash reporting (optional)'
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to:',
      list: [
        'Provide and maintain the TA Bill management functionality',
        'Generate Excel reports from your bill entries',
        'Improve app performance and user experience',
        'Fix bugs and resolve technical issues'
      ]
    },
    {
      title: '4. Data Storage',
      content: 'All your TA Bill data is stored locally on your device using a local database (SQLite). We do not upload, transmit, or store your bill data on any external server. Your data remains entirely on your device and under your control.'
    },
    {
      title: '5. Data Security',
      content: 'Since all data is stored locally on your device, the security of your data depends on your device security measures. We recommend using device lock (PIN, fingerprint, or face unlock) to protect your data. The app does not transmit any personal data over the internet.'
    },
    {
      title: '6. Data Sharing and Disclosure',
      content: 'We do not sell, trade, or share your personal information with any third parties. Your TA Bill data is only shared when you explicitly choose to:',
      list: [
        'Export data as an Excel file',
        'Share reports using the share functionality',
        'Send feedback via email (voluntary)'
      ]
    },
    {
      title: '7. Third-Party Services',
      content: 'The app may use the following third-party services:',
      list: [
        'Google Play Services (for app distribution and updates)',
        'Device file system (for Excel export functionality)'
      ]
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our app is designed for Gujarat Electricity Board employees and is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13.'
    },
    {
      title: '9. Your Rights',
      content: 'You have the right to:',
      list: [
        'Access all your data within the app',
        'Delete any or all TA Bill entries at any time',
        'Export your data before deleting the app',
        'Uninstall the app to remove all locally stored data'
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the app and posting the new Privacy Policy within the application. You are advised to review this Privacy Policy periodically for any changes.'
    },
    {
      title: '11. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at:'
    }
  ]
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <span className="text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-blue-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
          </div>

          <div className="space-y-10 text-gray-700">
            {PRIVACY_POLICY.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-lg leading-relaxed mb-4">{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.title.includes('Contact Us') && (
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: {PRIVACY_POLICY.contactEmail}</p>
                    <p className="font-semibold text-lg">📱 App: {PRIVACY_POLICY.appName}</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using {PRIVACY_POLICY.appName}, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2024 {PRIVACY_POLICY.appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
