import { useState, useRef, type MouseEvent } from "react"
import { Cpu, Activity, Zap } from "lucide-react"

export default function Hero3DLaptop() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 14

    setRotate({ x: rotateX, y: rotateY })
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlowPos({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg lg:max-w-xl aspect-[16/11] mx-auto flex items-center justify-center select-none"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Container with dynamic cursor tilt */}
      <div
        className="relative w-full h-full rounded-2xl flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dynamic Glow Spotlight behind the hardware */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 blur-2xl transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(168, 85, 247, 0.45) 0%, rgba(34, 211, 238, 0.25) 40%, transparent 70%)`,
          }}
        />

        {/* 3D Floating Hardware Photography with Depth */}
        <div
          className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300"
          style={{ transform: "translateZ(35px)" }}
        >
          <img
            src="/siddhi-infotech/images/laptop_hero.jpg"
            alt="Siddhi Infotech Precision Laptop Chip-Level Repair"
            className="w-full h-full object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(124,58,237,0.35)]"
          />
        </div>

        {/* Floating 3D Micro-HUD Badge 1: Top Left */}
        <div
          className="absolute -top-3 -left-2 sm:-left-4 z-20 px-3.5 py-1.5 rounded-lg bg-zinc-950/85 border border-violet-500/40 backdrop-blur-md text-[11px] font-mono flex items-center gap-2 shadow-2xl shadow-black/80 transition-transform duration-300"
          style={{ transform: "translateZ(55px)" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-400">BENCH:</span>
          <span className="text-violet-300 font-semibold tracking-wider">CHIP-LEVEL ACTIVE</span>
        </div>

        {/* Floating 3D Micro-HUD Badge 2: Top Right */}
        <div
          className="absolute top-1/4 -right-3 sm:-right-5 z-20 px-3 py-2 rounded-lg bg-zinc-950/85 border border-cyan-500/40 backdrop-blur-md text-[10px] font-mono flex flex-col gap-0.5 shadow-2xl shadow-black/80 transition-transform duration-300"
          style={{ transform: "translateZ(65px)" }}
        >
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <Activity className="w-3 h-3" />
            <span>THERMAL PROFILE</span>
          </div>
          <span className="text-zinc-200 font-bold">FLIR CALIBRATED</span>
        </div>

        {/* Floating 3D Micro-HUD Badge 3: Bottom Left */}
        <div
          className="absolute -bottom-3 left-3 sm:left-6 z-20 px-3.5 py-2 rounded-xl bg-zinc-950/90 border border-white/10 backdrop-blur-md text-[11px] font-mono flex items-center gap-2.5 shadow-2xl shadow-black/80 transition-transform duration-300"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="p-1.5 rounded bg-violet-600/20 text-violet-400 border border-violet-500/20">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[9px] text-zinc-500 uppercase tracking-widest">BGA Architecture</div>
            <div className="text-zinc-200 font-semibold text-xs">VGA & Motherboard Reflow</div>
          </div>
        </div>

        {/* Floating 3D Micro-HUD Badge 4: Bottom Right */}
        <div
          className="absolute -bottom-2 -right-2 z-20 px-3 py-1.5 rounded-lg bg-zinc-950/70 border border-zinc-800 backdrop-blur-sm text-[10px] font-mono text-zinc-400 flex items-center gap-1.5 transition-transform duration-300"
          style={{ transform: "translateZ(40px)" }}
        >
          <Zap className="w-3 h-3 text-violet-400" />
          <span>Move mouse for 3D tilt</span>
        </div>
      </div>
    </div>
  )
}
