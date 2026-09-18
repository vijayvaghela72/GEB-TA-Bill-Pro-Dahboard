import PrivacyPolicyLayout from '../../../components/PrivacyPolicyLayout'

const PRIVACY_POLICY = {
  lastUpdated: 'September 19, 2026',
  appName: 'Vishnu Puran Audio',
  contactEmail: 'vijayvaghela7272@gmail.com',
  sections: [
    {
      title: '1. Introduction',
      content: 'This Privacy Policy explains how Vishnu Puran Audio handles information when you use the mobile application. The app is designed as an offline Hindi audio-katha experience and does not require you to create an account.'
    },
    {
      title: '2. Information Stored on Your Device',
      content: 'The app stores the following information locally on your device so that its features work across sessions:',
      list: ['Listening progress, completed chapters and daily listening minutes', 'Daily goal, streak and active-day history', 'Quiz answers and best scores for each chapter', 'Unlocked chapters and earned badges', 'Bookmarks, playback positions and any personal notes you add', 'App preferences, notification settings and review-prompt status']
    },
    {
      title: '3. Audio Content and Offline Use',
      content: 'Vishnu Puran chapters and bhakti tracks are packaged with the app and play locally. The app does not stream your listening activity to our servers and does not require an account. Playback can continue in the background and may use Android media controls.'
    },
    {
      title: '4. Advertising and Consent',
      content: 'On Android, the app may display banner, native, app-open, interstitial and user-initiated rewarded ads through Google AdMob. Google’s User Messaging Platform may show a consent form before the first ad request where required. You can revisit available privacy choices from the app settings. Advertising providers may process device identifiers, approximate location and interaction data according to their own policies.'
    },
    {
      title: '5. Analytics',
      content: 'The app may use Firebase Analytics to understand general feature usage and improve stability. Analytics is optional in the application configuration. Search queries that produce no result are measured only by query length; the text you typed is not recorded. We do not use analytics to collect bookmark notes or the content of personal entries.'
    },
    {
      title: '6. Notifications',
      content: 'If you allow notifications, the app can schedule local reminders for daily listening and streak goals. These reminders are created on your device. You can disable notification permission or reminders at any time through the app or your device settings.'
    },
    {
      title: '7. Sharing',
      content: 'When you choose to share a shlok card, the app creates the image locally and sends it only to the app or person you select through the system share sheet. We do not receive or store the shared image.'
    },
    {
      title: '8. Third-Party Services',
      content: 'The Android version may interact with the following third-party services, which operate under their own privacy policies:',
      list: ['Google AdMob for advertisements and rewarded chapter unlocks', 'Google User Messaging Platform for consent choices', 'Firebase Analytics, when configured, for aggregated app usage', 'Google Play Services for distribution, updates and in-app review', 'Your device operating system for media playback, notifications, local files and sharing']
    },
    {
      title: '9. Data Sharing and Sale',
      content: 'We do not sell your personal information. We do not operate a backend that receives your listening progress, quiz results, bookmarks or personal notes. Limited device and usage data may be processed by advertising or analytics providers as described above.'
    },
    {
      title: '10. Data Retention and Deletion',
      content: 'Your progress and preferences remain on your device until you clear the app data or uninstall the app. Bookmarks and notes can be removed inside the app. Data processed independently by third-party providers is subject to their respective retention policies.'
    },
    {
      title: '11. Children’s Privacy',
      content: 'The app contains devotional and educational content for a general audience. We do not knowingly collect personal information from children. Parents or guardians should supervise a child’s device settings and advertising consent choices where appropriate.'
    },
    {
      title: '12. Data Security',
      content: 'Local app information is protected by your device and operating-system security. We recommend using a screen lock and keeping Android and the app updated. No method of electronic storage is completely secure.'
    },
    {
      title: '13. Your Choices',
      content: 'You can control notifications, available advertising consent choices and device permissions from the app or system settings. You may delete locally stored information by clearing app data or uninstalling the app.'
    },
    {
      title: '14. Changes to This Policy',
      content: 'We may update this Privacy Policy when the app, its services or legal requirements change. The revised date at the top of this page will show when the latest version took effect.'
    },
    {
      title: '15. Contact Us',
      content: 'If you have questions or requests concerning this Privacy Policy, contact us using the email address below.'
    }
  ]
}

export default function VishnuPuranPrivacyPolicy() {
  return <PrivacyPolicyLayout policy={PRIVACY_POLICY} homeHref="/vishnu-puran-audio" icon="headphones" accent="amber" notice="This policy applies to the Vishnu Puran Audio Android application (package: com.vishnu.puranaudio)." />
}
