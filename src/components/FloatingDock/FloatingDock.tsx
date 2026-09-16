import { MessageSquare, Phone } from "lucide-react"

export default function FloatingDock() {
  return (
    <aside
      aria-label="Quick contact dock"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80"
    >
      {/* Live bench status pill */}
      <div className="hidden sm:flex items-center gap-2 pl-3 pr-2 py-1 text-[11px] font-mono text-zinc-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Natvar Ji: Online</span>
      </div>

      {/* Direct Call Button */}
      <a
        href="tel:7890426115"
        className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-cyan-400 flex items-center justify-center transition-all hover:scale-105"
        title="Direct Call to Natvar Ji: 7890426115"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20am%20inquiring%20about%20a%20laptop/MacBook%20repair%20at%20Siddhi%20Infotech."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-mono font-medium shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all hover:scale-105"
        title="WhatsApp Natvar Ji"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Lab</span>
      </a>
    </aside>
  )
}
