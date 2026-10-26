# Implementation Plan

## Project context

Repo: `d:\Google Ads Projects\GEB-TA-Bill-Pro-Dashboard` — Next.js 15, app-router, Tailwind v4, no test framework.
Build command: `npm run build` (from project root).
Verification: run build and confirm zero errors; all 13 new `/delete_account` routes must appear in the build output.

## Discovered conventions

- **SiteHeader/SiteFooter apps** — `geb_ta_bill` and `vishnu-puran-audio` use `src/components/SiteHeader.jsx` and `src/components/SiteFooter.jsx`. Both accept a `links` prop (`navLinks` array in each page.jsx). Adding one object to that array automatically populates the desktop nav, mobile nav, and footer "Explore" column — **one edit per file handles all three nav locations**.
- **Inline-nav apps** — all remaining 11 apps (appxray, arrow_escape, death_registry, funeral_poster, janazah, kutch_news, maran_shrandhanjali, missing_person, rss_shakti, shrandhanjali_poster, sudoku) have inline `mobileMenuOpen` state, a desktop `<div className="hidden md:flex">`, and a `<footer>` with a `Legal` column. **Three edit locations per file** (desktop nav, mobile menu, footer Legal div).
- **Delete page theme** — gameliyo's existing page uses a dark neon theme. All new pages use a **white/light theme**. Use `'use client'` + `useState(null)` accordion for the two deletion method cards.
- **Local-data-only apps** — device-side deletion only (no server step, no server timeline): `death_registry`, `funeral_poster`, `sudoku`, `maran_shrandhanjali`, `shrandhanjali_poster`, `rss_shakti`, `vishnu-puran-audio`, `missing_person`.
- **Server-side apps** — full in-app deletion flow + server timeline: `appxray`, `arrow_escape`, `geb_ta_bill`, `janazah`, `kutch_news`.
- **Dashboard card nesting** — `src/app/page.jsx` wraps each card in `<Link>`. Putting `<Link>` pills inside creates nested `<a>` tags (invalid HTML). Fix: change outer `<Link>` to `<article>`, make "View app →" an explicit `<Link>`, then add pills beside it.

---

## PART 1 — Create delete_account pages

### Item 1 — Server-side apps (5 new files)

Create `'use client'` pages with the full accordion + server timeline pattern. White/light theme.

**Files to create:**
- `src/app/appxray/delete_account/page.jsx`
- `src/app/arrow_escape/delete_account/page.jsx`
- `src/app/geb_ta_bill/delete_account/page.jsx`
- `src/app/janazah/delete_account/page.jsx`
- `src/app/kutch_news/delete_account/page.jsx`

**Page skeleton** (white theme, adapt per app):

```jsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

// App-specific deletedData array
const deletedData = [ { icon, label, desc }, ... ]

export default function <AppName>DeleteAccount() {
  const [method, setMethod] = useState(null)
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
          <Link href="/<appfolder>" className="flex items-center gap-2 no-underline">
            <span style={{ fontSize: '1.5rem' }}><EMOJI></span>
            <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '<PRIMARY_COLOR>' }}><APP_NAME></span>
          </Link>
          <Link href="/<appfolder>" style={{ color: '<PRIMARY_COLOR>', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🗑️</div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, color: '#111827' }}>
            Delete Your Account
          </h1>
          <p style={{ color: '#6B7280', maxWidth: '480px', margin: '0.5rem auto 0' }}>
            We are sorry to see you go. Deleting your account is permanent and cannot be undone.
          </p>
        </div>

        {/* Warning banner */}
        <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '14px', padding: '1.25rem 1.5rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.25rem' }}>⚠️</span>
          <div>
            <p style={{ fontWeight: 700, color: '#DC2626', marginBottom: '0.25rem' }}>This action is irreversible</p>
            <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Once your account is deleted, all your data will be permanently removed within 30 days.
            </p>
          </div>
        </div>

        {/* What gets deleted */}
        <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem', color: '<PRIMARY_COLOR>' }}>
            📋 What Will Be Deleted
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {deletedData.map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '0.75rem', padding: '0.875rem', backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #E5E7EB' }}>
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem' }}>{item.label}</p>
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

            {/* Method 1 — In-app */}
            <div onClick={() => setMethod(method === 1 ? null : 1)}
              style={{ padding: '1.25rem', backgroundColor: method === 1 ? '<PRIMARY_LIGHT>' : '#fff', border: `1px solid ${method === 1 ? '<PRIMARY_COLOR>' : '#E5E7EB'}`, borderRadius: '12px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  <div>
                    <p style={{ fontWeight: 700, color: method === 1 ? '<PRIMARY_COLOR>' : '#111827' }}>Method 1: Delete from the App</p>
                    <p style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>Fastest option — takes 1 minute</p>
                  </div>
                </div>
                <span style={{ color: '#9CA3AF' }}>{method === 1 ? '▲' : '▼'}</span>
              </div>
              {method === 1 && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
                  <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151', fontSize: '0.9rem' }}>
                    {/* App-specific numbered steps */}
                  </ol>
                </div>
              )}
            </div>

            {/* Method 2 — Email */}
            <div onClick={() => setMethod(method === 2 ? null : 2)}
              style={{ padding: '1.25rem', backgroundColor: method === 2 ? '#EFF6FF' : '#fff', border: `1px solid ${method === 2 ? '#3B82F6' : '#E5E7EB'}`, borderRadius: '12px', cursor: 'pointer' }}>
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
                    <p style={{ marginTop: '0.25rem' }}><strong style={{ color: '#6B7280' }}>Subject:</strong> <APP_NAME> Account Deletion Request</p>
                    <p style={{ marginTop: '0.25rem' }}><strong style={{ color: '#6B7280' }}>Body:</strong> Please delete my <APP_NAME> account. Registered mobile: +91XXXXXXXXXX</p>
                  </div>
                  <a href="mailto:flutterdeveloper72@gmail.com?subject=<APP_NAME>%20Account%20Deletion%20Request&body=Please%20delete%20my%20<APP_NAME>%20account."
                    style={{ display: 'inline-block', marginTop: '1rem', backgroundColor: '#3B82F6', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                    Open Email Client →
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Timeline (server-side apps only) */}
        <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '1.75rem', marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.25rem', color: '#111827' }}>⏱️ Deletion Timeline</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { time: 'Immediately', desc: 'Session tokens invalidated — you are logged out on all devices.', color: '#16A34A' },
              { time: 'Within 24 hours', desc: 'Account deactivated — login blocked, data access removed.', color: '<PRIMARY_COLOR>' },
              { time: 'Within 30 days', desc: 'All personal data permanently deleted from our servers.', color: '#7C3AED' },
            ].map((item) => (
              <div key={item.time} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ minWidth: '130px', fontWeight: 700, fontSize: '0.8rem', color: item.color }}>{item.time}</div>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ textAlign: 'center', color: '#9CA3AF', fontSize: '0.875rem' }}>
          <p>Need help or changed your mind?</p>
          <a href="mailto:flutterdeveloper72@gmail.com" style={{ color: '<PRIMARY_COLOR>', fontWeight: 600, textDecoration: 'none' }}>
            flutterdeveloper72@gmail.com
          </a>
        </div>
      </main>

      <footer style={{ borderTop: '1px solid #E5E7EB', padding: '1.5rem', textAlign: 'center', color: '#9CA3AF', fontSize: '0.875rem', marginTop: '2rem' }}>
        © 2026 <APP_NAME>. All rights reserved. ·{' '}
        <Link href="/<PRIVACY_URL>" style={{ color: '#6B7280', textDecoration: 'none' }}>Privacy Policy</Link>
      </footer>
    </div>
  )
}
```

**Per-app values to substitute:**

