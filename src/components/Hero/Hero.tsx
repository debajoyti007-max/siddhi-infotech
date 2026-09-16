import Background3D from "./Background3D"
import Hero3DVisualizer from "./Hero3DVisualizer"
import { Phone, MessageSquare, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* 3D Dynamic Constellation Canvas */}
      <Background3D />

      {/* Subtle Ambient Radial Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Technical Narrative & Precision Headings */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-violet-500/30 backdrop-blur-md mb-8 shadow-inner shadow-violet-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-300">
                Chandani Metro Gate 6 · Kolkata 700013
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-6">
              Precision <br />
              <span className="violet-cyan-gradient">
                Chip-Level
              </span>{" "}
              Engineering.
            </h1>

            {/* Sub-headline directly incorporating card specifics */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8">
              Kolkata&apos;s authoritative micro-soldering laboratory for all models of{" "}
              <span className="text-zinc-200 font-semibold">MacBook, Laptops & Desktops</span>.
              Specializing in BGA Motherboard Diagnostics, VGA Graphics Chip Reballing, and Component-Level Mobile Recovery.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20have%20a%20faulty%20laptop/motherboard%20requiring%20chip-level%20repair."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-sm shadow-xl shadow-violet-900/40 hover:shadow-violet-600/60 transition-all duration-200 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:7890426115"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-violet-500/40 text-zinc-200 text-sm font-mono transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Direct Line: 7890426115</span>
              </a>
            </div>

            {/* Micro Technical Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] w-full">
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">0.35mm</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-0.5">BGA Ball Pitch</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">10+ Yrs</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-0.5">Chandani Market</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">FLIR</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-0.5">Infrared Thermal</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">100%</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-0.5">OEM Direct Spec</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Silicon Chip Inspection */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DVisualizer />
          </div>
        </div>
      </div>
    </section>
  )
}

