import './globals.css'

export const metadata = {
  title: 'GEB TA Bill Pro - Travel Allowance Management',
  description: 'Efficient Travel Allowance bill management for Gujarat Electricity Board employees. Track, manage, and export TA bills with ease.',
  keywords: 'GEB, TA Bill, travel allowance, Gujarat Electricity Board, bill management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