| Token | appxray | arrow_escape | geb_ta_bill | janazah | kutch_news |
|---|---|---|---|---|---|
| `<APP_NAME>` | Flutter App Finder | Arrow Escape | GovtBill Pro (GEB TA Bill) | Janazah | Indian News |
| `<EMOJI>` | 🔍 | 🏹 | ⚡ | ☪️ | 📰 |
| `<appfolder>` | /appxray | /arrow_escape | /geb_ta_bill | /janazah | /kutch_news |
| `<PRIMARY_COLOR>` | #7C3AED | #EA580C | #2563EB | #059669 | #D97706 |
| `<PRIMARY_LIGHT>` | #EDE9FE | #FFF7ED | #EFF6FF | #ECFDF5 | #FFFBEB |
| `<PRIVACY_URL>` | /appxray/privacy_policy | /arrow_escape/privacy_policy | /privacy-policy | /janazah/privacy_policy | /kutch_news/privacy_policy |

**What gets deleted per server-side app:**
- **appxray**: `{ icon:'📱', label:'Scan History' }`, `{ icon:'🔖', label:'Saved Analysis' }`, `{ icon:'⚙️', label:'App Preferences' }`, `{ icon:'📂', label:'Cache & Storage' }`
- **arrow_escape**: `{ icon:'🎮', label:'Game Progress' }`, `{ icon:'⭐', label:'Level Stars & Scores' }`, `{ icon:'📅', label:'Daily Challenge Streak' }`, `{ icon:'💡', label:'Hint Balance' }`, `{ icon:'🏆', label:'Achievements' }`
- **geb_ta_bill**: `{ icon:'📄', label:'All Bill Entries' }`, `{ icon:'🗂️', label:'Travel Records' }`, `{ icon:'📊', label:'Excel Report History' }`, `{ icon:'⚙️', label:'App Settings & Preferences' }`
- **janazah**: `{ icon:'📜', label:'Created Notices' }`, `{ icon:'🖼️', label:'Saved Templates & Photos' }`, `{ icon:'📋', label:'Memorial Records' }`, `{ icon:'🔔', label:'Push Notification Tokens' }`
- **kutch_news**: `{ icon:'📰', label:'Saved Articles' }`, `{ icon:'🔖', label:'Bookmarks' }`, `{ icon:'🔔', label:'Notification Settings' }`, `{ icon:'📂', label:'Reading History' }`, `{ icon:'⚙️', label:'Category Preferences' }`

**In-app deletion steps per server-side app:**
- **appxray**: `Open AppXray → tap the menu / overflow icon → Settings → Clear App Data → Confirm`
- **arrow_escape**: `Open Arrow Escape → Settings → Account → Delete Account → Confirm deletion`
- **geb_ta_bill**: `Open GEB TA Bill Pro → tap Menu → Settings → Delete All Data → Confirm`
- **janazah**: `Open Janazah → Profile icon → Settings → Delete Account → Confirm`
- **kutch_news**: `Open Indian News → tap Profile / Menu → Settings → Delete Account → Confirm`

---

### Item 2 — Local-data-only apps (8 new files)

Same white/light page structure as Item 1 **with these key differences**:

1. **Warning banner text** — "Your data is stored only on your device. Deleting it removes everything permanently and cannot be undone."
2. **Method 1 steps** — simplified to exactly four steps (no app-specific variations needed beyond the app name):
   1. Open the **[App Name]** app on your device
   2. Go to **Settings** / **Menu**
   3. Tap **Clear All Data** / **Delete Account**
   4. Confirm to remove all local data permanently
3. **No timeline section** — replace it with a single short note:
   ```
   Your data is stored only on your device. Clearing it takes effect immediately and is permanent.
   ```
4. **Email method** — same as server-side apps; use `flutterdeveloper72@gmail.com`.

**Files to create:**
- `src/app/death_registry/delete_account/page.jsx`
- `src/app/funeral_poster/delete_account/page.jsx`
- `src/app/sudoku/delete_account/page.jsx`
- `src/app/maran_shrandhanjali/delete_account/page.jsx`
- `src/app/shrandhanjali_poster/delete_account/page.jsx`
- `src/app/rss_shakti/delete_account/page.jsx`
- `src/app/vishnu-puran-audio/delete_account/page.jsx`
- `src/app/missing_person/delete_account/page.jsx`

**Per-app values:**

