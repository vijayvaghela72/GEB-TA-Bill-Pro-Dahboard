import Icon from '../../components/Icon'
import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'

const features = [
  { title: 'सम्पूर्ण विष्णु पुराण', desc: 'अठारह अध्याय और लगभग 12 घंटे 40 मिनट की सम्पूर्ण हिन्दी ऑडियो कथा।', icon: 'book', tone: 'bg-amber-50 text-amber-700' },
  { title: 'भक्ति संग्रह', desc: 'आरती, सहस्रनाम, स्तोत्र, चालीसा और जाप के आठ विशेष दैनिक पाठ।', icon: 'headphones', tone: 'bg-orange-50 text-orange-700' },
  { title: 'ऑफलाइन श्रवण', desc: 'सभी ऑडियो ऐप में उपलब्ध—कोई स्ट्रीमिंग, अकाउंट या इंटरनेट आवश्यक नहीं।', icon: 'offline', tone: 'bg-emerald-50 text-emerald-700' },
  { title: 'ज्ञान परीक्षा', desc: 'हर अध्याय पर तीन प्रश्न, उत्तर की व्याख्या और आपकी सर्वश्रेष्ठ प्रगति।', icon: 'quiz', tone: 'bg-violet-50 text-violet-700' },
  { title: 'साधना और बैज', desc: 'दैनिक लक्ष्य, श्रवण streak और भक्ति यात्रा के लिए पंद्रह उपलब्धि बैज।', icon: 'award', tone: 'bg-rose-50 text-rose-700' },
  { title: 'बुकमार्क और नोट्स', desc: 'कथा के किसी भी क्षण को निजी नोट के साथ अपने फोन में सुरक्षित रखें।', icon: 'bookmark', tone: 'bg-sky-50 text-sky-700' },
]

const chapters = [
  ['01', 'विष्णु पुराण का परिचय', '32:15'],
  ['02', 'सृष्टि की उत्पत्ति', '41:50'],
  ['03', 'ध्रुव की कथा', '38:20'],
  ['04', 'प्रह्लाद की कथा', '44:10'],
  ['05', 'समुद्र मंथन', '47:35'],
  ['18', 'सम्पूर्ण कथा — उपसंहार', '34:50'],
]

const navLinks = [
  { label: 'विशेषताएँ', href: '#features' },
  { label: 'अध्याय', href: '#chapters' },
  { label: 'प्रगति', href: '#progress' },
  { label: 'Privacy', href: '/vishnu-puran-audio/privacy-policy' },
]

