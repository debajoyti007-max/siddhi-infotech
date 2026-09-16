import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { RotateCw, Eye } from "lucide-react"

interface Hotspot {
  id: string
  title: string
  detail: string
}

const hotspots: Hotspot[] = [
  {
    id: "gpu",
    title: "VGA & Graphics Chip",
    detail: "BGA reballing & repair for lines on screen, blue screen, or gaming crashes.",
  },
  {
    id: "pmic",
    title: "Motherboard Power IC",
    detail: "Short circuit repair for dead laptops that won't turn on or charge.",
  },
  {
    id: "display",
    title: "Screen & Display Cable",
    detail: "Replacement & repair for black screen, dim backlight, or flickering display.",
  },
]

export default function Interactive3DLaptop() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100)
    camera.position.set(0, 3.8, 7.5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    mount.appendChild(renderer.domElement)

    // Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
    keyLight.position.set(4, 7, 5)
    keyLight.castShadow = true
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 1.0)
    fillLight.position.set(-5, 4, -2)
    scene.add(fillLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75)
    scene.add(ambientLight)

    // Soft Shadow Floor
    const shadowFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 14),
      new THREE.ShadowMaterial({ opacity: 0.28 })
    )
    shadowFloor.rotation.x = -Math.PI / 2
    shadowFloor.position.y = -0.02
    shadowFloor.receiveShadow = true
    scene.add(shadowFloor)

    // Master Laptop Group
    const laptopGroup = new THREE.Group()
    scene.add(laptopGroup)

    // Realistic Matte Aluminum Material
    const aluminumMaterial = new THREE.MeshStandardMaterial({
      color: 0x2b2e38,
      metalness: 0.82,
      roughness: 0.32,
    })

    const keyboardDeckMat = new THREE.MeshStandardMaterial({
      color: 0x1a1c24,
      metalness: 0.6,
      roughness: 0.5,
    })

    const keyCapMat = new THREE.MeshStandardMaterial({
      color: 0x12141a,
      metalness: 0.2,
      roughness: 0.6,
    })

    // Base Chassis
    const baseMesh = new THREE.Mesh(
      new THREE.BoxGeometry(4.6, 0.16, 3.2),
      aluminumMaterial
    )
    baseMesh.position.y = 0.08
    baseMesh.castShadow = true
    baseMesh.receiveShadow = true
    laptopGroup.add(baseMesh)

    // Trackpad
    const trackpad = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.02, 1.1),
      new THREE.MeshStandardMaterial({ color: 0x353846, metalness: 0.75, roughness: 0.25 })
    )
    trackpad.position.set(0, 0.17, 0.85)
    laptopGroup.add(trackpad)

    // Keyboard Well
    const keyboardWell = new THREE.Mesh(
      new THREE.BoxGeometry(4.0, 0.02, 1.6),
      keyboardDeckMat
    )
    keyboardWell.position.set(0, 0.17, -0.45)
    laptopGroup.add(keyboardWell)

    // Individual Keycaps
    const keyRows = 5
    const keyCols = 14
    const keyGeo = new THREE.BoxGeometry(0.22, 0.04, 0.22)
    const keysGroup = new THREE.Group()

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        const key = new THREE.Mesh(keyGeo, keyCapMat)
        key.position.set(
          (c - (keyCols - 1) / 2) * 0.26,
          0.19,
          -1.0 + r * 0.26
        )
        keysGroup.add(key)
      }
    }
    laptopGroup.add(keysGroup)

    // Display Lid Assembly
    const lidGroup = new THREE.Group()
    lidGroup.position.set(0, 0.16, -1.6)
    laptopGroup.add(lidGroup)

    const lidMesh = new THREE.Mesh(
      new THREE.BoxGeometry(4.6, 3.1, 0.12),
      aluminumMaterial
    )
    lidMesh.position.set(0, 1.55, 0)
    lidMesh.castShadow = true
    lidGroup.add(lidMesh)

    // Bezel
    const screenBezel = new THREE.Mesh(
      new THREE.BoxGeometry(4.4, 2.9, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x08090d, metalness: 0.9, roughness: 0.2 })
    )
    screenBezel.position.set(0, 1.55, 0.06)
    lidGroup.add(screenBezel)

    // Realistic Screen Texture (Real Diagnostic Terminal, not AI sci-fi)
    const screenCanvas = document.createElement("canvas")
    screenCanvas.width = 1024
    screenCanvas.height = 680
    const ctx = screenCanvas.getContext("2d")!

    // Modern dark desktop wallpaper background
    const bgGrad = ctx.createLinearGradient(0, 0, 1024, 680)
    bgGrad.addColorStop(0, "#0f172a")
    bgGrad.addColorStop(1, "#020617")
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, 1024, 680)

    // Top menu bar
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)"
    ctx.fillRect(0, 0, 1024, 38)
    ctx.fillStyle = "#e2e8f0"
    ctx.font = "bold 15px -apple-system, sans-serif"
    ctx.fillText("Siddhi Infotech — Hardware Repair Console", 24, 25)
    ctx.fillStyle = "#10b981"
    ctx.fillText("Bench Online · Natvar Ji", 830, 25)

    // Window Box
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)"
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)"
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.roundRect(48, 64, 928, 560, 12)
    ctx.fill()
    ctx.stroke()

    // Terminal dots
    ctx.fillStyle = "#ef4444"
    ctx.beginPath(); ctx.arc(76, 92, 6, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = "#f59e0b"
    ctx.beginPath(); ctx.arc(98, 92, 6, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = "#10b981"
    ctx.beginPath(); ctx.arc(120, 92, 6, 0, Math.PI * 2); ctx.fill()

    // Title
    ctx.fillStyle = "#94a3b8"
    ctx.font = "14px monospace"
    ctx.fillText("hardware-test-report.log", 148, 97)

    // Real terminal output lines
    ctx.font = "16px monospace"
    ctx.fillStyle = "#38bdf8"
    ctx.fillText("> SIDDHI INFOTECH · 20 GANESH CHANDRA AVE, GATE 6, KOLKATA", 76, 150)

    ctx.fillStyle = "#e2e8f0"
    ctx.fillText("----------------------------------------------------------------", 76, 180)
    ctx.fillText("MOTHERBOARD DIAGNOSTIC REPORT: Dell XPS / MacBook Logic Board", 76, 210)
    ctx.fillText("----------------------------------------------------------------", 76, 240)

    ctx.fillStyle = "#10b981"
    ctx.fillText("[✓] 19.5V Main Power Rail Short ........... REMOVED (Replaced PMIC)", 76, 280)
    ctx.fillText("[✓] Dedicated GPU Solder Joint ............ REBALLED (Infrared Station)", 76, 320)
    ctx.fillText("[✓] USB-C 20V Power Delivery Negotiator ... RESTORED (Pass 20V 3.25A)", 76, 360)
    ctx.fillText("[✓] Corroded Trace Deoxidation ............ ULTRASONIC CLEANED", 76, 400)
    ctx.fillText("[✓] Thermal Resistance & Heatpipes ........ TESTED (Max Temp 64°C)", 76, 440)

    ctx.fillStyle = "#e2e8f0"
    ctx.fillText("----------------------------------------------------------------", 76, 480)
    ctx.fillStyle = "#38bdf8"
    ctx.fillText("STATUS: All Hardware Tests Passed. Repaired & Ready for Customer Handover.", 76, 520)
    ctx.fillStyle = "#94a3b8"
    ctx.fillText("Direct Contact: Natvar Ji (Phone / WhatsApp: 7890426115)", 76, 560)

    const screenTexture = new THREE.CanvasTexture(screenCanvas)
    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4.2, 2.7),
      new THREE.MeshBasicMaterial({ map: screenTexture })
    )
    screenMesh.position.set(0, 1.55, 0.08)
    lidGroup.add(screenMesh)

    // Open lid to standard 115 degrees
    lidGroup.rotation.x = THREE.MathUtils.degToRad(-25)

    // Initial rotation
    laptopGroup.rotation.y = THREE.MathUtils.degToRad(-25)
    laptopGroup.rotation.x = THREE.MathUtils.degToRad(8)

    // Smooth Orbit Controls
    let isDragging = false
    let prevX = 0
    let prevY = 0
    let targetRotY = THREE.MathUtils.degToRad(-25)
    let targetRotX = THREE.MathUtils.degToRad(8)

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      prevX = e.clientX
      prevY = e.clientY
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const deltaX = e.clientX - prevX
      const deltaY = e.clientY - prevY
      targetRotY += deltaX * 0.007
      targetRotX = Math.max(-0.2, Math.min(0.5, targetRotX + deltaY * 0.007))
      prevX = e.clientX
      prevY = e.clientY
    }

    const onMouseUp = () => {
      isDragging = false
    }

    mount.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    // Touch handlers
    let touchStartX = 0
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
      }
    }
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - touchStartX
        const deltaY = e.touches[0].clientY - touchStartY
        targetRotY += deltaX * 0.008
        targetRotX = Math.max(-0.2, Math.min(0.5, targetRotX + deltaY * 0.008))
        touchStartX = e.touches[0].clientX
        touchStartY = e.touches[0].clientY
      }
    }
    mount.addEventListener("touchstart", onTouchStart, { passive: true })
    mount.addEventListener("touchmove", onTouchMove, { passive: true })

    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", onResize)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)

      if (!isDragging) {
        targetRotY += 0.002
      }

      laptopGroup.rotation.y += (targetRotY - laptopGroup.rotation.y) * 0.06
      laptopGroup.rotation.x += (targetRotX - laptopGroup.rotation.x) * 0.06

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      mount.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      mount.removeEventListener("touchstart", onTouchStart)
      mount.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("resize", onResize)
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full max-w-xl aspect-[16/12] mx-auto select-none">
      {/* 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
      />

      {/* Orbit Helper */}
      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-400">
        <RotateCw className="w-3.5 h-3.5 text-zinc-400" />
        <span>360° Drag to inspect</span>
      </div>

      {/* Real Hotspot Buttons */}
      <div className="absolute bottom-2 left-2 right-2 z-20 flex flex-wrap gap-2 justify-center">
        {hotspots.map((h) => {
          const isSelected = activeHotspot?.id === h.id
          return (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(isSelected ? null : h)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>{h.title}</span>
            </button>
          )
        })}
      </div>

      {/* Hotspot details card */}
      {activeHotspot && (
        <div className="absolute top-3 left-3 z-20 max-w-xs p-4 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl animate-in fade-in duration-200">
          <div className="text-[10px] font-mono text-blue-400 uppercase font-bold mb-1">
            Common Repair
          </div>
          <div className="text-sm font-display font-bold text-white mb-1">
            {activeHotspot.title}
          </div>
          <div className="text-xs text-zinc-300 font-sans leading-relaxed">
            {activeHotspot.detail}
          </div>
        </div>
      )}
    </div>
  )
}