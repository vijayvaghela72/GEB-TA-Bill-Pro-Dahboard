'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'Add TA Bill Entry',
      desc: 'Quickly record daily travel allowance entries with all required details',
      icon: '📝',
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'View & Manage Bills',
      desc: 'Browse, search, and manage all your TA bill entries in one place',
      icon: '📋',
      color: 'from-teal-500 to-emerald-600'
    },
    {
      title: 'Excel Export',
      desc: 'Download your TA bill data as Excel spreadsheets for reporting and records',
      icon: '📊',
      color: 'from-green-600 to-green-800'
    },
    {
      title: 'Share Reports',
      desc: 'Share your TA bill reports with colleagues and supervisors easily',
      icon: '📤',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Offline Support',
      desc: 'Works completely offline with local database — no internet required',
      icon: '📱',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Secure & Private',
      desc: 'All data stored locally on your device. Your information stays with you',
      icon: '🔒',
      color: 'from-gray-600 to-gray-800'
    },
  ]

  const stats = [
    { value: '1000+', label: 'GEB Employees' },
    { value: '50K+', label: 'Bills Generated' },
    { value: '100%', label: 'Offline' },
    { value: '⚡', label: 'Fast & Easy' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl">⚡</span>
              <span className="text-2xl font-black text-gray-900">GEB TA Bill</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">About</a>
              <a href="#stats" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Stats</a>
              <a href="#download" className="bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 font-semibold transition-all shadow-sm hover:shadow-md">
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
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">About</a>
              <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Stats</a>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-blue-800 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                ⚡ Built for Gujarat Electricity Board Employees
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                TA Bill Management <span className="text-blue-800">Made Simple</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Track, manage, and export your daily Travel Allowance bills with ease. Designed specifically for GEB employees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-900 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Now
                  <span>→</span>
                </a>
                <a href="#features" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-blue-700 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all text-center">
                  Explore Features
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-5 p-3 bg-blue-800 rounded-lg">
                    <span className="text-2xl">⚡</span>
                    <span className="text-white font-bold text-lg">GEB TA Bill Pro</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-black text-blue-800">📝</div>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Add Entry</div>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-black text-teal-700">📋</div>
                      <div className="text-xs text-gray-600 mt-1 font-medium">View Bills</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-black text-green-700">📊</div>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Export Excel</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-black text-purple-700">📤</div>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Share</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-sm font-medium">Ahmedabad → Vadodara</span>
                      <span className="text-sm font-bold text-blue-700">₹850</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-sm font-medium">Surat → Rajkot</span>
                      <span className="text-sm font-bold text-blue-700">₹1,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-gray-900 text-white">
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

      {/* Features Section */}
      <section id="features" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to manage your Travel Allowance bills efficiently</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-blue-500 hover:shadow-2xl transition-all duration-300">
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

      {/* About Section */}
      <section id="about" className="py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why GEB TA Bill Pro?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                GEB TA Bill Pro is designed specifically for Gujarat Electricity Board employees to manage their daily
                Travel Allowance bills efficiently. No more paperwork hassles — go digital.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Simple & Fast', desc: 'Add TA bill entries in seconds with an intuitive interface' },
                  { title: 'Works Offline', desc: 'No internet needed — all data stored locally on your device' },
                  { title: 'Excel Export', desc: 'Generate professional Excel reports for submission' },
                  { title: 'Free to Use', desc: 'Completely free with no hidden charges or subscriptions' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-800 text-2xl font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">⚡</div>
                  <h3 className="text-4xl font-bold mb-6">Download Now</h3>
                  <p className="text-xl mb-10 opacity-90">Available on Google Play Store</p>
                  <a href="https://play.google.com/store/apps/details?id=com.example.ta_bill" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
                    Get the App →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-28 bg-gray-900 text-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Simplify Your TA Bills?</h2>
          <p className="text-2xl text-gray-300 mb-12">Download GEB TA Bill Pro and start managing your travel allowance today</p>
          <a href="https://play.google.com/store/apps/details?id=com.example.ta_bill" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-blue-800 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-3xl">⚡</span>
                <span className="text-2xl font-black">GEB TA Bill</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Travel Allowance bill management made simple for GEB employees</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Product</h4>
              <div className="space-y-4">
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors text-lg">Features</a>
                <a href="#download" className="block text-gray-400 hover:text-white transition-colors text-lg">Download</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Company</h4>
              <div className="space-y-4">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
                <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">feedback@gebtabill.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2024 GEB TA Bill Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
