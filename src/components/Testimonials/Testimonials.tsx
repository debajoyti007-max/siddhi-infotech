import { Star } from "lucide-react"

const reviews = [
  {
    name: "Pritam Ghosh",
    location: "Salt Lake, Kolkata",
    device: "Dell Inspiron — Dead Motherboard",
    review:
      "My laptop was completely dead and wouldn't charge. Official center asked for ₹18,000 for a new motherboard. Natvar Ji checked the board, found one shorted capacitor on the power line, and fixed it the next day. Very honest and reasonable charges.",
  },
  {
    name: "Debabrata Sen",
    location: "Bhowanipore, Kolkata",
    device: "MacBook Air — Coffee Spill",
    review:
      "Spilled coffee on my keyboard and the MacBook went dead. Brought it to Chandani Metro Gate 6. Natvar Ji cleaned the board corrosion and replaced a power IC. Got it back with all my files intact within 48 hours.",
  },
  {
    name: "Rajesh Agarwal",
    location: "Howrah",
    device: "ASUS Gaming Laptop — Lines on Screen",
    review:
      "My gaming laptop screen had pink lines and froze whenever I started a game. Natvar Ji reballed the graphics chip on his BGA machine. He tested games in front of me before taking payment. Working perfectly.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#07070a] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-1">
            Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            What Customers Say About Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-5">
                  &ldquo;{r.review}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 border-t border-zinc-800">
                <div className="text-sm font-display font-bold text-white">
                  {r.name}
                </div>
                <div className="text-xs font-mono text-zinc-500">{r.location}</div>
                <div className="text-[11px] font-mono text-violet-300 mt-1.5 bg-violet-950/40 px-2 py-0.5 rounded border border-violet-900/40 inline-block">
                  {r.device}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}