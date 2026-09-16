import Background3D from "./Background3D"
import Hero3DLaptop from "./Hero3DLaptop"
import { Phone, MessageSquare, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Three.js Dynamic Constellation Background */}
      <Background3D />

      {/* Ambient Lighting Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Punchy, Minimal Headline */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-violet-500/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-300">
                Chandani Metro Gate 6 · Kolkata
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-4">
              Precision <br />
              <span className="violet-cyan-gradient">
                Chip-Level
              </span>{" "}
              Repair.
            </h1>

            {/* Crisp 1-Line Technical Scope (No large walls of text) */}
            <p className="text-base sm:text-lg text-zinc-300 font-medium mb-2">
              All Models: MacBook · Laptops · Desktops · Mobile.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono mb-8">
              BGA Motherboard Rework · VGA GPU Solutions · Micro-Soldering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20need%20chip-level%20repair%20for%20my%20laptop/device."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-xs font-mono tracking-wider shadow-lg shadow-violet-900/40 transition-all group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Natvar Ji</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:7890426115"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-200 text-xs font-mono transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call: 7890426115</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] w-full">
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white">0.35mm</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">BGA Precision</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white">10+ Yrs</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Market Legacy</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white">FLIR</div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mt-0.5">Thermal Optics</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Hardware Laptop with Tilt Animation */}
          <div className="lg:col-span-6 flex justify-center">
            <Hero3DLaptop />
          </div>
        </div>
      </div>
    </section>
  )
}