'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'July 2025',
  appName: 'Arrow Escape: Tap Away Puzzle',
  developer: 'PuzzleEscape',
  contactEmail: 'puzzleescapeapp@gmail.com',
  sections: [
    {
      title: 'Introduction',
      content: 'This Privacy Policy describes how Arrow Escape: Tap Away Puzzle ("the App", "we", "us", or "our") handles information when you use our mobile application. We are committed to protecting your privacy and being transparent about our practices.'
    },
    {
      title: 'Information Stored Locally on Your Device',
      content: 'The App stores the following data locally on your device using standard device storage. This data never leaves your device and is not transmitted to our servers:',
      list: [
        'Game progress (completed levels, star ratings)',
        'Game settings (sound, vibration, notification preferences)',
        'Hint balance and free retry count',
        'Achievement and milestone progress',
        'Daily challenge completion history',
        'Streak and personal statistics',
        'Tutorial completion status'
      ],
      note: 'We do not operate any servers and do not collect, store, or process any personal data on external servers.'
    },
    {
      title: 'Information Collected by Third-Party Services',
      content: 'The App uses the following third-party services that may collect information:',
      subsections: [
        {
          title: 'Google AdMob (Advertising)',
          content: 'We use Google AdMob to display advertisements including banner ads, interstitial ads, and rewarded video ads. Google AdMob may collect:',
          list: [
            'Device advertising identifier',
            'IP address (for general location-based ad targeting)',
            'Device information (model, operating system version)',
            'Ad interaction data (impressions, clicks)'
          ],
          note: "Google AdMob's data practices are governed by Google's Privacy Policy: https://policies.google.com/privacy"
        },
        {
          title: 'Google Play Services',
          content: "On Android devices, the App uses Google Play Services which may collect device identifiers and usage data as described in Google's Privacy Policy."
        }
      ]
    },
    {
      title: 'How Information Is Used',
      list: [
        'Local game data is used solely to save your progress, preferences, and statistics within the App.',
        'Advertising data collected by Google AdMob is used to serve relevant advertisements and measure ad performance.',
        'We do not sell, trade, or transfer any user information to third parties beyond what is described above.'
      ]
    },
    {
      title: 'Advertising',
      content: 'The App displays advertisements provided by Google AdMob. These include:',
      list: [
        'Banner Ads — Displayed at the bottom of certain screens during gameplay.',
        'Interstitial Ads — Full-screen ads shown between levels at controlled intervals (not more than once every 3 minutes).',
        'Rewarded Ads — Optional video ads that users can choose to watch in exchange for in-game hints. These are never forced.'
      ],
      note: 'You may opt out of personalized advertising through your device settings:\n• Android: Settings > Google > Ads > Opt out of Ads Personalization\n• iOS: Settings > Privacy > Advertising > Limit Ad Tracking'
    },
    {
      title: "Children's Privacy",
      content: 'The App is rated for all ages (3+). We do not knowingly collect personal information from children under the age of 13 (or the applicable age in your jurisdiction). The App does not:',
      list: [
        'Require account creation or login',
        'Collect names, email addresses, or other personal identifiers',
        'Include social media integration that shares personal data',
        'Allow direct communication between users'
      ],
      note: 'Advertisements displayed to users in regions where child-directed content regulations apply will comply with applicable laws including COPPA and similar regulations.'
    },
    {
      title: 'Data Storage and Security',
      content: 'All game progress and settings are stored locally on your device using standard platform storage mechanisms (SharedPreferences on Android, UserDefaults on iOS). This data is:',
      list: [
        'Stored only on your device',
        'Not backed up to our servers (device backup behavior is controlled by your device settings)',
        'Deleted when you uninstall the App or clear the App\'s data'
      ]
    },
    {
      title: 'Your Rights and Choices',
      content: 'You have the following rights regarding your data:',
      list: [
        'Delete local data — Clear all App data through your device settings or by uninstalling the App.',
        'Opt out of personalized ads — Use your device\'s advertising settings as described above.',
        'Disable notifications — Disable daily reminder notifications within the App\'s Settings screen or through your device notification settings.',
        'Control permissions — The App only requests notification permission (optional). No other permissions are required.'
      ]
    },
    {
      title: 'Permissions',
      content: 'The App may request the following permissions:',
      list: [
        'Notifications (optional) — To send daily challenge reminders and streak warnings. You can deny this permission or disable it at any time.',
        'Internet Access — Required for displaying advertisements.'
      ]
    },
    {
      title: 'Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically.'
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:'
    },
    {
      title: 'Consent',
      content: 'By using the App, you consent to this Privacy Policy and agree to its terms.'
    }
  ]
}

export default function ArrowEscapePrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏹</span>
              <span className="text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <p className="text-indigo-800 font-medium">🏹 This privacy policy applies to the {PRIVACY_POLICY.appName} mobile application developed by {PRIVACY_POLICY.developer}.</p>
            </div>
          </div>

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
                    <p className="text-gray-700 whitespace-pre-line">{section.note}</p>
                  </div>
                )}
                {section.subsections && section.subsections.map((sub, si) => (
                  <div key={si} className="ml-4 mt-6 p-5 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{sub.title}</h3>
                    {sub.content && <p className="text-lg leading-relaxed mb-3">{sub.content}</p>}
                    {sub.list && (
                      <ul className="list-disc pl-6 space-y-2 text-lg">
                        {sub.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {sub.note && <p className="text-gray-600 mt-3 text-sm">{sub.note}</p>}
                  </div>
                ))}
                {section.title === 'Contact Us' && (
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: {PRIVACY_POLICY.contactEmail}</p>
                    <p className="font-semibold text-lg">🎮 Developer: {PRIVACY_POLICY.developer}</p>
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

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2025 {PRIVACY_POLICY.developer}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
