import { ShieldCheck, CheckCircle2 } from "lucide-react"

const oemBrands = [
  { name: "MacBook", note: "Air, Pro & Intel / M1 / M2 / M3" },
  { name: "Dell", note: "XPS, Inspiron, Vostro, Latitude, Alienware" },
  { name: "Lenovo", note: "ThinkPad, IdeaPad, Legion, Yoga" },
  { name: "HP", note: "Pavilion, Omen, Envy, Victus, EliteBook" },
  { name: "ASUS", note: "TUF Gaming, ROG, ZenBook, VivoBook" },
  { name: "Acer", note: "Nitro, Predator, Aspire, Swift" },
  { name: "HCL", note: "Desktop PCs & All Laptop Models" },
]

export default function Brands() {
  return (
    <section id="brands" className="py-20 border-t border-zinc-800 bg-[#090a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
            All Models Supported
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-2">
            Brands We Repair Daily
          </h2>
          <p className="text-xs font-mono text-zinc-400">
            Original spare parts, screens, batteries &amp; chips available in Chandani Market.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {oemBrands.map((b) => (
            <div
              key={b.name}
              className="luxury-card rounded-xl p-4 text-center flex flex-col justify-between items-center group cursor-default"
            >
              <div className="font-display font-black text-lg text-white group-hover:text-cyan-300 transition-colors">
                {b.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 mt-2 leading-tight">
                {b.note}
              </div>
            </div>
          ))}
        </div>

        {/* Testing guarantee */}
        <div className="max-w-3xl mx-auto rounded-xl bg-zinc-950 border border-zinc-800 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white">
                Full Testing Before Delivery
              </div>
              <div className="text-xs text-zinc-400 font-sans mt-0.5">
                Thermal test, battery charge test, and display check done in front of you.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 shrink-0 bg-emerald-950/40 px-3 py-1.5 rounded border border-emerald-800/40">
            <CheckCircle2 className="w-4 h-4" />
            <span>Service Warranty</span>
          </div>
        </div>
      </div>
    </section>
  )
}