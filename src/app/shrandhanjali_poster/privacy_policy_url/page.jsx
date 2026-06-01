'use client'

import Link from 'next/link'

const PRIVACY_POLICY = {
  lastUpdated: 'January 2025',
  appName: 'Shrandhanjali Poster',
  packageName: 'com.shradhanjali.poster',
  contactEmail: 'shradhanjali.poster@gmail.com',
  sections: [
    {
      title: '1. Information We Collect',
      content: 'We do not collect any personal information. The app works entirely on your device.'
    },
    {
      title: '2. Photos & Media',
      content: 'We request gallery access only to let you select photos for your poster.',
      list: [
        'Your photos are never uploaded to any server',
        'Photos are stored only on your device',
        'We have no access to your photos or media files'
      ]
    },
    {
      title: '3. Data Storage',
      content: 'All data (drafts, saved posters, preferences) is stored locally on your device only. We have no access to this data.'
    },
    {
      title: '4. Advertising (Google AdMob)',
      content: 'We use Google AdMob to show ads. AdMob may collect:',
      list: [
        'Device information',
        'Advertising ID',
        'App usage data'
      ],
      note: 'For more info: https://policies.google.com/privacy'
    },
    {
      title: '5. Third-Party Services',
      content: 'The app uses the following third-party services:',
      list: [
        'Google AdMob — Advertising',
        'Google Fonts — Typography (loaded from Google servers)'
      ]
    },
    {
      title: '6. Children\'s Privacy',
      content: 'This app does not target children under 13. We do not knowingly collect data from children.'
    },
    {
      title: '7. Permissions Used',
      content: 'The app requires the following permissions:',
      list: [
        'READ_MEDIA_IMAGES — Select photo from gallery',
        'READ_EXTERNAL_STORAGE — Select photo (Android 12 and below)',
        'WRITE_EXTERNAL_STORAGE — Save poster to gallery (Android 9 and below)',
        'INTERNET — Show ads, load Google Fonts'
      ]
    },
    {
      title: '8. Changes',
      content: 'We may update this policy. Changes will be posted on this page.'
    },
    {
      title: '9. Contact',
      content: 'If you have any questions about this Privacy Policy, please contact us.'
    }
  ]
}

const TERMS_OF_SERVICE = [
  {
    title: '1. Acceptance',
    content: 'By using Shrandhanjali Poster, you agree to these terms.'
  },
  {
    title: '2. Use of App',
    list: [
      'App is for personal, non-commercial use',
      'You may create memorial posters for personal sharing',
      'Do not use the app for illegal, harmful, or offensive content'
    ]
  },
  {
    title: '3. User Content',
    list: [
      'You are responsible for photos and text you add',
      'Do not use copyrighted photos without permission',
      'We do not store or access your content'
    ]
  },
  {
    title: '4. Intellectual Property',
    content: 'App design, templates, and code are owned by us. You may not copy, modify, or redistribute the app.'
  },
  {
    title: '5. Advertisements',
    content: 'App shows ads via Google AdMob. We are not responsible for ad content.'
  },
  {
    title: '6. Disclaimer',
    list: [
      'App is provided "as is" without warranty',
      'We are not liable for any loss of data',
      'We are not responsible for poster misuse'
    ]
  },
  {
    title: '7. Termination',
    content: 'We may terminate access if terms are violated.'
  },
  {
    title: '8. Governing Law',
    content: 'These terms are governed by Indian law.'
  },
  {
    title: '9. Contact',
    content: 'For questions about these terms, please contact us.'
  }
]

export default function ShrandhanjaliPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/shrandhanjali_poster" className="flex items-center gap-2">
              <span className="text-3xl">🙏</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">{PRIVACY_POLICY.appName}</span>
            </Link>
            <Link href="/shrandhanjali_poster" className="text-gray-600 hover:text-orange-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Privacy Policy */}
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem', marginBottom: '2rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">🔒 Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-2">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-1">
              <p className="text-orange-800 font-medium">🙏 App: {PRIVACY_POLICY.appName}</p>
              <p className="text-orange-700 text-sm">Package: {PRIVACY_POLICY.packageName}</p>
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
                  <p className="text-sm text-gray-500 mt-3">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-700 underline">
                      Google Privacy Policy →
                    </a>
                  </p>
                )}
                {section.title.includes('Contact') && (
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-4">
                    <p className="font-semibold text-lg">📧 Email: {PRIVACY_POLICY.contactEmail}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Terms of Service */}
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">📋 Terms of Service</h1>
            <p className="text-xl text-gray-600">Last updated: {PRIVACY_POLICY.lastUpdated}</p>
          </div>

          <div className="space-y-10 text-gray-700">
            {TERMS_OF_SERVICE.map((section, idx) => (
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
                {section.title.includes('Contact') && (
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mt-4">
                    <p className="font-semibold text-lg">📧 Email: {PRIVACY_POLICY.contactEmail}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            By using {PRIVACY_POLICY.appName}, you agree to this Privacy Policy and Terms of Service.
          </p>
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
