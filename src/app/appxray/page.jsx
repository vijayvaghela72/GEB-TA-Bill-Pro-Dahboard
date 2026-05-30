'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AppXrayDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'All Installed Apps View',
      desc: 'Browse and inspect every app installed on your device with detailed metadata',
      icon: '📱',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Flutter Detection',
      desc: 'Identify Flutter apps with 5 advanced detection methods for accurate results',
      icon: '🎯',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'React Native Detection',
      desc: 'Detect React Native apps by analyzing internal bundle structures and libraries',
      icon: '⚛️',
      color: 'from-sky-400 to-blue-500',
    },
    {
      title: 'Hybrid App Detection',
      desc: 'Identify Cordova, Ionic, and Capacitor-based hybrid applications',
      icon: '🔀',
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Game Engine Detection',
      desc: 'Detect Unity, Unreal Engine, and Godot-powered games on your device',
      icon: '🎮',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Statistics Dashboard',
      desc: 'Visual breakdown of app frameworks, categories, and technology distribution',
      icon: '📊',
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Search & Filter',
      desc: 'Quickly find apps by name, package, or framework with powerful search tools',
      icon: '🔍',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'App Detail Screens',
      desc: 'Deep-dive into any app with comprehensive technical information and metadata',
      icon: '📋',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Permission Viewer',
      desc: 'Inspect all permissions requested by any app with clear explanations',
      icon: '🛡️',
      color: 'from-red-500 to-rose-600',
    },
    {
      title: 'APK Asset Explorer',
      desc: 'Browse internal assets, libraries, and resources inside any APK file',
      icon: '📦',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Material Design 3 UI',
      desc: 'Beautiful modern interface with full Dark and Light mode support',
      icon: '🎨',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Smart Caching & Refresh',
      desc: 'Intelligent caching with background refresh for fast, up-to-date results',
      icon: '⚡',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'In-App Updates',
      desc: 'Seamless updates delivered directly within the app — always stay current',
      icon: '🔄',
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Privacy First',
      desc: 'Fully offline operation with zero data collection — your data stays on device',
      icon: '🔒',
      color: 'from-gray-600 to-gray-800',
    },
  ]

  const stats = [
    { value: '14', label: 'Powerful Features' },
    { value: '5+', label: 'Framework Detectors' },
    { value: '100%', label: 'Offline & Private' },
    { value: '🎨', label: 'Material Design 3' },
  ]

  const howItWorks = [
    { step: '01', title: 'Install & Open', desc: 'Download AppXray and launch — no sign-up or permissions beyond basic access' },
    { step: '02', title: 'Scan Your Device', desc: 'AppXray automatically scans and categorizes all installed applications' },
    { step: '03', title: 'Explore Results', desc: 'Browse apps by framework, view stats, and deep-dive into any app details' },
    { step: '04', title: 'Discover Insights', desc: 'See which frameworks power your apps — Flutter, React Native, Unity & more' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/appxray" className="flex items-center gap-2">
              <span className="text-3xl">🔬</span>
              <span className="text-2xl font-black text-gray-900">AppXray</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">About</a>
              <Link href="/appxray/privacy_policy" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Privacy Policy</Link>
              <Link href="/appxray/terms" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Terms</Link>
              <a href="#download" className="bg-indigo-700 text-white px-6 py-2.5 rounded-lg hover:bg-indigo-800 font-semibold transition-all shadow-sm hover:shadow-md">
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
              <Link href="/appxray/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
              <Link href="/appxray/terms" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Terms</Link>
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block bg-indigo-700 text-white px-6 py-3 rounded-lg text-center font-semibold mt-2">
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                🔬 X-Ray Vision for Your Apps
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                App<span className="text-indigo-700">Xray</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Discover what frameworks power your installed apps. Detect Flutter, React Native, Unity, and more — all offline and private.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#features" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-indigo-700 hover:text-indigo-700 shadow-lg hover:shadow-xl transition-all text-center">
                  Explore Features
                </a>
              </div>
            </div>

            {/* Hero Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-400">AppXray</span>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="flex gap-2 mb-3">
                      {['All Apps', 'Flutter', 'React Native', 'Games'].map((tab, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                          {tab}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[
                        { title: 'Google Pay', framework: 'Flutter', icon: '💳', color: 'text-cyan-400' },
                        { title: 'Instagram', framework: 'React Native', icon: '📷', color: 'text-sky-400' },
                        { title: 'Subway Surfers', framework: 'Unity', icon: '🎮', color: 'text-pink-400' },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div className="flex-1">
                            <p className="text-white text-sm font-semibold">{item.title}</p>
                            <p className={`${item.color} text-xs font-bold`}>{item.framework}</p>
                          </div>
                          <span className="text-gray-500 text-xs">→</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-700">
                      <div className="flex justify-between text-xs text-gray-400 mb-2">
                        <span>Framework Distribution</span>
                        <span>42 apps scanned</span>
                      </div>
                      <div className="flex gap-1 h-3 rounded-full overflow-hidden">
                        <div className="bg-cyan-500 w-[35%]"></div>
                        <div className="bg-sky-500 w-[25%]"></div>
                        <div className="bg-pink-500 w-[15%]"></div>
                        <div className="bg-purple-500 w-[10%]"></div>
                        <div className="bg-gray-600 w-[15%]"></div>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">14 Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to analyze and understand the apps on your device</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-6xl font-black text-indigo-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 text-3xl text-indigo-300">→</div>
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why AppXray?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Ever wondered what technology powers your favorite apps? AppXray gives you X-ray vision into every app on your device — detecting frameworks, exploring permissions, and analyzing APK assets.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Multi-Framework Detection', desc: 'Detect Flutter, React Native, Cordova, Ionic, Capacitor, Unity, Unreal & Godot' },
                  { title: 'Complete Privacy', desc: 'Everything runs locally on your device — zero data leaves your phone' },
                  { title: 'Beautiful Material 3 UI', desc: 'Modern design with full dark and light mode support' },
                  { title: 'Smart Performance', desc: 'Intelligent caching and background refresh for instant results' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5 bg-indigo-50 rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-700 text-2xl font-bold">✓</span>
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
              <div className="bg-gradient-to-br from-indigo-700 to-purple-900 rounded-3xl p-16 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-8">🔬</div>
                  <h3 className="text-4xl font-bold mb-6">AppXray</h3>
                  <p className="text-xl mb-10 opacity-90">X-Ray vision for your apps.</p>
                  <a href="#download" className="inline-block bg-white text-indigo-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download AppXray</h2>
          <p className="text-2xl text-gray-300 mb-12">Free. Private. Discover what powers your apps.</p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-700 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-indigo-800 shadow-xl hover:shadow-2xl transition-all">
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
                <span className="text-3xl">🔬</span>
                <span className="text-2xl font-black">AppXray</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">X-Ray vision for your installed apps — detect frameworks, explore permissions & more</p>
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
                <Link href="/appxray/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <Link href="/appxray/terms" className="block text-gray-400 hover:text-white transition-colors text-lg">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">flutterdeveloper72@gmail.com</p>
              <p className="text-gray-400 text-lg">Made with ❤️ in India</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2026 AppXray. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
