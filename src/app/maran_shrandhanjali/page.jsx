'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MaranShrandhanjaliDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    { title: 'शोक संदेश', subtitle: 'Condolence', desc: 'Heartfelt condolence messages to express sympathy and support during difficult times', icon: '🙏', color: 'from-purple-700 to-purple-900' },
    { title: 'स्मृति चिह्न', subtitle: 'Memorial', desc: 'Beautiful memorial messages to honor and remember the departed soul', icon: '🕯️', color: 'from-indigo-600 to-indigo-800' },
    { title: 'श्रद्धांजलि', subtitle: 'Tribute', desc: 'Meaningful tribute messages celebrating the life and legacy of loved ones', icon: '💐', color: 'from-violet-600 to-violet-800' },
    { title: 'शांति में विश्राम', subtitle: 'Rest in Peace', desc: 'Peaceful RIP messages and prayers for the eternal rest of the departed', icon: '🕊️', color: 'from-slate-600 to-slate-800' },
    { title: 'याद में', subtitle: 'In Memory', desc: 'Remembrance messages to keep the memory of loved ones alive forever', icon: '🌹', color: 'from-rose-600 to-rose-800' },
  ]

  const features = [
    { title: 'Hindi & English', desc: 'Complete bilingual support — all messages available in both हिंदी and English', icon: '🗣️', color: 'from-purple-500 to-violet-600' },
    { title: '5 Categories', desc: 'Condolence, Memorial, Tribute, Rest in Peace & In Memory — the right message for every moment', icon: '📂', color: 'from-indigo-500 to-indigo-700' },
    { title: 'Pre-Written Messages', desc: 'Professionally written, heartfelt messages ready to share — no typing needed', icon: '✍️', color: 'from-teal-500 to-emerald-600' },
    { title: 'Share Instantly', desc: 'Share messages directly to WhatsApp, Facebook, Instagram, SMS & other apps', icon: '📤', color: 'from-green-500 to-green-700' },
    { title: '100% Offline', desc: 'All content pre-loaded in the app — works without internet connection', icon: '📱', color: 'from-sky-500 to-blue-600' },
    { title: 'No Data Collection', desc: 'No login, no tracking, no ads, no analytics — complete privacy guaranteed', icon: '🔒', color: 'from-gray-600 to-gray-800' },
  ]

  const stats = [
    { value: '5', label: 'Categories' },
    { value: '2', label: 'Languages' },
    { value: '100%', label: 'Offline & Private' },
    { value: '🙏', label: 'Made with Respect' },
  ]

  const howItWorks = [
    { step: '01', title: 'Choose Category', desc: 'Select from Condolence, Memorial, Tribute, Rest in Peace or In Memory' },
    { step: '02', title: 'Pick Language', desc: 'Browse messages in Hindi (हिंदी) or English — or both' },
    { step: '03', title: 'Select Message', desc: 'Choose from beautifully written, heartfelt pre-written messages' },
    { step: '04', title: 'Share Directly', desc: 'Share instantly to WhatsApp, Facebook, SMS & other messaging apps' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/maran_shrandhanjali" className="flex items-center gap-2">
              <span className="text-3xl">🙏</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">Maran Shrandhanjali Poster</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#categories" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Categories</a>
              <a href="#features" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">How It Works</a>
              <Link href="/maran_shrandhanjali/privacy_policy_url" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Privacy Policy</Link>
              <a href="#download" className="bg-purple-800 text-white px-6 py-2.5 rounded-lg hover:bg-purple-900 font-semibold transition-all shadow-sm hover:shadow-md">
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
              <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Categories</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">How It Works</a>
              <Link href="/maran_shrandhanjali/privacy_policy_url" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-purple-800 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                🙏 हिंदी & English — Heartfelt Condolence Messages
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                श्रद्धांजलि Messages <span className="text-purple-700">Ready to Share</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
                Pre-written condolence, memorial & tribute messages in Hindi and English. Select, copy & share instantly on WhatsApp and social media.
              </p>
              <p className="text-lg text-gray-500 mb-10">
                शोक संदेश · स्मृति चिह्न · श्रद्धांजलि · शांति में विश्राम · याद में
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-purple-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-purple-900 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#categories" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-purple-600 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all text-center">
                  View Categories
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-5 p-3 bg-purple-800 rounded-lg">
                    <span className="text-2xl">🙏</span>
                    <span className="text-white font-bold text-lg">Maran Shrandhanjali</span>
                  </div>
                  {/* Message Cards Preview */}
                  <div className="space-y-3">
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <p className="text-xs text-purple-600 font-bold mb-1">श्रद्धांजलि · Tribute</p>
                      <p className="text-sm text-gray-700 leading-relaxed">ईश्वर दिवंगत आत्मा को शांति प्रदान करें और परिवार को इस दुख को सहने की शक्ति दें। 🙏</p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-medium">Hindi</span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">📤 Share</span>
                      </div>
                    </div>
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                      <p className="text-xs text-indigo-600 font-bold mb-1">Condolence · शोक संदेश</p>
                      <p className="text-sm text-gray-700 leading-relaxed">May the soul rest in eternal peace. Our deepest condolences to the family. 🕊️</p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full font-medium">English</span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">📤 Share</span>
                      </div>
                    </div>
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                      <p className="text-xs text-violet-600 font-bold mb-1">याद में · In Memory</p>
                      <p className="text-sm text-gray-700 leading-relaxed">जो चले गए वो हमेशा दिलों में रहेंगे। उनकी यादें अमर हैं। 🌹</p>
                      <div className="flex gap-2 mt-3">
                        <span className="text-xs bg-violet-200 text-violet-800 px-2 py-1 rounded-full font-medium">Hindi</span>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-medium">📤 Share</span>
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
      <section className="py-24 bg-purple-900 text-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-black mb-4">{stat.value}</div>
                <div className="text-purple-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-28 bg-gradient-to-br from-purple-50 to-violet-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">5 Message Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The right words for every moment — in Hindi and English</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-lg font-semibold text-purple-700 mb-3">{cat.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-lg">{cat.desc}</p>
              </div>
            ))}
            {/* Bilingual Card */}
            <div className="group bg-gradient-to-br from-purple-700 to-purple-900 border-2 border-purple-700 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                🗣️
              </div>
              <h3 className="text-3xl font-black mb-1">हिंदी & English</h3>
              <p className="text-lg font-semibold text-purple-300 mb-3">Bilingual</p>
              <p className="text-purple-100 leading-relaxed text-lg">Every message available in both Hindi and English — share in the language that feels right</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">App Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple, respectful & ready to share</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
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
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-gray-50 to-purple-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Share a heartfelt message in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-6xl font-black text-purple-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 text-3xl text-purple-300">→</div>
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why This App?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                When words fail, this app helps you express your condolences with dignity. Pre-written messages in Hindi and English — just select and share. No typing, no design skills needed.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Words That Matter', desc: 'Professionally written, culturally appropriate messages for Indian traditions' },
                  { title: 'Hindi First', desc: 'Full हिंदी support with beautiful typography — share in the language of the heart' },
                  { title: 'Zero Data Collection', desc: 'No login, no tracking, no ads, no analytics — your privacy is absolute' },
                  { title: 'Works Offline', desc: 'All messages pre-loaded — no internet needed to browse and copy messages' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 bg-purple-50 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-700 text-2xl font-bold">✓</span>
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
              <div className="bg-gradient-to-br from-purple-800 to-purple-950 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">🙏</div>
                  <h3 className="text-4xl font-bold mb-4">श्रद्धांजलि</h3>
                  <p className="text-xl mb-10 opacity-90">Heartfelt messages, ready to share</p>
                  <a href="#download" className="inline-block bg-white text-purple-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
                    Get the App →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-28 bg-purple-900 text-white">
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download the App Now</h2>
          <p className="text-2xl text-purple-200 mb-4">Share heartfelt condolence messages in Hindi & English</p>
          <p className="text-lg text-purple-300 mb-12">शोक संदेश · स्मृति चिह्न · श्रद्धांजलि · शांति में विश्राम · याद में</p>
          <a href="https://play.google.com/store/apps/details?id=com.maran.Shrandhanjali" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-purple-800 px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-xl font-black">Shrandhanjali</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Pre-written condolence & tribute messages in Hindi and English — ready to share</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Categories</h4>
              <div className="space-y-4">
                <span className="block text-gray-400 text-lg">शोक संदेश (Condolence)</span>
                <span className="block text-gray-400 text-lg">स्मृति चिह्न (Memorial)</span>
                <span className="block text-gray-400 text-lg">श्रद्धांजलि (Tribute)</span>
                <span className="block text-gray-400 text-lg">शांति में विश्राम (RIP)</span>
                <span className="block text-gray-400 text-lg">याद में (In Memory)</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <Link href="/maran_shrandhanjali/privacy_policy_url" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">📧 &lt;email&gt;</p>
              <p className="text-gray-400 text-lg">Made with 🙏 in India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Maran Shrandhanjali Poster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
