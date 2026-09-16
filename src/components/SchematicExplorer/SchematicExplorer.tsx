import { useState } from "react"
import { Activity, ShieldCheck, ArrowRight } from "lucide-react"

interface ComponentSpec {
  id: string
  name: string
  location: string
  symptoms: string[]
  procedure: string
  voltage: string
  turnaround: string
}

const componentsList: ComponentSpec[] = [
  {
    id: "gpu",
    name: "Dedicated VGA / GPU (BGA Core)",
    location: "U8000 Graphics Subsystem",
    symptoms: ["Green/purple screen artifacts", "Blue screen (BSOD) on GPU driver load", "Device Manager Code 43 error"],
    procedure: "Precision BGA reballing with calibrated leaded solder spheres on infrared station + full VRAM diagnostic test.",
    voltage: "0.85V â€“ 1.15V NVVDD Core",
    turnaround: "24 - 48 Hours",
  },
  {
    id: "pmic",
    name: "Primary Power Management IC (PMIC)",
    location: "U7000 Intersil / TI Switching Regulator",
    symptoms: ["Completely dead board", "Zero current draw on DC power bench", "Power LED blinks and cuts out"],
    procedure: "Thermal camera short tracing, high-side MOSFET replacement, and PMIC controller micro-soldering.",
    voltage: "19.5V Main Rail / 3.3V & 5V Always-On",
    turnaround: "Same Day / 24h",
  },
  {
    id: "usbc",
    name: "USB-C / Thunderbolt Negotiation IC",
    location: "CD3215 / CD3217 Power Delivery Controller",
    symptoms: ["MacBook stuck at 5V 0.00A", "No charging on specific ports", "Intermittent external display connection"],
    procedure: "Stereomicroscope chip extraction, pad restoration, and replacement with factory-calibrated controller.",
    voltage: "5V -> 20V Power Delivery Handshake",
    turnaround: "24 Hours",
  },
  {
    id: "bios",
    name: "SPI Flash EEPROM (UEFI BIOS)",
    location: "U6100 8-Pin SOIC Flash Memory",
    symptoms: ["Power on with black screen and full fan speed", "Bootloop after failed update", "Corporate firmware lock"],
    procedure: "Direct chip programmer extraction, Intel ME region rebuild, and clean checksum flashing.",
    voltage: "3.3V SPI Bus Continuity",
    turnaround: "Same Day / 4 Hours",
  },
]

export default function SchematicExplorer() {
  const [selectedId, setSelectedId] = useState("gpu")
  const activeComponent = componentsList.find((c) => c.id === selectedId) || componentsList[0]

  return (
    <section className="py-24 bg-[#090a0f] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Micro-Soldering Diagnostic Inspector
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Motherboard Subsystem Architecture.
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400 max-w-sm">
            Select a logic board subsystem to review circuit symptoms and laboratory rework protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Subsystem Navigation Buttons */}
          <div className="lg:col-span-4 space-y-2.5">
            {componentsList.map((comp) => {
              const isSelected = selectedId === comp.id
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedId(comp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 border-cyan-500/50 text-white shadow-lg shadow-black/40"
                      : "bg-zinc-950/60 border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold text-cyan-400">
                      {comp.location}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                  </div>
                  <div className="text-sm font-display font-bold text-white">{comp.name}</div>
                </button>
              )
            })}
          </div>

          {/* Subsystem Technical Inspection Card */}
          <div className="lg:col-span-8">
            <div className="luxury-card rounded-2xl p-6 sm:p-8 bg-[#07070a] border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/[0.08] mb-6 gap-3">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    LABORATORY REPAIR PROTOCOL
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mt-0.5">
                    {activeComponent.name}
                  </h3>
                </div>
                <span className="self-start sm:self-auto px-3 py-1 rounded text-xs font-mono text-cyan-300 bg-cyan-950/50 border border-cyan-800/40">
                  {activeComponent.voltage}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                    <span>Common Failure Symptoms</span>
                  </div>
                  <ul className="space-y-1.5 text-xs font-mono text-zinc-300 bg-zinc-950/60 p-3.5 rounded-lg border border-white/5">
                    {activeComponent.symptoms.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-red-400">Ã—</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Laboratory Procedure</span>
                  </div>
                  <div className="text-xs font-mono text-zinc-300 bg-zinc-950/60 p-3.5 rounded-lg border border-white/5 leading-relaxed">
                    {activeComponent.procedure}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-5 border-t border-white/[0.08] gap-4">
                <div className="text-xs font-mono text-zinc-400">
                  Turnaround: <span className="text-white font-bold">{activeComponent.turnaround}</span> (Bench Triage)
                </div>
                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20inquiry%20regarding%20motherboard%20subsystem%3A%20${encodeURIComponent(
                    activeComponent.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono font-medium transition-all"
                >
                  <span>Book Diagnostic Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
