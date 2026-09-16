import { useState, type FormEvent } from "react"
import { MapPin, Phone, MessageSquare, Clock, UserCheck, Send } from "lucide-react"

export default function Contact() {
  const [deviceModel, setDeviceModel] = useState("")
  const [issueSummary, setIssueSummary] = useState("")
  const [customerName, setCustomerName] = useState("")

  const handleDispatch = (e: FormEvent) => {
    e.preventDefault()
    const message = `*Hardware Diagnostic Request — Siddhi Infotech*%0A%0A*Name:* ${encodeURIComponent(
      customerName || "Customer"
    )}%0A*Device:* ${encodeURIComponent(deviceModel || "Not Specified")}%0A*Observed Issue:* ${encodeURIComponent(
      issueSummary || "General diagnostic consultation"
    )}%0A%0A_Sent via siddhi-infotech portal._`
    window.open(`https://wa.me/917890426115?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-28 bg-[#090a0f] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Hardware Dispatch & Laboratory Check-in
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Visit Our Chandani Chowk Lab.
          </h2>
          <p className="text-sm text-zinc-400 font-mono">
            Direct walk-in triage or pre-book your bench session directly with lead technician Natvar Ji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Specs & Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="luxury-card rounded-2xl p-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Physical Laboratory Address
                  </div>
                  <div className="text-base font-display font-bold text-white mt-1 leading-snug">
                    20, Ganesh Chandra Avenue, Gate No. 6
                  </div>
                  <div className="text-xs font-mono text-violet-300 mt-0.5">
                    Chandani Metro Station, Kolkata – 700013
                  </div>
                  <div className="text-xs text-zinc-400 mt-2 font-mono">
                    Landmark: Directly adjacent to Chandani Chowk Metro Gate 6 exit.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                      Chief Engineer
                    </div>
                    <div className="text-sm font-semibold text-white">Natvar Ji</div>
                    <div className="text-[11px] font-mono text-zinc-400">10+ Years Chip BGA</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-violet-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                      Bench Timings
                    </div>
                    <div className="text-sm font-semibold text-white">10:30 AM – 8:30 PM</div>
                    <div className="text-[11px] font-mono text-zinc-400">Mon to Sat (Sun Emergency)</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:7890426115"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-200 transition-all hover:border-violet-500/40"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call: 7890426115</span>
                </a>
                <a
                  href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20am%20at%20Chandani%20Chowk%20and%20looking%20for%20Siddhi%20Infotech%20Gate%206."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-xs font-medium text-white transition-all shadow-md shadow-violet-900/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Natvar Ji</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps View (Chandani Chowk Metro Kolkata) */}
            <div className="luxury-card rounded-2xl overflow-hidden h-64 border border-white/[0.08]">
              <iframe
                title="Siddhi Infotech Location — Chandani Chowk Metro Kolkata"
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

          {/* Right: Quick Hardware Intake Dispatcher Form */}
          <div className="lg:col-span-6">
            <div className="luxury-card rounded-2xl p-7 sm:p-9 border border-white/10 bg-[#07070a]/90 backdrop-blur-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2">
                DIRECT BENCH BOOKING
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Instant WhatsApp Triage Form
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-8 leading-relaxed">
                Provide your device specifications below to immediately launch an end-to-end technical dialogue with Natvar Ji.
              </p>

              <form onSubmit={handleDispatch} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Suman Sharma / Tech Studio"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Exact Device Brand & Model
                  </label>
                  <input
                    type="text"
                    required
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="e.g. MacBook Pro M1 A2442 / Dell XPS 15 / Asus ROG G14"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Observed Fault / Symptoms
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={issueSummary}
                    onChange={(e) => setIssueSummary(e.target.value)}
                    placeholder="e.g. Completely dead after surge, power LED blinks 3 times, liquid spilled on keyboard, or GPU showing artifacts..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium text-sm font-mono tracking-wide shadow-xl shadow-violet-900/50 hover:shadow-violet-600/70 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Diagnostic Inquiry to WhatsApp</span>
                  </button>
                  <div className="text-[11px] font-mono text-center text-zinc-500 mt-3">
                    Connected directly to Natvar Ji (+91 7890426115)
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

