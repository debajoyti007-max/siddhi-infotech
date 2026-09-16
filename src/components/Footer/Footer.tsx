import { ArrowUp, Phone, MapPin, MessageSquare } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#050608] border-t border-zinc-800 pt-12 pb-10 text-zinc-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-800">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-display font-black text-sm text-white">
                SI
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                SIDDHI INFOTECH
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400">
                SALES &amp; SERVICE
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              All kinds of laptop, desktop &amp; MacBook chip-level repair, VGA graphics card solutions, and mobile phone repairing done here.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-1 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>20 Ganesh Chandra Ave, Gate 6, Kolkata - 700013</span>
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs uppercase tracking-wider text-zinc-300 font-bold font-mono">
              Services
            </div>
            <ul className="space-y-1.5 text-zinc-400 text-xs">
              <li>Laptop Chip-Level Repair</li>
              <li>VGA &amp; Graphics Chip (GPU) Reballing</li>
              <li>MacBook Logic Board &amp; Spill Clean</li>
              <li>Desktop PC Motherboard &amp; Power</li>
              <li>Mobile Phone Repairing</li>
              <li>Data Recovery &amp; BIOS Reprogramming</li>
            </ul>
          </div>

          {/* Brands */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="text-xs uppercase tracking-wider text-zinc-300 font-bold font-mono">
              Brands
            </div>
            <ul className="space-y-1.5 text-zinc-400 text-xs">
              <li>Apple MacBook</li>
              <li>Dell (XPS, Inspiron)</li>
              <li>Lenovo (ThinkPad, Legion)</li>
              <li>HP (Pavilion, Omen)</li>
              <li>ASUS (TUF, ROG)</li>
              <li>Acer (Nitro, Predator)</li>
              <li>HCL &amp; Assembled Desktops</li>
            </ul>
          </div>

          {/* Natvar Ji Direct */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="space-y-1.5 text-left md:text-right">
              <div className="text-[11px] font-mono text-zinc-500 uppercase">Technician</div>
              <div className="text-sm font-bold text-white">Natvar Ji</div>
              <a
                href="tel:7890426115"
                className="flex items-center md:justify-end gap-1 text-xs text-cyan-400 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>7890426115</span>
              </a>
              <a
                href="https://wa.me/917890426115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center md:justify-end gap-1 text-xs text-emerald-400 hover:underline pt-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Siddhi Infotech — Sales &amp; Service. 20, Ganesh Chandra Avenue, Gate No 6 (Chandani Metro), Kolkata - 700013.
          </div>
          <div>Natvar Ji · 7890426115</div>
        </div>
      </div>
    </footer>
  )
}