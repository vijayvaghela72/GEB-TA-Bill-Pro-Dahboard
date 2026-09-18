import Icon from '../../components/Icon'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

const features = [
  { title: 'Choose a photo', desc: 'Select a clear image from the gallery or capture a new one directly from the camera.', icon: 'camera', tone: 'bg-red-50 text-red-700' },
  { title: 'Generate a poster', desc: 'Turn essential details into a clear, well-formatted missing person poster automatically.', icon: 'poster', tone: 'bg-orange-50 text-orange-700' },
  { title: 'Save in high quality', desc: 'Capture the finished poster as a sharp image that is ready to print or publish.', icon: 'image', tone: 'bg-sky-50 text-sky-700' },
  { title: 'Share immediately', desc: 'Send the poster through WhatsApp, Facebook and other apps already on your phone.', icon: 'share', tone: 'bg-emerald-50 text-emerald-700' },
  { title: 'Multiple languages', desc: 'Create accessible posters in English, Hindi and regional Indian languages.', icon: 'language', tone: 'bg-violet-50 text-violet-700' },
  { title: 'Free to use', desc: 'Help spread important information without a subscription or hidden usage charges.', icon: 'heart', tone: 'bg-rose-50 text-rose-700' },
]

const steps = [
  { number: '01', title: 'Add the details', desc: 'Enter the person’s name, age, last-seen location, date and contact information.', icon: 'list' },
  { number: '02', title: 'Choose a photo', desc: 'Pick a clear image from your gallery or use the phone camera.', icon: 'camera' },
  { number: '03', title: 'Review the poster', desc: 'Check the generated layout and confirm that every detail is accurate.', icon: 'poster' },
  { number: '04', title: 'Save and share', desc: 'Download the final image and share it through your preferred channels.', icon: 'share' },
]

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why it matters', href: '#about' },
  { label: 'Privacy', href: '/missing_person/privacy_policy_url' },
]

export default function MissingPersonDashboard() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <SiteHeader brand="Missing Person Posters" homeHref="/missing_person" icon="search" accent="red" links={navLinks} />

      <main>
        <section className="relative overflow-hidden bg-[#fff7f6] pb-20 pt-[120px] sm:pb-24 sm:pt-[144px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(254,202,202,.55),transparent_32%),radial-gradient(circle_at_90%_50%,rgba(254,215,170,.45),transparent_30%)]" />
          <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr] lg:gap-20">
            <div>
              <span className="eyebrow mb-6 border-red-200 bg-white/70 text-red-700">
                <Icon name="heart" size={14} strokeWidth={2.2} /> Made in India, for every family
              </span>
              <h1 className="display-title text-slate-950">
                Create a clear poster <span className="text-red-600">when every second matters.</span>
              </h1>
              <p className="section-copy mt-6 max-w-2xl sm:text-lg">
                Make professional missing person posters in minutes, save them in high quality and share them across your community immediately.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#download" className="button-primary bg-red-600 text-white shadow-lg shadow-red-900/15 hover:bg-red-700">Download free app <Icon name="arrow" size={18} /></a>
                <a href="#how-it-works" className="button-secondary">See how it works</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['Quick to create', 'Multiple languages', 'Easy sharing'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><Icon name="check" size={16} className="text-red-600" />{item}</span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-red-200/70 to-orange-100/60 blur-2xl" />
              <div className="relative rounded-[28px] border border-white/80 bg-white/80 p-3 shadow-[0_30px_80px_rgba(117,40,40,.16)] backdrop-blur sm:p-5">
                <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white">
                  <div className="bg-red-600 px-5 py-4 text-center text-white">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-red-100">Missing person</p>
                    <p className="mt-1 text-xl font-black tracking-tight">गुमशुदा व्यक्ति</p>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex aspect-[16/8] items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-slate-200 shadow"><Icon name="users" size={30} /></span>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                      {[['Name', '<name>'], ['Age', '32 years'], ['Last seen', 'Ahmedabad, Gujarat'], ['Date', '15 January 2025']].map(([label, value], index) => (
                        <div key={label} className={`grid grid-cols-[88px_1fr] items-center gap-3 px-4 py-2.5 text-xs ${index ? 'border-t border-slate-100' : ''}`}>
                          <span className="font-medium text-slate-500">{label}</span><span className="text-right font-bold text-slate-800">{value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-xs font-bold text-red-700"><Icon name="phone" size={15} /> Contact: &lt;phone number&gt;</div>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-xs font-bold text-white"><Icon name="download" size={15} /> Save</div>
                      <div className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-3 text-xs font-bold text-white"><Icon name="share" size={15} /> Share</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="site-container grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
            {[['10K+', 'Posters created'], ['5K+', 'Active users'], ['50+', 'Cities covered'], ['24/7', 'Ready when needed']].map(([value, label]) => (
              <div key={label} className="px-4 py-8 text-center sm:py-10"><p className="text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">{value}</p><p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">{label}</p></div>
            ))}
          </div>
        </section>

        <section id="features" className="section-space bg-white">
          <div className="site-container">
            <div className="mb-12 max-w-2xl sm:mb-14">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-600">Fast, clear and accessible</span>
              <h2 className="section-title mt-4 text-slate-950">Everything needed to spread the word</h2>
              <p className="section-copy mt-5">A focused set of tools helps you create an accurate poster and reach more people quickly.</p>
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

        <section id="how-it-works" className="section-space bg-slate-50">
          <div className="site-container">
            <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-600">Four simple steps</span>
              <h2 className="section-title mt-4 text-slate-950">From details to a shareable poster</h2>
              <p className="section-copy mt-5">No design experience is required. The app guides you through the complete process.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700"><Icon name={step.icon} size={20} /></span><span className="text-sm font-black tracking-widest text-slate-300">{step.number}</span></div>
                  <h3 className="mt-7 font-extrabold text-slate-900">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-white">
          <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-red-600">Why it matters</span>
              <h2 className="section-title mt-4 text-slate-950">Built to help communities respond faster</h2>
              <p className="section-copy mt-5">When a person goes missing, clear information and fast distribution matter. This app makes both easier, so families and communities can focus on reaching people.</p>
            </div>
            <div className="rounded-3xl bg-[#172033] p-7 text-white shadow-2xl shadow-slate-900/15 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {[['clock', 'Create in minutes', 'A guided process keeps every step focused.'], ['share', 'Reach more people', 'Share through the channels your community uses.'], ['language', 'Be understood', 'Support for English, Hindi and regional languages.'], ['shield', 'Processed locally', 'Poster information stays on your device.']].map(([icon, title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5"><Icon name={icon} size={21} className="text-red-300" /><h3 className="mt-4 text-sm font-extrabold">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{desc}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="bg-red-600 py-16 text-white sm:py-20">
          <div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-200">Available on Android</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Help important information travel faster.</h2><p className="mt-4 max-w-xl text-base leading-7 text-red-100">Create a clear missing person poster and share it with your community in minutes.</p></div>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="button-primary shrink-0 bg-white text-red-700 shadow-xl hover:bg-red-50"><Icon name="download" size={18} /> Download from Play Store</a>
          </div>
        </section>
      </main>

      <SiteFooter brand="Missing Person Posters" icon="search" homeHref="/missing_person" accent="red" description="A simple way to create and share clear missing person posters across Indian communities." links={navLinks} contact="Available through the app" copyright="© 2026 Indian Missing Person Posters. All rights reserved." />
    </div>
  )
}
