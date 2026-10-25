import Link from 'next/link'
import Icon from '../components/Icon'

const apps = [
  {
    title: 'GEB TA Bill Pro',
    desc: 'Travel allowance bill management for Gujarat Electricity Board employees.',
    href: '/geb_ta_bill',
    icon: 'bolt',
    bg: 'bg-blue-600',
    light: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-100',
    tag: 'Utility',
  },
  {
    title: 'App Xray',
    desc: 'Inspect, analyse and understand any installed app on your device.',
    href: '/appxray',
    icon: 'search',
    bg: 'bg-violet-600',
    light: 'bg-violet-50',
    text: 'text-violet-700',
    border: 'border-violet-100',
    tag: 'Tools',
  },
  {
    title: 'Arrow Escape',
    desc: 'A fast-paced arrow puzzle game to test your reflexes and focus.',
    href: '/arrow_escape',
    icon: 'play',
    bg: 'bg-orange-500',
    light: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-100',
    tag: 'Game',
  },
  {
    title: 'Death Registry',
    desc: 'Organised records and digital management for death registration.',
    href: '/death_registry',
    icon: 'bookmark',
    bg: 'bg-slate-700',
    light: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-200',
    tag: 'Registry',
  },
  {
    title: 'Funeral Poster',
    desc: 'Create respectful and well-designed funeral announcement posters.',
    href: '/funeral_poster',
    icon: 'poster',
    bg: 'bg-zinc-700',
    light: 'bg-zinc-100',
    text: 'text-zinc-700',
    border: 'border-zinc-200',
    tag: 'Design',
  },
  {
    title: 'Janazah',
    desc: 'Islamic funeral rites guide and announcement tool for communities.',
    href: '/janazah',
    icon: 'heart',
    bg: 'bg-emerald-600',
    light: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-100',
    tag: 'Community',
  },
  {
    title: 'Kutch News',
    desc: 'Latest news, updates and stories from the Kutch region of Gujarat.',
    href: '/kutch_news',
    icon: 'language',
    bg: 'bg-amber-500',
    light: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-100',
    tag: 'News',
  },
  {
    title: 'Maran Shrandhanjali',
    desc: 'મૃત્યુ સ્મરણ અને શ્રદ્ધાંજલિ — digital tribute and remembrance.',
    href: '/maran_shrandhanjali',
    icon: 'heart',
    bg: 'bg-rose-600',
    light: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-100',
    tag: 'Memorial',
  },
  {
    title: 'Missing Person',
    desc: 'Report and search for missing individuals with organised records.',
    href: '/missing_person',
    icon: 'users',
    bg: 'bg-red-600',
    light: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-100',
    tag: 'Community',
  },
  {
    title: 'RSS Shakti',
    desc: 'RSS feed aggregator bringing Shakti news and updates in one place.',
    href: '/rss_shakti',
    icon: 'bell',
    bg: 'bg-saffron bg-orange-600',
    light: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-100',
    tag: 'News',
  },
  {
    title: 'Shrandhanjali Poster',
    desc: 'Design beautiful shrandhanjali (tribute) posters for the departed.',
    href: '/shrandhanjali_poster',
    icon: 'image',
    bg: 'bg-indigo-600',
    light: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-100',
    tag: 'Design',
  },
  {
    title: 'Sudoku',
    desc: 'Classic number puzzle game with multiple difficulty levels.',
    href: '/sudoku',
    icon: 'quiz',
    bg: 'bg-teal-600',
    light: 'bg-teal-50',
    text: 'text-teal-700',
    border: 'border-teal-100',
    tag: 'Game',
  },
  {
    title: 'Vishnu Puran Audio',
    desc: 'Listen to the sacred Vishnu Puran with clean audio and verse navigation.',
    href: '/vishnu-puran-audio',
    icon: 'headphones',
    bg: 'bg-yellow-600',
    light: 'bg-yellow-50',
    text: 'text-yellow-700',
    border: 'border-yellow-200',
    tag: 'Spiritual',
  },
]

const tagColors = {
  Utility: 'bg-blue-50 text-blue-600',
  Tools: 'bg-violet-50 text-violet-600',
  Game: 'bg-orange-50 text-orange-600',
  Registry: 'bg-slate-100 text-slate-600',
  Design: 'bg-indigo-50 text-indigo-600',
  Community: 'bg-emerald-50 text-emerald-600',
  News: 'bg-amber-50 text-amber-600',
  Memorial: 'bg-rose-50 text-rose-600',
  Spiritual: 'bg-yellow-50 text-yellow-700',
}

export const metadata = {
  title: 'App Dashboard',
  description: 'All apps — find and launch any project from one place.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="site-container flex h-[68px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Icon name="bolt" size={18} strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-[1rem] font-extrabold tracking-tight text-slate-900 leading-tight">App Dashboard</p>
              <p className="text-[11px] font-medium text-slate-400 leading-tight">{apps.length} apps</p>
            </div>
          </div>
          <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 sm:block">
            All Projects
          </span>
        </div>
      </header>

      <main className="site-container py-10 sm:py-14">
        {/* Hero text */}
        <div className="mb-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            All Apps
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Select any app below to view its landing page and details.
          </p>
        </div>

        {/* App grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {apps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className={`group flex flex-col rounded-2xl border ${app.border} bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
            >
              {/* Icon + tag row */}
              <div className="flex items-start justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${app.bg} shadow-sm`}>
                  <Icon name={app.icon} size={22} strokeWidth={2} />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tagColors[app.tag] ?? 'bg-slate-100 text-slate-600'}`}>
                  {app.tag}
                </span>
              </div>

              {/* Title & desc */}
              <h2 className="mt-4 text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-slate-700">
                {app.title}
              </h2>
              <p className="mt-1.5 flex-1 text-xs leading-6 text-slate-500">
                {app.desc}
              </p>

              {/* View link */}
              <div className={`mt-4 flex items-center gap-1.5 text-xs font-bold ${app.text}`}>
                View app <Icon name="arrow" size={13} />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="site-container flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-slate-400">© 2026 App Dashboard. All rights reserved.</p>
          <p className="text-xs text-slate-400">{apps.length} projects</p>
        </div>
      </footer>
    </div>
  )
}
