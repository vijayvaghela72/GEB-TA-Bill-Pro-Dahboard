'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FuneralPosterDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const posterCategories = [
    { title: 'Funeral', desc: 'Dignified funeral announcement posters to inform family & community', icon: '🕯️', color: 'from-gray-700 to-gray-900' },
    { title: 'Memorial', desc: 'Beautiful memorial posters to honor and remember loved ones', icon: '🌹', color: 'from-rose-600 to-rose-800' },
    { title: 'Condolence', desc: 'Heartfelt condolence posters to express sympathy and support', icon: '🙏', color: 'from-indigo-600 to-indigo-800' },
    { title: 'Death Anniversary', desc: 'Remembrance posters for death anniversaries and annual tributes', icon: '🕊️', color: 'from-purple-600 to-purple-800' },
    { title: 'Tribute', desc: 'Personal tribute posters celebrating the life of the departed', icon: '💐', color: 'from-amber-600 to-amber-800' },
  ]

  const features = [
    { title: '12+ Templates', desc: 'Professionally designed templates — Classic, Elegant, Floral, Minimal, Modern & more styles', icon: '🎨', color: 'from-purple-500 to-violet-600' },
    { title: 'Photo Upload', desc: 'Add a photo of your loved one from gallery or camera to personalize the poster', icon: '📸', color: 'from-sky-500 to-blue-600' },
    { title: 'Custom Text', desc: 'Edit name, dates, messages, quotes & all text elements to create the perfect tribute', icon: '✏️', color: 'from-teal-500 to-emerald-600' },
    { title: 'Share Instantly', desc: 'Share posters directly to WhatsApp, Facebook, Instagram & other messaging apps', icon: '📤', color: 'from-green-500 to-green-700' },
    { title: 'Download HD', desc: 'Save posters as high-quality images to your device gallery', icon: '💾', color: 'from-blue-500 to-blue-700' },
    { title: '100% Offline', desc: 'No login, no tracking, no data collection — everything stays on your device', icon: '🔒', color: 'from-gray-600 to-gray-800' },
  ]

  const stats = [
    { value: '5', label: 'Categories' },
    { value: '12+', label: 'Templates' },
    { value: '100%', label: 'Offline & Private' },
    { value: '🕊️', label: 'Made with Care' },
  ]

  const howItWorks = [
    { step: '01', title: 'Choose Category', desc: 'Select from Funeral, Memorial, Condolence, Death Anniversary or Tribute' },
    { step: '02', title: 'Pick a Template', desc: 'Browse 12+ beautifully designed templates for the right tone' },
    { step: '03', title: 'Customize', desc: 'Add photo, edit name, dates, messages & personalize every detail' },
    { step: '04', title: 'Share or Save', desc: 'Download as HD image or share directly to WhatsApp, Facebook & more' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/funeral_poster" className="flex items-center gap-2">
              <span className="text-3xl">🕊️</span>
              <span className="text-xl md:text-2xl font-black text-gray-900">Funeral Poster: Tribute Maker</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#categories" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Categories</a>
              <a href="#features" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">How It Works</a>
              <Link href="/funeral_poster/privacy_policy_url" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">Privacy Policy</Link>
              <a href="#download" className="bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-black font-semibold transition-all shadow-sm hover:shadow-md">
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
              <Link href="/funeral_poster/privacy_policy_url" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-gray-900 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-gray-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                🕊️ Honor & Remember — Beautiful Tribute Posters
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Create Tribute Posters <span className="text-purple-700">With Love</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Design beautiful funeral, memorial, condolence & tribute posters for your loved ones. 12+ templates, fully customizable, ready to share.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-black shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#categories" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-purple-600 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all text-center">
                  View Categories
                </a>
              </div>
            </div>

            {/* Hero Poster Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Poster Preview */}
                  <div className="border-2 border-purple-800 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-900 to-gray-900 text-white text-center py-3 px-4">
                      <p className="text-xs font-bold tracking-widest uppercase">🕊️ In Loving Memory 🕊️</p>
                      <p className="text-sm font-semibold mt-1 text-purple-300">Forever in Our Hearts</p>
                    </div>
                    <div className="bg-gradient-to-b from-purple-50 to-white p-4">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-3 border-4 border-purple-300">
                        <span className="text-4xl">👤</span>
                      </div>
                      <div className="text-center space-y-1">
                        <p className="text-lg font-black text-gray-900">&lt;name&gt;</p>
                        <p className="text-sm text-gray-500">1950 — 2025</p>
                        <div className="border-t border-purple-200 pt-2 mt-2">
                          <p className="text-xs text-gray-600 italic">&quot;Gone but never forgotten&quot;</p>
                          <p className="text-xs text-gray-500 mt-1">Funeral: 16 Jan 2025, 10:00 AM</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-900 to-gray-900 text-white text-center py-2 px-4">
                      <p className="text-xs">With love — &lt;name&gt; Family</p>
                    </div>
                  </div>
                  {/* Category Buttons */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-gray-50 rounded-lg p-2 text-center border border-gray-200">
                      <span className="text-lg">🕯️</span>
                      <div className="text-[10px] text-gray-600 mt-1 font-medium">Funeral</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2 text-center border border-purple-200">
                      <span className="text-lg">🌹</span>
                      <div className="text-[10px] text-gray-600 mt-1 font-medium">Memorial</div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-2 text-center border border-indigo-200">
                      <span className="text-lg">🙏</span>
                      <div className="text-[10px] text-gray-600 mt-1 font-medium">Condolence</div>
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

      {/* Poster Categories */}
      <section id="categories" className="py-28 bg-gradient-to-br from-purple-50 to-gray-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">5 Poster Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The right poster for every moment of remembrance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posterCategories.map((cat, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-500 hover:shadow-2xl transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${cat.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{cat.desc}</p>
              </div>
            ))}
            {/* Templates Card */}
            <div className="group bg-gradient-to-br from-purple-700 to-purple-900 border-2 border-purple-700 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                🎨
              </div>
              <h3 className="text-2xl font-black mb-3">12+ Templates</h3>
              <p className="text-purple-100 leading-relaxed text-lg">Classic, Elegant, Floral, Minimal, Modern & more — beautifully crafted designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to create meaningful tribute posters</p>
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Create a tribute poster in 4 simple steps</p>
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
                When we lose someone we love, words often fall short. This app helps you create dignified, beautiful posters to honor their memory — no design skills needed. Share tributes with family and friends in seconds.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Dignified & Respectful', desc: 'Every template is designed with care to honor the solemnity of the occasion' },
                  { title: 'Fully Customizable', desc: 'Edit every detail — photo, name, dates, messages, quotes & more' },
                  { title: 'Complete Privacy', desc: 'No login, no tracking, no data collection — everything stays on your device' },
                  { title: 'Free Forever', desc: 'Completely free to use with no subscriptions or hidden charges' },
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
              <div className="bg-gradient-to-br from-purple-800 to-gray-950 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">🕊️</div>
                  <h3 className="text-4xl font-bold mb-4">Honor Their Memory</h3>
                  <p className="text-xl mb-10 opacity-90">Beautiful tributes, made simple</p>
                  <a href="#download" className="inline-block bg-purple-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-purple-700 shadow-lg transition-all">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download the App Now</h2>
          <p className="text-2xl text-gray-300 mb-4">Create meaningful tribute posters for your loved ones</p>
          <p className="text-lg text-gray-400 mb-12">Funeral · Memorial · Condolence · Death Anniversary · Tribute</p>
          <a href="https://play.google.com/store/apps/details?id=com.funeral.poster" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-purple-800 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-3xl">🕊️</span>
                <span className="text-xl font-black">Tribute Maker</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">Create beautiful funeral, memorial & tribute posters to honor your loved ones</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Categories</h4>
              <div className="space-y-4">
                <span className="block text-gray-400 text-lg">Funeral</span>
                <span className="block text-gray-400 text-lg">Memorial</span>
                <span className="block text-gray-400 text-lg">Condolence</span>
                <span className="block text-gray-400 text-lg">Death Anniversary</span>
                <span className="block text-gray-400 text-lg">Tribute</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <Link href="/funeral_poster/privacy_policy_url" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">📧 &lt;email&gt;</p>
              <p className="text-gray-400 text-lg">Made with 🕊️ & care</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Funeral Poster: Tribute Maker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