| App folder | APP_NAME | EMOJI | PRIMARY_COLOR | PRIMARY_LIGHT | Back href | Privacy footer link |
|---|---|---|---|---|---|---|
| death_registry | Maran Nodh & Death Registry | 📋 | #475569 | #F1F5F9 | /death_registry | /death_registry/privacy_policy_url |
| funeral_poster | Funeral Poster | 🕊️ | #52525B | #F4F4F5 | /funeral_poster | /funeral_poster/privacy_policy_url |
| sudoku | Sudoku Pro Puzzle | 🧩 | #0D9488 | #F0FDFA | /sudoku | /sudoku/privacy_policy |
| maran_shrandhanjali | Maran Shrandhanjali | 🙏 | #9333EA | #FAF5FF | /maran_shrandhanjali | /maran_shrandhanjali/privacy_policy_url |
| shrandhanjali_poster | Shrandhanjali Poster | 🙏 | #EA580C | #FFF7ED | /shrandhanjali_poster | /shrandhanjali_poster/privacy_policy_url |
| rss_shakti | RSS - Rashtra Shakti | 🚩 | #EA580C | #FFF7ED | /rss_shakti | /rss_shakti/privacy_policy |
| vishnu-puran-audio | Vishnu Puran Audio | 🕉️ | #D97706 | #FFFBEB | /vishnu-puran-audio | /vishnu-puran-audio/privacy-policy |
| missing_person | Missing Person Posters | 🔍 | #DC2626 | #FEF2F2 | /missing_person | /missing_person/privacy_policy_url |

**What gets deleted per local-data-only app:**
- **death_registry**: `{ icon:'📋', label:'Death Records' }`, `{ icon:'📄', label:'Saved Forms & Documents' }`, `{ icon:'⚙️', label:'App Settings' }`
- **funeral_poster**: `{ icon:'🎨', label:'Saved Poster Designs' }`, `{ icon:'🖼️', label:'Template & Photo Cache' }`, `{ icon:'⚙️', label:'App Settings' }`
- **sudoku**: `{ icon:'🧩', label:'Puzzle Progress' }`, `{ icon:'⭐', label:'High Scores' }`, `{ icon:'📅', label:'Daily Challenge Records' }`, `{ icon:'⚙️', label:'Settings & Preferences' }`
- **maran_shrandhanjali**: `{ icon:'🙏', label:'Saved Tributes' }`, `{ icon:'🖼️', label:'Poster Data & Images' }`, `{ icon:'⚙️', label:'App Settings' }`
- **shrandhanjali_poster**: `{ icon:'🎨', label:'Shrandhanjali Poster Designs' }`, `{ icon:'🖼️', label:'Template & Image Cache' }`, `{ icon:'⚙️', label:'App Settings' }`
- **rss_shakti**: `{ icon:'📰', label:'Saved Articles & Bookmarks' }`, `{ icon:'📋', label:'Sankalp Attendance Records' }`, `{ icon:'📖', label:'Reading History' }`, `{ icon:'⚙️', label:'App Settings' }`
- **vishnu-puran-audio**: `{ icon:'🎧', label:'Listening Progress' }`, `{ icon:'🔖', label:'Bookmarks & Notes' }`, `{ icon:'🧠', label:'Quiz Scores' }`, `{ icon:'🏅', label:'Badges & Streak Data' }`
- **missing_person**: `{ icon:'🔍', label:'Saved Missing Person Records' }`, `{ icon:'🖼️', label:'Poster Data & Photos' }`, `{ icon:'⚙️', label:'App Settings' }`

---

## PART 2 — Add Delete Account link to nav + footer

### Item 3 — geb_ta_bill and vishnu-puran-audio (SiteHeader + SiteFooter — 1 edit each)

**File: `src/app/geb_ta_bill/page.jsx`**
Locate the `navLinks` array (currently ends with `{ label: 'Privacy', href: '/privacy-policy' }`). Append:
```js
{ label: 'Delete Account', href: '/geb_ta_bill/delete_account' },
```

**File: `src/app/vishnu-puran-audio/page.jsx`**
Locate the `navLinks` array (currently ends with `{ label: 'Privacy', href: '/vishnu-puran-audio/privacy-policy' }`). Append:
```js
{ label: 'Delete Account', href: '/vishnu-puran-audio/delete_account' },
```

