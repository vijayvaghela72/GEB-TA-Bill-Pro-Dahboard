import PrivacyPolicyLayout from '../../components/PrivacyPolicyLayout'

const PRIVACY_POLICY = {
  lastUpdated: 'January 2024',
  appName: 'GEB TA Bill Pro',
  contactEmail: 'privacy@gebtabill.com',
  sections: [
    {
      title: '1. Introduction',
      content: 'Welcome to GEB TA Bill Pro. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Travel Allowance bill management application designed for Gujarat Electricity Board employees.'
    },
    {
      title: '2. Information We Collect',
      content: 'We collect minimal information that you provide directly through the app, including:',
      list: [
        'TA Bill entry data (travel dates, routes, amounts)',
        'Employee details you enter for bill generation',
        'App usage preferences and settings',
        'Device information for crash reporting (optional)'
      ]
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the information we collect to:',
      list: [
        'Provide and maintain the TA Bill management functionality',
        'Generate Excel reports from your bill entries',
        'Improve app performance and user experience',
        'Fix bugs and resolve technical issues'
      ]
    },
    {
      title: '4. Data Storage',
      content: 'All your TA Bill data is stored locally on your device using a local database (SQLite). We do not upload, transmit, or store your bill data on any external server. Your data remains entirely on your device and under your control.'
    },
    {
      title: '5. Data Security',
      content: 'Since all data is stored locally on your device, the security of your data depends on your device security measures. We recommend using device lock (PIN, fingerprint, or face unlock) to protect your data. The app does not transmit any personal data over the internet.'
    },
    {
      title: '6. Data Sharing and Disclosure',
      content: 'We do not sell, trade, or share your personal information with any third parties. Your TA Bill data is only shared when you explicitly choose to:',
      list: [
        'Export data as an Excel file',
        'Share reports using the share functionality',
        'Send feedback via email (voluntary)'
      ]
    },
    {
      title: '7. Third-Party Services',
      content: 'The app may use the following third-party services:',
      list: [
        'Google Play Services (for app distribution and updates)',
        'Device file system (for Excel export functionality)'
      ]
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our app is designed for Gujarat Electricity Board employees and is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13.'
    },
    {
      title: '9. Your Rights',
      content: 'You have the right to:',
      list: [
        'Access all your data within the app',
        'Delete any or all TA Bill entries at any time',
        'Export your data before deleting the app',
        'Uninstall the app to remove all locally stored data'
      ]
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the app and posting the new Privacy Policy within the application. You are advised to review this Privacy Policy periodically for any changes.'
    },
    {
      title: '11. Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at:'
    }
  ]
}

export default function PrivacyPolicy() {
  return (
    <PrivacyPolicyLayout policy={PRIVACY_POLICY} homeHref="/" icon="bolt" />
  )
}
