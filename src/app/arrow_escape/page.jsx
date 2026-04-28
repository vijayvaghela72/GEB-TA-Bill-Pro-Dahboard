'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ArrowEscapeDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'Tap to Escape',
      desc: 'Simple one-tap controls — tap arrows to move them off the board and clear the puzzle',
      icon: '👆',
      color: 'from-indigo-500 to-blue-600',
    },
    {
      title: '500+ Levels',
      desc: 'Hundreds of handcrafted puzzles ranging from easy warm-ups to mind-bending challenges',
      icon: '🧩',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Daily Challenges',
      desc: 'New puzzles every day to keep your brain sharp and maintain your winning streak',
      icon: '📅',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Hints & Retries',
      desc: 'Stuck on a level? Use hints or free retries to get past tricky puzzles',
      icon: '💡',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Achievements',
      desc: 'Unlock milestones, earn stars, and track your progress across all levels',
      icon: '🏆',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Completely Free',
      desc: 'Free to play with optional rewarded ads for hints. No paywalls, no subscriptions',
      icon: '💚',
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  const stats = [
    { value: '500+', label: 'Puzzle Levels' },
    { value: '10K+', label: 'Downloads' },
    { value: '⭐ 4.5', label: 'User Rating' },
    { value: '🎮', label: 'Casual Fun' },
  ]

  const howItWorks = [
    { step: '01', title: 'Look at the Board', desc: 'Each level has arrows pointing in different directions on a grid' },
    { step: '02', title: 'Tap an Arrow', desc: 'Tap any arrow that has a clear path in the direction it points' },
    { step: '03', title: 'Clear the Board', desc: 'Remove all arrows from the board to complete the level' },
    { step: '04', title: 'Earn Stars', desc: 'Solve puzzles with fewer moves and less time to earn 3 stars' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/arrow_escape" className="flex items-center gap-2">
              <span className="text-3xl">🏹</span>
              <span className="text-2xl font-black text-gray-900">Arrow Escape</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">About</a>
              <Link href="/arrow_escape/privacy_policy" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Privacy Policy</Link>
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
              <Link href="/arrow_escape/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
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
                🎮 Addictive Puzzle Game — Train Your Brain
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Tap Away the Arrows, <span className="text-indigo-700">Solve the Puzzle</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                A relaxing yet challenging puzzle game. Tap arrows in the right order to clear the board. 500+ levels of brain-teasing fun!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free Game
                  <span>→</span>
                </a>
                <a href="#how-it-works" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-indigo-700 hover:text-indigo-700 shadow-lg hover:shadow-xl transition-all text-center">
                  How to Play
                </a>
              </div>
            </div>

            {/* Hero Game Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-400">Level 42</span>
                  </div>
                  {/* Game Board Mockup */}
                  <div className="bg-gray-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-yellow-400 text-sm font-bold">⭐⭐⭐</span>
                      <span className="text-gray-400 text-sm font-mono">Moves: 0/8</span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {['↑', '→', '↓', '←', '→', '↑', '←', '↓', '↑', '←', '↓', '→', '↓', '→', '↑', '←'].map((arrow, i) => (
                        <div key={i} className={`w-full aspect-square rounded-lg flex items-center justify-center text-2xl font-bold ${
                          i % 4 === 0 ? 'bg-indigo-600 text-white' :
                          i % 4 === 1 ? 'bg-purple-600 text-white' :
                          i % 4 === 2 ? 'bg-blue-600 text-white' :
                          'bg-violet-600 text-white'
                        }`}>
                          {arrow}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-4">
                      <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                        <span className="text-yellow-400 text-lg">💡</span>
                        <div className="text-gray-400 text-xs mt-1">Hint</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
                        <span className="text-green-400 text-lg">🔄</span>
                        <div className="text-gray-400 text-xs mt-1">Retry</div>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Game Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple to learn, hard to master — here&apos;s what makes Arrow Escape addictive</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white border-2 border-gray-200 rounded-2xl p-10 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300">
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
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How to Play</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Master the game in 4 simple steps</p>
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Arrow Escape?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Looking for a puzzle game that&apos;s easy to pick up but keeps you coming back? Arrow Escape combines simple tap mechanics with increasingly complex puzzles that challenge your logic and spatial thinking.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Brain Training', desc: 'Sharpen your logic and spatial reasoning with every level' },
                  { title: 'Relaxing Gameplay', desc: 'No timers on regular levels — solve at your own pace' },
                  { title: 'Offline Ready', desc: 'Play anywhere, anytime — no internet required for gameplay' },
                  { title: 'No Pay-to-Win', desc: 'Every level is beatable without spending a single penny' },
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
                  <div className="text-8xl mb-8">🏹</div>
                  <h3 className="text-4xl font-bold mb-6">Ready to Escape?</h3>
                  <p className="text-xl mb-10 opacity-90">500+ puzzles waiting for you</p>
                  <a href="#download" className="inline-block bg-white text-indigo-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
                    Play Now →
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download Arrow Escape Now</h2>
          <p className="text-2xl text-gray-300 mb-12">Free to play. No subscriptions. Just pure puzzle fun.</p>
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
                <span className="text-3xl">🏹</span>
                <span className="text-2xl font-black">Arrow Escape</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">A fun and addictive tap-away puzzle game for all ages</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Game</h4>
              <div className="space-y-4">
                <a href="#features" className="block text-gray-400 hover:text-white transition-colors text-lg">Features</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-lg">How to Play</a>
                <a href="#download" className="block text-gray-400 hover:text-white transition-colors text-lg">Download</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Legal</h4>
              <div className="space-y-4">
                <Link href="/arrow_escape/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">puzzleescapeapp@gmail.com</p>
              <p className="text-gray-400 text-lg">By PuzzleEscape</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 PuzzleEscape. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
