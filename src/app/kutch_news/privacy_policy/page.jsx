'use client'

import Link from 'next/link'

const sections = [
  {
    title: '1. Introduction & Scope',
    body: `Kutch News ("we", "our", "us", "Company") is committed to protecting your privacy and ensuring full transparency in our data practices. This Privacy Policy ("Policy") explains how we collect, use, disclose, store, and safeguard your information when you use our mobile application ("App").

BY INSTALLING, ACCESSING, OR USING THE APP, YOU EXPRESSLY CONSENT TO THE COLLECTION AND USE OF YOUR INFORMATION AS DESCRIBED IN THIS POLICY. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE APP.

This Policy applies to all users of the App worldwide and complies with:
• Information Technology Act, 2000 (India) and IT Rules
• Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
• Digital Personal Data Protection Act, 2023 (India)
• General Data Protection Regulation (GDPR) — for EU users
• California Consumer Privacy Act (CCPA) — for California users
• Children's Online Privacy Protection Act (COPPA)`
  },
  {
    title: '2. Nature of the App — Intermediary Disclaimer',
    body: `Kutch News operates as an INTERMEDIARY PLATFORM as defined under Section 2(1)(w) of the Information Technology Act, 2000. The App is designed SOLELY for INFORMATIONAL and EDUCATIONAL PURPOSES.

• The App aggregates and provides access to publicly available news content from third-party websites using WebView technology.
• We do NOT create, author, edit, modify, host, store, cache, or redistribute any third-party content.
• We function identically to a web browser — providing access to publicly available web pages.
• ALL content displayed belongs EXCLUSIVELY to its respective owners and publishers.
• We claim ZERO ownership or rights over any third-party content.
• We are NOT a media house, news publisher, or content creator.
• We do NOT endorse, verify, or guarantee any third-party content.`
  },
  {
    title: '3. WebView & Third-Party Websites',
    body: `Our App uses WebView technology to display third-party websites. Critical disclosures:

• WebView is used EXCLUSIVELY for information sharing and user convenience.
• We do NOT control, modify, intercept, scrape, or manipulate any content displayed through WebView.
• We do NOT inject code, trackers, or scripts into third-party websites.
• We do NOT collect any personal data from third-party websites displayed via WebView.
• Content shown through WebView is rendered directly from the source website's servers.
• We have NO control over the privacy practices of third-party websites.
• Each third-party website has its own privacy policy — we strongly encourage you to review them.
• We are NOT responsible for any data collection performed by third-party websites when you access them through our App.
• Your interaction with third-party websites through WebView is governed by THEIR privacy policies, not ours.`
  },
  {
    title: '4. Content Removal & Copyright Protection',
    body: `We maintain a STRICT and IMMEDIATE content removal policy.

• If ANY content owner, publisher, copyright holder, trademark owner, or authorized representative has ANY concern regarding their content being accessible through our App, we will IMMEDIATELY and UNCONDITIONALLY remove access.
• Removal guaranteed within 24 hours — NO questions asked, NO disputes.
• We will permanently blacklist the source if requested.
• We proactively remove content upon becoming aware of any potential issues.
• We fully comply with DMCA takedown notices and Indian IT Act provisions.

Content Removal Contact: flutterdeveloper72@gmail.com

We claim protection under:
• Section 79, Information Technology Act, 2000 (Safe Harbor)
• DMCA Safe Harbor provisions (17 U.S.C. § 512)
• EU E-Commerce Directive Article 14`
  },
  {
    title: '5. Information We Collect',
    body: `We are committed to DATA MINIMIZATION — we collect only what is strictly necessary for App functionality.

A. AUTOMATICALLY COLLECTED (Non-Personal):
• Device Information: Device model, OS version, screen resolution, device identifiers (for ad serving only).
• Usage Analytics: Anonymous app usage patterns, screens viewed, session duration, crash/error reports.
• Network Status: Internet connection type (WiFi/Mobile) — used solely to check connectivity.
• Push Token: Firebase Cloud Messaging token — used solely for delivering notifications.

B. INFORMATION WE DO NOT COLLECT:
• Personal identification: Name, email, phone, address, date of birth.
• Location data: GPS, IP-based location, or any geolocation.
• Contacts, call logs, SMS, or communication data.
• Photos, camera, microphone, or media files.
• Financial data: Credit cards, bank accounts, payment information.
• Biometric data: Fingerprints, face recognition, voice prints.
• Health, fitness, or medical data.
• Browsing history outside the App.
• Social media accounts or credentials.
• Government IDs or sensitive personal documents.

C. SENSITIVE PERSONAL DATA:
• We do NOT collect any Sensitive Personal Data or Information (SPDI) as defined under the IT Rules, 2011.
• We do NOT process any special categories of data as defined under GDPR Article 9.`
  },
  {
    title: '6. Legal Basis for Processing (GDPR Compliance)',
    body: `For users in the European Economic Area (EEA), our legal basis for processing:

• Legitimate Interest: App functionality, analytics, and security.
• Consent: Push notifications and personalized advertisements.
• Legal Obligation: Compliance with applicable laws.

You may withdraw consent at any time without affecting the lawfulness of processing based on consent before withdrawal.`
  },
  {
    title: '7. How We Use Your Information',
    body: `We use collected information SOLELY for:

• Providing and maintaining App functionality.
• Delivering push notifications about news updates.
• Displaying advertisements through Google AdMob.
• Analyzing anonymous usage patterns to improve the App.
• Detecting and preventing technical issues and crashes.
• Complying with legal obligations.

WE DO NOT:
• Sell, rent, lease, or trade your information to ANY third party.
• Share your data with third parties for their marketing purposes.
• Use your data for profiling, automated decision-making, or behavioral targeting (beyond AdMob's standard ad personalization).
• Use your data for any purpose not explicitly stated in this Policy.
• Transfer your data to countries without adequate data protection (except through Google's standard data processing).`
  },
  {
    title: '8. Third-Party Services & SDKs',
    body: `Our App integrates the following third-party services. Each has its own privacy policy:

• Google AdMob (Advertising):
  - May collect device identifiers for ad personalization.
  - Privacy Policy: https://policies.google.com/privacy
  - You can opt out via device ad settings.

• Firebase Cloud Messaging (Notifications):
  - Collects device token for push notification delivery.
  - Privacy Policy: https://firebase.google.com/support/privacy

• Firebase Analytics (Anonymous Analytics):
  - Collects anonymous usage statistics.
  - No personally identifiable information is shared.
  - Privacy Policy: https://firebase.google.com/support/privacy

We are NOT responsible for the data practices of these third-party services. We have no control over their data collection, use, or sharing practices.`
  },
  {
    title: '9. Data Storage, Security & Retention',
    body: `STORAGE:
• ALL user data is stored LOCALLY on your device only.
• We do NOT maintain external servers, databases, or cloud storage containing user personal data.
• We do NOT have access to data stored on your device.

SECURITY MEASURES:
• Industry-standard encryption for data transmission (SSL/TLS).
• No collection of sensitive data minimizes security risks.
• Regular security assessments of the App.
• Compliance with reasonable security practices as per IT Rules, 2011.

RETENTION:
• Cached content: Temporary, refreshed regularly, deleted when App cache is cleared.
• User preferences: Retained until App is uninstalled.
• Analytics data: Retained per Google's policies (typically 14 months).
• Uninstalling the App permanently removes ALL locally stored data.

BREACH NOTIFICATION:
• In the unlikely event of a data breach, we will notify affected users within 72 hours as required by applicable law.
• We will also notify relevant data protection authorities as required.`
  },
  {
    title: '10. Push Notifications',
    body: `• We use Firebase Cloud Messaging for push notifications.
• Notifications contain ONLY news headlines and updates.
• We do NOT send promotional, marketing, or spam notifications.
• You can disable notifications at any time via device settings.
• Disabling notifications does not affect App functionality.
• We do NOT track whether you open or interact with notifications.`
  },
  {
    title: '11. Advertisements & Ad Data',
    body: `• Advertisements are displayed through Google AdMob to support free App access.
• AdMob may use device advertising identifiers for ad personalization.
• We do NOT have access to data collected by AdMob.
• We do NOT control which ads are displayed.
• We do NOT endorse advertised products or services.

TO OPT OUT OF PERSONALIZED ADS:
• Android: Settings → Google → Ads → Opt out of Ads Personalization
• iOS: Settings → Privacy → Advertising → Limit Ad Tracking

• Opting out does not reduce the number of ads but makes them less targeted.`
  },
  {
    title: "12. Children's Privacy (COPPA Compliance)",
    body: `• Our App is NOT directed to children under 13 years of age.
• We do NOT knowingly collect personal information from children under 13.
• We do NOT knowingly allow children under 13 to use the App.
• If we discover that a child under 13 has provided personal information, we will IMMEDIATELY delete it.
• If you are a parent/guardian and believe your child has provided information, contact us immediately at flutterdeveloper72@gmail.com.
• We comply with COPPA (Children's Online Privacy Protection Act) and equivalent international regulations.`
  },
  {
    title: '13. Your Rights',
    body: `Depending on your jurisdiction, you have the following rights:

ALL USERS:
• Right to Access: Know what data we hold about you.
• Right to Deletion: Request deletion of your data.
• Right to Opt-Out: Disable personalized ads and notifications.
• Right to Uninstall: Remove App and all local data.
• Right to Contact: Reach us with any privacy concerns.

GDPR RIGHTS (EU/EEA Users):
• Right to Rectification
• Right to Restriction of Processing
• Right to Data Portability
• Right to Object
• Right to Withdraw Consent
• Right to Lodge Complaint with Supervisory Authority

CCPA RIGHTS (California Users):
• Right to Know
• Right to Delete
• Right to Opt-Out of Sale (We do NOT sell data)
• Right to Non-Discrimination

INDIAN DATA PROTECTION RIGHTS:
• Rights under Digital Personal Data Protection Act, 2023
• Right to access, correct, and erase personal data
• Right to grievance redressal

To exercise any rights, contact: flutterdeveloper72@gmail.com
We will respond within 30 days of receiving your request.`
  },
  {
    title: '14. International Data Transfers',
    body: `• We do NOT independently transfer data internationally.
• Third-party services (Google) may process data in various countries.
• Google maintains appropriate safeguards for international transfers (Standard Contractual Clauses, Privacy Shield successor frameworks).
• By using the App, you consent to data processing by Google in accordance with their privacy policies.`
  },
  {
    title: '15. Do Not Track Signals',
    body: `• We do NOT track users across third-party websites.
• We do NOT respond to Do Not Track (DNT) signals as there is no industry standard for mobile apps.
• You can control ad tracking through your device settings.`
  },
  {
    title: '16. Disclaimer of Liability',
    body: `• The App is provided "AS IS" without any warranties.
• We are NOT liable for any loss, damage, or harm arising from use of the App.
• We are NOT liable for third-party content, websites, or their data practices.
• We are NOT liable for any data collection by third-party websites accessed through WebView.
• We are NOT responsible for the privacy practices of any third-party service.
• Users access all content and third-party services ENTIRELY at their own risk.
• Our total liability shall not exceed INR 100 (One Hundred Rupees).`
  },
  {
    title: '17. Grievance Officer',
    body: `In accordance with the Information Technology Act, 2000 and rules made thereunder, the Grievance Officer for the purpose of this Policy is:

Name: Kutch News Team
Email: flutterdeveloper72@gmail.com

The Grievance Officer shall address your concerns within 15 days of receiving the complaint.`
  },
  {
    title: '18. Changes to This Policy',
    body: `• We reserve the right to update this Policy at any time at our sole discretion.
• Changes are effective immediately upon posting within the App.
• We will update the "Last updated" date at the top of this Policy.
• Your continued use after changes constitutes acceptance of the revised Policy.
• For material changes, we may notify you through push notification or in-app notice.
• It is your responsibility to review this Policy periodically.
• If you disagree with changes, you must stop using the App immediately.`
  },
  {
    title: '19. Governing Law',
    body: `• This Policy is governed by the laws of India.
• Subject to the Information Technology Act, 2000 and Digital Personal Data Protection Act, 2023.
• Any disputes shall be subject to exclusive jurisdiction of courts in Bhuj/Kutch, Gujarat, India.
• For EU users: You may also lodge complaints with your local Data Protection Authority.`
  },
  {
    title: '20. Contact Us',
    body: `For ANY questions, concerns, data requests, content removal requests, or privacy complaints:

Email: flutterdeveloper72@gmail.com

Grievance Officer: flutterdeveloper72@gmail.com
DMCA/Copyright Agent: flutterdeveloper72@gmail.com

Response Times:
• Acknowledgment: Within 12 hours
• Content Removal: Within 24 hours
• Data Requests: Within 30 days
• Grievance Resolution: Within 15 days`
  }
]

export default function KutchNewsPrivacyPolicy() {
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
            <p className="text-xl text-gray-600">Last updated: June 2025</p>
          </div>

          <div className="space-y-10 text-gray-700">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-base leading-relaxed whitespace-pre-line">{section.body}</p>
              </section>
            ))}

            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm font-bold text-gray-900 text-center leading-relaxed">
                BY USING THIS APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND CONSENT TO THE COLLECTION AND USE OF YOUR INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY.
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
