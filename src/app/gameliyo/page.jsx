'use client'

import Link from 'next/link'
import { useState } from 'react'

const neon = {
  green: '#00FF88',
  cyan: '#00D4FF',
  pink: '#FF006E',
  purple: '#B14EFF',
  orange: '#FF6B35',
  bg: '#0A0A0F',
  surface: '#12121A',
  border: '#1E1E2E',
}

const features = [
  { icon: '🎮', title: '500+ HTML5 Games', desc: 'Massive library of action, puzzle, sports, and arcade games — all in one app.', color: neon.green },
  { icon: '⚡', title: 'Instant Play', desc: 'Launch any game directly inside the app via WebView — no browser needed.', color: neon.cyan },
  { icon: '🏆', title: 'Popular & Trending', desc: 'Discover the hottest games with real-time popularity rankings and trending lists.', color: neon.purple },
  { icon: '🔍', title: 'Smart Search', desc: 'Find any game by name, tag, or category with instant filter results.', color: neon.orange },
  { icon: '❤️', title: 'Favorites & History', desc: 'Save your favourite games and pick up right where you left off with play history.', color: neon.pink },
  { icon: '📱', title: 'Full-Screen Player', desc: 'Immersive full-screen WebView game player built for mobile gaming.', color: neon.green },
  { icon: '🔐', title: 'OTP Login', desc: 'Secure mobile number OTP login — no passwords, no hassle.', color: neon.cyan },
  { icon: '🔔', title: 'Push Notifications', desc: 'Stay in the loop with new game alerts and personalised recommendations.', color: neon.purple },
  { icon: '🎯', title: 'Game Categories', desc: 'Browse games by genre — Action, Puzzle, Sports, Racing, Adventure & more.', color: neon.orange },
  { icon: '📊', title: 'User Profile & Stats', desc: 'Track your gaming stats, total playtime, and favourite genres.', color: neon.pink },
  { icon: '🌐', title: 'Gamezop Platform', desc: 'Powered by Gamezop — a trusted HTML5 gaming platform with 500+ premium games.', color: neon.green },
  { icon: '🚀', title: 'Fast & Smooth', desc: 'Optimised Flutter app with blazing fast load times and silky-smooth animations.', color: neon.cyan },
]

const steps = [
  { step: '01', title: 'Download & Sign Up', desc: 'Install Gameliyo and log in with your mobile number via OTP — takes 30 seconds.' },
  { step: '02', title: 'Browse Games', desc: 'Explore 500+ HTML5 games by category, popularity, or search for your favourite.' },
  { step: '03', title: 'Tap & Play', desc: 'Hit Play to launch any game instantly inside the app — no browser, no waiting.' },
  { step: '04', title: 'Save & Come Back', desc: 'Favourite games, check history, and jump back into the action anytime.' },
]

const categories = ['🏃 Action', '🧩 Puzzle', '⚽ Sports', '🏎️ Racing', '🗺️ Adventure', '🎲 Casual', '🧠 Brain', '🎯 Arcade']

