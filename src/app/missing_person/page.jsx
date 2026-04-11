'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MissingPersonDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'Pick a Photo',
      desc: 'Select or capture a photo of the missing person directly from your gallery or camera',
      icon: '📸',
      color: 'from-rose-500 to-red-600',
    },
    {
      title: 'Generate Poster',
      desc: 'Create a professionally formatted missing person poster with name, age, last seen location & more',
      icon: '🪪',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Capture as Image',
      desc: 'Save the generated poster as a high-quality image to your device with one tap',
      icon: '🖼️',
      color: 'from-sky-500 to-blue-600',
    },
    {
      title: 'Share Instantly',
      desc: 'Share posters directly to WhatsApp, Facebook, Instagram, Twitter & other messaging apps',
      icon: '📤',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Multi-Language Support',
      desc: 'Create posters in Hindi, English & regional Indian languages with beautiful Google Fonts',
      icon: '🗣️',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Completely Free',
      desc: 'Free to use with minimal non-intrusive ads. No subscriptions, no hidden charges',
      icon: '💚',
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  const stats = [
    { value: '10K+', label: 'Posters Created' },
    { value: '5K+', label: 'Active Users' },
    { value: '50+', label: 'Cities Covered' },
    { value: '🇮🇳', label: 'Made in India' },
  ]

  const howItWorks = [
    { step: '01', title: 'Open the App', desc: 'Launch Indian Missing Person Posters on your Android device' },
    { step: '02', title: 'Add Details', desc: 'Enter name, age, last seen location, date, and contact information' },
    { step: '03', title: 'Pick a Photo', desc: 'Select a clear photo from gallery or take one with camera' },
    { step: '04', title: 'Generate & Share', desc: 'Tap generate, save the poster, and share across social media instantly' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/missing_person" className="flex items-center gap-2">
              <span className="text-3xl">🔍</span>
              <span className="text-2xl font-black text-gray-900">Missing Person Posters</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-red-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-red-700 font-medium transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-red-700 font-medium transition-colors">About</a>
              <Link href="/missing_person/privacy_policy_url" className="text-gray-700 hover:text-red-700 font-medium transition-colors">Privacy Policy</Link>
              <a href="#download" className="bg-red-700 text-white px-6 py-2.5 rounded-lg hover:bg-red-800 font-semibold transition-all shadow-sm hover:shadow-md">
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
              <Link href="/missing_person/privacy_policy_url" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-red-700 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                🇮🇳 Made for India — Help Reunite Families
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Create Missing Person Posters <span className="text-red-700">In Seconds</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Generate professional missing person posters, save as images, and share instantly across WhatsApp, Facebook & more. Every second counts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#how-it-works" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-red-700 hover:text-red-700 shadow-lg hover:shadow-xl transition-all text-center">
                  See How It Works
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Poster Preview Mockup */}
                  <div className="border-4 border-red-600 rounded-xl overflow-hidden">
                    <div className="bg-red-700 text-white text-center py-3 px-4">
                      <p className="text-xs font-bold tracking-widest uppercase">⚠️ Missing Person ⚠️</p>
                      <p className="text-lg font-black">गुमशुदा व्यक्ति</p>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                        <span className="text-5xl">👤</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-gray-500 font-medium">Name</span>
                          <span className="font-bold text-gray-800">&lt;name&gt;</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-gray-500 font-medium">Age</span>
                          <span className="font-bold text-gray-800">32 Years</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 pb-1">
                          <span className="text-gray-500 font-medium">Last Seen</span>
                          <span className="font-bold text-gray-800">Ahmedabad, GJ</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500 font-medium">Date</span>
                          <span className="font-bold text-gray-800">15 Jan 2025</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-700 text-white text-center py-2 px-4">
                      <p className="text-xs font-semibold">📞 Contact: &lt;phone number&gt;</p>
                    </div>
                  </div>
                  {/* Action Buttons Mockup */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-green-50 rounded-lg p-3 text-center border border-green-200">
                      <span className="text-xl">💾</span>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Save Image</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-200">
                      <span className="text-xl">📤</span>
                      <div className="text-xs text-gray-600 mt-1 font-medium">Share Now</div>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create and share missing person posters quickly</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-red-500 hover:shadow-2xl transition-all duration-300">
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
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-red-50 to-orange-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create a missing person poster in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-6xl font-black text-red-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 text-3xl text-red-300">→</div>
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why This App?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Every year, thousands of people go missing across India. Time is critical — the faster a poster reaches people, the higher the chances of finding the missing person. This app empowers anyone to create and share professional posters in seconds.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Speed Matters', desc: 'Create a poster in under 60 seconds — no design skills needed' },
                  { title: 'Reach Millions', desc: 'Share directly to WhatsApp groups, Facebook, Instagram & Twitter' },
                  { title: 'Indian Languages', desc: 'Posters in Hindi, English & regional languages with proper formatting' },
                  { title: 'Works Offline', desc: 'Create posters even without internet — share when connected' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 bg-red-50 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-700 text-2xl font-bold">✓</span>
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
              <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">🔍</div>
                  <h3 className="text-4xl font-bold mb-6">Every Second Counts</h3>
                  <p className="text-xl mb-10 opacity-90">Help reunite families across India</p>
                  <a href="#download" className="inline-block bg-white text-red-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
                    Get the App →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Built With Modern Technology</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Flutter', 'Dart', 'Image Picker', 'Google Fonts', 'Screenshot Capture', 'Share Plus', 'Google AdMob', 'In-App Updates'].map((tech, idx) => (
              <span key={idx} className="bg-white border-2 border-gray-200 px-6 py-3 rounded-full text-gray-700 font-semibold text-lg hover:border-red-400 hover:text-red-700 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section id="download" className="py-28 bg-gray-900 text-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download the App Now</h2>
          <p className="text-2xl text-gray-300 mb-12">Help find missing persons. Create & share posters in seconds.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-red-800 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-3xl">🔍</span>
                <span className="text-2xl font-black">Missing Person</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Create and share missing person posters to help reunite families across India</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Product</h4>
              <div className="space-y-4">
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors text-lg">Features</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-lg">How It Works</a>
                <a href="#download" className="block text-gray-400 hover:text-white transition-colors text-lg">Download</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <Link href="/missing_person/privacy_policy_url" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">&lt;email&gt;</p>
              <p className="text-gray-400 text-lg">Made with ❤️ in India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Indian Missing Person Posters. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
