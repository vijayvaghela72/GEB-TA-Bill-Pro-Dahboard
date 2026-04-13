'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'June 2025',
  appName: 'Maran Shrandhanjali Poster',
  packageName: 'com.maran.Shrandhanjali',
  contactEmail: '<email>',
  sections: [
    {
      title: '1. Introduction',
      content: 'Welcome to Maran Shrandhanjali Poster. Your privacy is extremely important to us. This Privacy Policy explains how our app handles your information. In short: we do NOT collect any personal data whatsoever.'
    },
    {
      title: '2. Information We Collect',
      content: 'We do NOT collect, store, or transmit any personal information. Specifically:',
      list: [
        'No user accounts or login required',
        'No personal data is collected or stored on any server',
        'No analytics or tracking tools are used',
        'No advertising SDKs are used — the app contains NO ads',
        'No cookies are used',
        'All content is pre-loaded within the app'
      ]
    },
    {
      title: '3. App Content',
      content: 'All condolence, memorial, tribute, and remembrance messages in the app are pre-written and bundled within the app itself. No content is downloaded from external servers. The messages are available in both Hindi (हिंदी) and English.'
    },
    {
      title: '4. Internet Usage',
      content: 'The app uses the INTERNET permission solely for the share functionality. When you choose to share a message via WhatsApp, Facebook, SMS, or other apps, the Android share system requires internet access. No personal data is transmitted to our servers during this process — the message is shared directly to the app you choose.'
    },
    {
      title: '5. Third-Party Services',
      content: 'The app uses minimal third-party services:',
      list: [
        'Android Share Intent — For sharing messages to other apps installed on your device. No data is sent to our servers',
        'Google Play Services — For app distribution and updates via the Play Store'
      ]
    },
    {
      title: '6. No Advertising',
      content: 'This app does NOT contain any advertisements. No advertising SDKs (such as AdMob) are integrated. No advertising IDs or device identifiers are collected for any purpose.'
    },
    {
      title: '7. No Analytics or Tracking',
      content: 'We do NOT use any analytics tools, crash reporting services, or tracking mechanisms of any kind. We have no way to know how you use the app, which messages you read, or any other usage data.'
    },
    {
      title: '8. Data Sharing',
      content: 'We do NOT share any data with third parties. The only time any content leaves your device is when YOU explicitly choose to share a message using the share button. The message is sent directly to the app you select (WhatsApp, Facebook, SMS, etc.) — it never passes through our servers.'
    },
    {
      title: '9. Data Storage',
      content: 'No user data is stored on any server. All app content (messages, categories) is pre-loaded and stored within the app package itself. We do not have any backend server, database, or cloud storage.'
    },
    {
      title: '10. Children\'s Privacy',
      content: 'Since we do not collect any personal data from anyone, there is no risk of collecting data from children. However, the app content (condolence and memorial messages) is intended for mature audiences.'
    },
    {
      title: '11. Your Rights',
      content: 'You have complete control:',
      list: [
        'No account exists to delete — we never create accounts',
        'No data on our servers — we have no servers storing your information',
        'Uninstalling the app removes everything from your device',
        'You choose when and what to share — nothing is automatic'
      ]
    },
    {
      title: '12. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. Any changes will be reflected in app updates and on this page. We encourage you to review this policy periodically.'
    },
    {
      title: '13. Contact Us',
      content: 'If you have any questions about this Privacy Policy or the app, please contact us at:'
    }
  ]
}

export default function MaranShrandhanjaliPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/maran_shrandhanjali" className="flex items-center gap-2">
              <span className="text-3xl">🙏</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </Link>
            <Link href="/maran_shrandhanjali" className="text-gray-600 hover:text-purple-700 font-semibold transition-colors">
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
              <p className="text-purple-800 font-medium">🙏 App: {PRIVACY_POLICY.appName}</p>
              <p className="text-purple-700 text-sm">Package: {PRIVACY_POLICY.packageName}</p>
            </div>
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-semibold">✅ This app does NOT collect any personal data. No login. No tracking. No analytics. No ads. 100% private.</p>
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
