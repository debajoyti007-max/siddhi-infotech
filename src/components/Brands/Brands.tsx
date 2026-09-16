import { ShieldCheck } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Brands() {
  const { lang } = useLanguage()
  const t = translations[lang].brands

  return (
    <section id="brands" className="py-20 border-t border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
            {t.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-2">
            {t.title}
          </h2>
          <p className="text-xs font-mono text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {t.list.map((b) => (
            <div
              key={b.name}
              className="luxury-card rounded-xl p-4 text-center flex flex-col justify-center items-center group cursor-default"
            >
              <div className="font-display font-black text-base text-white group-hover:text-cyan-300 transition-colors">
                {b.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 mt-1">
                {b.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Live Testing Banner */}
        <div className="max-w-2xl mx-auto rounded-xl bg-zinc-950/80 border border-zinc-800/80 px-5 py-3.5 flex items-center justify-center gap-3 text-center backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-mono text-zinc-300">
            {t.guarantee}
          </span>
        </div>
      </div>
    </section>
  )
}