'use client'

import Link from 'next/link'
import { useState } from 'react'

const deletedData = [
  { icon: '📄', label: 'All Bill Entries', desc: 'Every recorded journey and bill entry.' },
  { icon: '🗂️', label: 'Travel Records', desc: 'Historical travel logs and route details.' },
  { icon: '📊', label: 'Excel Report History', desc: 'Previously generated Excel report files.' },
  { icon: '⚙️', label: 'App Settings & Preferences', desc: 'Your saved preferences and configuration.' },
]

export default function GebTaBillDeleteAccount() {
  const [method, setMethod] = useState(null)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid #E5E7EB', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
          <Link href="/geb_ta_bill" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#2563EB' }}>GovtBill Pro (GEB TA Bill)</span>
          </Link>
          <Link href="/geb_ta_bill" style={{ color: '#2563EB', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🗑️</div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: '#111827', marginBottom: '0.5rem' }}>
            Delete Your Account
          </h1>
          <p style={{ color: '#6B7280', maxWidth: '480px', margin: '0 auto' }}>
            We are sorry to see you go. Deleting your account is permanent and cannot be undone.
          </p>
        </div>

        {/* Warning banner */}
        <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '14px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>⚠️</span>
          <div>
            <p style={{ fontWeight: 700, color: '#DC2626', marginBottom: '0.25rem' }}>This action is irreversible</p>
            <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Once your account is deleted, all your data will be permanently removed within 30 days.
            </p>
          </div>
        </div>

        {/* What gets deleted */}
        <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem', color: '#2563EB' }}>
            📋 What Will Be Deleted
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {deletedData.map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #E5E7EB' }}>
                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.1rem' }}>{item.label}</p>
                  <p style={{ color: '#6B7280', fontSize: '0.8rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deletion methods */}
        <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem', color: '#111827' }}>
            🔧 Choose a Deletion Method
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Method 1 */}
            <div
              onClick={() => setMethod(method === 1 ? null : 1)}
              style={{ padding: '1.25rem', backgroundColor: method === 1 ? '#EFF6FF' : '#fff', border: `1px solid ${method === 1 ? '#2563EB' : '#E5E7EB'}`, borderRadius: '12px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  <div>
                    <p style={{ fontWeight: 700, color: method === 1 ? '#2563EB' : '#111827' }}>Method 1: Delete from the App</p>
                    <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Fastest option — takes 1 minute</p>
                  </div>
                </div>
                <span style={{ color: '#9CA3AF' }}>{method === 1 ? '▲' : '▼'}</span>
              </div>
              {method === 1 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
                  <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151', fontSize: '0.9rem' }}>
                    <li>Open the <strong>GEB TA Bill Pro</strong> app on your device</li>
                    <li>Tap <strong>Menu</strong> (☰)</li>
                    <li>Go to <strong>Settings</strong></li>
                    <li>Tap <strong>Delete All Data</strong></li>
                    <li>Confirm to permanently remove your account and all data</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Method 2 */}
            <div
              onClick={() => setMethod(method === 2 ? null : 2)}
              style={{ padding: '1.25rem', backgroundColor: method === 2 ? '#EFF6FF' : '#fff', border: `1px solid ${method === 2 ? '#3B82F6' : '#E5E7EB'}`, borderRadius: '12px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>📧</span>
                  <div>
                    <p style={{ fontWeight: 700, color: method === 2 ? '#3B82F6' : '#111827' }}>Method 2: Request via Email</p>
                    <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>We will process within 7 business days</p>
                  </div>
                </div>
                <span style={{ color: '#9CA3AF' }}>{method === 2 ? '▲' : '▼'}</span>
              </div>
              {method === 2 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
                  <div style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '10px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#1E40AF' }}>
                    <p><strong style={{ color: '#6B7280' }}>To:</strong> flutterdeveloper72@gmail.com</p>
                    <p style={{ marginTop: '0.25rem' }}><strong style={{ color: '#6B7280' }}>Subject:</strong> GovtBill Pro Account Deletion Request</p>
                    <p style={{ marginTop: '0.25rem' }}><strong style={{ color: '#6B7280' }}>Body:</strong> Please delete my GovtBill Pro (GEB TA Bill) account. Registered mobile: +91XXXXXXXXXX</p>
                  </div>
                  <a
                    href="mailto:flutterdeveloper72@gmail.com?subject=GovtBill%20Pro%20Account%20Deletion%20Request&body=Please%20delete%20my%20GovtBill%20Pro%20(GEB%20TA%20Bill)%20account.%20Registered%20mobile%3A%20%2B91XXXXXXXXXX"
                    style={{ display: 'inline-block', marginTop: '1rem', backgroundColor: '#3B82F6', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}
                  >
                    Open Email Client →
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Timeline */}
        <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem', color: '#111827' }}>⏱️ Deletion Timeline</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { time: 'Immediately', desc: 'Session tokens invalidated — you are logged out on all devices.', color: '#16A34A' },
              { time: 'Within 24 hours', desc: 'Account deactivated — login blocked, data access removed.', color: '#2563EB' },
              { time: 'Within 30 days', desc: 'All personal data permanently deleted from our servers.', color: '#7C3AED' },
            ].map((item) => (
              <div key={item.time} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '130px', fontWeight: 700, fontSize: '0.8rem', color: item.color, paddingTop: '0.1rem' }}>{item.time}</div>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.875rem' }}>
          <p>Need help or changed your mind?</p>
          <a href="mailto:flutterdeveloper72@gmail.com" style={{ color: '#2563EB', fontWeight: 600, textDecoration: 'none' }}>
            flutterdeveloper72@gmail.com
          </a>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid #E5E7EB', padding: '1.5rem', textAlign: 'center', color: '#9CA3AF', fontSize: '0.875rem', marginTop: '2rem' }}>
        © 2026 GovtBill Pro (GEB TA Bill). All rights reserved. ·{' '}
        <Link href="/privacy-policy" style={{ color: '#6B7280', textDecoration: 'none' }}>Privacy Policy</Link>
      </footer>
    </div>
  )
}
