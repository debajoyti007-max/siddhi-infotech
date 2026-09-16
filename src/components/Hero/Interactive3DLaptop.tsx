import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { RotateCw, Eye } from "lucide-react"

interface Hotspot {
  id: string
  title: string
  subtitle: string
  pos: [number, number, number]
  target: [number, number, number]
}

const hotspots: Hotspot[] = [
  {
    id: "gpu",
    title: "VGA & Dedicated GPU",
    subtitle: "BGA Reballing · Cold Joint Solder Remediation",
    pos: [1.2, 0.4, 0.2],
    target: [1.2, 0.2, 0.2],
  },
  {
    id: "pmic",
    title: "Power Rail & PMIC",
    subtitle: "Short-to-Ground Tracing · Capacitor Array Rework",
    pos: [-1.4, 0.4, -0.4],
    target: [-1.4, 0.2, -0.4],
  },
  {
    id: "display",
    title: "Retina / EDP Flex Interface",
    subtitle: "Backlight Driver IC · High-Speed Signal Lines",
    pos: [0, 1.8, -1.8],
    target: [0, 1.6, -1.8],
  },
]

export default function Interactive3DLaptop() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)
  // ready

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 4.2, 7.8)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    mount.appendChild(renderer.domElement)

    // Lighting (Industrial Studio Rig)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4)
    keyLight.position.set(5, 8, 5)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.width = 1024
    keyLight.shadow.mapSize.height = 1024
    keyLight.shadow.bias = -0.0005
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xa855f7, 1.2)
    fillLight.position.set(-6, 4, -3)
    scene.add(fillLight)

    const cyanRim = new THREE.PointLight(0x38bdf8, 2.5, 20)
    cyanRim.position.set(0, -2, -4)
    scene.add(cyanRim)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    // Shadow Floor
    const shadowFloorGeo = new THREE.PlaneGeometry(16, 16)
    const shadowFloorMat = new THREE.ShadowMaterial({ opacity: 0.35 })
    const shadowFloor = new THREE.Mesh(shadowFloorGeo, shadowFloorMat)
    shadowFloor.rotation.x = -Math.PI / 2
    shadowFloor.position.y = -0.05
    shadowFloor.receiveShadow = true
    scene.add(shadowFloor)

    // Master Laptop Root Group
    const laptopGroup = new THREE.Group()
    scene.add(laptopGroup)

    // Materials (Metallic Titanium & Dark Matte)
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x22242e,
      metalness: 0.85,
      roughness: 0.28,
    })

    const keyboardDeckMat = new THREE.MeshStandardMaterial({
      color: 0x161820,
      metalness: 0.7,
      roughness: 0.45,
    })

    const keyCapMat = new THREE.MeshStandardMaterial({
      color: 0x0f1117,
      metalness: 0.2,
      roughness: 0.6,
    })

    // 1. Lower Base Chassis
    const baseGeo = new THREE.BoxGeometry(4.6, 0.16, 3.2)
    const baseMesh = new THREE.Mesh(baseGeo, metalMaterial)
    baseMesh.position.y = 0.08
    baseMesh.castShadow = true
    baseMesh.receiveShadow = true
    laptopGroup.add(baseMesh)

    // Trackpad Inset
    const trackpadGeo = new THREE.BoxGeometry(1.6, 0.02, 1.1)
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x2a2d3a,
      metalness: 0.8,
      roughness: 0.2,
    })
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat)
    trackpad.position.set(0, 0.17, 0.85)
    laptopGroup.add(trackpad)

    // Keyboard Wells & Keys
    const keyboardWellGeo = new THREE.BoxGeometry(4.0, 0.02, 1.6)
    const keyboardWell = new THREE.Mesh(keyboardWellGeo, keyboardDeckMat)
    keyboardWell.position.set(0, 0.17, -0.45)
    laptopGroup.add(keyboardWell)

    // Procedural Keycaps
    const keyRows = 5
    const keyCols = 14
    const keyWidth = 0.22
    const keyHeight = 0.04
    const keyDepth = 0.22
    const keySpacingX = 0.26
    const keySpacingZ = 0.26

    const keyGeo = new THREE.BoxGeometry(keyWidth, keyHeight, keyDepth)
    const keysGroup = new THREE.Group()

    for (let r = 0; r < keyRows; r++) {
      for (let c = 0; c < keyCols; c++) {
        const key = new THREE.Mesh(keyGeo, keyCapMat)
        key.position.set(
          (c - (keyCols - 1) / 2) * keySpacingX,
          0.19,
          -1.0 + r * keySpacingZ
        )
        keysGroup.add(key)
      }
    }
    laptopGroup.add(keysGroup)

    // 2. Display Assembly (Lid) with Hinge
    const lidGroup = new THREE.Group()
    lidGroup.position.set(0, 0.16, -1.6) // Hinge pivot position
    laptopGroup.add(lidGroup)

    const lidGeo = new THREE.BoxGeometry(4.6, 3.1, 0.12)
    const lidMesh = new THREE.Mesh(lidGeo, metalMaterial)
    lidMesh.position.set(0, 1.55, 0)
    lidMesh.castShadow = true
    lidGroup.add(lidMesh)

    // Screen Bezel
    const screenBezelGeo = new THREE.BoxGeometry(4.4, 2.9, 0.02)
    const screenBezelMat = new THREE.MeshStandardMaterial({
      color: 0x050508,
      metalness: 0.95,
      roughness: 0.1,
    })
    const screenBezel = new THREE.Mesh(screenBezelGeo, screenBezelMat)
    screenBezel.position.set(0, 1.55, 0.06)
    lidGroup.add(screenBezel)

    // Screen Display Canvas Texture (Showing Real Motherboard Schematics)
    const screenCanvas = document.createElement("canvas")
    screenCanvas.width = 1024
    screenCanvas.height = 680
    const ctx = screenCanvas.getContext("2d")!

    // Draw high-precision engineering blueprint
    ctx.fillStyle = "#07080d"
    ctx.fillRect(0, 0, 1024, 680)

    // Grid lines
    ctx.strokeStyle = "rgba(124, 58, 237, 0.15)"
    ctx.lineWidth = 1
    for (let x = 0; x < 1024; x += 32) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, 680)
      ctx.stroke()
    }
    for (let y = 0; y < 680; y += 32) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(1024, y)
      ctx.stroke()
    }

    // Circuit traces
    ctx.strokeStyle = "#38bdf8"
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.moveTo(180, 340)
    ctx.lineTo(380, 340)
    ctx.lineTo(440, 260)
    ctx.lineTo(620, 260)
    ctx.lineTo(700, 380)
    ctx.lineTo(860, 380)
    ctx.stroke()

    // BGA Processor Core Die on Screen
    ctx.fillStyle = "#1e1b4b"
    ctx.strokeStyle = "#a855f7"
    ctx.lineWidth = 3
    ctx.fillRect(430, 220, 164, 164)
    ctx.strokeRect(430, 220, 164, 164)

    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 18px monospace"
    ctx.fillText("SIDDHI BGA REPAIR BENCH", 442, 280)
    ctx.fillStyle = "#38bdf8"
    ctx.font = "14px monospace"
    ctx.fillText("STATUS: 100% OPERATIONAL", 442, 310)
    ctx.fillStyle = "#a1a1aa"
    ctx.font = "12px monospace"
    ctx.fillText("CHANDANI METRO GATE 6 · KOLKATA", 442, 340)

    const screenTexture = new THREE.CanvasTexture(screenCanvas)
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture })
    const screenMesh = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 2.7), screenMat)
    screenMesh.position.set(0, 1.55, 0.08)
    lidGroup.add(screenMesh)

    // Open laptop lid to an authentic 115-degree working angle
    lidGroup.rotation.x = THREE.MathUtils.degToRad(-25)

    // Initial positioning
    laptopGroup.rotation.y = THREE.MathUtils.degToRad(-28)
    laptopGroup.rotation.x = THREE.MathUtils.degToRad(8)

    // Smooth Orbit & Interaction
    let isDragging = false
    let prevX = 0
    let prevY = 0
    let targetRotY = THREE.MathUtils.degToRad(-28)
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

    // Touch support for mobile
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

    // ready

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)

      // Idle rotation when not interacting
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

      {/* Control overlay */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-400">
        <RotateCw className="w-3.5 h-3.5 text-violet-400 animate-spin" style={{ animationDuration: "12s" }} />
        <span className="hidden sm:inline">360° Orbit Drag to Inspect</span>
        <span className="sm:hidden">Drag to Rotate</span>
      </div>

      {/* Interactive Hardware Inspection Pills */}
      <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap gap-2 justify-center">
        {hotspots.map((h) => {
          const isActive = activeHotspot?.id === h.id
          return (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(isActive ? null : h)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all backdrop-blur-md cursor-pointer ${
                isActive
                  ? "bg-violet-600 text-white border border-violet-400 shadow-lg shadow-violet-950/50"
                  : "bg-zinc-950/80 text-zinc-300 border border-white/10 hover:border-violet-500/40 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>{h.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active Hotspot Inspector Modal Pill */}
      {activeHotspot && (
        <div className="absolute top-3 left-3 z-20 max-w-xs p-3.5 rounded-xl bg-zinc-950/95 border border-violet-500/50 backdrop-blur-xl shadow-2xl animate-in fade-in duration-200">
          <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-1">
            Component Inspection
          </div>
          <div className="text-sm font-display font-bold text-white mb-1">
            {activeHotspot.title}
          </div>
          <div className="text-xs font-mono text-zinc-400 leading-relaxed">
            {activeHotspot.subtitle}
          </div>
        </div>
      )}
    </div>
  )
}


