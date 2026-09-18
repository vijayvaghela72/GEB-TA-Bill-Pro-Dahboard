'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'June 2025',
  appName: 'Funeral Poster: Tribute Maker',
  packageName: 'com.funeral.poster',
  contactEmail: '<email>',
  sections: [
    {
      title: '1. Introduction',
      content: 'Welcome to Funeral Poster: Tribute Maker. Your privacy is important to us. This Privacy Policy explains how our app handles your information. The short version: we do NOT collect any personal data.'
    },
    {
      title: '2. Information We Collect',
      content: 'We do NOT collect, store, or transmit any personal information. Specifically:',
      list: [
        'No user accounts or login required',
        'No personal data is collected or stored on any server',
        'No analytics or tracking tools are used',
        'No cookies are used',
        'All poster creation happens entirely on your device'
      ]
    },
    {
      title: '3. Photos & Media',
      content: 'When you select a photo to include in a poster, the photo is accessed from your device gallery and processed locally on your device. Photos are NEVER uploaded, transmitted, or shared with us or any third party. The photo stays on your device at all times.'
    },
    {
      title: '4. Text & Poster Data',
      content: 'All text you enter (names, dates, messages, quotes) and all poster designs you create are processed and stored locally on your device only. We have no backend server or database. We cannot see, access, or retrieve any content you create in the app.'
    },
    {
      title: '5. Internet Permission',
      content: 'The app uses the INTERNET permission solely for the following purpose:',
      list: [
        'Google Fonts loading — The app loads fonts (for beautiful poster typography) which may require an internet connection. No personal data is transmitted during this process'
      ]
    },
    {
      title: '6. Third-Party Services',
      content: 'The app uses minimal third-party services:',
      list: [
        'Google Fonts — For loading typography fonts used in poster templates. No personal data is collected. See Google\'s Privacy Policy at https://policies.google.com/privacy',
        'Google Play Services — For app distribution and updates via the Play Store'
      ]
    },
    {
      title: '7. Data Sharing',
      content: 'We do NOT share any data with third parties. The only time poster data leaves your device is when YOU explicitly choose to:',
      list: [
        'Share a poster via WhatsApp, Facebook, Instagram, or other apps using the share button',
        'Save a poster image to your device gallery using the download button'
      ]
    },
    {
      title: '8. No Advertising',
      content: 'This app does not contain any advertisements. No advertising SDKs are used, and no advertising IDs or device identifiers are collected for ad purposes.'
    },
    {
      title: '9. No Analytics or Tracking',
      content: 'We do not use any analytics tools, crash reporting services, or tracking mechanisms. We have no way to know how you use the app, what posters you create, or any other usage data.'
    },
    {
      title: '10. Children\'s Privacy',
      content: 'Since we do not collect any personal data from anyone, there is no risk of collecting data from children. However, this app is designed for adults and the content (funeral/memorial posters) is intended for mature audiences.'
    },
    {
      title: '11. Data Security',
      content: 'Since all data remains on your device and we have no servers storing your information, the security of your poster data depends on your device security. We recommend using device lock (PIN, fingerprint, or face unlock) to protect your device.'
    },
    {
      title: '12. Your Rights',
      content: 'You have complete control over your data:',
      list: [
        'All data is stored locally — you can delete any saved posters at any time',
        'Uninstalling the app removes all app-related data from your device',
        'No account to delete — we never create accounts',
        'No data on our servers to request deletion of — we have no servers'
      ]
    },
    {
      title: '13. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. Any changes will be reflected in app updates and on this page. We encourage you to review this policy periodically.'
    },
    {
      title: '14. Contact Us',
      content: 'If you have any questions about this Privacy Policy or the app, please contact us at:'
    }
  ]
}

export default function FuneralPosterPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/funeral_poster" className="flex items-center gap-2">
              <span className="text-3xl">🕊️</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </Link>
            <Link href="/funeral_poster" className="text-gray-600 hover:text-purple-700 font-semibold transition-colors">
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
            <p className="text-xl text-gray-600 mb-2">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-4 space-y-1">
              <p className="text-purple-800 font-medium">🕊️ App: {PRIVACY_POLICY.appName}</p>
              <p className="text-purple-700 text-sm">Package: {PRIVACY_POLICY.packageName}</p>
            </div>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-semibold">✅ This app does NOT collect any personal data. No login. No tracking. No analytics. 100% private.</p>
            </div>
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
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: {PRIVACY_POLICY.contactEmail}</p>
                    <p className="font-semibold text-lg">📱 App: {PRIVACY_POLICY.appName}</p>
                    <p className="font-semibold text-lg mt-2">📦 Package: {PRIVACY_POLICY.packageName}</p>
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
          <p className="text-gray-400">© 2025 {PRIVACY_POLICY.appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
