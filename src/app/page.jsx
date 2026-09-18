import Icon from '../components/Icon'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

const features = [
  { title: 'Add bill entries', desc: 'Record every journey with the dates, routes, fares and allowance details you need.', icon: 'receipt', tone: 'bg-blue-50 text-blue-700' },
  { title: 'Manage all bills', desc: 'Find, review and update previous entries from one organised, easy-to-use workspace.', icon: 'list', tone: 'bg-cyan-50 text-cyan-700' },
  { title: 'Export to Excel', desc: 'Create clean spreadsheets that are ready for reporting, review and record keeping.', icon: 'sheet', tone: 'bg-emerald-50 text-emerald-700' },
  { title: 'Share reports', desc: 'Send completed bill reports to colleagues or supervisors without extra manual work.', icon: 'share', tone: 'bg-violet-50 text-violet-700' },
  { title: 'Works offline', desc: 'Use the complete workflow without an internet connection, wherever duty takes you.', icon: 'offline', tone: 'bg-amber-50 text-amber-700' },
  { title: 'Private by design', desc: 'Your bill information remains stored locally on your device and under your control.', icon: 'shield', tone: 'bg-slate-100 text-slate-700' },
]

const benefits = [
  { title: 'Fast data entry', desc: 'A focused form helps you complete routine bill entries in less time.' },
  { title: 'Reliable offline access', desc: 'Review and prepare bills even when your network connection is unavailable.' },
  { title: 'Submission-ready reports', desc: 'Generate structured Excel files with a consistent professional format.' },
  { title: 'No subscription fees', desc: 'All essential tools are available without recurring charges.' },
]

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Overview', href: '#overview' },
  { label: 'Privacy', href: '/privacy-policy' },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <SiteHeader brand="GEB TA Bill Pro" homeHref="/" icon="bolt" links={navLinks} />

      <main>
        <section className="relative overflow-hidden bg-[#f5f8ff] pb-20 pt-[120px] sm:pb-24 sm:pt-[144px]">
          <div className="soft-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div>
              <span className="eyebrow mb-6 border-blue-200 bg-white/70 text-blue-700">
                <Icon name="bolt" size={14} strokeWidth={2.2} /> Built for GEB employees
              </span>
              <h1 className="display-title text-slate-950">
                Travel allowance bills, <span className="text-blue-600">made effortless.</span>
              </h1>
              <p className="section-copy mt-6 max-w-2xl sm:text-lg">
                A focused mobile app to record journeys, manage daily TA bills and create submission-ready Excel reports—online or offline.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#download" className="button-primary bg-blue-600 text-white shadow-lg shadow-blue-900/15 hover:bg-blue-700">
                  Download the app <Icon name="arrow" size={18} />
                </a>
                <a href="#features" className="button-secondary">Explore features</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['Offline ready', 'Local data', 'Excel export'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Icon name="check" size={16} className="text-blue-600" />{item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-blue-200/70 to-indigo-100/30 blur-2xl" />
              <div className="relative rounded-[28px] border border-white/80 bg-white/85 p-3 shadow-[0_30px_80px_rgba(36,72,130,.18)] backdrop-blur sm:p-5">
                <div className="overflow-hidden rounded-[21px] border border-slate-200 bg-[#f8fafc]">
                  <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white"><Icon name="bolt" size={18} /></span>
                      <div><p className="text-sm font-extrabold text-slate-900">TA Bill overview</p><p className="text-[11px] text-slate-500">September 2026</p></div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">Synced locally</span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-blue-600 p-4 text-white"><p className="text-[11px] font-medium text-blue-100">Monthly total</p><p className="mt-2 text-2xl font-extrabold tracking-tight">₹8,420</p></div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-[11px] font-medium text-slate-500">Bill entries</p><p className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">12</p></div>
                    </div>
                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="mb-4 flex items-center justify-between"><p className="text-xs font-bold text-slate-900">Recent journeys</p><span className="text-[11px] font-semibold text-blue-600">View all</span></div>
                      {[['Ahmedabad', 'Vadodara', '₹850'], ['Surat', 'Rajkot', '₹1,200'], ['Anand', 'Nadiad', '₹420']].map(([from, to, price], index) => (
                        <div key={from} className={`flex items-center gap-3 py-3 ${index ? 'border-t border-slate-100' : ''}`}>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><Icon name="pin" size={17} /></span>
                          <div className="min-w-0 flex-1"><p className="truncate text-xs font-bold text-slate-800">{from} → {to}</p><p className="mt-0.5 text-[10px] text-slate-500">Travel allowance</p></div>
                          <p className="text-xs font-extrabold text-slate-900">{price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white"><Icon name="sheet" size={16} /> Export monthly report</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="border-y border-slate-200 bg-white">
          <div className="site-container grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
            {[['1,000+', 'GEB employees'], ['50K+', 'Bills generated'], ['100%', 'Offline capable'], ['4.8/5', 'Simple experience']].map(([value, label]) => (
              <div key={label} className="px-4 py-8 text-center sm:py-10"><p className="text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">{value}</p><p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">{label}</p></div>
            ))}
          </div>
        </section>

        <section id="features" className="section-space bg-white">
          <div className="site-container">
            <div className="mb-12 max-w-2xl sm:mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">Everything in one place</span>
              <h2 className="section-title mt-4 text-slate-950">A simpler workflow for every TA bill</h2>
              <p className="section-copy mt-5">Purpose-built tools remove repetitive work from entry to final report.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <span className={`icon-tile ${feature.tone}`}><Icon name={feature.icon} size={22} /></span>
                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="section-space bg-slate-50">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">Designed for real work</span>
              <h2 className="section-title mt-4 text-slate-950">Less paperwork. More clarity.</h2>
              <p className="section-copy mt-5">A clean, dependable workflow that stays out of your way—from the first trip entry to the final submission.</p>
              <a href="#download" className="button-primary mt-8 bg-slate-900 text-white hover:bg-slate-800">Get started <Icon name="arrow" size={18} /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm font-extrabold text-blue-700">{index + 1}</span>
                  <h3 className="mt-5 font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="bg-blue-600 py-16 text-white sm:py-20">
          <div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-200">GEB TA Bill Pro</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Ready to simplify your TA bills?</h2><p className="mt-4 max-w-xl text-base leading-7 text-blue-100">Download the app and manage every travel allowance entry with speed and confidence.</p></div>
            <a href="https://play.google.com/store/apps/details?id=com.example.ta_bill" target="_blank" rel="noopener noreferrer" className="button-primary shrink-0 bg-white text-blue-700 shadow-xl hover:bg-blue-50"><Icon name="download" size={18} /> Download from Play Store</a>
          </div>
        </section>
      </main>

      <SiteFooter brand="GEB TA Bill Pro" icon="bolt" homeHref="/" description="Travel allowance bill management made simple for Gujarat Electricity Board employees." links={navLinks} contact="feedback@gebtabill.com" copyright="© 2026 GEB TA Bill Pro. All rights reserved." />
    </div>
  )
}
