'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function JanazahDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'Create Memorial Notices',
      desc: 'Design beautiful Islamic Janazah memorial notices with customizable templates and Arabic typography',
      icon: '📜',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'PDF Generation',
      desc: 'Generate high-quality printable PDF notices ready for distribution and printing',
      icon: '📄',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Photo Integration',
      desc: 'Add and crop photos for memorial notices with built-in image editing tools',
      icon: '🖼️',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Instant Sharing',
      desc: 'Share notices directly to WhatsApp, Telegram, and other messaging apps with one tap',
      icon: '📤',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Multilingual Support',
      desc: 'Create notices in Arabic, Urdu, English, and other languages with proper Islamic fonts',
      icon: '🌐',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Push Notifications',
      desc: 'Receive reminders and updates via Firebase push notifications',
      icon: '🔔',
      color: 'from-rose-500 to-red-600',
    },
  ]

  const stats = [
    { value: '📜', label: 'Beautiful Templates' },
    { value: '🌐', label: 'Multilingual' },
    { value: '📄', label: 'PDF Export' },
    { value: '☪️', label: 'Islamic Design' },
  ]

  const howItWorks = [
    { step: '01', title: 'Open the App', desc: 'Launch Janazah and select a memorial notice template' },
    { step: '02', title: 'Add Details', desc: 'Enter name, photo, date, and funeral/prayer details' },
    { step: '03', title: 'Generate Notice', desc: 'Create a beautifully formatted Islamic memorial notice' },
    { step: '04', title: 'Share or Print', desc: 'Share digitally via messaging apps or generate PDF for printing' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/janazah" className="flex items-center gap-2">
              <span className="text-3xl">☪️</span>
              <span className="text-2xl font-black text-gray-900">Janazah</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">About</a>
              <Link href="/janazah/privacy_policy" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">Privacy Policy</Link>
              <Link href="/janazah/terms" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">Terms</Link>
              <a href="#download" className="bg-emerald-700 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-800 font-semibold transition-all shadow-sm hover:shadow-md">
                Download App
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div style={{ padding: '1.5rem' }}>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">How It Works</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">About</a>
              <Link href="/janazah/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <Link href="/janazah/terms" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Terms</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-emerald-700 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                ☪️ Islamic Memorial Notice Creator
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Janazah <span className="text-emerald-700">Memorial Notices</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Create beautiful Islamic funeral and memorial notices. Generate PDFs, share instantly, and honor the departed with dignity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#how-it-works" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-emerald-700 hover:text-emerald-700 shadow-lg hover:shadow-xl transition-all text-center">
                  How It Works
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-400">Janazah</span>
                  </div>
                  {/* Memorial Notice Mockup */}
                  <div className="border-2 border-emerald-600 rounded-xl overflow-hidden">
                    <div className="bg-emerald-800 text-white text-center py-4 px-4">
                      <p className="text-lg font-bold" style={{ fontFamily: 'serif' }}>إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
                      <p className="text-xs mt-1 opacity-80">Indeed we belong to Allah and to Him we shall return</p>
                    </div>
                    <div className="p-4 bg-white text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-3">
                        <span className="text-3xl">👤</span>
                      </div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Memorial Notice</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Janazah Prayer: After Zuhr</p>
                        <p>Date: Friday, 15 January 2025</p>
                        <p>Masjid Al-Noor, City</p>
                      </div>
                    </div>
                    <div className="bg-emerald-800 text-white text-center py-2 px-4">
                      <p className="text-xs">May Allah grant them Jannah</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-200">
                      <span className="text-xl">📄</span>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Save PDF</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                      <span className="text-xl">📤</span>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Share</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-900 text-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-4">{stat.value}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">App Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create dignified Islamic memorial notices with ease</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-emerald-500 hover:shadow-2xl transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create a memorial notice in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-6xl font-black text-emerald-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 text-3xl text-emerald-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Janazah App?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                In times of loss, creating and sharing memorial notices should be simple and dignified. Janazah app helps you honor the departed with beautiful Islamic notices.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Respectful Design', desc: 'Templates designed with Islamic aesthetics and proper Arabic calligraphy' },
                  { title: 'Quick & Easy', desc: 'Create a complete memorial notice in under 2 minutes' },
                  { title: 'Share Instantly', desc: 'Send to family and community via WhatsApp, Telegram & more' },
                  { title: 'Print Ready', desc: 'Generate high-quality PDFs for printing and distribution' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 bg-emerald-50 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-700 text-2xl font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-700 to-teal-900 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">☪️</div>
                  <h3 className="text-4xl font-bold mb-6">Janazah</h3>
                  <p className="text-xl mb-10 opacity-90">Honor the departed with dignity</p>
                  <a href="#download" className="inline-block bg-white text-emerald-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
                    Get the App →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-28 bg-gray-900 text-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download Janazah App</h2>
          <p className="text-2xl text-gray-300 mb-12">Create Islamic memorial notices with respect and ease.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-emerald-800 shadow-xl hover:shadow-2xl transition-all">
            Download from Play Store →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl">☪️</span>
                <span className="text-2xl font-black">Janazah</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Muslim Janazah Memorial Notice — Create Islamic memorial notices with dignity</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">App</h4>
              <div className="space-y-4">
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors text-lg">Features</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-lg">How It Works</a>
                <a href="#download" className="block text-gray-400 hover:text-white transition-colors text-lg">Download</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <Link href="/janazah/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <Link href="/janazah/terms" className="block text-gray-400 hover:text-white transition-colors text-lg">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">flutterdeveloper72@gmail.com</p>
              <p className="text-gray-400 text-lg">Version 1.0.0</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Janazah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
