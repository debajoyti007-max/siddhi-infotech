import { CheckCircle2, Shield } from "lucide-react"

const oemBrands = [
  { name: "MacBook", category: "Apple Silicon & Intel Logic Boards", tier: "Tier 1 Specialist" },
  { name: "Dell", category: "XPS � Alienware � Latitude � Inspiron", tier: "Board Level" },
  { name: "Lenovo", category: "ThinkPad � Legion � Yoga Architecture", tier: "Chip Specialist" },
  { name: "HP", category: "Spectre � Omen � EliteBook � Pavilion", tier: "Component Level" },
  { name: "ASUS", category: "ROG � TUF Gaming � ZenBook Systems", tier: "VGA & BGA Rework" },
  { name: "Acer", category: "Predator � Nitro Gaming � Swift Series", tier: "Power Circuit" },
  { name: "HCL", category: "Enterprise Motherboard & Legacy Systems", tier: "Desktop & Workstation" },
]

export default function Brands() {
  return (
    <section id="brands" className="py-24 border-t border-white/[0.06] bg-[#090a0f] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-3">
            OEM Ecosystem Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Certified Multi-Brand Architecture.
          </h2>
          <p className="text-sm text-zinc-400 font-mono">
            Direct schematic access and specialized boardview diagnostics for all major global manufacturers.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-14">
          {oemBrands.map((b) => (
            <div
              key={b.name}
              className="luxury-card rounded-xl p-5 text-center flex flex-col justify-between items-center group cursor-default"
            >
              <div className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase mb-3">
                {b.tier}
              </div>
              <div className="font-display font-black text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                {b.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-2.5 line-clamp-2 leading-relaxed">
                {b.category}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Guarantee Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-950/80 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-900/30 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white tracking-wide">
                Hardware Trace Integrity Guarantee
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                Zero solder bridging, correct thermal compound re-application, and post-repair bench testing under sustained load.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 shrink-0 bg-emerald-950/40 px-3.5 py-1.5 rounded-lg border border-emerald-800/40">
            <CheckCircle2 className="w-4 h-4" />
            <span>Bench Tested & Verified</span>
          </div>
        </div>
      </div>
    </section>
  )
}
