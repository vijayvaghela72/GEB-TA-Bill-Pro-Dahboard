'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ShrandhanjaliPosterDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const templates = [
    { title: 'Hindu Traditional', icon: '🙏', color: 'from-orange-500 to-red-600' },
    { title: 'Om Shanti', icon: '🕉️', color: 'from-saffron-500 to-orange-600' },
    { title: 'Ganges Floral', icon: '🌸', color: 'from-pink-500 to-rose-600' },
    { title: 'Lotus Memorial', icon: '🪷', color: 'from-pink-400 to-fuchsia-600' },
    { title: 'Deepak Prarthana', icon: '🪔', color: 'from-amber-500 to-orange-600' },
    { title: 'Rajasthani Royal', icon: '👑', color: 'from-yellow-500 to-amber-600' },
    { title: 'South Indian Temple', icon: '🛕', color: 'from-red-500 to-rose-700' },
    { title: 'Peacock Tribute', icon: '🦚', color: 'from-teal-500 to-emerald-600' },
    { title: 'Golden Mandir', icon: '✨', color: 'from-yellow-400 to-amber-500' },
    { title: 'Minimalist Hindi', icon: '📜', color: 'from-gray-500 to-slate-700' },
    { title: 'Gujarati', icon: '🏛️', color: 'from-red-400 to-orange-500' },
    { title: 'Marathi', icon: '🚩', color: 'from-orange-600 to-red-700' },
  ]

  const features = [
    { title: '25 Templates', desc: 'Regional Indian styles — Hindu, Sikh, Jain, Buddhist, Gujarati, Marathi, Punjabi & more', icon: '🎨', color: 'from-purple-500 to-violet-600' },
    { title: 'Photo + Crop', desc: 'Pick from gallery, crop in circle, rectangle or arch shape for the perfect poster', icon: '📸', color: 'from-rose-500 to-red-600' },
    { title: '6 Collage Layouts', desc: 'Side-by-side, stacked, 3-grid, 4-grid, left-focus & mosaic layouts', icon: '🖼️', color: 'from-sky-500 to-blue-600' },
    { title: 'Help Me Write', desc: 'Pre-written Hindi messages by relationship (8 types) × tone (4 types)', icon: '✍️', color: 'from-teal-500 to-emerald-600' },
    { title: 'HD Export', desc: 'Standard 3x & HD 5x PNG export — save to gallery or share directly', icon: '📤', color: 'from-green-500 to-green-700' },
    { title: 'Auto-Save Draft', desc: 'Every field change auto-saved — restore on next open of same template', icon: '💾', color: 'from-indigo-500 to-indigo-700' },
  ]

  const stats = [
    { value: '25', label: 'Templates' },
    { value: '6', label: 'Collage Layouts' },
    { value: '6', label: 'Font Styles' },
    { value: '🇮🇳', label: 'Made in India' },
  ]

  const howItWorks = [
    { step: '01', title: 'Choose Template', desc: 'Select from 25 regional Indian poster templates or 6 collage layouts' },
    { step: '02', title: 'Add Photo & Details', desc: 'Pick photo, crop it, add name, date & select font style and colors' },
    { step: '03', title: 'Write Message', desc: 'Type your own or use "Help Me Write" for pre-written Hindi messages' },
    { step: '04', title: 'Export & Share', desc: 'Save HD poster to gallery or share directly to WhatsApp & social media' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/shrandhanjali_poster" className="flex items-center gap-2">
              <span className="text-3xl">🙏</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">Shrandhanjali Poster</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#templates" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Templates</a>
              <a href="#features" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">How It Works</a>
              <Link href="/shrandhanjali_poster/privacy_policy_url" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Privacy Policy</Link>
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
              <a href="#templates" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Templates</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">How It Works</a>
              <Link href="/shrandhanjali_poster/privacy_policy_url" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
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
                🇮🇳 25 Regional Indian Templates — श्रद्धांजलि
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Create Beautiful <span className="text-orange-700">श्रद्धांजलि Posters</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
                Design professional memorial posters with 25 regional templates, photo editor, collage layouts & HD export. Share instantly on WhatsApp.
              </p>
              <p className="text-lg text-gray-500 mb-10">
                Hindu · Sikh · Jain · Buddhist · Gujarati · Marathi · Punjabi · Bengali & more
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#templates" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-orange-600 hover:text-orange-700 shadow-lg hover:shadow-xl transition-all text-center">
                  View Templates
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Poster Preview */}
                  <div className="border-2 border-orange-300 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white text-center py-3 px-4">
                      <p className="text-xs font-bold tracking-widest uppercase">🙏 श्रद्धांजलि 🙏</p>
                      <p className="text-lg font-black">In Loving Memory</p>
                    </div>
                    <div className="p-4 bg-gradient-to-b from-orange-50 to-white">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-3 border-4 border-orange-200">
                        <span className="text-4xl">👤</span>
                      </div>
                      <div className="text-center space-y-1">
                        <p className="font-black text-gray-800 text-lg">स्व. श्री &lt;name&gt;</p>
                        <p className="text-sm text-gray-500">1950 — 2025</p>
                        <p className="text-xs text-gray-600 mt-2 italic">ॐ शांति 🙏</p>
                      </div>
                      <div className="mt-4 flex gap-2 justify-center">
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">Hindu Traditional</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium">HD Export</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-orange-900 text-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-4">{stat.value}</div>
                <div className="text-orange-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-28 bg-gradient-to-br from-orange-50 to-amber-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">25 Regional Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Beautiful designs for every Indian tradition and region</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {templates.map((tmpl, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${tmpl.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  {tmpl.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900">{tmpl.title}</h3>
              </div>
            ))}
            <div className="group bg-gradient-to-br from-orange-700 to-orange-900 border-2 border-orange-700 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center">
              <span className="text-3xl mb-2">+13</span>
              <p className="text-sm font-bold">More Templates</p>
              <p className="text-xs text-orange-200 mt-1">In the App</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">App Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create beautiful memorial posters</p>
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

      {/* How It Works */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-gray-50 to-orange-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create a beautiful poster in 4 simple steps</p>
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

      {/* About */}
      <section id="about" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Shrandhanjali Poster?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Create dignified memorial posters honoring your loved ones. 25 culturally authentic templates covering all major Indian traditions — from Hindu to Sikh, Jain to Buddhist, and 13 regional styles.
              </p>
              <div className="space-y-6">
                {[
                  { title: '25 Regional Templates', desc: 'Hindu, Sikh, Jain, Buddhist + Gujarati, Marathi, Punjabi, Bengali, Kashmiri & more' },
                  { title: 'Photo Editor + Collage', desc: 'Crop photos in circle/rectangle/arch, create collages with 6 different layouts' },
                  { title: 'Help Me Write', desc: 'Pre-written Hindi messages by relationship & tone — no typing needed' },
                  { title: 'HD Export & Share', desc: 'Save HD posters to gallery, share directly to WhatsApp & social media' },
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
              <div className="bg-gradient-to-br from-orange-800 to-orange-950 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">🙏</div>
                  <h3 className="text-4xl font-bold mb-4">श्रद्धांजलि</h3>
                  <p className="text-xl mb-10 opacity-90">Beautiful memorial posters in seconds</p>
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
      <section id="download" className="py-28 bg-orange-900 text-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download Shrandhanjali Poster</h2>
          <p className="text-2xl text-orange-200 mb-4">25 Templates · 6 Collage Layouts · HD Export · Auto-Save Draft</p>
          <p className="text-lg text-orange-300 mb-12">Hindu · Sikh · Jain · Buddhist · Gujarati · Marathi · Punjabi · Bengali & more</p>
          <a href="https://play.google.com/store/apps/details?id=com.shradhanjali.poster" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-orange-800 px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-3xl">🙏</span>
                <span className="text-xl font-black">Shrandhanjali Poster</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Create beautiful memorial posters with 25 regional Indian templates</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Templates</h4>
              <div className="space-y-4">
                <span className="block text-gray-400 text-lg">Hindu Traditional</span>
                <span className="block text-gray-400 text-lg">Om Shanti</span>
                <span className="block text-gray-400 text-lg">Rajasthani Royal</span>
                <span className="block text-gray-400 text-lg">South Indian Temple</span>
                <span className="block text-gray-400 text-lg">+21 More</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <Link href="/shrandhanjali_poster/privacy_policy_url" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">📧 shradhanjali.poster@gmail.com</p>
              <p className="text-gray-400 text-lg">Made with 🙏 in India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Shrandhanjali Poster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
