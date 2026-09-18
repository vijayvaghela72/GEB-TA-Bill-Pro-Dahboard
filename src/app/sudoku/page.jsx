'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SudokuDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      title: 'Multiple Difficulty Levels',
      desc: 'From Easy to Expert — choose your challenge and improve at your own pace',
      icon: '📊',
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Smart Hints',
      desc: 'Stuck on a cell? Get intelligent hints that guide you without giving away the answer',
      icon: '💡',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Auto-Save Progress',
      desc: 'Your game is saved automatically — pick up right where you left off anytime',
      icon: '💾',
      color: 'from-sky-500 to-blue-600',
    },
    {
      title: 'Statistics Tracking',
      desc: 'Track games played, win rate, best times, and streaks to measure your growth',
      icon: '📈',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Clean UI & Themes',
      desc: 'Beautiful minimalist design with light and dark theme support for comfortable play',
      icon: '🎨',
      color: 'from-rose-500 to-red-600',
    },
    {
      title: 'Completely Free',
      desc: 'No subscriptions, no paywalls. Play unlimited Sudoku puzzles for free',
      icon: '💚',
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  const stats = [
    { value: '∞', label: 'Unlimited Puzzles' },
    { value: '4', label: 'Difficulty Levels' },
    { value: '⭐', label: 'Top Rated' },
    { value: '🧠', label: 'Brain Training' },
  ]

  const howItWorks = [
    { step: '01', title: 'Pick Difficulty', desc: 'Choose from Easy, Medium, Hard, or Expert based on your skill level' },
    { step: '02', title: 'Fill the Grid', desc: 'Tap a cell and enter numbers 1-9 so each row, column, and 3x3 box is unique' },
    { step: '03', title: 'Use Hints', desc: 'Tap the hint button when stuck — or use notes to track possible numbers' },
    { step: '04', title: 'Complete & Win', desc: 'Fill every cell correctly to complete the puzzle and track your stats' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex justify-between items-center h-20">
            <Link href="/sudoku" className="flex items-center gap-2">
              <span className="text-3xl">🧠</span>
              <span className="text-2xl font-black text-gray-900">Sudoku Pro Puzzle</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">How to Play</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">About</a>
              <Link href="/sudoku/privacy_policy" className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">Privacy Policy</Link>
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
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">How to Play</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">About</a>
              <Link href="/sudoku/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
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
                🧠 Classic Brain Training — Play Anytime
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                The Ultimate <span className="text-emerald-700">Sudoku</span> Experience
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Challenge your brain with unlimited Sudoku puzzles. From beginner to expert — track your stats, beat your best time, and sharpen your mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-800 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  Download Free App
                  <span>→</span>
                </a>
                <a href="#how-it-works" className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-300 hover:border-emerald-700 hover:text-emerald-700 shadow-lg hover:shadow-xl transition-all text-center">
                  How to Play
                </a>
              </div>
            </div>

            {/* Hero Sudoku Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-400">Medium</span>
                  </div>
                  {/* Sudoku Grid Mockup */}
                  <div className="bg-gray-900 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-emerald-400 text-sm font-bold">⏱ 04:32</span>
                      <span className="text-gray-400 text-sm font-mono">Mistakes: 0/3</span>
                    </div>
                    <div className="grid grid-cols-9 gap-px bg-gray-600 border-2 border-gray-500 rounded">
                      {[
                        5,'',4,'','',7,'',8,'',
                        '',8,'','',5,'',4,'','',
                        '',3,'',8,'','','','',6,
                        8,'','','',1,'','',4,'',
                        '','',3,'','','',1,'','',
                        '',6,'','',9,'','','',8,
                        3,'','','','',4,'',2,'',
                        '',4,'','',7,'','',6,'',
                        '',7,'',2,'','',8,'',4
                      ].map((num, i) => (
                        <div key={i} className={`aspect-square flex items-center justify-center text-xs font-bold ${
                          num ? 'bg-gray-800 text-white' : 'bg-gray-850 text-emerald-400'
                        } ${
                          (Math.floor(i / 9) % 3 === 0 && i % 9 % 3 === 0) ? '' : ''
                        }`}
                        style={{ backgroundColor: num ? '#1f2937' : '#111827' }}>
                          {num || ''}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-2 mt-3">
                      {[1,2,3,4,5,6,7,8,9].map(n => (
                        <div key={n} className="w-7 h-7 bg-gray-800 rounded flex items-center justify-center text-emerald-400 text-xs font-bold">
                          {n}
                        </div>
                      ))}
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need for the perfect Sudoku experience</p>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-28 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">How to Play</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Master Sudoku in 4 simple steps</p>
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

      {/* About Section */}
      <section id="about" className="py-28 bg-white">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">Why Sudoku Pro?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Sudoku is the world&apos;s most popular number puzzle. Our app delivers a clean, distraction-free experience with smart features that make every session enjoyable.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Sharpen Your Mind', desc: 'Proven to improve memory, concentration, and logical thinking' },
                  { title: 'Play Offline', desc: 'No internet needed for gameplay — play anywhere, anytime' },
                  { title: 'No Ads During Play', desc: 'Ads only appear between games — never interrupting your focus' },
                  { title: 'Privacy First', desc: 'Zero personal data collected — everything stays on your device' },
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
                  <div className="text-8xl mb-8">🧠</div>
                  <h3 className="text-4xl font-bold mb-6">Train Your Brain</h3>
                  <p className="text-xl mb-10 opacity-90">Unlimited puzzles, zero cost</p>
                  <a href="#download" className="inline-block bg-white text-emerald-800 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 shadow-lg transition-all">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Download Sudoku Pro Puzzle</h2>
          <p className="text-2xl text-gray-300 mb-12">Free. No subscriptions. Just pure Sudoku.</p>
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
                <span className="text-3xl">🧠</span>
                <span className="text-2xl font-black">Sudoku Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">The classic number puzzle — beautifully designed for mobile</p>
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
                <Link href="/sudoku/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-lg">About</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <p className="text-gray-400 text-lg mb-2">sudokupropuzzle@gmail.com</p>
              <p className="text-gray-400 text-lg">Package: com.sudoku.level</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 text-center text-gray-400 text-lg">
            <p>© 2025 Sudoku Pro Puzzle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
