'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Information We Collect',
    body: `Janazah ("we", "our", "the App") collects minimal information necessary for app functionality:

USER-PROVIDED INFORMATION:
• Name and details of the deceased (entered by you for notice creation)
• Photos uploaded for memorial notices
• Contact information displayed on notices (optional, user-entered)

AUTOMATICALLY COLLECTED:
• Device information (model, OS version) — for app compatibility
• Usage analytics via Firebase Analytics — anonymous app usage patterns
• Firebase Cloud Messaging token — for push notification delivery
• Crash reports — to improve app stability

WE DO NOT COLLECT:
• Your personal login credentials (no account required)
• Location data
• Contacts or call logs
• Financial or payment information
• Biometric data`
  },
  {
    title: '2. How We Use Information',
    body: `We use collected information solely for:

• Creating and generating Islamic memorial notices
• Delivering push notifications about app updates
• Improving app performance and user experience via anonymous analytics
• Displaying advertisements through Google AdMob
• Detecting and fixing crashes and technical issues

WE DO NOT:
• Sell, rent, or trade your information to any third party
• Use your data for profiling or behavioral targeting
• Share memorial notice content with anyone without your action`
  },
  {
    title: '3. Data Storage',
    body: `• Memorial notice data (text, details) is stored in Firebase Firestore for cloud access and sharing functionality.
• Photos are stored locally on your device and are NOT uploaded to our servers unless you explicitly share a notice.
• App preferences and settings are stored locally on your device.
• We do NOT sell or share your stored data with third parties.
• You can delete your notices at any time from within the App.
• Uninstalling the App removes all locally stored data.`
  },
  {
    title: '4. Third-Party Services',
    body: `The App uses the following third-party services:

• Firebase (Google):
  - Cloud Firestore — for storing notice data
  - Firebase Analytics — anonymous usage statistics
  - Firebase Cloud Messaging — push notifications
  - Firebase Remote Config — app configuration
  - Privacy Policy: https://firebase.google.com/support/privacy

• Google AdMob:
  - Displays banner, interstitial, and rewarded ads
  - May collect device identifiers for ad personalization
  - Privacy Policy: https://policies.google.com/privacy

• You can opt out of personalized ads via device settings:
  - Android: Settings → Google → Ads → Opt out of Ads Personalization
  - iOS: Settings → Privacy → Advertising → Limit Ad Tracking

We are not responsible for the data practices of these third-party services.`
  },
  {
    title: "5. Children's Privacy",
    body: `• The App is NOT directed at children under 13.
• We do NOT knowingly collect personal information from children under 13.
• If we become aware that a child under 13 has provided personal information, we will delete it immediately.
• If you are a parent/guardian and believe your child has used the App, contact us at flutterdeveloper72@gmail.com.`
  },
  {
    title: '6. Data Security',
    body: `• Data transmission is encrypted using SSL/TLS.
• Firebase provides industry-standard security for cloud-stored data.
• Locally stored data is protected by your device security mechanisms.
• We recommend using device lock for additional protection.
• No method of transmission over the internet is 100% secure — we cannot guarantee absolute security.`
  },
  {
    title: '7. Your Rights',
    body: `You have the right to:

• Delete notices — Remove any memorial notices you have created
• Clear local data — Uninstall the App to remove all local data
• Opt out of ads — Disable personalized advertising via device settings
• Disable notifications — Turn off push notifications in device settings
• Contact us — Request information about your data

To exercise any rights, contact: flutterdeveloper72@gmail.com`
  },
  {
    title: '8. Permissions',
    body: `The App may request:

• Internet Access — Required for Firebase services and advertisements
• Camera/Gallery — To select or capture photos for memorial notices
• Notifications — To receive app updates and reminders (optional)
• Storage — To save generated PDF notices to your device`
  },
  {
    title: '9. Changes to This Policy',
    body: `• We may update this Privacy Policy from time to time.
• Changes will be reflected by updating the "Last Updated" date.
• Continued use of the App after changes constitutes acceptance.
• We encourage you to review this Policy periodically.`
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions or concerns about this Privacy Policy:

Email: flutterdeveloper72@gmail.com
App: Janazah - Muslim Janazah Memorial Notice`
  }
]

export default function JanazahPrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last Updated: January 2025</p>
            <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-emerald-800 font-medium">☪️ This privacy policy applies to the Janazah - Muslim Janazah Memorial Notice mobile application.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '10. Contact Us' && (
                  <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">☪️ App: Janazah v1.0.0</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using Janazah, you agree to this Privacy Policy.
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
