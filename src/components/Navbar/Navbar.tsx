import { useState, useEffect } from "react"
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Engineering Services", href: "#services" },
    { label: "Supported OEMs", href: "#brands" },
    { label: "Diagnostic Matrix", href: "#diagnostics" },
    { label: "Standards", href: "#standards" },
    { label: "Lab Location", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070a]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <a href="#top" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-700 to-cyan-500 p-[1px] shadow-lg shadow-violet-900/30 group-hover:shadow-violet-600/40 transition-all">
            <div className="w-full h-full bg-[#090a10] rounded-[11px] flex items-center justify-center font-display font-black text-lg text-white tracking-tighter">
              SI
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-violet-300 transition-colors">
                SIDDHI INFOTECH
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-mono tracking-widest uppercase rounded bg-violet-950/80 border border-violet-700/40 text-violet-300">
                LAB GRADE
              </span>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
              Sales & Service · Chandani Metro Gate 6
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3.5">
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/5 text-[11px] font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Accepting Hardware</span>
          </div>

          <a
            href="tel:7890426115"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-xs font-mono text-zinc-200 border border-white/10 transition-all hover:border-violet-500/40"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold tracking-wider">7890426115</span>
          </a>

          <a
            href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20need%20a%20technical%20consultation%20for%20my%20laptop/device."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-medium tracking-wide shadow-md shadow-violet-900/40 transition-all hover:shadow-violet-600/50"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult Lab</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#090a10]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-zinc-400">
            <span>LAB LOCATION:</span>
            <span className="text-violet-400">CHANDANI METRO GATE 6</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-mono tracking-wider text-zinc-300 hover:text-violet-400 py-1"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="tel:7890426115"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: 7890426115 (Natvar Ji)</span>
            </a>
            <a
              href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20need%20a%20technical%20consultation%20for%20my%20laptop/device."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-violet-600 text-white text-xs font-medium"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

