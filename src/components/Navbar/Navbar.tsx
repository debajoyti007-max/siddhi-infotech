import { useState, useEffect } from "react"
import { Phone, MessageSquare, Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Brands", href: "#brands" },
    { label: "Common Problems", href: "#problems" },
    { label: "Why Us", href: "#why-us" },
    { label: "Find Shop", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070a]/95 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-display font-black text-lg text-white">
            SI
          </div>
          <div>
            <div className="font-display font-bold text-base tracking-tight text-white group-hover:text-violet-400 transition-colors">
              SIDDHI INFOTECH
            </div>
            <div className="text-[11px] font-mono text-zinc-400">
              Sales &amp; Service · Chandani Metro Gate 6
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:7890426115"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-200 border border-zinc-800 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>7890426115</span>
          </a>

          <a
            href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20want%20to%20get%20my%20laptop/device%20repaired%20at%20Siddhi%20Infotech."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#090a10] border-b border-zinc-800 px-6 py-5 flex flex-col gap-3.5">
          <div className="text-xs font-mono text-zinc-500 pb-2 border-b border-zinc-800">
            Natvar Ji · 20 Ganesh Chandra Avenue, Gate 6
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-zinc-300 hover:text-violet-400 py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href="tel:7890426115"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 text-xs font-mono text-zinc-200"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: 7890426115</span>
            </a>
            <a
              href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20want%20to%20get%20my%20laptop/device%20repaired."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-violet-600 text-xs text-white"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Natvar Ji</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}