This single change covers all three nav locations (desktop, mobile, footer) because `SiteHeader` and `SiteFooter` both iterate `links`.

---

### Item 4 — Inline-nav apps (3 edits per file, 11 files)

**Files to modify:**
`src/app/appxray/page.jsx`, `src/app/arrow_escape/page.jsx`, `src/app/death_registry/page.jsx`, `src/app/funeral_poster/page.jsx`, `src/app/janazah/page.jsx`, `src/app/kutch_news/page.jsx`, `src/app/maran_shrandhanjali/page.jsx`, `src/app/missing_person/page.jsx`, `src/app/rss_shakti/page.jsx`, `src/app/shrandhanjali_poster/page.jsx`, `src/app/sudoku/page.jsx`

**Edit pattern — desktop nav** (inside `<div className="hidden md:flex ...">`, after the Privacy Policy `<Link>`):
```jsx
{/* existing: */}
<Link href="/appxray/privacy_policy" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Privacy Policy</Link>
{/* add immediately after: */}
<Link href="/appxray/delete_account" className="text-gray-700 hover:text-indigo-700 font-medium transition-colors">Delete Account</Link>
```

**Edit pattern — mobile menu** (inside `mobileMenuOpen && (...)`, after the Privacy Policy `<Link>`):
```jsx
{/* existing: */}
<Link href="/appxray/privacy_policy" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Privacy Policy</Link>
{/* add immediately after: */}
<Link href="/appxray/delete_account" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-medium py-2">Delete Account</Link>
```

**Edit pattern — footer Legal section** (inside `<div>` with `<h4>Legal</h4>`, after the Privacy Policy `<Link>`):
```jsx
{/* existing: */}
<Link href="/appxray/privacy_policy" className="block text-gray-400 hover:text-white transition-colors text-lg">Privacy Policy</Link>
{/* add immediately after: */}
<Link href="/appxray/delete_account" className="block text-gray-400 hover:text-white transition-colors text-lg">Delete Account</Link>
```

**App-specific delete_account hrefs and hover colors:**

| App | delete_account href | Hover color class |
|---|---|---|
| appxray | /appxray/delete_account | hover:text-indigo-700 |
| arrow_escape | /arrow_escape/delete_account | hover:text-orange-700 |
| death_registry | /death_registry/delete_account | hover:text-slate-700 |
| funeral_poster | /funeral_poster/delete_account | hover:text-zinc-700 |
| janazah | /janazah/delete_account | hover:text-emerald-700 |
| kutch_news | /kutch_news/delete_account | hover:text-amber-700 |
| maran_shrandhanjali | /maran_shrandhanjali/delete_account | hover:text-purple-700 |
| missing_person | /missing_person/delete_account | hover:text-red-700 |
| rss_shakti | /rss_shakti/delete_account | hover:text-orange-700 |
| shrandhanjali_poster | /shrandhanjali_poster/delete_account | hover:text-orange-700 |
| sudoku | /sudoku/delete_account | hover:text-teal-700 |

**Note on rss_shakti** — its footer Legal section already contains `Privacy Policy`, `Terms & Conditions`, and `Child Safety Policy`. Add Delete Account after Privacy Policy. The footer grid already uses 4 columns; the Legal column may need a space check but no structural changes are required.

---

## PART 3 — Update main dashboard

### Item 5 — `src/app/page.jsx`

#### Step A — Add `privacyUrl` and `deleteUrl` to every app object

Current app objects have no `privacyUrl` / `deleteUrl`. Add both fields to all 14 entries:

