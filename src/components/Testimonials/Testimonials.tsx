import { Star, ShieldCheck } from "lucide-react"

const reviews = [
  {
    name: "Suman Banerjee",
    role: "Studio Director & Video Editor",
    system: "MacBook Pro 16\" (M1 Max) � Liquid Ingress",
    content:
      "Apple service declared the logic board dead and quoted over ?85,000 for full replacement. Natvar Ji cleaned the corrosion, replaced two power ICs, and had the machine booting with all my editing projects intact within 36 hours. Absolute master of micro-soldering.",
  },
  {
    name: "Arindam Mukherjee",
    role: "Senior Full-Stack Architect",
    system: "Dell Alienware M15 � GPU Artifacts & Thermal Cutoff",
    content:
      "The dedicated RTX GPU was showing green lines and crashing under Load. Siddhi Infotech performed a professional BGA reball with high-grade leaded solder. The machine has run sustained compiler stress tests with no issues for 6 months now.",
  },
  {
    name: "Dr. Debashis Roy",
    role: "Kolkata Medical Institute",
    system: "ThinkPad T14 � Corrupt BIOS & Shorted Charging Rail",
    content:
      "A failed corporate BIOS update bricked the laptop completely. Natvar Ji desoldered the SPI EEPROM, reflashed clean firmware, and restored the laptop without any data wipe. Efficient, transparent, and fair pricing.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#07070a] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-400 mb-3">
            Verified Bench Restorations
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Trusted by Power Users Across Kolkata.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="luxury-card rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6 italic">
                  &ldquo;{r.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-display font-bold text-white tracking-wide">
                    {r.name}
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-[11px] font-mono text-zinc-400 mt-0.5">{r.role}</div>
                <div className="text-[10px] font-mono text-violet-400 mt-2 bg-violet-950/40 px-2 py-1 rounded border border-violet-800/30 inline-block">
                  {r.system}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
