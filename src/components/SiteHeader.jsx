'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from './Icon'

export default function SiteHeader({ brand, homeHref, icon, accent = 'blue', links }) {
  const [open, setOpen] = useState(false)
  const isRed = accent === 'red'
  const isAmber = accent === 'amber'
  const actionClass = isRed ? 'bg-red-600 hover:bg-red-700 shadow-red-900/15' : isAmber ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-900/15' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-900/15'
  const hoverClass = isRed ? 'hover:text-red-700' : isAmber ? 'hover:text-amber-700' : 'hover:text-blue-700'
  const logoClass = isRed ? 'bg-red-600' : isAmber ? 'bg-amber-600' : 'bg-blue-600'

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <Link href={homeHref} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${logoClass}`}>
            <Icon name={icon} size={21} strokeWidth={2.2} />
          </span>
          <span className="truncate text-[1.05rem] font-extrabold tracking-[-0.025em] text-slate-900 sm:text-lg">{brand}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => link.href.startsWith('/') ? (
            <Link key={link.label} href={link.href} className={`text-sm font-semibold text-slate-600 transition-colors ${hoverClass}`}>{link.label}</Link>
          ) : (
            <a key={link.label} href={link.href} className={`text-sm font-semibold text-slate-600 transition-colors ${hoverClass}`}>{link.label}</a>
          ))}
          <a href="#download" className={`button-primary min-h-0 px-5 py-2.5 text-white shadow-lg ${actionClass}`}>Download app</a>
        </nav>

        <button type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 lg:hidden">
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
            {links.map((link) => link.href.startsWith('/') ? (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{link.label}</Link>
            ) : (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{link.label}</a>
            ))}
            <a href="#download" onClick={() => setOpen(false)} className={`button-primary mt-3 text-white ${actionClass}`}>Download app <Icon name="arrow" size={17} /></a>
          </div>
        </nav>
      )}
    </header>
  )
}
