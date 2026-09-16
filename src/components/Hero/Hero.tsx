import Interactive3DLaptop from "./Interactive3DLaptop"
import { Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#07070a]">
      {/* Subtle blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Natural, Direct, Grounded */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Shop badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Shop at Chandani Metro Gate 6, Kolkata</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight mb-4">
              Laptop, Desktop &amp; MacBook <br />
              <span className="text-violet-400">Chip-Level Repair.</span>
            </h1>

            {/* Real human subhead */}
            <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed mb-6 max-w-xl">
              Dead board? Water spilled? Display flickering or lines on screen? Natvar Ji and our team repair all models at motherboard &amp; chip level with genuine parts.
            </p>

            {/* Practical bullet points */}
            <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs font-mono text-zinc-400 mb-8">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Check &amp; estimate before repair</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Same-day diagnosis</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>10+ years in Chandani Market</span>
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20have%20a%20problem%20with%20my%20laptop/computer.%20Can%20you%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs font-mono tracking-wide transition-colors shadow-lg shadow-violet-950/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Natvar Ji</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:7890426115"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call: 7890426115</span>
              </a>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              Address: 20, Ganesh Chandra Avenue, Gate No 6, Kolkata - 700013
            </div>
          </div>

          {/* Right Column: 3D Interactive Laptop Model */}
          <div className="lg:col-span-6 flex justify-center">
            <Interactive3DLaptop />
          </div>
        </div>
      </div>
    </section>
  )
}