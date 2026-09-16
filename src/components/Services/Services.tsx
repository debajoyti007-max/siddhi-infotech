import { Cpu, Zap, Layers, MonitorSmartphone, Wrench, HardDrive, ArrowUpRight } from "lucide-react"

const capabilities = [
  {
    id: "chip-level",
    icon: Cpu,
    title: "Laptop Chip-Level Repair",
    tag: "CORE CAPABILITY",
    description:
      "Advanced multi-layer motherboard diagnostics. Short-to-ground isolation, power rail PMIC replacement, EC controller restoration, and precision microscopic circuit tracing.",
    specs: ["Short Circuit Thermal Tracing", "Power Management IC (PMIC)", "Capacitor Array Replacement", "SMC & Embedded Controller"],
  },
  {
    id: "vga-gpu",
    icon: Zap,
    title: "VGA & Dedicated GPU Solutions",
    tag: "THERMAL REWORK",
    description:
      "Professional BGA reballing and replacement for discrete NVIDIA & AMD graphics processors. Eliminates blue screens, display artifacts, system freezes, and dead GPU states.",
    specs: ["BGA Solder Sphere Reballing", "Thermal Profiling & Reflow", "VRAM Module Replacement", "GPU Core Diagnostic Validation"],
  },
  {
    id: "macbook",
    icon: Layers,
    title: "MacBook Logic Board Architecture",
    tag: "APPLE SPECIALIZATION",
    description:
      "Dedicated component-level repair for MacBook Pro & MacBook Air logic boards (Apple Silicon M-Series & Intel). Liquid ingress ultrasonic remediation and backlight driver repairs.",
    specs: ["Liquid Damage Ultrasonic Deoxidation", "USB-C CD3215/CD3217 Power Rails", "Display Backlight Driver Rework", "Trackpad & Keyboard Interface Bus"],
  },
  {
    id: "laptop-desktop",
    icon: Wrench,
    title: "All Laptop & Desktop Models",
    tag: "MULTI-OEM SUPPORT",
    description:
      "Complete hardware architecture support across Dell, Lenovo, HP, ASUS, Acer, and HCL systems. Handling motherboard overhauls, VRM rebuilds, and power subsystem faults.",
    specs: ["Desktop ATX/ITX Board Diagnostics", "Hinges & Chassis Structural Rework", "VRM Power Stage Repair", "DC Jack & Port Array Replacement"],
  },
  {
    id: "mobile",
    icon: MonitorSmartphone,
    title: "Mobile Micro-Repairing",
    tag: "MICRO-ELECTRONICS",
    description:
      "High-precision micro-soldering for mobile device motherboards. Connector microsoldering, jumper wire trace rebuilds, charging IC replacements, and display controller remediation.",
    specs: ["FPC Connector Micro-Soldering", "Charging Controller & Sub-Board", "Broken Trace Jumper Routing", "Audio & Baseband IC Triage"],
  },
  {
    id: "firmware",
    icon: HardDrive,
    title: "BIOS & Data Subsystem Recovery",
    tag: "DATA INTEGRITY",
    description:
      "Direct SPI EEPROM chip desoldering and flashing. Clean Intel ME region programming, corrupt UEFI restoration, and critical board-level hardware data diagnostic extraction.",
    specs: ["SPI Programmer EEPROM Flashing", "Intel ME Region Clean Reprogram", "Password Lock & Corrupt BIOS Clear", "NAND / NVMe Hardware Triage"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 relative border-t border-white/[0.06] bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-400 mb-3">
              Engineering Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Specialized Laboratory Services.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 font-mono max-w-md">
            Direct component-level intervention. We repair what unauthorized centers deem &quot;unrepairable&quot;.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="luxury-card rounded-2xl p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/40 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <span className="w-1 h-1 rounded-full bg-violet-400" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(
                    item.title
                  )}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 text-xs font-mono uppercase tracking-wider text-zinc-400 group-hover:text-cyan-400 transition-colors border-t border-white/[0.04]"
                >
                  <span>Request Procedure Quote</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
