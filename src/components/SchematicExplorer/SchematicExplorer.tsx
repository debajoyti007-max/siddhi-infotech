import { useState } from "react"
import { Activity, ShieldCheck, ArrowRight, Clock } from "lucide-react"

interface IssueItem {
  id: string
  name: string
  subtitle: string
  symptoms: string[]
  whatWeDo: string
  turnaround: string
}

const issuesList: IssueItem[] = [
  {
    id: "dead",
    name: "Dead Laptop (No Power / No Charging)",
    subtitle: "Laptop not turning on at all or charger light blinks",
    symptoms: [
      "Charger plugged in but no LED light or battery charging",
      "Power button clicked but completely zero response",
      "Laptop shuts down automatically within 2 seconds",
    ],
    whatWeDo:
      "We test the motherboard on a DC power bench, find short-circuited capacitors on the 19V line using thermal imaging, and replace faulty charging ICs or MOSFETs.",
    turnaround: "Same Day / 24 Hours",
  },
  {
    id: "gpu",
    name: "Display Lines / Graphics Glitch (VGA)",
    subtitle: "Lines on screen, blue screen errors, or black display",
    symptoms: [
      "Green, pink, or white lines and squares across the display",
      "Laptop crashes or freezes when playing games or watching videos",
      "Device Manager shows code 43 on NVIDIA or AMD card",
    ],
    whatWeDo:
      "We reball the graphics processor (GPU) on our infrared BGA rework station using leaded solder balls, clean old dried thermal paste, and test under full load.",
    turnaround: "24 - 48 Hours",
  },
  {
    id: "water",
    name: "Water Spill / Liquid Damage",
    subtitle: "Tea, coffee, rain or water dropped on laptop or MacBook",
    symptoms: [
      "Liquid entered through keyboard or vents",
      "Laptop turned off and won't turn on again",
      "Sticky keyboard or battery discharging rapidly",
    ],
    whatWeDo:
      "Full motherboard removal, chemical ultrasonic bath to remove corrosion, and microscope repair of damaged copper tracks and corroded resistor lines.",
    turnaround: "24 - 48 Hours",
  },
  {
    id: "bios",
    name: "Black Screen (Power On But No Display)",
    subtitle: "Fan spins, lights turn on, but screen stays completely black",
    symptoms: [
      "Laptop turns on, keyboard light on, but screen has no light",
      "Laptop stuck in continuous restart loop (bootloop)",
      "BIOS corrupted after a Windows update or BIOS update failed",
    ],
    whatWeDo:
      "We remove the 8-pin BIOS chip from the motherboard, reprogram it with clean verified firmware using a specialized programmer, and solder it back.",
    turnaround: "2 - 4 Hours (Same Day)",
  },
]

export default function SchematicExplorer() {
  const [selectedId, setSelectedId] = useState("dead")
  const activeIssue = issuesList.find((i) => i.id === selectedId) || issuesList[0]

  return (
    <section id="problems" className="py-20 bg-[#07070a] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-1">
              Common Issues We Solve
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              What Problem Is Your Laptop Having?
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            Click an issue below to see how we fix it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Issue buttons */}
          <div className="lg:col-span-4 space-y-2.5">
            {issuesList.map((item) => {
              const isSelected = selectedId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 border-violet-500 text-white shadow-lg shadow-black/40"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-mono font-semibold text-violet-400 mb-0.5">
                    {item.subtitle}
                  </div>
                  <div className="text-sm font-display font-bold text-white">{item.name}</div>
                </button>
              )
            })}
          </div>

          {/* Issue breakdown */}
          <div className="lg:col-span-8">
            <div className="luxury-card rounded-2xl p-6 sm:p-7 bg-[#090a10] border border-zinc-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 mb-5 gap-2">
                <h3 className="text-lg font-display font-bold text-white">
                  {activeIssue.name}
                </h3>
                <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-800/40 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Time: {activeIssue.turnaround}</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                    <span>Common Signs You Will See</span>
                  </div>
                  <ul className="space-y-1.5 text-xs font-mono text-zinc-300 bg-zinc-950 p-3.5 rounded-lg border border-zinc-800">
                    {activeIssue.symptoms.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-red-400">×</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>How We Repair It</span>
                  </div>
                  <div className="text-xs font-sans text-zinc-300 bg-zinc-950 p-3.5 rounded-lg border border-zinc-800 leading-relaxed">
                    {activeIssue.whatWeDo}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-zinc-800 gap-3">
                <div className="text-xs font-mono text-zinc-400">
                  Shop: 20 Ganesh Chandra Ave, Gate 6 Chandani Metro
                </div>
                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20my%20laptop%20has%20this%20issue%3A%20${encodeURIComponent(
                    activeIssue.name
                  )}.%20Please%20let%20me%20know%20the%20repair%20cost%20and%20time.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-mono font-medium transition-colors"
                >
                  <span>Ask Repair Cost on WhatsApp</span>
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