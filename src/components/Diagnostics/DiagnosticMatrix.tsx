import { useState } from "react"
import { Laptop, Cpu, Monitor, Smartphone, AlertTriangle, ArrowRight, Check, Activity } from "lucide-react"

interface IssueDef {
  label: string
  cause: string
  procedure: string
  turnaround: string
  complexity: "Standard" | "Advanced" | "Critical BGA"
}

const deviceTypes = [
  { id: "macbook", name: "Apple MacBook", icon: Laptop },
  { id: "laptop", name: "Windows Laptop", icon: Cpu },
  { id: "desktop", name: "Desktop PC", icon: Monitor },
  { id: "mobile", name: "Mobile Device", icon: Smartphone },
]

const issuesByDevice: Record<string, IssueDef[]> = {
  macbook: [
    {
      label: "No Power / Zero Current Draw",
      cause: "Blown PPBUS_G3H or CD3215/CD3217 USB-C controller failure",
      procedure: "Micro-soldering replacement of USB-C negotiation ICs & short capacitor removal",
      turnaround: "24 - 48 Hours",
      complexity: "Critical BGA",
    },
    {
      label: "Liquid Ingress / Corrosion",
      cause: "Active electrochemical corrosion on keyboard backlight and SMC rails",
      procedure: "Ultrasonic laboratory bath + microscopic pad restoration & trace jumpering",
      turnaround: "24 - 72 Hours",
      complexity: "Critical BGA",
    },
    {
      label: "Black Screen / Backlight Out",
      cause: "Faulty LP8550 LED driver IC or blown backlight fuse line",
      procedure: "Backlight driver IC micro-soldering and flex cable continuity remediation",
      turnaround: "Same Day / 24h",
      complexity: "Advanced",
    },
  ],
  laptop: [
    {
      label: "Display Artifacts / Blue Screen",
      cause: "VGA discrete GPU cold solder joints or VRAM module failure",
      procedure: "Precision BGA reballing on infrared reflow station + thermal repaste",
      turnaround: "24 - 48 Hours",
      complexity: "Critical BGA",
    },
    {
      label: "Dead Board / Adapter Light Blinks",
      cause: "Main 19V rail shorted capacitor or blown charging MOSFET",
      procedure: "Thermal camera short identification & high-amperage MOSFET replacement",
      turnaround: "Same Day / 24h",
      complexity: "Advanced",
    },
    {
      label: "Thermal Throttling / Instant Shutdown",
      cause: "Vapor chamber desaturation, dried compound or fan PWM circuit failure",
      procedure: "Ultrasonic heatsink cleaning, thermal pad overhaul & fan driver replacement",
      turnaround: "Same Day",
      complexity: "Standard",
    },
  ],
  desktop: [
    {
      label: "No POST / Continuous Beeps",
      cause: "Motherboard BIOS corruption or damaged CPU socket pins / VRM phase",
      procedure: "SPI EEPROM direct flashing & VRM MOSFET bank inspection/replacement",
      turnaround: "24 Hours",
      complexity: "Advanced",
    },
    {
      label: "VGA Card Fan Spins, No Display",
      cause: "PCIe lane signal detachment or graphics core power phase breakdown",
      procedure: "Oscilloscope clock signal check & GPU core voltage regulator rework",
      turnaround: "24 - 48 Hours",
      complexity: "Critical BGA",
    },
  ],
  mobile: [
    {
      label: "Charging Port Damaged / No Fast Charge",
      cause: "Damaged solder pads on USB-C socket or charging IC burnout",
      procedure: "Microscope connector soldering & power delivery chip replacement",
      turnaround: "Same Day",
      complexity: "Standard",
    },
    {
      label: "Dead / Water Damage Short",
      cause: "Short-circuit on VDD_MAIN or power management PMIC burnout",
      procedure: "Board separation (sandwich boards), short isolation & re-balling",
      turnaround: "24 - 48 Hours",
      complexity: "Critical BGA",
    },
  ],
}

