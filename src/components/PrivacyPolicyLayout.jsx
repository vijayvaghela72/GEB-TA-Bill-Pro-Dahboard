import Link from 'next/link'
import Icon from './Icon'

export default function PrivacyPolicyLayout({ policy, homeHref, icon, accent = 'blue', notice }) {
  const isRed = accent === 'red'
  const isAmber = accent === 'amber'
  const hasPublishedEmail = policy.contactEmail && !policy.contactEmail.startsWith('<')
  const accentText = isRed ? 'text-red-600' : isAmber ? 'text-amber-700' : 'text-blue-600'
  const accentBg = isRed ? 'bg-red-600' : isAmber ? 'bg-amber-600' : 'bg-blue-600'
  const noticeStyle = isRed ? 'border-red-200 bg-red-50 text-red-800' : isAmber ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-blue-200 bg-blue-50 text-blue-800'
  const linkHover = isRed ? 'hover:text-red-700' : isAmber ? 'hover:text-amber-700' : 'hover:text-blue-700'

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="site-container flex h-[72px] items-center justify-between gap-4">
          <Link href={homeHref} className="flex min-w-0 items-center gap-3">
            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ${accentBg}`}><Icon name={icon} size={20} strokeWidth={2.2} /></span>
            <span className="truncate text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">{policy.appName}</span>
          </Link>
          <Link href={homeHref} className={`shrink-0 text-sm font-bold text-slate-600 transition-colors ${linkHover}`}>← <span className="hidden sm:inline">Back to </span>home</Link>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
          <div className="site-container">
            <span className={`text-xs font-extrabold uppercase tracking-[0.16em] ${accentText}`}>Legal & privacy</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm font-medium text-slate-500">Last updated: {policy.lastUpdated}</p>
            {notice && <div className={`mt-7 max-w-3xl rounded-xl border px-4 py-3 text-sm font-semibold leading-6 ${noticeStyle}`}>{notice}</div>}
          </div>
        </section>

        <div className="site-container grid items-start gap-8 py-10 sm:py-14 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden lg:sticky lg:top-[104px] lg:block">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">On this page</p>
            <nav className="max-h-[calc(100vh-150px)] space-y-1 overflow-y-auto pr-3" aria-label="Policy contents">
              {policy.sections.map((section, index) => (
                <a key={section.title} href={`#policy-section-${index + 1}`} className={`block rounded-lg px-3 py-2 text-xs font-semibold leading-5 text-slate-500 transition-colors hover:bg-white ${linkHover}`}>{section.title}</a>
              ))}
            </nav>
          </aside>

          <article className="policy-copy overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,.055)]">
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-8">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700"><Icon name="shield" size={19} className={accentText} /> Your privacy, explained clearly</div>
            </div>
            <div className="divide-y divide-slate-200 px-5 sm:px-8">
              {policy.sections.map((section, index) => (
                <section key={section.title} id={`policy-section-${index + 1}`} className="py-8 sm:py-10">
                  <h2 className="text-xl font-extrabold tracking-[-0.025em] text-slate-900 sm:text-2xl">{section.title}</h2>
                  <p className="mt-4">{section.content}</p>
                  {section.list && (
                    <ul className="mt-4 space-y-3 pl-0">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3"><span className={`mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full ${accentBg}`} /><span>{item}</span></li>
                      ))}
                    </ul>
                  )}
                  {section.title.includes('Contact Us') && (
                    <div className={`mt-5 rounded-xl border p-5 ${noticeStyle}`}>
                      <p className="!text-sm !font-bold !text-current">{hasPublishedEmail ? `Email: ${policy.contactEmail}` : 'Contact details are available inside the app.'}</p>
                      <p className="mt-1 !text-sm !font-bold !text-current">App: {policy.appName}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>
            <div className="border-t border-slate-200 bg-slate-50 px-5 py-6 text-center sm:px-8">
              <p className="!text-sm">By using {policy.appName}, you agree to this Privacy Policy.</p>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-[#101827] py-8 text-center text-xs text-slate-500">
        <div className="site-container">© 2026 {policy.appName}. All rights reserved.</div>
      </footer>
    </div>
  )
}
