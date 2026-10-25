'use client'

import Link from 'next/link'
import { useState } from 'react'

const neon = {
  green: '#00FF88',
  cyan: '#00D4FF',
  pink: '#FF006E',
  purple: '#B14EFF',
  bg: '#0A0A0F',
  surface: '#12121A',
  border: '#1E1E2E',
}

const deletedData = [
  { icon: '👤', label: 'Account & Profile', desc: 'Your username, profile picture, and account details.' },
  { icon: '🎮', label: 'Game History', desc: 'All recently played games and playtime records.' },
  { icon: '❤️', label: 'Favourites', desc: 'Your saved/favourite games list.' },
  { icon: '🔐', label: 'Auth Tokens', desc: 'JWT tokens invalidated and removed immediately.' },
  { icon: '🔍', label: 'Preferences', desc: 'Category preferences, search history, and settings.' },
  { icon: '📊', label: 'Usage Data', desc: 'All analytics and interaction data linked to your account.' },
]

export default function GameliyoDeleteAccount() {
  const [step, setStep] = useState(1)
  const [method, setMethod] = useState(null)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: neon.bg, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, backgroundColor: 'rgba(10,10,15,0.95)', borderBottom: `1px solid ${neon.border}`, zIndex: 50, backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
          <Link href="/gameliyo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }}>🎮</span>
            <span style={{ fontWeight: 900, fontSize: '1.25rem', background: `linear-gradient(90deg, ${neon.green}, ${neon.cyan})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gameliyo</span>
          </Link>
          <Link href="/gameliyo" style={{ color: neon.green, textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🗑️</div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, marginBottom: '0.5rem' }}>
            Delete Your <span style={{ color: neon.pink }}>Account</span>
          </h1>
          <p style={{ color: '#9CA3AF', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            We are sorry to see you go. Deleting your account is permanent and cannot be undone.
          </p>
        </div>

        {/* Warning banner */}
        <div style={{ backgroundColor: `${neon.pink}11`, border: `1px solid ${neon.pink}44`, borderRadius: '14px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>⚠️</span>
          <div>
            <p style={{ fontWeight: 700, color: neon.pink, marginBottom: '0.25rem' }}>This action is irreversible</p>
            <p style={{ color: '#D1D5DB', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Once your account is deleted, all your data will be permanently removed within 30 days. You cannot recover your game history, favourites, or profile after deletion.
            </p>
          </div>
        </div>

        {/* What gets deleted */}
        <div style={{ backgroundColor: neon.surface, border: `1px solid ${neon.border}`, borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem', color: neon.cyan }}>
            📋 What Will Be Deleted
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {deletedData.map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem', backgroundColor: neon.bg, borderRadius: '10px', border: `1px solid ${neon.border}` }}>
                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.1rem' }}>{item.label}</p>
                  <p style={{ color: '#6B7280', fontSize: '0.8rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methods */}
        <div style={{ backgroundColor: neon.surface, border: `1px solid ${neon.border}`, borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem', color: neon.green }}>
            🔧 Choose a Deletion Method
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Method 1: In-App */}
            <div
              onClick={() => setMethod(method === 1 ? null : 1)}
              style={{ padding: '1.25rem', backgroundColor: method === 1 ? `${neon.green}11` : neon.bg, border: `1px solid ${method === 1 ? neon.green : neon.border}`, borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  <div>
                    <p style={{ fontWeight: 700, color: method === 1 ? neon.green : '#fff' }}>Method 1: Delete from the App</p>
                    <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Fastest option — takes 1 minute</p>
                  </div>
                </div>
                <span style={{ color: method === 1 ? neon.green : '#6B7280' }}>{method === 1 ? '▲' : '▼'}</span>
              </div>
              {method === 1 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${neon.border}` }}>
                  <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#D1D5DB', fontSize: '0.9rem' }}>
                    <li>Open the <strong>Gameliyo</strong> app on your device</li>
                    <li>Tap the <strong>Profile</strong> icon at the bottom</li>
                    <li>Go to <strong>Settings</strong></li>
                    <li>Tap <strong>&#34;Delete Account&#34;</strong></li>
                    <li>Confirm with your OTP verification</li>
                    <li>Your account will be deleted immediately</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Method 2: Email */}
            <div
              onClick={() => setMethod(method === 2 ? null : 2)}
              style={{ padding: '1.25rem', backgroundColor: method === 2 ? `${neon.cyan}11` : neon.bg, border: `1px solid ${method === 2 ? neon.cyan : neon.border}`, borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                  <div>
                    <p style={{ fontWeight: 700, color: method === 2 ? neon.cyan : '#fff' }}>Method 2: Request via Email</p>
                    <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>We will process it within 7 business days</p>
                  </div>
                </div>
                <span style={{ color: method === 2 ? neon.cyan : '#6B7280' }}>{method === 2 ? '▲' : '▼'}</span>
              </div>
              {method === 2 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: `1px solid ${neon.border}` }}>
                  <p style={{ color: '#D1D5DB', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Send an email with the following details:</p>
                  <div style={{ backgroundColor: neon.surface, padding: '1rem', borderRadius: '10px', border: `1px solid ${neon.border}`, fontFamily: 'monospace', fontSize: '0.85rem', color: neon.cyan }}>
                    <p><strong style={{ color: '#9CA3AF' }}>To:</strong> flutterdeveloper72@gmail.com</p>
                    <p style={{ marginTop: '0.25rem' }}><strong style={{ color: '#9CA3AF' }}>Subject:</strong> Gameliyo Account Deletion Request</p>
                    <p style={{ marginTop: '0.25rem' }}><strong style={{ color: '#9CA3AF' }}>Body:</strong> Please delete my Gameliyo account. Registered mobile: +91XXXXXXXXXX</p>
                  </div>
                  <a href="mailto:flutterdeveloper72@gmail.com?subject=Gameliyo%20Account%20Deletion%20Request&body=Please%20delete%20my%20Gameliyo%20account.%20Registered%20mobile%3A%20"
                    style={{ display: 'inline-block', marginTop: '1rem', background: `linear-gradient(135deg, ${neon.cyan}, #0099CC)`, color: '#000', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                    Open Email Client →
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Timeline */}
        <div style={{ backgroundColor: neon.surface, border: `1px solid ${neon.border}`, borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem', color: neon.purple }}>
            ⏱️ Deletion Timeline
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { time: 'Immediately', desc: 'JWT tokens invalidated — you are logged out on all devices.', color: neon.green },
              { time: 'Within 24 hours', desc: 'Account deactivated — login blocked, game access removed.', color: neon.cyan },
              { time: 'Within 30 days', desc: 'All personal data permanently deleted from our servers.', color: neon.purple },
            ].map((item) => (
              <div key={item.time} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '130px', fontWeight: 700, fontSize: '0.8rem', color: item.color, paddingTop: '0.1rem' }}>{item.time}</div>
                <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center', color: '#6B7280', fontSize: '0.875rem' }}>
          <p>Need help or changed your mind?</p>
          <a href="mailto:flutterdeveloper72@gmail.com" style={{ color: neon.green, fontWeight: 600, textDecoration: 'none' }}>
            flutterdeveloper72@gmail.com
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#05050A', borderTop: `1px solid ${neon.border}`, padding: '1.5rem', textAlign: 'center', color: '#4B5563', fontSize: '0.875rem', marginTop: '2rem' }}>
        © 2026 Gameliyo. All rights reserved. · <Link href="/gameliyo/privacy_policy" style={{ color: '#6B7280', textDecoration: 'none' }}>Privacy Policy</Link>
      </footer>
    </div>
  )
}
