import { ArrowUp, Phone, MapPin, MessageSquare } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#050508] border-t border-white/[0.08] pt-16 pb-12 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#090a10] rounded-[7px] flex items-center justify-center font-display font-black text-sm text-white">
                  SI
                </div>
              </div>
              <span className="font-display font-black text-white text-base tracking-tight">
                SIDDHI INFOTECH
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-[9px] text-violet-400">
                SALES & SERVICE
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-sans leading-relaxed max-w-sm">
              Advanced BGA chip-level micro-soldering and logic board engineering laboratory for Apple MacBook, laptops, desktops, and VGA processors.
            </p>
            <div className="flex items-center gap-4 text-[11px] pt-1 text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <span>Chandani Metro Gate 6, Kolkata</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>7890426115</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-300 font-bold">
              Engineering Disciplines
            </div>
            <ul className="space-y-2 text-zinc-500">
              <li>
                <a href="#services" className="hover:text-violet-400 transition-colors">
                  BGA Logic Board Micro-Soldering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-400 transition-colors">
                  VGA & Dedicated GPU Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-400 transition-colors">
                  MacBook Liquid Ingress Recovery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-400 transition-colors">
                  Desktop Motherboard Overhaul
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-violet-400 transition-colors">
                  Mobile Micro-Electronics
                </a>
              </li>
            </ul>
          </div>

          {/* OEM Systems */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[11px] uppercase tracking-widest text-zinc-300 font-bold">
              Supported Platforms
            </div>
            <ul className="space-y-2 text-zinc-500">
              <li>MacBook Pro / Air</li>
              <li>Dell XPS / Alienware</li>
              <li>Lenovo ThinkPad / Legion</li>
              <li>HP Spectre / Omen</li>
              <li>ASUS ROG / ZenBook</li>
              <li>Acer Predator / Nitro</li>
              <li>HCL Enterprise</li>
            </ul>
          </div>

          {/* Direct Dispatch & Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-2 text-left md:text-right">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                Bench Master
              </div>
              <div className="text-sm font-bold text-white">Natvar Ji</div>
              <a
                href="https://wa.me/917890426115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} Siddhi Infotech � Sales &amp; Service. 20 Ganesh Chandra Avenue, Gate 6, Chandani Metro, Kolkata - 700013.
          </div>
          <div className="flex items-center gap-6">
            <span>Precision Hardware Engineering</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>Kolkata, West Bengal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
