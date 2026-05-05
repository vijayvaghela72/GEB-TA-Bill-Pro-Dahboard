'use client'

import Link from 'next/link'

export default function KutchNewsPrivacyPolicy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'Kutch News is designed with your privacy in mind. Here is what we collect and what we do not:',
      subsections: [
        {
          title: 'We Do NOT Collect:',
          list: [
            'Personal information (name, email, phone number, address)',
            'Account or login credentials (no login required)',
            'Precise location data',
            'Contacts, photos, or files',
            'Payment or financial information'
          ]
        },
        {
          title: 'Locally Stored Data:',
          list: [
            'App preferences (theme, font size, notification settings)',
            'Cached news articles for offline reading',
            'Bookmarked articles',
            'Reading history'
          ],
          note: 'This data is stored locally on your device only and is deleted when you uninstall the App.'
        }
      ]
    },
    {
      title: '2. News Content',
      content: 'Kutch News aggregates and displays news from third-party sources including newspapers, news channels, and websites. We do not own or create the news content. Each article is attributed to its original source. When you tap to read full articles, you may be redirected to the original publisher&apos;s website, which has its own privacy policy.'
    },
    {
      title: '3. Advertising',
      content: 'We use Google AdMob to serve advertisements including banner ads, interstitial ads, and rewarded ads. Google AdMob may collect:',
      list: [
        'Device identifiers (Advertising ID)',
        'IP address',
        'Device information (model, OS version)',
        'App usage data and interaction with ads'
      ],
      note: 'For more information about Google&apos;s data practices: https://policies.google.com/privacy'
    },
    {
      title: '4. Push Notifications',
      content: 'The App may send push notifications for breaking news updates. You can enable or disable notifications at any time through your device settings or within the App. We use Firebase Cloud Messaging (FCM) to deliver notifications, which may collect device tokens for delivery purposes only.'
    },
    {
      title: '5. Text-to-Speech',
      content: 'The text-to-speech feature processes article text locally on your device using your device&apos;s built-in TTS engine. No audio data or article content is sent to external servers for this feature.'
    },
    {
      title: '6. Internet & Network Permissions',
      content: 'The App requires the following permissions:',
      list: [
        'Internet Access — Required to fetch news content, display ads, and load live TV streams',
        'Network State — Required to check connectivity and enable offline mode'
      ]
    },
    {
      title: "7. Children&apos;s Privacy",
      content: 'Kutch News is a general news application. We do not knowingly collect personal information from children under 13. The App does not require any personal information to function.'
    },
    {
      title: '8. Data Security',
      content: 'All user preferences and cached data are stored locally on your device. No personal data is transmitted to or stored on external servers by the App itself.'
    },
    {
      title: '9. Third-Party Links',
      content: 'The App contains links to third-party news websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.'
    },
    {
      title: '10. Your Rights',
      content: 'You can:',
      list: [
        'Clear cached news and reading history from App settings',
        'Disable push notifications at any time',
        'Opt out of personalized ads via device settings',
        'Uninstall the App to remove all locally stored data'
      ]
    },
    {
      title: '11. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. Changes will be reflected by updating the "Last Updated" date at the top.'
    },
    {
      title: '12. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us:'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/kutch_news" className="flex items-center gap-2">
              <span className="text-3xl">📰</span>
              <span className="text-2xl font-black text-gray-900">Kutch News</span>
            </Link>
            <Link href="/kutch_news" className="text-gray-600 hover:text-orange-700 font-semibold transition-colors">
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
              <p className="text-orange-800 font-medium">📰 This privacy policy applies to the Kutch News mobile application.</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-10">
            This Privacy Policy describes how Kutch News (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) handles information when you use our mobile application. We are committed to protecting your privacy.
          </p>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
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
                {section.subsections && section.subsections.map((sub, si) => (
                  <div key={si} className="ml-4 mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{sub.title}</h3>
                    {sub.list && (
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        {sub.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {sub.note && (
                      <div className="bg-white p-3 rounded-lg border border-gray-200 mt-3">
                        <p className="text-gray-600 text-sm">{sub.note}</p>
                      </div>
                    )}
                  </div>
                ))}
                {section.title === '12. Contact Us' && (
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: kutchnewsapp@gmail.com</p>
                    <p className="font-semibold text-lg">📱 App: Kutch News</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using Kutch News, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 Kutch News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
