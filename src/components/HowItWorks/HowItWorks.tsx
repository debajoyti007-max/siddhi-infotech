import { MapPin, Search, CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: MapPin,
    title: "Bring Your Device to Gate 6",
    desc: "Visit our shop at 20 Ganesh Chandra Avenue, right at Chandani Chowk Metro Gate 6, Kolkata. Or message us on WhatsApp for advice.",
  },
  {
    step: "02",
    icon: Search,
    title: "Check & Free Estimate",
    desc: "Natvar Ji opens and tests your board, explains what is damaged, and gives you the exact cost before starting any repair.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Repair, Testing & Delivery",
    desc: "Fixed at chip level with quality spare parts. Fully tested with display, heat, and battery checks before handover with warranty.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#090a0f] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
            Simple 3-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            How Laptop Repair Works With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.step}
                className="luxury-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-display font-black text-zinc-600">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/917890426115?text=Hello%20Natvar%20Ji%2C%20I%20want%20to%20visit%20your%20shop%20at%20Chandani%20Chowk%20Gate%206%20for%20laptop%20repair."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-colors"
          >
            <span>Ask Natvar Ji Before Visiting</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}