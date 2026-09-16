import { useEffect, useRef, useState } from "react"

const STATS = [
  { value: 10000, suffix: "+", label: "Devices Repaired", icon: "??" },
  { value: 10, suffix: "+", label: "Years Experience", icon: "?" },
  { value: 5000, suffix: "+", label: "Happy Customers", icon: "??" },
  { value: 15, suffix: "+", label: "Brands Supported", icon: "??" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const dur = 2000, step = 16
        const inc = target / (dur / step)
        let cur = 0
        const id = setInterval(() => {
          cur = Math.min(cur + inc, target)
          setCount(Math.floor(cur))
          if (cur >= target) clearInterval(id)
        }, step)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Stats() {
  return (
    <section style={{
      padding: "100px 48px",
      background: "linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(34,211,238,0.04) 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-50%", left: "-10%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 60%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 32, position: "relative", zIndex: 1,
      }}>
        {STATS.map(s => (
          <div key={s.label} style={{
            textAlign: "center", padding: 40,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20, backdropFilter: "blur(16px)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-8px)"
              e.currentTarget.style.boxShadow = "0 20px 60px rgba(124,58,237,0.25)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            <div style={{ fontSize: 42, marginBottom: 16 }}>{s.icon}</div>
            <div style={{
              fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 900,
              background: "linear-gradient(135deg, #A855F7, #22D3EE)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ color: "#94A3B8", marginTop: 12, fontSize: 15, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