export default function DiagnosticMatrix() {
  const [selectedDevice, setSelectedDevice] = useState("macbook")
  const [selectedIssueIndex, setSelectedIssueIndex] = useState(0)

  const activeIssues = issuesByDevice[selectedDevice] || []
  const activeIssue = activeIssues[selectedIssueIndex] || activeIssues[0]
  const currentDeviceName = deviceTypes.find((d) => d.id === selectedDevice)?.name || "Device"

  const whatsappMessage = `Hello Natvar Ji, I am checking with Siddhi Infotech about my ${currentDeviceName} experiencing: "${activeIssue?.label}". Please advise diagnostic triage.`

  return (
    <section id="diagnostics" className="py-28 bg-[#07070a] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-400 mb-3">
              Interactive Triage Matrix
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Hardware Fault Diagnostic Engine.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-mono max-w-md">
            Select your platform and symptoms to preview our laboratory protocol before unit check-in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Selection Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Device Type Selectors */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                01 / Select Hardware Platform
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {deviceTypes.map((d) => {
                  const Icon = d.icon
                  const isSelected = selectedDevice === d.id
                  return (
                    <button
                      key={d.id}
                      onClick={() => {
                        setSelectedDevice(d.id)
                        setSelectedIssueIndex(0)
                      }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-violet-600/15 border-violet-500/50 text-white shadow-lg shadow-violet-950/40"
                          : "bg-zinc-950/60 border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:border-white/10"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-zinc-400"}`} />
                      <span className="text-xs font-mono font-medium tracking-wide">{d.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Symptom Selection */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                02 / Primary Observed Symptom
              </div>
              <div className="space-y-2">
                {activeIssues.map((issue, idx) => {
                  const isSelected = selectedIssueIndex === idx
                  return (
                    <button
                      key={issue.label}
                      onClick={() => setSelectedIssueIndex(idx)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-zinc-900/90 border-violet-500/40 text-white shadow-md shadow-violet-950/30"
                          : "bg-zinc-950/40 border-white/[0.06] text-zinc-400 hover:text-zinc-300 hover:border-white/10"
                      }`}
                    >
                      <span className="text-xs font-mono font-medium tracking-wide">{issue.label}</span>
                      {isSelected ? (
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Protocol Breakdown Card */}
          <div className="lg:col-span-7">
            <div className="luxury-card rounded-2xl p-7 sm:p-9 border border-violet-500/30 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-[#07070a] backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-400">
                    DIAGNOSTIC PROTOCOL SPECIFICATION
                  </div>
                  <div className="text-lg font-display font-bold text-white mt-1">
                    {currentDeviceName} � {activeIssue?.label}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-violet-950/60 border border-violet-500/30 text-violet-300">
                  {activeIssue?.complexity}
                </span>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Suspected Root Cause:</span>
                  </div>
                  <div className="text-sm font-sans text-zinc-200 bg-zinc-900/60 border border-white/5 rounded-lg p-3.5 leading-relaxed">
                    {activeIssue?.cause}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Laboratory Procedure:</span>
                  </div>
                  <div className="text-sm font-sans text-zinc-200 bg-zinc-900/60 border border-white/5 rounded-lg p-3.5 leading-relaxed">
                    {activeIssue?.procedure}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-900/60 border border-white/5 rounded-lg p-3.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      ESTIMATED BENCH TIME
                    </div>
                    <div className="text-base font-display font-bold text-white mt-1">
                      {activeIssue?.turnaround}
                    </div>
                  </div>
                  <div className="bg-zinc-900/60 border border-white/5 rounded-lg p-3.5">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      DISPATCH LOCATION
                    </div>
                    <div className="text-base font-display font-bold text-violet-300 mt-1">
                      Chandani Metro Gate 6
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-zinc-400 text-center sm:text-left">
                  Lead Engineer: <span className="text-zinc-200 font-semibold">Natvar Ji</span>
                </div>
                <a
                  href={`https://wa.me/917890426115?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-xs font-mono tracking-wide shadow-lg shadow-violet-900/40 transition-all"
                >
                  <span>Book This Diagnostic via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
