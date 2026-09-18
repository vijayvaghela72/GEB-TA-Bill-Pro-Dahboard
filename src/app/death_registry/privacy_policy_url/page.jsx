'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'June 2025',
  appName: 'Maran Nodh & Death Registry',
  packageName: 'com.death.registry',
  contactPhone: '<phone number>',
  sections: [
    {
      title: '1. Information We Collect',
      content: 'This app does NOT collect, store, or transmit any personal information to our servers. All poster data (names, dates, photos, village, family details) is processed entirely on your device and is never uploaded to any server.'
    },
    {
      title: '2. Third-Party Services',
      content: 'Our app uses the following third-party services that may collect data:',
      list: [
        'Google AdMob — Displays banner & interstitial ads and may collect device identifiers, ad interaction data, and approximate location. See Google\'s Privacy Policy at https://policies.google.com/privacy',
        'Razorpay — Processes voluntary "Buy Me a Coffee" payments. When you make a payment, Razorpay collects your contact number and payment details. See Razorpay\'s Privacy Policy at https://razorpay.com/privacy/',
        'Google Play In-App Updates — Checks for app updates via Google Play. No personal data is collected',
        'Google Fonts — Used for rendering Noto Sans Gujarati and Poppins fonts. No personal data is collected'
      ]
    },
    {
      title: '3. Permissions',
      content: 'The app uses the following permissions:',
      list: [
        'INTERNET — Required for displaying Google AdMob ads, processing Razorpay payments, and checking for in-app updates',
        'Photo/Gallery Access — Used only to pick a photo of the deceased person for the poster. Photos are never uploaded or shared with us or any third party'
      ]
    },
    {
      title: '4. Data Storage',
      content: 'All poster content — including names, dates, messages, village, family details, and photos — is stored locally on your device only. We do not have any backend server or database that stores your data. When you uninstall the app, all locally stored data is removed.'
    },
    {
      title: '5. Advertising',
      content: 'This app displays ads via Google AdMob to keep the app free. Google may use cookies and device identifiers to serve personalized ads. You can opt out of personalized advertising through your device\'s Google Settings → Ads → Opt out of Ads Personalization.'
    },
    {
      title: '6. Payments',
      content: 'The "Buy Me a Coffee" feature is a voluntary donation processed securely by Razorpay. We do not store any payment card details. All payment processing is handled by Razorpay\'s secure payment gateway. Only your contact number (provided by you) and transaction data are processed by Razorpay.'
    },
    {
      title: '7. Data Sharing and Disclosure',
      content: 'We do not sell, trade, or share your personal information with any third parties. Poster data is only shared when you explicitly choose to:',
      list: [
        'Share a poster via WhatsApp, Facebook, Instagram, or other apps using the share feature',
        'Save a poster image to your device gallery',
        'Make a voluntary payment via Razorpay (contact number & payment data shared with Razorpay only)'
      ]
    },
    {
      title: '8. Children\'s Privacy',
      content: 'This app is not directed at children under 13. We do not knowingly collect personal information from children. The app is designed for adults to create condolence and death notice posters.'
    },
    {
      title: '9. Data Safety Summary',
      content: 'Summary of data practices for this app:',
      list: [
        'Data collected: Advertising ID (by Google AdMob), Payment info (by Razorpay, optional)',
        'Data shared: Advertising ID shared with Google for ad serving',
        'Data NOT collected: Name, email, location, files — none stored on any server',
        'Encryption: Yes — all network calls use HTTPS',
        'Data deletion: Not applicable — no server-side data exists. Uninstall the app to remove all local data'
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this privacy policy from time to time. Changes will be reflected in the app update and on this page. You are advised to review this Privacy Policy periodically.'
    },
    {
      title: '11. Contact Us',
      content: 'If you have questions about this privacy policy, please contact us at:'
    }
  ]
}

export default function DeathRegistryPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/death_registry" className="flex items-center gap-2">
              <span className="text-3xl">🕯️</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </Link>
            <Link href="/death_registry" className="text-gray-600 hover:text-amber-700 font-semibold transition-colors">
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
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-1">
              <p className="text-amber-800 font-medium">🕯️ App: {PRIVACY_POLICY.appName}</p>
              <p className="text-amber-700 text-sm">Package: {PRIVACY_POLICY.packageName}</p>
              <p className="text-amber-700 text-sm">Contact: {PRIVACY_POLICY.contactPhone}</p>
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
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📞 Phone: {PRIVACY_POLICY.contactPhone}</p>
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