export default function VishnuPuranAudio() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <SiteHeader brand="Vishnu Puran Audio" homeHref="/vishnu-puran-audio" icon="headphones" accent="amber" links={navLinks} />

      <main>
        <section className="relative overflow-hidden bg-[#fffaf0] pb-20 pt-[120px] sm:pb-24 sm:pt-[144px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(251,191,36,.18),transparent_28%),radial-gradient(circle_at_88%_42%,rgba(249,115,22,.12),transparent_30%)]" />
          <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr] lg:gap-20">
            <div>
              <span className="eyebrow mb-6 border-amber-300 bg-white/70 text-amber-800">ॐ नमो नारायणाय</span>
              <h1 className="display-title text-slate-950">सम्पूर्ण कथा।<br /><span className="text-amber-600">भक्ति और ज्ञान।</span></h1>
              <p className="section-copy mt-6 max-w-2xl sm:text-lg">विष्णु पुराण के सभी 18 अध्याय, दैनिक भक्ति पाठ और आपकी आध्यात्मिक प्रगति—एक शांत, सुगम और पूर्णतः ऑफलाइन अनुभव में।</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#download" className="button-primary bg-amber-600 text-white shadow-lg shadow-amber-900/15 hover:bg-amber-700">ऐप डाउनलोड करें <Icon name="arrow" size={18} /></a>
                <a href="#chapters" className="button-secondary">अध्याय देखें</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                {['बिना इंटरनेट', 'बिना अकाउंट', 'स्क्रीन बंद होने पर भी ऑडियो'].map((item) => <span key={item} className="flex items-center gap-2"><Icon name="check" size={16} className="text-amber-600" />{item}</span>)}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -inset-6 rounded-[38px] bg-gradient-to-br from-amber-200/80 to-orange-100/50 blur-2xl" />
              <div className="relative rounded-[30px] border border-white/80 bg-white/85 p-3 shadow-[0_30px_80px_rgba(120,74,18,.18)] backdrop-blur sm:p-5">
                <div className="overflow-hidden rounded-[22px] border border-amber-100 bg-[#fffdf8]">
                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-700 px-6 pb-8 pt-7 text-center text-white">
                    <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]" />
                    <p className="relative text-4xl font-bold">ॐ</p><p className="relative mt-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-100">अब सुन रहे हैं</p><h2 className="relative mt-2 text-xl font-black">ध्रुव की कथा</h2><p className="relative mt-1 text-xs text-amber-100">अध्याय ३ · 38:20</p>
                  </div>
                  <div className="p-5">
                    <div className="h-1.5 overflow-hidden rounded-full bg-amber-100"><div className="h-full w-[42%] rounded-full bg-amber-600" /></div>
                    <div className="mt-2 flex justify-between text-[10px] font-semibold text-slate-400"><span>16:08</span><span>38:20</span></div>
                    <div className="mt-5 flex items-center justify-center gap-8 text-slate-700"><span className="text-xs font-black">−15</span><span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg shadow-amber-900/20"><Icon name="play" size={23} /></span><span className="text-xs font-black">+15</span></div>
                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {[['bookmark', 'बुकमार्क'], ['clock', 'टाइमर'], ['share', 'शेयर']].map(([icon, label]) => <div key={label} className="flex flex-col items-center gap-2 rounded-xl bg-amber-50 px-2 py-3 text-[10px] font-bold text-amber-900"><Icon name={icon} size={17} />{label}</div>)}
                    </div>
                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-700"><Icon name="bell" size={17} /></span><div><p className="text-xs font-extrabold text-slate-800">आज का पाठ</p><p className="mt-0.5 text-[10px] text-slate-500">ॐ जय जगदीश हरे — आरती</p></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="site-container grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
            {[['18', 'सम्पूर्ण अध्याय'], ['12h 40m', 'कथा ऑडियो'], ['54', 'ज्ञान प्रश्न'], ['15', 'उपलब्धि बैज']].map(([value, label]) => <div key={label} className="px-4 py-8 text-center sm:py-10"><p className="text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">{value}</p><p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">{label}</p></div>)}
          </div>
        </section>

        <section id="features" className="section-space bg-white">
          <div className="site-container">
            <div className="mb-12 max-w-2xl sm:mb-14"><span className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-700">श्रवण से साधना तक</span><h2 className="section-title mt-4 text-slate-950">भक्ति के लिए बनाया गया सम्पूर्ण अनुभव</h2><p className="section-copy mt-5">कथा सुनें, ज्ञान परखें और अपनी दैनिक आध्यात्मिक यात्रा को सहजता से आगे बढ़ाएँ।</p></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{features.map((feature) => <article key={feature.title} className="feature-card"><span className={`icon-tile ${feature.tone}`}><Icon name={feature.icon} size={22} /></span><h3 className="mt-6 text-lg font-extrabold tracking-tight text-slate-900">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p></article>)}</div>
          </div>
        </section>

        <section id="chapters" className="section-space bg-slate-50">
          <div className="site-container grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <div><span className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-700">18 अध्याय</span><h2 className="section-title mt-4 text-slate-950">आरम्भ से फल श्रुति तक</h2><p className="section-copy mt-5">पराशर और मैत्रेय के संवाद से आरम्भ होने वाली कथा, सृष्टि, अवतार, भक्ति, कर्म और मोक्ष के मार्ग से होकर पूर्ण होती है।</p><p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900">पहले 5 अध्याय हमेशा निःशुल्क हैं। शेष अध्याय Android पर वैकल्पिक rewarded ad से स्थायी रूप से unlock होते हैं।</p></div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">{chapters.map(([number, title, duration], index) => <div key={number} className={`flex items-center gap-4 px-5 py-4 sm:px-6 ${index ? 'border-t border-slate-100' : ''}`}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xs font-black text-amber-700">{number}</span><p className="min-w-0 flex-1 truncate text-sm font-extrabold text-slate-800">{title}</p><span className="text-xs font-semibold text-slate-400">{duration}</span><Icon name="play" size={16} className="text-amber-600" /></div>)}</div>
          </div>
        </section>

        <section id="progress" className="section-space bg-white">
          <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="grid grid-cols-2 gap-4">{[['7 दिन', 'वर्तमान streak'], ['72%', 'दैनिक लक्ष्य'], ['12 / 18', 'अध्याय पूर्ण'], ['8 / 15', 'बैज प्राप्त']].map(([value, label], index) => <div key={label} className={`rounded-2xl border p-6 ${index === 1 ? 'border-amber-600 bg-amber-600 text-white' : 'border-slate-200 bg-slate-50 text-slate-900'}`}><p className="text-2xl font-black tracking-tight">{value}</p><p className={`mt-2 text-xs font-semibold ${index === 1 ? 'text-amber-100' : 'text-slate-500'}`}>{label}</p></div>)}</div>
            <div><span className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-700">आपकी भक्ति यात्रा</span><h2 className="section-title mt-4 text-slate-950">हर दिन थोड़ा श्रवण, हर दिन थोड़ा ज्ञान</h2><p className="section-copy mt-5">दैनिक listening goal तय करें, streak बनाए रखें, quiz पूरा करें और आध्यात्मिक उपलब्धियों के साथ पंद्रह विशेष badges अर्जित करें। सारी प्रगति केवल आपके फोन पर सुरक्षित रहती है।</p></div>
          </div>
        </section>

        <section id="download" className="bg-amber-600 py-16 text-white sm:py-20">
          <div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-200">Vishnu Puran Audio</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">अपनी श्रवण यात्रा आरम्भ करें।</h2><p className="mt-4 max-w-xl text-base leading-7 text-amber-100">सम्पूर्ण कथा और दैनिक भक्ति पाठ अपने Android फोन पर सुनें।</p></div><a href="https://play.google.com/store/apps/details?id=com.vishnu.puranaudio" target="_blank" rel="noopener noreferrer" className="button-primary shrink-0 bg-white text-amber-800 shadow-xl hover:bg-amber-50"><Icon name="download" size={18} /> Google Play से डाउनलोड करें</a></div>
        </section>
      </main>

      <SiteFooter brand="Vishnu Puran Audio" icon="headphones" homeHref="/vishnu-puran-audio" accent="amber" description="विष्णु पुराण की सम्पूर्ण हिन्दी ऑडियो कथा, दैनिक भक्ति पाठ और ज्ञान—पूर्णतः ऑफलाइन।" links={navLinks} contact="vijayvaghela7272@gmail.com" copyright="© 2026 Vishnu Puran Audio. All rights reserved." />
    </div>
  )
}
