'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Information Collection',
    body: `AppXray ("we", "our", "the App") is committed to protecting your privacy. Here is how we handle information:

INFORMATION WE DO NOT COLLECT:
• Personal identification (name, email, phone number, address)
• Account credentials or login information
• Location data (GPS or IP-based)
• Contacts, photos, or media files
• Payment or financial information
• Biometric data
• Information about your installed apps sent to any server

LOCALLY PROCESSED DATA (On-Device Only):
• List of installed applications on your device
• App metadata (package names, version numbers, install dates)
• Framework detection results (Flutter, React Native, Unity, etc.)
• APK asset analysis results
• Permission information of scanned apps
• User preferences (theme, filters, sorting)
• Cached scan results for performance

All data is processed and stored LOCALLY on your device. This data NEVER leaves your device and is NOT transmitted to any server.`
  },
  {
    title: '2. How We Use Information',
    body: `AppXray processes app information solely for the following purposes:

• Framework Detection: Analyzing APK structures to identify development frameworks (Flutter, React Native, Cordova, Ionic, Capacitor, Unity, Unreal Engine, Godot)
• Statistics Generation: Creating local statistics about framework distribution on your device
• Permission Analysis: Reading and displaying permissions requested by installed apps
• APK Asset Exploration: Browsing internal files and resources of installed APKs
• Search & Filter: Enabling you to search and filter your installed apps locally

All processing happens entirely on your device. No data is sent to external servers.`
  },
  {
    title: '3. Data Storage & Deletion',
    body: `• All app data is stored LOCALLY on your device.
• We do NOT operate any servers or cloud databases.
• We do NOT have access to any data stored on your device.
• Smart caching stores scan results locally for faster subsequent access.
• Data persists until you uninstall the App or clear App data from device settings.
• Uninstalling the App permanently removes ALL locally stored data including cached results.
• We do NOT create backups of your data on any external server.

SECURITY:
• Local storage is protected by your device's built-in security mechanisms.
• We recommend using device lock (PIN, fingerprint, or face unlock) for additional protection.
• The app does not expose any data to other applications on your device.`
  },
  {
    title: '4. Permissions Explained',
    body: `The App requires the following permissions:

• QUERY_ALL_PACKAGES: Required to list and analyze all installed applications on your device. This is the core functionality of AppXray. No app list data is transmitted externally.

• INTERNET (if applicable): Used solely for in-app update checks. No personal data or app scan results are transmitted.

• READ_EXTERNAL_STORAGE (if applicable): May be required on older Android versions to access APK files for asset exploration. No files are uploaded or shared.

The App does NOT require:
• Camera, microphone, or location permissions
• Contact or phone permissions
• SMS or call log permissions
• Any permissions beyond what is needed for core functionality`
  },
  {
    title: '5. Third-Party Services',
    body: `We do NOT use:
• Analytics services (no Google Analytics, Firebase Analytics, etc.)
• Advertising SDKs (no ads are displayed)
• Social media SDKs
• Crash reporting services that collect personal data
• Any service that tracks or profiles users
• Any third-party service that receives your app list or scan data

IN-APP UPDATES:
• The app may check for updates from the Google Play Store.
• This check does not transmit any personal data or scan results.
• Update checks only verify if a newer version of AppXray is available.`
  },
  {
    title: "6. Children's Privacy (COPPA Compliance)",
    body: `• The App is suitable for all ages.
• We do NOT collect personal information from any user, including children under 13.
• Since all data is processed locally and no personal data is collected or transmitted, the App is inherently safe for users of all ages.
• We comply with COPPA (Children's Online Privacy Protection Act) and equivalent international regulations.
• No user accounts are created, so no child's information can be stored on our servers.`
  },
  {
    title: '7. Your Rights & Data Control',
    body: `You have complete control over your data:

• Delete All Data: Clear all App data through device settings or by uninstalling the App.
• Clear Cache: Clear cached scan results from within the app settings.
• No Account: Since no account is created, there is no account data to manage.
• No Server Data: Since we do not collect any data on servers, there is no data to request, export, or have deleted from our end.

You can stop all data processing at any time by simply uninstalling the app.`
  },
  {
    title: '8. Data About Other Apps',
    body: `AppXray reads information about other installed apps on your device for analysis purposes:

• This information is processed ENTIRELY on your device.
• We do NOT share, sell, or transmit information about your installed apps to any third party.
• The app list and analysis results are never sent to any server.
• This data is used solely to provide you with framework detection and analysis features.
• We respect the privacy of all app developers whose apps appear in scan results.`
  },
  {
    title: '9. Changes to This Policy',
    body: `• We may update this Privacy Policy from time to time.
• Changes will be reflected by updating the "Last Updated" date.
• Your continued use of the App after changes constitutes acceptance.
• We encourage you to review this Policy periodically.
• Significant changes will be communicated through in-app notifications.`
  },
  {
    title: '10. Contact Information',
    body: `If you have any questions or concerns about this Privacy Policy, please contact us:

Email: flutterdeveloper72@gmail.com
App: AppXray`
  }
]

export default function AppXrayPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/appxray" className="flex items-center gap-2">
              <span className="text-3xl">🔬</span>
              <span className="text-2xl font-black text-gray-900">AppXray</span>
            </Link>
            <Link href="/appxray" className="text-gray-600 hover:text-indigo-700 font-semibold transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '3rem' }}>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Last Updated: May 2026</p>
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <p className="text-indigo-800 font-medium">🔬 This privacy policy applies to the AppXray mobile application.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '10. Contact Information' && (
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">🔬 App: AppXray</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using AppXray, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-12">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <p className="text-gray-400">© 2026 AppXray. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
