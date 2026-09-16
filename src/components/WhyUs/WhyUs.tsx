import { ShieldCheck, Cpu, CheckCircle2, UserCheck, Wrench, MapPin } from "lucide-react"

const reasons = [
  {
    icon: UserCheck,
    title: "Direct Talk with Natvar Ji",
    desc: "No middlemen or sales counters. You speak directly to the technician who opens and fixes your board.",
  },
  {
    icon: CheckCircle2,
    title: "Estimate Before We Start",
    desc: "We diagnose your machine, explain what is damaged, and tell you the exact cost before starting any work.",
  },
  {
    icon: Cpu,
    title: "BGA Machine & Microscope",
    desc: "Equipped with an infrared BGA rework station, stereo optical microscope, and thermal camera for short finding.",
  },
  {
    icon: ShieldCheck,
    title: "Original Spare Parts",
    desc: "We use original replacement ICs, capacitors, displays, and batteries for long-lasting reliability.",
  },
  {
    icon: Wrench,
    title: "Fast Turnaround Time",
    desc: "Common power issues, charging faults, and BIOS corruptions are repaired same day or within 24 hours.",
  },
  {
    icon: MapPin,
    title: "Right at Chandani Metro Gate 6",
    desc: "Very easy to reach. Walk out of Chandani Chowk Metro Gate 6 on Ganesh Chandra Avenue and you are at our shop.",
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#090a0f] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-1">
            Why Siddhi Infotech
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-3">
            Why People Bring Their Laptops to Us
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            Over 10 years serving customers, colleges, and IT offices across Kolkata from Chandani Chowk.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-violet-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-display font-bold text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {r.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}