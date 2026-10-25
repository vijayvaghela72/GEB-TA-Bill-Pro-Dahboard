'use client'

import Link from 'next/link'

const neon = {
  green: '#00FF88',
  cyan: '#00D4FF',
  bg: '#0A0A0F',
  surface: '#12121A',
  border: '#1E1E2E',
}

const sections = [
  {
    title: '1. Information We Collect',
    body: `Gameliyo ("we", "our", "the App") collects the following information to provide our gaming service:

ACCOUNT INFORMATION:
• Mobile phone number (used for OTP-based authentication)
• JWT authentication token (stored securely on your device)
• User profile data (username, avatar if set)

USAGE DATA:
• Games played and playtime duration
• Favourite games and recently played history
• Search queries and category preferences
• Device type and OS version (for compatibility)

AUTOMATICALLY COLLECTED:
• App crash reports and performance data
• Session duration and frequency of use
• In-app interaction events (for improving recommendations)

We do NOT collect:
• Passwords (OTP-based login only)
• Financial or payment information
• Location data (GPS)
• Contacts or call logs
• Photos, camera, or microphone data`
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the collected information for the following purposes:

• Authentication: Verify your identity via mobile OTP and maintain your session using JWT tokens.
• Personalisation: Show relevant game recommendations based on your play history and preferences.
• Game Library: Serve 500+ HTML5 games via Gamezop platform within the app's WebView.
• Notifications: Send push notifications about new games and personalised recommendations (you can opt out anytime).
• Analytics: Understand how users interact with the app to improve features and performance.
• Advertising: Display relevant ads via Google Mobile Ads SDK to keep the app free.
• Customer Support: Respond to queries and resolve issues you report.
• Backend Services: Connect to Cashliyo API for user account management and game data.`
  },
  {
    title: '3. Third-Party Services',
    body: `Gameliyo integrates the following third-party services:

• Gamezop: Provides the HTML5 game library. Games are loaded via WebView. Gamezop may collect gameplay analytics per their own privacy policy.
• Cashliyo API: Our backend service for user account management, game data, and rewards.
• Firebase (Google): Used for push notifications (Firebase Cloud Messaging) and crash analytics (Crashlytics).
• Google Mobile Ads (AdMob): Displays advertisements. Google may collect device identifiers and ad interaction data per their privacy policy.
• Secure Storage: Flutter Secure Storage stores your JWT token locally on your device.

Each third-party service has its own privacy policy. We recommend reviewing them:
• Firebase: https://firebase.google.com/support/privacy
• Google Ads: https://policies.google.com/privacy
• Gamezop: https://gamezop.com/privacy-policy`
  },
  {
    title: '4. Data Storage & Security',
    body: `• JWT tokens are stored locally on your device using Flutter Secure Storage (encrypted).
• User account data (phone number, profile, game history) is stored on our secure backend servers (Cashliyo API).
• We implement industry-standard encryption for data in transit (HTTPS/TLS).
• Server data is protected by access controls and regular security audits.
• We retain your account data for as long as your account is active.
• You may request deletion of your account and all associated data at any time.

DATA SECURITY PRACTICES:
• Encrypted data transmission (HTTPS)
• Secure JWT-based authentication
• No plain-text password storage
• Regular security reviews`
  },
  {
    title: '5. Data Sharing',
    body: `We do NOT sell, trade, or rent your personal information to third parties.

We may share data in the following limited circumstances:
• Service Providers: With Gamezop (game content) and Cashliyo API (backend) to operate the service.
• Analytics: Aggregated, anonymised usage data with analytics providers.
• Legal Requirements: If required by law, court order, or government authority.
• Business Transfer: In case of merger, acquisition, or asset sale (you will be notified).
• With Your Consent: Any other sharing requires your explicit consent.

We never share your phone number or personal data with advertisers directly.`
  },
  {
    title: "6. Children's Privacy",
    body: `Gameliyo is intended for users aged 13 and above.

• We do not knowingly collect personal information from children under 13.
• If we discover that a child under 13 has provided personal information, we will promptly delete it.
• Parents or guardians who believe their child has provided us with personal information may contact us at flutterdeveloper72@gmail.com to request deletion.
• The app contains advertisement content which may not be suitable for very young children.
• We comply with applicable children's privacy laws including COPPA.`
  },
  {
    title: '7. Your Rights & Choices',
    body: `You have the following rights regarding your data:

• Access: Request a copy of the personal data we hold about you.
• Correction: Update or correct inaccurate profile information within the app.
• Deletion: Request deletion of your account and all associated data (see Delete Account page).
• Opt-out of Notifications: Disable push notifications from device settings at any time.
• Ad Preferences: Manage ad personalisation through Google's ad settings.
• Data Portability: Request your data in a portable format.

To exercise these rights, contact us at:
📧 flutterdeveloper72@gmail.com`
  },
  {
    title: '8. Account Deletion',
    body: `You can delete your Gameliyo account and all associated data at any time:

METHOD 1 — In-App:
Go to Profile → Settings → Delete Account → Confirm

METHOD 2 — Request via Email:
Send a deletion request to flutterdeveloper72@gmail.com with subject "Account Deletion Request" and your registered mobile number.

METHOD 3 — Online Form:
Visit our account deletion page at /gameliyo/delete_account

Upon deletion:
• Your account and profile data will be permanently deleted within 30 days.
• Game history, favourites, and preferences will be removed.
• JWT tokens will be invalidated immediately.
• This action is irreversible.`
  },
  {
    title: '9. Changes to This Policy',
    body: `• We may update this Privacy Policy as the app evolves.
• Significant changes will be communicated via in-app notification or email.
• The "Last Updated" date at the top will reflect any revisions.
• Continued use of the app after changes constitutes acceptance of the updated policy.
• We encourage you to review this policy periodically.`
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

📧 Email: flutterdeveloper72@gmail.com
🎮 App: Gameliyo
📍 Made in India`
  },
]

export default function GameliyoPrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: neon.bg, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(10,10,15,0.95)', borderBottom: `1px solid ${neon.border}`, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
          <Link href="/gameliyo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }}>🎮</span>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', background: `linear-gradient(90deg, ${neon.green}, ${neon.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gameliyo</span>
          </Link>
          <Link href="/gameliyo" style={{ color: neon.green, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: neon.surface, borderRadius: '16px', border: `1px solid ${neon.border}`, padding: '2.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '0.5rem' }}>Privacy Policy</h1>
            <p style={{ color: '#6B7280' }}>Last Updated: October 2026</p>
            <div style={{ marginTop: '1rem', padding: '0.875rem 1rem', backgroundColor: `${neon.green}11`, border: `1px solid ${neon.green}33`, borderRadius: '12px' }}>
              <p style={{ color: neon.green, fontWeight: 600, fontSize: '0.9rem' }}>🎮 This privacy policy applies to the Gameliyo mobile application.</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: '#D1D5DB' }}>
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: neon.cyan, marginBottom: '0.75rem' }}>{section.title}</h2>
                <p style={{ lineHeight: 1.8, whiteSpace: 'pre-line', fontSize: '0.925rem' }}>{section.body}</p>
                {section.title === '10. Contact Us' && (
                  <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', backgroundColor: `${neon.green}11`, border: `1px solid ${neon.green}33`, borderRadius: '12px' }}>
                    <p style={{ fontWeight: 700, color: neon.green }}>📧 flutterdeveloper72@gmail.com</p>
                    <p style={{ fontWeight: 700, color: neon.cyan, marginTop: '0.25rem' }}>🎮 Gameliyo · Made in India</p>
                  </div>
                )}
              </section>
            ))}

            <div style={{ borderTop: `1px solid ${neon.border}`, paddingTop: '1.5rem', textAlign: 'center', color: '#6B7280', fontSize: '0.875rem' }}>
              By using Gameliyo, you agree to this Privacy Policy.
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#05050A', borderTop: `1px solid ${neon.border}`, padding: '1.5rem', textAlign: 'center', color: '#4B5563', fontSize: '0.875rem' }}>
        © 2026 Gameliyo. All rights reserved.
      </footer>
    </div>
  )
}
