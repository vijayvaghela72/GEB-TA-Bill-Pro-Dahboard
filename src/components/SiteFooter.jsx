import Link from 'next/link'
import Icon from './Icon'

export default function SiteFooter({ brand, icon, description, homeHref, accent = 'blue', links, contact, copyright }) {
  const isRed = accent === 'red'
  const isAmber = accent === 'amber'
  const logoClass = isRed ? 'bg-red-500' : isAmber ? 'bg-amber-500' : 'bg-blue-500'

  return (
    <footer className="bg-[#101827] text-white">
      <div className="site-container py-14 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-16">
          <div className="max-w-sm">
            <Link href={homeHref} className="mb-5 inline-flex items-center gap-3">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${logoClass}`}><Icon name={icon} size={21} strokeWidth={2.2} /></span>
              <span className="text-lg font-extrabold tracking-tight">{brand}</span>
            </Link>
            <p className="text-sm leading-7 text-slate-400">{description}</p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Explore</p>
            <div className="flex flex-col gap-3">
              {links.map((link) => link.href.startsWith('/') ? (
                <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">{link.label}</Link>
              ) : (
                <a key={link.label} href={link.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-white">{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Contact</p>
            <p className="break-all text-sm font-medium text-slate-300">{contact}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <p>Built with privacy and simplicity in mind.</p>
        </div>
      </div>
    </footer>
  )
}
