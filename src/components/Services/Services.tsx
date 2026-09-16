import { Cpu, Zap, Layers, MonitorSmartphone, Wrench, HardDrive, ArrowUpRight } from "lucide-react"

const capabilities = [
  {
    icon: Cpu,
    title: "Laptop Chip-Level Repair",
    tag: "BGA REWORK",
    brief: "Multi-layer board diagnostics, short tracing, and PMIC controller replacement.",
    specs: ["Short Circuit Tracing", "PMIC Replacement", "Capacitor Arrays", "SMC / EC ICs"],
  },
  {
    icon: Zap,
    title: "VGA Chip Solution",
    tag: "GPU REBALLING",
    brief: "Discrete NVIDIA & AMD graphics processor reballing and artifact elimination.",
    specs: ["BGA Reballing", "Thermal Reflow", "VRAM Diagnostics", "GPU Core Rework"],
  },
  {
    icon: Layers,
    title: "MacBook Logic Board",
    tag: "APPLE SILICON / INTEL",
    brief: "Ultrasonic liquid damage deoxidation, USB-C power rails, and backlight drivers.",
    specs: ["Liquid Ingress Recovery", "USB-C PMIC Rails", "Backlight Drivers", "Flex Line Rework"],
  },
  {
    icon: Wrench,
    title: "Laptop & Desktop Models",
    tag: "ALL BRANDS",
    brief: "Dell, HP, Lenovo, ASUS, Acer, HCL. Complete motherboard overhauls and VRM repair.",
    specs: ["ATX/ITX Board Repair", "Chassis & Hinges", "VRM Power Stages", "DC Power Jacks"],
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Repairing",
    tag: "MICRO-ELECTRONICS",
    brief: "FPC connector soldering, micro-jumper traces, and charging subsystem repair.",
    specs: ["Connector Soldering", "Charging IC Rework", "Jumper Wire Routing", "Display Circuits"],
  },
  {
    icon: HardDrive,
    title: "BIOS & Data Recovery",
    tag: "SPI FIRMWARE",
    brief: "EEPROM SPI flashing, clean ME region, corrupt BIOS restore, and NAND triage.",
    specs: ["SPI Chip Flashing", "Clean ME Region", "BIOS Password Clear", "Storage Diagnostics"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-white/[0.06] bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-400 mb-2">
              Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Engineering Services.
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            Component-level intervention at Chandani Metro Gate 6.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 font-mono mb-4 leading-relaxed">
                    {item.brief}
                  </p>

                  <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-white/[0.06] mb-4">
                    {item.specs.map((s) => (
                      <div key={s} className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20inquiry%20for%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 text-[11px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-cyan-400 transition-colors border-t border-white/[0.04]"
                >
                  <span>WhatsApp Inquiry</span>
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