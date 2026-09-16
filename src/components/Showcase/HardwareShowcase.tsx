import { useState, useRef, type MouseEvent } from "react"
import { Cpu, Smartphone, Layers, ArrowUpRight } from "lucide-react"

interface HardwareCardProps {
  image: string
  tag: string
  title: string
  subtitle: string
  specs: string[]
  icon: typeof Cpu
}

function HardwareCard({ image, tag, title, subtitle, specs, icon: Icon }: HardwareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="luxury-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group cursor-pointer transition-all duration-300 select-none overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Hardware Visual with 3D Depth */}
        <div
          className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-zinc-950/80 border border-white/10 group-hover:border-violet-500/40 transition-colors"
          style={{ transform: "translateZ(25px)" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 border border-white/10 text-[10px] font-mono text-cyan-400 tracking-wider uppercase backdrop-blur-md">
            {tag}
          </div>
        </div>

        {/* Concise Header */}
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-4 h-4 text-violet-400" />
          <h3 className="text-lg font-display font-bold text-white group-hover:text-violet-300 transition-colors">
            {title}
          </h3>
        </div>

        <p className="text-xs font-mono text-zinc-400 mb-4">{subtitle}</p>

        {/* Micro Specs */}
        <div className="space-y-1.5 pt-3 border-t border-white/[0.06] mb-4">
          {specs.map((s) => (
            <div key={s} className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={`https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20inquiry%20regarding%20${encodeURIComponent(
          title
        )}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between w-full pt-3 text-[11px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-cyan-400 transition-colors border-t border-white/[0.04]"
      >
        <span>Instant WhatsApp Consultation</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
  )
}

export default function HardwareShowcase() {
  return (
    <section className="py-20 bg-[#07070a] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Laboratory Hardware Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              3D Micro-Component Precision.
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            Interactive 3D preview of laboratory repair procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HardwareCard
            image="/siddhi-infotech/images/bga_processor.jpg"
            tag="GPU & BGA REWORK"
            title="VGA Chip Solution"
            subtitle="NVIDIA & AMD Graphics Processors"
            specs={["BGA Solder Sphere Reballing", "Cold Solder Remounting", "VRAM Module Diagnostics"]}
            icon={Cpu}
          />

          <HardwareCard
            image="/siddhi-infotech/images/smartphone_logic.jpg"
            tag="MICRO-SOLDERING"
            title="Mobile Logic Board"
            subtitle="Component-Level Mobile Repair"
            specs={["FPC Connector Soldering", "Micro-Jumper Trace Repairs", "Charging IC Replacement"]}
            icon={Smartphone}
          />

          <HardwareCard
            image="/siddhi-infotech/images/laptop_hero.jpg"
            tag="APPLE & ULTRABOOK"
            title="MacBook Logic Boards"
            subtitle="Apple Silicon & Intel Architectures"
            specs={["Liquid Damage Deoxidation", "USB-C CD3215 Negotiation Rails", "Retina Backlight Driver Repairs"]}
            icon={Layers}
          />
        </div>
      </div>
    </section>
  )
}