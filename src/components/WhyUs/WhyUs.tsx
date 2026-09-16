import { ShieldCheck, Cpu, CheckCircle2, Award, Zap, Crosshair } from "lucide-react"

const standards = [
  {
    icon: Crosshair,
    title: "FLIR Infrared Thermal Profiling",
    desc: "Thermal imaging exposes shorted capacitors, failing power MOSFETs, and thermal runaways in seconds without invasive probing.",
  },
  {
    icon: Cpu,
    title: "Infrared Multi-Zone BGA Station",
    desc: "Calibrated top and bottom heating profiles guarantee zero motherboard warping and flawless solder ball reconstitution.",
  },
  {
    icon: Zap,
    title: "High-Power Optical Stereoscopy",
    desc: "4K trinocular microscopic magnification enables surgical trace restoration, zero-tolerance connector alignment, and clean joint inspection.",
  },
  {
    icon: ShieldCheck,
    title: "OEM-Grade Micro-Components",
    desc: "We utilize authentic PMICs, high-temperature tantalums, and factory-fresh VRAM modules directly matching manufacturer schematics.",
  },
  {
    icon: Award,
    title: "A Decade of Board-Level Expertise",
    desc: "Over 10 continuous years operating from 20 Ganesh Chandra Avenue, Chandani Chowk � trusted by IT heads across West Bengal.",
  },
  {
    icon: CheckCircle2,
    title: "Post-Reflow Stress Validation",
    desc: "Repaired units undergo sustained FurMark, Cinebench, and thermal cycle stress tests before customer handover.",
  },
]

export default function WhyUs() {
  return (
    <section id="standards" className="py-28 bg-[#090a0f] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-400 mb-3">
              Laboratory Bench Protocol
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
              Engineering Rigor. <br />
              Zero Guesswork.
            </h2>
            <p className="text-sm text-zinc-400 font-normal leading-relaxed">
              Chip-level repair requires surgical precision. At Siddhi Infotech, every board is treated like an aerospace assembly � using calibrated thermal curves, optical verification, and component-level schematic analysis.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="luxury-card rounded-xl p-6 border-l-2 border-l-violet-500">
              <div className="text-3xl font-display font-black text-white">98.4%</div>
              <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                Logic Recovery Ratio
              </div>
            </div>
            <div className="luxury-card rounded-xl p-6 border-l-2 border-l-cyan-400">
              <div className="text-3xl font-display font-black text-white">10+ Yrs</div>
              <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                Chandani Market Legacy
              </div>
            </div>
            <div className="luxury-card rounded-xl p-6 border-l-2 border-l-purple-400">
              <div className="text-3xl font-display font-black text-white">24-48h</div>
              <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                Average Triage Window
              </div>
            </div>
            <div className="luxury-card rounded-xl p-6 border-l-2 border-l-emerald-400">
              <div className="text-3xl font-display font-black text-white">15+</div>
              <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                Global OEM Architectures
              </div>
            </div>
          </div>
        </div>

        {/* 6 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-start group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-violet-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
