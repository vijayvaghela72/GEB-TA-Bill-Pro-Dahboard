'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'January 2025',
  appName: 'Indian Missing Person Posters',
  contactEmail: '<email>',
  sections: [
    {
      title: '1. Introduction',
      content: 'Welcome to Indian Missing Person Posters. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our missing person poster creation and sharing application.'
    },
    {
      title: '2. Information We Collect',
      content: 'We collect the following types of information:',
      list: [
        'Photos you select or capture for creating missing person posters (accessed via device camera/gallery with your permission)',
        'Missing person details you enter — name, age, last seen location, date, contact information',
        'Device information for crash reporting and app improvement (optional)',
        'Advertising ID for serving relevant ads via Google AdMob'
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to:',
      list: [
        'Generate missing person posters based on the details you provide',
        'Enable you to save poster images to your device',
        'Enable sharing of posters via social media and messaging apps',
        'Display advertisements through Google AdMob to keep the app free',
        'Improve app performance, fix bugs, and enhance user experience',
        'Deliver in-app updates to ensure you have the latest version'
      ]
    },
    {
      title: '4. Data Storage & Processing',
      content: 'All poster data (photos, names, details) is processed locally on your device. We do NOT upload, store, or transmit your missing person poster data to any external server. The poster images are generated and stored entirely on your device. You control when and how to share them.'
    },
    {
      title: '5. Camera & Gallery Permissions',
      content: 'The app requests access to your device camera and photo gallery solely for the purpose of selecting or capturing photos to include in missing person posters. These photos are processed locally and are never uploaded to our servers.'
    },
    {
      title: '6. Third-Party Services',
      content: 'The app uses the following third-party services, each with their own privacy policies:',
      list: [
        'Google AdMob — for displaying advertisements (Google Privacy Policy applies)',
        'Google Play Services — for app distribution, updates, and in-app update functionality',
        'Share Plus — for sharing posters via installed apps on your device (data is shared only to the app you choose)',
        'Google Fonts — for rendering text on posters (fonts are bundled with the app)'
      ]
    },
    {
      title: '7. Advertising',
      content: 'We use Google AdMob to display ads within the app. AdMob may collect and use data such as your advertising ID, device information, and general location to serve personalized ads. You can opt out of personalized advertising through your device settings under Google Ads Settings.'
    },
    {
      title: '8. In-App Updates',
      content: 'The app uses Android in-app update functionality to ensure you always have the latest version with bug fixes and improvements. Update checks are performed through Google Play Services and no personal data is collected during this process.'
    },
    {
      title: '9. Data Sharing and Disclosure',
      content: 'We do not sell, trade, or share your personal information with any third parties. Poster data is only shared when you explicitly choose to:',
      list: [
        'Share a poster via WhatsApp, Facebook, Instagram, Twitter, or other apps',
        'Save a poster image to your device storage',
        'Send feedback via email (voluntary)'
      ]
    },
    {
      title: '10. Children\'s Privacy',
      content: 'This app may be used to create posters for missing children. However, the app itself is intended for use by adults (18+). We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal information through the app, please contact us.'
    },
    {
      title: '11. Your Rights',
      content: 'You have the right to:',
      list: [
        'Deny camera and gallery permissions (poster creation will be limited)',
        'Opt out of personalized ads via device settings',
        'Delete any saved poster images from your device at any time',
        'Uninstall the app to remove all locally stored data',
        'Request information about what data we process'
      ]
    },
    {
      title: '12. Data Security',
      content: 'Since all poster data is stored locally on your device, the security of your data depends on your device security measures. We recommend using device lock (PIN, fingerprint, or face unlock) to protect your data. Be mindful when sharing posters containing personal information of missing persons.'
    },
    {
      title: '13. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the app and posting the new Privacy Policy within the application. You are advised to review this Privacy Policy periodically for any changes.'
    },
    {
      title: '14. Contact Us',
      content: 'If you have any questions about this Privacy Policy or the app, please contact us at:'
    }
  ]
}

export default function MissingPersonPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/missing_person" className="flex items-center gap-2">
              <span className="text-3xl">🔍</span>
              <span className="text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
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
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
            <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-800 font-medium">🔍 This privacy policy applies to the {PRIVACY_POLICY.appName} mobile application available on Google Play Store.</p>
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
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200 mt-4">
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
          <p className="text-gray-400">© 2025 {PRIVACY_POLICY.appName}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
