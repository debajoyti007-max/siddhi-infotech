import { Cpu, Zap, Layers, MonitorSmartphone, Wrench, HardDrive, ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

const icons = [Cpu, Zap, Layers, Wrench, MonitorSmartphone, HardDrive]

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang].services

  return (
    <section id="services" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
              {t.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={item.id}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between group hover:border-zinc-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-4">
                    {item.brief}
                  </p>
                </div>

                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20inquiry%20regarding%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 text-xs font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors border-t border-zinc-800/60"
                >
                  <span>{t.askCost}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}