import Interactive3DLaptop from "./Interactive3DLaptop"
import { Phone, MessageSquare, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#07070a]">
      {/* Subtle Blueprint Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300">
                Chandani Metro Gate 6 Â· Kolkata 700013
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Chip-Level <br />
              <span className="text-violet-400">Hardware Engineering.</span>
            </h1>

            {/* Sub-headline directly representing business card scope */}
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed mb-8 max-w-xl">
              Specialized component-level micro-soldering laboratory for MacBook, all laptop &amp; desktop motherboards, and dedicated VGA graphics processors.
            </p>

            {/* Quick Action Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20need%20a%20hardware%20diagnostic%20consultation%20at%20Siddhi%20Infotech."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs font-mono tracking-wider transition-all shadow-lg shadow-violet-950/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Natvar Ji</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:7890426115"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-200 text-xs font-mono transition-all"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Direct Line: 7890426115</span>
              </a>
            </div>

            {/* Verification Pillars */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] w-full">
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white">10+ Yrs</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Chandani Market
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white">0.35mm</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  BGA Precision
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white">FLIR</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                  Infrared Thermal
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Laptop WebGL Model */}
          <div className="lg:col-span-6 flex justify-center">
            <Interactive3DLaptop />
          </div>
        </div>
      </div>
    </section>
  )
}
