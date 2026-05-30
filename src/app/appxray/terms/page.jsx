'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. License Grant',
    body: `By downloading and using AppXray ("the App"), you are granted a limited, non-exclusive, non-transferable, revocable license to use the App on your personal Android device for personal, non-commercial purposes, subject to these Terms & Conditions.

This license does not allow you to:
• Modify, reverse-engineer, decompile, or disassemble the App
• Distribute, sublicense, lease, or rent the App to third parties
• Use the App for any unlawful or unauthorized purpose
• Remove or alter any proprietary notices or labels on the App`
  },
  {
    title: '2. User Responsibilities',
    body: `By using AppXray, you agree to:

• Use the App only for lawful purposes and in accordance with these Terms
• Not use the App to infringe upon the intellectual property rights of any third party
• Not attempt to gain unauthorized access to other apps or systems through information obtained via AppXray
• Not use framework detection results or APK analysis data for malicious purposes (e.g., exploiting vulnerabilities)
• Not redistribute or commercially exploit scan results or analysis data
• Comply with all applicable local, state, national, and international laws and regulations
• Accept responsibility for all activities conducted through your use of the App`
  },
  {
    title: '3. Intellectual Property',
    body: `• AppXray, including its design, code, features, graphics, and content, is the intellectual property of the developer.
• The App name "AppXray", logo, and associated branding are proprietary and may not be used without written permission.
• Framework detection algorithms and analysis methods are proprietary technology.
• All rights not expressly granted in these Terms are reserved by the developer.
• Third-party app names, logos, and trademarks displayed in scan results belong to their respective owners and are shown for identification purposes only.`
  },
  {
    title: '4. Disclaimer of Warranties',
    body: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

We do not warrant that:
• Framework detection results are 100% accurate in all cases
• The App will identify every framework or technology used in an application
• APK asset exploration will reveal all internal files of every application
• Permission analysis will capture every runtime permission request
• The App will be uninterrupted, error-free, or free of harmful components
• Scan results will be compatible with future Android versions

Detection accuracy depends on various factors including app obfuscation, custom builds, and Android version. Results should be treated as informational estimates, not definitive technical audits.`
  },
  {
    title: '5. Limitation of Liability',
    body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:

• The developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App.
• The developer is not responsible for any decisions made based on framework detection results or app analysis data.
• Total liability shall not exceed the amount paid for the App (which is zero for the free version).
• The developer is not liable for any loss of data resulting from app uninstallation or device issues.
• The developer is not responsible for any actions taken against third-party apps based on information provided by AppXray.`
  },
  {
    title: '6. Third-Party Applications Disclaimer',
    body: `• AppXray analyzes third-party applications installed on your device for informational purposes only.
• We are not affiliated with, endorsed by, or connected to any third-party app developers whose apps appear in scan results.
• Framework detection results are based on heuristic analysis and may not reflect the actual technology stack used by app developers.
• We do not guarantee the accuracy of any information displayed about third-party applications.
• App names, icons, and package names belong to their respective developers and are displayed solely for identification.
• We are not responsible for any third-party app's behavior, security, or privacy practices.`
  },
  {
    title: '7. In-App Updates',
    body: `• The App may periodically check for and offer updates through the Google Play Store.
• Updates may include bug fixes, new features, or security improvements.
• While updates are recommended, they are not mandatory unless required for continued functionality.
• We reserve the right to modify, update, or discontinue features at any time.
• Continued use of the App after updates constitutes acceptance of any modified terms.`
  },
  {
    title: '8. Termination',
    body: `• You may terminate your use of the App at any time by uninstalling it from your device.
• We reserve the right to terminate or suspend access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
• Upon termination, all locally stored data will be removed when the App is uninstalled.
• Sections regarding Intellectual Property, Disclaimer of Warranties, Limitation of Liability, and Governing Law shall survive termination.`
  },
  {
    title: '9. Governing Law',
    body: `• These Terms shall be governed by and construed in accordance with the laws of India.
• Any disputes arising from these Terms or the use of the App shall be subject to the exclusive jurisdiction of the courts in India.
• If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.`
  },
  {
    title: '10. Modifications to Terms',
    body: `• We reserve the right to modify these Terms & Conditions at any time.
• Changes will be effective immediately upon posting the updated Terms.
• The "Last Updated" date at the top will reflect the most recent revision.
• Your continued use of the App after modifications constitutes acceptance of the updated Terms.
• We encourage you to review these Terms periodically for any changes.`
  },
  {
    title: '11. Contact Information',
    body: `If you have any questions about these Terms & Conditions, please contact us:

Email: flutterdeveloper72@gmail.com
App: AppXray`
  }
]

export default function AppXrayTerms() {
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
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-xl text-gray-600">Last Updated: May 2026</p>
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <p className="text-indigo-800 font-medium">🔬 These terms and conditions apply to the AppXray mobile application. By using the App, you agree to be bound by these Terms.</p>
            </div>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
                {section.title === '11. Contact Information' && (
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mt-4">
                    <p className="font-semibold text-lg mb-2">📧 Email: flutterdeveloper72@gmail.com</p>
                    <p className="font-semibold text-lg">🔬 App: AppXray</p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-lg">
                By using AppXray, you agree to these Terms & Conditions.
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