```js
{ title: 'GEB TA Bill Pro',       ..., privacyUrl: '/privacy-policy',                          deleteUrl: '/geb_ta_bill/delete_account' },
{ title: 'Gameliyo',              ..., privacyUrl: '/gameliyo/privacy_policy',                  deleteUrl: '/gameliyo/delete_account' },
{ title: 'App Xray',              ..., privacyUrl: '/appxray/privacy_policy',                   deleteUrl: '/appxray/delete_account' },
{ title: 'Arrow Escape',          ..., privacyUrl: '/arrow_escape/privacy_policy',              deleteUrl: '/arrow_escape/delete_account' },
{ title: 'Death Registry',        ..., privacyUrl: '/death_registry/privacy_policy_url',        deleteUrl: '/death_registry/delete_account' },
{ title: 'Funeral Poster',        ..., privacyUrl: '/funeral_poster/privacy_policy_url',        deleteUrl: '/funeral_poster/delete_account' },
{ title: 'Janazah',               ..., privacyUrl: '/janazah/privacy_policy',                   deleteUrl: '/janazah/delete_account' },
{ title: 'Kutch News',            ..., privacyUrl: '/kutch_news/privacy_policy',                deleteUrl: '/kutch_news/delete_account' },
{ title: 'Maran Shrandhanjali',   ..., privacyUrl: '/maran_shrandhanjali/privacy_policy_url',   deleteUrl: '/maran_shrandhanjali/delete_account' },
{ title: 'Missing Person',        ..., privacyUrl: '/missing_person/privacy_policy_url',        deleteUrl: '/missing_person/delete_account' },
{ title: 'RSS Shakti',            ..., privacyUrl: '/rss_shakti/privacy_policy',                deleteUrl: '/rss_shakti/delete_account' },
{ title: 'Shrandhanjali Poster',  ..., privacyUrl: '/shrandhanjali_poster/privacy_policy_url',  deleteUrl: '/shrandhanjali_poster/delete_account' },
{ title: 'Sudoku',                ..., privacyUrl: '/sudoku/privacy_policy',                    deleteUrl: '/sudoku/delete_account' },
{ title: 'Vishnu Puran Audio',    ..., privacyUrl: '/vishnu-puran-audio/privacy-policy',        deleteUrl: '/vishnu-puran-audio/delete_account' },
```

#### Step B — Restructure card to avoid nested `<a>` elements

Current: entire card is a `<Link>` (renders as `<a>`). Putting pill `<Link>`s inside creates invalid nested anchors.

**Replace** the current `<Link key={app.href} href={app.href} className="group flex flex-col ...">` card with an `<article>`:

```jsx
{apps.map((app) => (
  <article
    key={app.href}
    className={`flex flex-col rounded-2xl border ${app.border} bg-white p-5 shadow-sm`}
  >
    {/* Icon + tag row — unchanged */}
    <div className="flex items-start justify-between">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${app.bg} shadow-sm`}>
        <Icon name={app.icon} size={22} strokeWidth={2} />
      </span>
      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tagColors[app.tag] ?? 'bg-slate-100 text-slate-600'}`}>
        {app.tag}
      </span>
    </div>

    {/* Title & desc */}
    <h2 className="mt-4 text-sm font-extrabold tracking-tight text-slate-900">
      {app.title}
    </h2>
    <p className="mt-1.5 flex-1 text-xs leading-6 text-slate-500">
      {app.desc}
    </p>

    {/* View link + pill links */}
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <Link href={app.href} className={`flex items-center gap-1 text-xs font-bold ${app.text} hover:opacity-80`}>
        View app <Icon name="arrow" size={13} />
      </Link>
      <Link
        href={app.privacyUrl}
        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
      >
        🔒 Privacy Policy
      </Link>
      <Link
        href={app.deleteUrl}
        className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-500 hover:bg-red-100 transition-colors"
      >
        🗑️ Delete Account
      </Link>
    </div>
  </article>
))}
```

---

## Verification

Run from `d:\Google Ads Projects\GEB-TA-Bill-Pro-Dashboard`:

```
npm run build
```

**Expected outcome:**
- Exit code 0, no TypeScript/JSX errors.
- All 13 new `delete_account` routes appear in the build output (e.g., `○ /appxray/delete_account`, `○ /geb_ta_bill/delete_account`, etc.).
- No "Unknown property" or "Unexpected token" errors.

If the build reports errors about unknown Tailwind classes used in the new pages (rare under v4), switch those classes to inline `style` props matching the existing pattern in `gameliyo/delete_account/page.jsx`.
