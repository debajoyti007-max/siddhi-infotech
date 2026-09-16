import { Cpu, Zap, Layers, MonitorSmartphone, Wrench, HardDrive, ArrowUpRight } from "lucide-react"

const serviceCards = [
  {
    icon: Cpu,
    title: "Laptop Chip-Level Repair",
    tag: "MOTHERBOARD",
    brief: "Dead laptop, not turning on, short circuit, or battery not charging.",
    details: ["Short circuit finding", "Power IC replacement", "Charging problem", "Dead board revive"],
  },
  {
    icon: Zap,
    title: "VGA & Graphics Chip (GPU)",
    tag: "BGA REBALLING",
    brief: "Lines on screen, blue screen error, gaming crash, or black display.",
    details: ["BGA chip reballing", "Thermal paste change", "VRAM IC repair", "GPU cold solder fix"],
  },
  {
    icon: Layers,
    title: "MacBook Logic Board",
    tag: "APPLE SPECIALIST",
    brief: "MacBook Pro & Air water damage cleaning, USB-C ports, and display backlight.",
    details: ["Liquid spill ultrasonic clean", "USB-C charging IC", "Backlight no display", "Trackpad & power rail"],
  },
  {
    icon: Wrench,
    title: "Desktop Computer Repair",
    tag: "ALL PC MODELS",
    brief: "Dell, HP, Lenovo, and custom assembled PCs. Motherboard & power supply.",
    details: ["Dead motherboard repair", "SMPS power supply", "No display beeping issue", "Cabinet & hinge repair"],
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Phone Repairing",
    tag: "MICRO-SOLDERING",
    brief: "Motherboard micro-soldering, charging socket replacement, and water damage.",
    details: ["Charging port replacement", "Dead phone board fix", "Microscope jumper wire", "IC level soldering"],
  },
  {
    icon: HardDrive,
    title: "Data Recovery & BIOS",
    tag: "DATA & FIRMWARE",
    brief: "Recover lost data from dead hard disks/SSDs and reprogram corrupt BIOS.",
    details: ["Hard disk & SSD data", "Corrupt BIOS flashing", "Password lock removal", "OS & driver setup"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-zinc-800 bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-1">
              What We Do
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Our Repair Services
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            All brands serviced at component level · Natvar Ji (Chandani Metro Gate 6)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCards.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-sans mb-4 leading-relaxed">
                    {item.brief}
                  </p>

                  <div className="grid grid-cols-2 gap-1.5 pt-3 border-t border-zinc-800 mb-4">
                    {item.details.map((d) => (
                      <div key={d} className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20want%20to%20ask%20about%20${encodeURIComponent(
                    item.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 text-xs font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors border-t border-zinc-800/60"
                >
                  <span>Ask Cost &amp; Details</span>
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