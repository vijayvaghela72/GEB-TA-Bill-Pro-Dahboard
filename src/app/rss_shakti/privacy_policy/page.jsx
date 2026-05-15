'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Information Collection',
    body: `RSS - Rashtra Shakti ("we", "our", "the App") is committed to protecting your privacy. Here is how we handle information:

INFORMATION WE DO NOT COLLECT:
• Personal identification (name, email, phone number, address)
• Account credentials or login information
• Location data (GPS or IP-based)
• Contacts, photos, or media files
• Payment or financial information
• Biometric data

LOCALLY STORED DATA (On-Device Only):
• Bookmarked articles and reading preferences
• Sankalp attendance records
• Theme settings (dark/light mode)
• Onboarding completion status
• App preferences and settings

All data is stored locally on your device using Hive (a lightweight local database). This data NEVER leaves your device and is NOT transmitted to any server.`
  },
  {
    title: '2. Data Storage',
    body: `• All app data is stored LOCALLY on your device using Hive database.
• We do NOT operate any servers or cloud databases.
• We do NOT have access to any data stored on your device.
• Data persists until you uninstall the App or clear App data from device settings.
• Uninstalling the App permanently removes ALL locally stored data.
• We do NOT create backups of your data on any external server.

SECURITY:
• Local storage is protected by your device's built-in security mechanisms.
• We recommend using device lock (PIN, fingerprint, or face unlock) for additional protection.`
  },
  {
    title: '3. RSS Feed & External Content',
    body: `• The App fetches news articles from external RSS feed sources over the internet.
• We do NOT control the content of third-party RSS feeds.
• We do NOT modify, edit, or alter RSS feed content.
• RSS feed providers may have their own privacy policies — we encourage you to review them.
• We are NOT responsible for the accuracy, completeness, or reliability of third-party content.
• Fetching RSS feeds requires an internet connection but does NOT transmit any personal data.`
  },
  {
    title: '4. Third-Party Services',
    body: `The App may use the following third-party services:

• RSS Feed Providers: External news sources that provide content via RSS protocol. No personal data is shared with these providers.

• Internet Permission: Required solely for fetching RSS feed content. No personal data is transmitted.

We do NOT use:
• Analytics services
• Advertising SDKs
• Social media SDKs
• Crash reporting services that collect personal data
• Any service that tracks or profiles users`
  },
  {
    title: "5. Children's Privacy",
    body: `• The App is suitable for all ages.
• We do NOT collect personal information from any user, including children under 13.
• Since all data is stored locally and no personal data is collected, the App is inherently safe for users of all ages.
• We comply with COPPA (Children's Online Privacy Protection Act) and equivalent regulations.`
  },
  {
    title: '6. Your Rights',
    body: `You have complete control over your data:

• Delete Data: Clear all App data through device settings or by uninstalling the App.
• Bookmarks: You can delete individual bookmarks at any time within the App.
• Attendance Records: Stored locally and can be cleared by clearing App data.
• No Account: Since no account is created, there is no account data to manage.

Since we do not collect any data on servers, there is no data to request, export, or have deleted from our end.`
  },
  {
    title: '7. Permissions',
    body: `The App requires only:

• Internet Access: Required for fetching RSS news feeds. No personal data is transmitted.

The App does NOT require:
• Camera, microphone, or storage permissions
• Location permissions
• Contact or phone permissions
• Any sensitive permissions`
  },
  {
    title: '8. Changes to This Policy',
    body: `• We may update this Privacy Policy from time to time.
• Changes will be reflected by updating the "Last Updated" date.
• Your continued use of the App after changes constitutes acceptance.
• We encourage you to review this Policy periodically.`
  },
  {
    title: '9. Contact Information',
    body: `If you have any questions or concerns about this Privacy Policy, please contact us:

Email: flutterdeveloper72@gmail.com
App: RSS - Rashtra Shakti`
  }
]

export default function RSSShaktiPrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last Updated: July 2025</p>
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 font-medium">🚩 This privacy policy applies to the RSS - Rashtra Shakti mobile application.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '9. Contact Information' && (
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">🚩 App: RSS - Rashtra Shakti</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using RSS - Rashtra Shakti, you agree to this Privacy Policy.
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
