import { useEffect, useRef } from "react"

// Hardware images with their floating animation config
const floaters = [
  {
    src: "/siddhi-infotech/hw_motherboard.png",
    alt: "Laptop Motherboard",
    // Top-right area
    style: {
      top: "6%",
      right: "-4%",
      width: "clamp(280px, 30vw, 460px)",
      animationName: "floatA",
      animationDuration: "18s",
      animationDelay: "0s",
      opacity: 0.22,
    },
  },
  {
    src: "/siddhi-infotech/hw_macbook.png",
    alt: "MacBook Logic Board",
    // Bottom-left area
    style: {
      bottom: "12%",
      left: "-6%",
      width: "clamp(240px, 28vw, 420px)",
      animationName: "floatB",
      animationDuration: "22s",
      animationDelay: "-6s",
      opacity: 0.18,
    },
  },
  {
    src: "/siddhi-infotech/hw_gpu.png",
    alt: "GPU Chip BGA Reballing",
    // Mid-right area
    style: {
      top: "42%",
      right: "-2%",
      width: "clamp(200px, 22vw, 340px)",
      animationName: "floatA",
      animationDuration: "14s",
      animationDelay: "-10s",
      opacity: 0.15,
    },
  },
  {
    src: "/siddhi-infotech/hw_motherboard.png",
    alt: "Motherboard Circuit",
    // Top-left area, rotated
    style: {
      top: "28%",
      left: "-8%",
      width: "clamp(180px, 20vw, 300px)",
      animationName: "floatB",
      animationDuration: "20s",
      animationDelay: "-4s",
      opacity: 0.12,
      transform: "rotate(-35deg)",
    },
  },
]

const cssKeyframes = `
  @keyframes floatA {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25%       { transform: translateY(-18px) rotate(2deg); }
    50%       { transform: translateY(-10px) rotate(-1deg); }
    75%       { transform: translateY(-24px) rotate(1.5deg); }
  }
  @keyframes floatB {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33%       { transform: translateY(16px) rotate(-2deg); }
    66%       { transform: translateY(8px) rotate(1deg); }
  }
`

export default function HardwareBackground() {
  const styleRef = useRef<HTMLStyleElement | null>(null)

  useEffect(() => {
    if (!styleRef.current) {
      const el = document.createElement("style")
      el.textContent = cssKeyframes
      document.head.appendChild(el)
      styleRef.current = el
    }
    return () => {
      if (styleRef.current) {
        styleRef.current.remove()
        styleRef.current = null
      }
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {floaters.map((f, i) => (
        <img
          key={i}
          src={f.src}
          alt={f.alt}
          draggable={false}
          style={{
            position: "absolute",
            ...f.style,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            userSelect: "none",
            mixBlendMode: "luminosity",
            filter: "hue-rotate(200deg) saturate(0.4) brightness(1.4)",
          }}
        />
      ))}
    </div>
  )
}
