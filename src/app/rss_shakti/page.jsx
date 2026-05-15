'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RSSShaktiDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'RSS News Feed',
      desc: 'Stay updated with the latest news and articles from curated RSS feeds in real-time',
      icon: '📰',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Bookmark Articles',
      desc: 'Save important articles for later reading — all stored locally on your device',
      icon: '🔖',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Sankalp Attendance',
      desc: 'Track your daily attendance and commitment with the built-in Sankalp service',
      icon: '✅',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Offline Storage',
      desc: 'All data stored locally on your device using Hive — works without internet',
      icon: '💾',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Dark & Light Theme',
      desc: 'Switch between dark and light modes for comfortable reading day and night',
      icon: '🌗',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Privacy First',
      desc: 'Zero data collection on servers — everything stays on your device, always',
      icon: '🔒',
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  const stats = [
    { value: '📡', label: 'Live RSS Feeds' },
    { value: '🔒', label: 'Privacy First' },
    { value: '⚡', label: 'Fast & Light' },
    { value: '🇮🇳', label: 'Made in India' },
  ]

  const howItWorks = [
    { step: '01', title: 'Open the App', desc: 'Launch RSS - Rashtra Shakti and complete the quick onboarding' },
    { step: '02', title: 'Browse News', desc: 'Read latest articles from curated RSS news feeds' },
    { step: '03', title: 'Bookmark & Save', desc: 'Save articles you want to read later — stored locally' },
    { step: '04', title: 'Track Attendance', desc: 'Use Sankalp service to mark your daily commitment' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/rss_shakti" className="flex items-center gap-2">
              <span className="text-3xl">🚩</span>
              <span className="text-2xl font-black text-gray-900">RSS - Rashtra Shakti</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">About</a>
              <Link href="/rss_shakti/privacy_policy" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Privacy Policy</Link>
              <Link href="/rss_shakti/terms" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Terms</Link>
              <a href="#download" className="bg-orange-700 text-white px-6 py-2.5 rounded-lg hover:bg-orange-800 font-semibold transition-all shadow-sm hover:shadow-md">
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
              <Link href="/rss_shakti/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <Link href="/rss_shakti/terms" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Terms</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-orange-700 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                🚩 Stay Informed, Stay Connected
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                RSS - <span className="text-orange-700">Rashtra Shakti</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Your daily companion for news, articles & Sankalp attendance. Read, bookmark, and stay committed — all with complete privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#features" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-orange-700 hover:text-orange-700 shadow-lg hover:shadow-xl transition-all text-center">
                  Explore Features
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-400">Rashtra Shakti</span>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="flex gap-2 mb-3">
                      {['Feed', 'Bookmarks', 'Sankalp'].map((tab, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold ${i === 0 ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                          {tab}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[
                        { title: 'राष्ट्रीय स्वयंसेवक संघ की नई पहल', time: '2m ago', tag: 'National' },
                        { title: 'Youth empowerment programs launched', time: '1h ago', tag: 'Education' },
                        { title: 'सामाजिक सेवा अभियान की शुरुआत', time: '3h ago', tag: 'Service' },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-800 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-orange-400 text-xs font-bold">{item.tag}</span>
                            <span className="text-gray-500 text-xs">{item.time}</span>
                          </div>
                          <p className="text-white text-sm font-semibold">{item.title}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around mt-4 pt-3 border-t border-gray-700">
                      <div className="text-center">
                        <span className="text-orange-400 text-lg">📰</span>
                        <div className="text-gray-400 text-xs mt-1">Feed</div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-500 text-lg">🔖</span>
                        <div className="text-gray-500 text-xs mt-1">Saved</div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-500 text-lg">✅</span>
                        <div className="text-gray-500 text-xs mt-1">Sankalp</div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-500 text-lg">⚙️</span>
                        <div className="text-gray-500 text-xs mt-1">Settings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features Section */}
      <section id="features" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">App Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to stay informed and committed</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-orange-500 hover:shadow-2xl transition-all duration-300">
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-orange-50 to-amber-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-6xl font-black text-orange-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 text-3xl text-orange-300">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Rashtra Shakti?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                A dedicated app for staying connected with national news, tracking your daily Sankalp, and reading curated content — all while keeping your data completely private.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Complete Privacy', desc: 'All data stored locally using Hive — nothing leaves your device' },
                  { title: 'Works Offline', desc: 'Read bookmarked articles and track attendance without internet' },
                  { title: 'No Login Required', desc: 'Start using immediately — no account creation needed' },
                  { title: 'Lightweight & Fast', desc: 'Built with Flutter for smooth performance on any device' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 bg-orange-50 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-700 text-2xl font-bold">✓</span>
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
              <div className="bg-gradient-to-br from-orange-700 to-red-900 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">🚩</div>
                  <h3 className="text-4xl font-bold mb-6">Rashtra Shakti</h3>
                  <p className="text-xl mb-10 opacity-90">Stay informed. Stay committed.</p>
                  <a href="#download" className="inline-block bg-white text-orange-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download RSS - Rashtra Shakti</h2>
          <p className="text-2xl text-gray-300 mb-12">Free. Private. Your daily companion.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-orange-800 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-3xl">🚩</span>
                <span className="text-2xl font-black">Rashtra Shakti</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">News, bookmarks & Sankalp attendance — all in one private app</p>
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
                <Link href="/rss_shakti/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <Link href="/rss_shakti/terms" className="block text-gray-400 hover:text-white transition-colors text-lg">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">flutterdeveloper72@gmail.com</p>
              <p className="text-gray-400 text-lg">Made with ❤️ in India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 RSS - Rashtra Shakti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