export default function GameliyoDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: neon.bg, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>

      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${neon.border}`, zIndex: 50 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
            <Link href="/gameliyo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <span style={{ fontSize: '2rem' }}>🎮</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, background: `linear-gradient(90deg, ${neon.green}, ${neon.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gameliyo</span>
            </Link>

            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
              {[['#features', 'Features'], ['#how-it-works', 'How It Works'], ['#categories', 'Categories']].map(([href, label]) => (
                <a key={label} href={href} style={{ color: '#9CA3AF', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
                  onMouseEnter={e => e.target.style.color = neon.green}
                  onMouseLeave={e => e.target.style.color = '#9CA3AF'}>{label}</a>
              ))}
              <Link href="/gameliyo/privacy_policy" style={{ color: '#9CA3AF', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
                onMouseEnter={e => e.target.style.color = neon.green}
                onMouseLeave={e => e.target.style.color = '#9CA3AF'}>Privacy</Link>
              <a href="#download" style={{ background: `linear-gradient(135deg, ${neon.green}, ${neon.cyan})`, color: '#000', padding: '0.6rem 1.5rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', boxShadow: `0 0 16px ${neon.green}55` }}>
                Download
              </a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" style={{ background: 'none', border: `1px solid ${neon.border}`, color: '#fff', padding: '0.5rem', borderRadius: '8px', cursor: 'pointer', fontSize: '1.25rem' }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ borderTop: `1px solid ${neon.border}`, backgroundColor: neon.surface, padding: '1.5rem' }}>
            {[['#features', 'Features'], ['#how-it-works', 'How It Works'], ['#categories', 'Categories']].map(([href, label]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#ccc', padding: '0.75rem 0', fontWeight: 600, textDecoration: 'none' }}>{label}</a>
            ))}
            <Link href="/gameliyo/privacy_policy" onClick={() => setMenuOpen(false)} style={{ display: 'block', color: '#ccc', padding: '0.75rem 0', fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</Link>
            <a href="#download" onClick={() => setMenuOpen(false)} style={{ display: 'block', marginTop: '1rem', background: `linear-gradient(135deg, ${neon.green}, ${neon.cyan})`, color: '#000', padding: '0.75rem', borderRadius: '8px', fontWeight: 800, textAlign: 'center', textDecoration: 'none' }}>
              Download App
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', paddingLeft: '1.5rem', paddingRight: '1.5rem', background: `radial-gradient(ellipse at top, #0D1F17 0%, ${neon.bg} 60%)` }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: 'inline-block', marginBottom: '1.5rem', padding: '0.4rem 1rem', border: `1px solid ${neon.green}44`, borderRadius: '999px', color: neon.green, fontSize: '0.85rem', fontWeight: 700, backgroundColor: `${neon.green}11` }}>
                🎮 500+ Games · Dark Neon · Flutter
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.5rem' }}>
                Play <span style={{ background: `linear-gradient(90deg, ${neon.green}, ${neon.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>500+</span> Games<br />
                <span style={{ background: `linear-gradient(90deg, ${neon.pink}, ${neon.purple})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Inside the App</span>
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px' }}>
                Gameliyo brings 500+ HTML5 games directly to your phone — no browser needed. Login with OTP, browse categories, and play instantly in full-screen WebView.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#download" style={{ background: `linear-gradient(135deg, ${neon.green}, ${neon.cyan})`, color: '#000', padding: '0.9rem 2rem', borderRadius: '12px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: `0 0 24px ${neon.green}44`, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Download Free →
                </a>
                <a href="#features" style={{ border: `1px solid ${neon.border}`, color: '#fff', padding: '0.9rem 2rem', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', backgroundColor: neon.surface }}>
                  Explore Features
                </a>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[['500+', 'Games'], ['OTP', 'Login'], ['100%', 'Free to Play']].map(([val, label]) => (
                  <div key={label}>
                    <p style={{ fontSize: '1.25rem', fontWeight: 900, color: neon.green }}>{val}</p>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '280px', backgroundColor: neon.surface, borderRadius: '32px', border: `1px solid ${neon.border}`, padding: '1rem', boxShadow: `0 0 60px ${neon.green}22, 0 0 120px ${neon.cyan}11` }}>
                {/* Status bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.5rem 0.75rem', fontSize: '0.7rem', color: '#6B7280' }}>
                  <span>9:41</span><span>●●●</span>
                </div>
                {/* App header */}
                <div style={{ background: `linear-gradient(135deg, ${neon.green}22, ${neon.cyan}11)`, borderRadius: '16px', padding: '0.75rem', marginBottom: '0.75rem', border: `1px solid ${neon.green}33` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 900, color: neon.green, fontSize: '1rem' }}>🎮 Gameliyo</span>
                    <span style={{ fontSize: '0.7rem', color: neon.cyan }}>500+ Games</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.5rem', overflowX: 'auto' }}>
                    {['All', 'Action', 'Puzzle', 'Sports'].map((cat, i) => (
                      <span key={cat} style={{ padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.65rem', fontWeight: 700, backgroundColor: i === 0 ? neon.green : `${neon.border}`, color: i === 0 ? '#000' : '#9CA3AF', whiteSpace: 'nowrap' }}>{cat}</span>
                    ))}
                  </div>
                </div>
                {/* Game list */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {[
                    { name: 'Knife Smash', cat: 'Action', icon: '🔪', color: neon.pink },
                    { name: 'Sudoku Pro', cat: 'Puzzle', icon: '🧩', color: neon.cyan },
                    { name: 'Penalty Kick', cat: 'Sports', icon: '⚽', color: neon.green },
                    { name: 'Moto Rush', cat: 'Racing', icon: '🏎️', color: neon.orange },
                  ].map((game) => (
                    <div key={game.name} style={{ backgroundColor: '#1A1A2E', borderRadius: '12px', padding: '0.75rem', border: `1px solid ${game.color}22` }}>
                      <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{game.icon}</div>
                      <p style={{ fontSize: '0.65rem', fontWeight: 700, color: '#fff', marginBottom: '0.1rem' }}>{game.name}</p>
                      <p style={{ fontSize: '0.55rem', color: game.color }}>{game.cat}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '0.75rem', background: `linear-gradient(135deg, ${neon.green}, ${neon.cyan})`, borderRadius: '12px', padding: '0.6rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#000' }}>
                  ▶ Play Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '3rem 1.5rem', borderTop: `1px solid ${neon.border}`, borderBottom: `1px solid ${neon.border}`, backgroundColor: neon.surface }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {[['500+', 'HTML5 Games', neon.green], ['8+', 'Categories', neon.cyan], ['OTP', 'Secure Login', neon.purple], ['4.8★', 'User Rating', neon.pink]].map(([val, label, color]) => (
            <div key={label}>
              <p style={{ fontSize: '2.25rem', fontWeight: 900, color }}>{val}</p>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" style={{ padding: '4rem 1.5rem', backgroundColor: neon.bg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ color: neon.green, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Browse by Category</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900 }}>8 Game Categories</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <span key={cat} style={{ padding: '0.6rem 1.25rem', borderRadius: '999px', border: `1px solid ${neon.border}`, backgroundColor: neon.surface, fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = neon.green; e.currentTarget.style.color = neon.green; e.currentTarget.style.boxShadow = `0 0 12px ${neon.green}44` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = neon.border; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = 'none' }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '5rem 1.5rem', backgroundColor: neon.surface }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: neon.cyan, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Everything You Need</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900 }}>12 Powerful Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} style={{ backgroundColor: neon.bg, border: `1px solid ${neon.border}`, borderRadius: '16px', padding: '1.5rem', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = f.color; e.currentTarget.style.boxShadow = `0 0 20px ${f.color}22` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = neon.border; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: f.color }}>{f.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ padding: '5rem 1.5rem', backgroundColor: neon.bg }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: neon.purple, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Get Started Fast</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900 }}>How It Works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} style={{ backgroundColor: neon.surface, border: `1px solid ${neon.border}`, borderRadius: '16px', padding: '1.75rem', position: 'relative' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: `${neon.green}22`, marginBottom: '0.5rem' }}>{s.step}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: neon.green }}>{s.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem', lineHeight: 1.6 }}>{s.desc}</p>
                {i < steps.length - 1 && <div className="hidden lg:block" style={{ position: 'absolute', top: '50%', right: '-1.25rem', color: neon.green, fontSize: '1.5rem', zIndex: 1 }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" style={{ padding: '5rem 1.5rem', background: `linear-gradient(135deg, #0D1F17, #0A0A1A)`, borderTop: `1px solid ${neon.border}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Ready to <span style={{ color: neon.green }}>Play?</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Download Gameliyo and start playing 500+ games for free — right inside the app.
          </p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: `linear-gradient(135deg, ${neon.green}, ${neon.cyan})`, color: '#000', padding: '1rem 2.5rem', borderRadius: '14px', fontWeight: 900, fontSize: '1.1rem', textDecoration: 'none', boxShadow: `0 0 32px ${neon.green}44` }}>
            📲 Download from Play Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#05050A', borderTop: `1px solid ${neon.border}`, padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🎮</span>
                <span style={{ fontWeight: 900, fontSize: '1.25rem', background: `linear-gradient(90deg, ${neon.green}, ${neon.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gameliyo</span>
              </div>
              <p style={{ color: '#6B7280', lineHeight: 1.6, fontSize: '0.875rem' }}>500+ HTML5 games in one dark neon Flutter app. Play anywhere, anytime.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: neon.green }}>App</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[['#features', 'Features'], ['#categories', 'Categories'], ['#how-it-works', 'How It Works'], ['#download', 'Download']].map(([href, label]) => (
                  <a key={label} href={href} style={{ color: '#6B7280', textDecoration: 'none', fontSize: '0.875rem' }}
                    onMouseEnter={e => e.target.style.color = '#fff'}
                    onMouseLeave={e => e.target.style.color = '#6B7280'}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: neon.cyan }}>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href="/gameliyo/privacy_policy" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '0.875rem' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#6B7280'}>Privacy Policy</Link>
                <Link href="/gameliyo/delete_account" style={{ color: '#6B7280', textDecoration: 'none', fontSize: '0.875rem' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#6B7280'}>Delete Account</Link>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: neon.pink }}>Contact</h4>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '0.25rem' }}>flutterdeveloper72@gmail.com</p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Made with 💚 in India</p>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${neon.border}`, paddingTop: '1.5rem', textAlign: 'center', color: '#4B5563', fontSize: '0.875rem' }}>
            © 2026 Gameliyo. All rights reserved. Powered by Gamezop & Cashliyo API.
          </div>
        </div>
      </footer>
    </div>
  )
}
