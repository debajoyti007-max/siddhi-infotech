import { useState, type FormEvent } from "react"
import { MapPin, Phone, MessageSquare, Clock, UserCheck, Send } from "lucide-react"
import { useLanguage } from "../../context/LanguageContext"
import { translations } from "../../i18n/translations"

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact
  const [customerName, setCustomerName] = useState("")
  const [deviceModel, setDeviceModel] = useState("")
  const [issueSummary, setIssueSummary] = useState("")

  const handleDispatch = (e: FormEvent) => {
    e.preventDefault()
    const text = `Hello Natvar Ji, my name is ${customerName || "Customer"}. I have a ${deviceModel || "Laptop/PC"} with this problem: ${issueSummary || "need repair"}. Please let me know when I can visit your shop at Gate 6.`
    window.open(`https://wa.me/917890426115?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
            {t.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Shop Details */}
          <div className="lg:col-span-6 space-y-5">
            <div className="luxury-card rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase">{t.addressTitle}</div>
                  <div className="text-base font-display font-bold text-white mt-0.5">
                    {t.address1}
                  </div>
                  <div className="text-xs font-mono text-blue-300 mt-0.5">
                    {t.address2}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1.5 font-sans">
                    {t.landmark}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">{t.techTitle}</div>
                    <div className="text-sm font-semibold text-white">{t.techName}</div>
                    <div className="text-xs text-zinc-400 font-sans">{t.techExp}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">{t.timingsTitle}</div>
                    <div className="text-sm font-semibold text-white">{t.timings}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:7890426115"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: 7890426115</span>
                </a>
                <a
                  href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20am%20coming%20to%20your%20shop%20at%20Chandani%20Chowk%20Gate%206."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-medium text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Natvar Ji</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="luxury-card rounded-2xl overflow-hidden h-60 border border-zinc-800">
              <iframe
                title="Siddhi Infotech Location — Chandani Chowk Metro Gate 6"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.23849187313!2d88.3518193!3d22.5699708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a942a78f19%3A0xe543fa0f62b71ab4!2sChandni%20Chowk%20Metro%20Station%2C%20Gate%20No.%206!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="luxury-card rounded-2xl p-6 sm:p-7 border border-zinc-800 bg-[#090a10]/90">
              <h3 className="text-xl font-display font-bold text-white mb-1.5">
                {t.formTitle}
              </h3>
              <p className="text-xs text-zinc-400 font-sans mb-6">
                {t.formSubtitle}
              </p>

              <form onSubmit={handleDispatch} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">{t.nameLabel}</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sen"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    {t.deviceLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="e.g. Dell Inspiron, MacBook Air M1, HP Pavilion"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    {t.issueLabel}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={issueSummary}
                    onChange={(e) => setIssueSummary(e.target.value)}
                    placeholder="e.g. Dead / not turning on, water damage, lines on screen..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.submitBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}