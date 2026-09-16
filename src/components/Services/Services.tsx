import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

const base = import.meta.env.BASE_URL.replace(/\/$/, "")

// Real hardware images (background removed) with technical badges and color accents
const serviceHardwareMeta: Record<
  string,
  { image: string; badge: string; glow: string; borderAccent: string }
> = {
  motherboard: {
    image: `${base}/motherboard_ultra.png`,
    badge: "Power IC & Multi-Layer PCB",
    glow: "rgba(6, 182, 212, 0.22)",
    borderAccent: "group-hover:border-cyan-500/40",
  },
  macbook: {
    image: `${base}/hw_macbook.png`,
    badge: "Apple T2 & M-Series Logic",
    glow: "rgba(99, 102, 241, 0.22)",
    borderAccent: "group-hover:border-indigo-500/40",
  },
  vga: {
    image: `${base}/gpu_card_ultra.png`,
    badge: "BGA Reballing & Solder Matrix",
    glow: "rgba(245, 158, 11, 0.22)",
    borderAccent: "group-hover:border-amber-500/40",
  },
  liquid: {
    image: `${base}/hw_microsoldering.png`,
    badge: "Ultrasonic Bath & Trace Repair",
    glow: "rgba(16, 185, 129, 0.22)",
    borderAccent: "group-hover:border-emerald-500/40",
  },
  desktop: {
    image: `${base}/ram_ultra.png`,
    badge: "SMPS, VRM & High-Speed RAM",
    glow: "rgba(59, 130, 246, 0.22)",
    borderAccent: "group-hover:border-blue-500/40",
  },
  bios: {
    image: `${base}/storage_transparent.png`,
    badge: "SPI Flashing & Platter Extraction",
    glow: "rgba(168, 85, 247, 0.22)",
    borderAccent: "group-hover:border-purple-500/40",
  },
}

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang].services

  return (
    <section id="services" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{t.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
            {t.subtitle}
          </p>
        </div>

        {/* 6-Card Grid featuring Real Transparent Hardware Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item) => {
            const meta = serviceHardwareMeta[item.id] || {
              image: "/siddhi-infotech/hw_motherboard.png",
              badge: "Chip-Level Diagnostics",
              glow: "rgba(37, 99, 235, 0.15)",
              borderAccent: "group-hover:border-blue-500/40",
            }

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 ${meta.borderAccent} p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 backdrop-blur-sm`}
              >
                <div>
                  {/* Real Hardware Showcase Viewport */}
                  <div className="relative h-44 w-full rounded-2xl bg-black/60 border border-zinc-800/70 overflow-hidden flex items-center justify-center p-3 mb-5 group-hover:border-zinc-700 transition-colors">
                    {/* Backlight Glow */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at center, ${meta.glow} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Category Tag pill */}
                    <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                      {item.tag}
                    </div>

                    {/* Technical Spec Pill */}
                    <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800/80 text-[9px] font-mono text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{meta.badge}</span>
                    </div>

                    {/* Real Cutout Transparent Hardware PNG */}
                    <img
                      src={meta.image}
                      alt={item.title}
                      className="max-h-[82%] max-w-[82%] object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500 ease-out"
                      draggable={false}
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-6">
                    {item.brief}
                  </p>
                </div>

                {/* Direct WhatsApp Quote Action */}
                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20need%20a%20quote%20for%3A%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3.5 text-xs font-mono font-medium text-zinc-300 group-hover:text-cyan-400 transition-colors border-t border-zinc-800/80"
                >
                  <span>{t.askCost}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}