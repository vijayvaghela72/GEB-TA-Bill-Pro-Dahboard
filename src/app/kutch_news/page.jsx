'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function KutchNewsDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: '17+ Gujarati Newspapers',
      desc: 'Access Kutch Mitra, Gujarat Samachar, Divya Bhaskar, Sandesh, Akila News, Nav Gujarat Samay & more in one app',
      icon: '📰',
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'News Reels',
      desc: 'Swipe through news like social media stories — quick, engaging, and easy to read',
      icon: '🎬',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Live News Channels',
      desc: 'Watch TV9 Gujarati, ABP Asmita, News18 Gujarati, VTV Gujarati, Zee 24 Kalak & more live',
      icon: '📺',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Listen to News',
      desc: "Don&apos;t have time to read? Listen to articles with built-in text-to-speech feature",
      icon: '🔊',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Weather Updates',
      desc: 'Check current weather conditions and forecasts for Kutch & Gujarat right from the app',
      icon: '🌤️',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      title: 'Breaking Notifications',
      desc: 'Never miss important news with instant push notifications for breaking updates',
      icon: '🔔',
      color: 'from-amber-500 to-yellow-600',
    },
  ]

  const stats = [
    { value: '17+', label: 'Newspapers' },
    { value: '10+', label: 'Live Channels' },
    { value: '6+', label: 'Categories' },
    { value: '🇮🇳', label: 'Made in India' },
  ]

  const newspapers = [
    'Kutch Mitra', 'Gujarat Samachar', 'Divya Bhaskar', 'Sandesh',
    'Akila News', 'Nav Gujarat Samay', 'BBC Gujarati', 'Oneindia Gujarati',
    'Webdunia Gujarati', 'TV9 Gujarati', 'ABP Asmita', 'News18 Gujarati',
    'VTV Gujarati', 'Zee 24 Kalak'
  ]

  const categories = [
    { name: 'Kutch Local News', icon: '🏘️' },
    { name: 'Gujarat State News', icon: '🏛️' },
    { name: 'India National News', icon: '🇮🇳' },
    { name: 'Sports', icon: '🏏' },
    { name: 'Business & Finance', icon: '💼' },
    { name: 'Entertainment', icon: '🎬' },
  ]

  const howItWorks = [
    { step: '01', title: 'Download & Open', desc: 'Install Kutch News from Play Store and launch the app — no login required' },
    { step: '02', title: 'Choose Your Source', desc: 'Pick from 17+ newspapers, live channels, or browse news reels' },
    { step: '03', title: 'Read or Listen', desc: 'Read articles or use text-to-speech to listen while multitasking' },
    { step: '04', title: 'Share & Stay Updated', desc: 'Share news on WhatsApp and enable notifications for breaking updates' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/kutch_news" className="flex items-center gap-2">
              <span className="text-3xl">📰</span>
              <span className="text-2xl font-black text-gray-900">Kutch News</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">About</a>
              <Link href="/kutch_news/privacy_policy" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Privacy Policy</Link>
              <Link href="/kutch_news/contact" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Contact Us</Link>
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
              <Link href="/kutch_news/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <Link href="/kutch_news/contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Contact Us</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-orange-700 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                🇮🇳 #1 Gujarati News App for Kutch, Gujarat & India
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Kutch & Gujarat News <span className="text-orange-700">In Gujarati</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Reels, newspapers, live TV & weather updates — all in one app. Stay updated with breaking news from Kutch, Gujarat & India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#how-it-works" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-orange-700 hover:text-orange-700 shadow-lg hover:shadow-xl transition-all text-center">
                  See How It Works
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-400">Kutch News</span>
                  </div>
                  {/* News App Mockup */}
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="flex gap-2 mb-3 overflow-hidden">
                      {['All', 'Kutch', 'Gujarat', 'Sports', 'Business'].map((tab, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${i === 0 ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                          {tab}
                        </span>
                      ))}
                    </div>
                    {/* News Cards */}
                    <div className="space-y-3">
                      {[
                        { title: 'કચ્છમાં નવી વિકાસ યોજના જાહેર', source: 'Kutch Mitra', time: '2m ago' },
                        { title: 'ગુજરાત સરકારનો મહત્વનો નિર્ણય', source: 'Gujarat Samachar', time: '15m ago' },
                        { title: 'ભારત vs ઓસ્ટ્રેલિયા ક્રિકેટ મેચ', source: 'TV9 Gujarati', time: '1h ago' },
                      ].map((news, i) => (
                        <div key={i} className="bg-gray-800 rounded-lg p-3">
                          <p className="text-white text-sm font-bold mb-1">{news.title}</p>
                          <div className="flex justify-between">
                            <span className="text-orange-400 text-xs">{news.source}</span>
                            <span className="text-gray-500 text-xs">{news.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-center">
                        <span className="text-orange-400 text-sm">📰</span>
                        <div className="text-gray-400 text-xs">News</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-center">
                        <span className="text-orange-400 text-sm">🎬</span>
                        <div className="text-gray-400 text-xs">Reels</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-center">
                        <span className="text-orange-400 text-sm">📺</span>
                        <div className="text-gray-400 text-xs">Live TV</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-center">
                        <span className="text-orange-400 text-sm">🌤️</span>
                        <div className="text-gray-400 text-xs">Weather</div>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to stay informed about Kutch, Gujarat & India</p>
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

      {/* Newspapers Section */}
      <section className="py-20 bg-orange-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">All Newspapers & Channels</h2>
            <p className="text-lg text-gray-600">Access all major Gujarati news sources in one place</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {newspapers.map((name, idx) => (
              <span key={idx} className="bg-white border-2 border-gray-200 px-5 py-3 rounded-full text-gray-700 font-semibold text-lg hover:border-orange-400 hover:text-orange-700 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">News Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-orange-400 transition-colors">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <p className="font-bold text-gray-800 text-sm">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-orange-50 to-red-50">
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Kutch News?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Kutch News is the perfect app for anyone who wants to stay informed about Kutch, Bhuj, Mandvi, Mundra, Gujarat, and India — all in Gujarati & English.
              </p>
              <div className="space-y-6">
                {[
                  { title: '100% Free', desc: 'No subscriptions, no hidden charges — completely free to use' },
                  { title: 'Works Offline', desc: 'Read cached news even without internet connection' },
                  { title: 'No Login Required', desc: 'Start reading instantly — no account creation needed' },
                  { title: 'Fast & Lightweight', desc: 'Clean interface that loads quickly on any device' },
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
                  <div className="text-8xl mb-8">📰</div>
                  <h3 className="text-4xl font-bold mb-6">Stay Informed</h3>
                  <p className="text-xl mb-10 opacity-90">Kutch, Gujarat & India news in Gujarati</p>
                  <a href="#download" className="inline-block bg-white text-orange-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download Kutch News Now</h2>
          <p className="text-2xl text-gray-300 mb-12">Free. Fast. All Gujarati news in one app.</p>
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
                <span className="text-3xl">📰</span>
                <span className="text-2xl font-black">Kutch News</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Your #1 Gujarati News App for Kutch, Gujarat & India</p>
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
                <Link href="/kutch_news/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <Link href="/kutch_news/contact" className="block text-gray-400 hover:text-white transition-colors text-lg">Contact Us</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">flutterdeveloper72@gmail.com</p>
              <p className="text-gray-400 text-lg">Made with ❤️ in Kutch, India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Kutch News. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
