import './globals.css'

export const metadata = {
  title: {
    default: 'GEB TA Bill Pro - Travel Allowance Management',
    template: '%s | GEB TA Bill Pro',
  },
  description: 'Efficient Travel Allowance bill management for Gujarat Electricity Board employees. Track, manage, and export TA bills with ease.',
  keywords: 'GEB, TA Bill, travel allowance, Gujarat Electricity Board, bill management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
