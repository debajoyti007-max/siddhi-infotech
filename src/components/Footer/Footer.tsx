import { ArrowUp, Phone, MessageSquare } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#050608] border-t border-zinc-800/80 pt-12 pb-10 text-zinc-400 font-sans text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-display font-black text-sm text-white shadow-md shadow-blue-500/30">
                SI
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                SIDDHI INFOTECH
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                SALES &amp; SERVICE
              </span>
            </div>
            <p className="text-zinc-400 text-xs font-mono">
              {t.contact.address1}, {t.contact.address2}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:7890426115"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>7890426115</span>
            </a>
            <a
              href="https://wa.me/917890426115"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.dock.wa}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <div>&copy; {new Date().getFullYear()} {t.footer.copy}</div>
          <div>{t.contact.techName} · 7890426115</div>
        </div>
      </div>
    </footer>
  )
}