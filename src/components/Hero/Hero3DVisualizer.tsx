import { useEffect, useRef } from "react"
import * as THREE from "three"
import { Cpu, Activity, Terminal } from "lucide-react"

export default function Hero3DVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 5, 12)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const violetLight = new THREE.PointLight(0xa855f7, 3, 25)
    violetLight.position.set(5, 6, 4)
    scene.add(violetLight)

    const cyanLight = new THREE.PointLight(0x22d3ee, 2.5, 25)
    cyanLight.position.set(-5, -3, 4)
    scene.add(cyanLight)

    // Silicon BGA Processor Group
    const chipGroup = new THREE.Group()
    scene.add(chipGroup)

    // 1. Substrate Board (Green/Dark Obsidian PCB)
    const pcbGeo = new THREE.BoxGeometry(5.2, 0.15, 5.2)
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x090a10,
      metalness: 0.85,
      roughness: 0.25,
    })
    const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat)
    chipGroup.add(pcbMesh)

    // PCB Border Wireframe Accent
    const pcbWireGeo = new THREE.EdgesGeometry(pcbGeo)
    const pcbWireMat = new THREE.LineBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5,
    })
    const pcbWire = new THREE.LineSegments(pcbWireGeo, pcbWireMat)
    chipGroup.add(pcbWire)

    // 2. Silicon Core Die (Top Centered Chip)
    const dieGeo = new THREE.BoxGeometry(2.8, 0.18, 2.8)
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x181824,
      metalness: 0.95,
      roughness: 0.1,
    })
    const dieMesh = new THREE.Mesh(dieGeo, dieMat)
    dieMesh.position.y = 0.15
    chipGroup.add(dieMesh)

    // Mirror Silicon Heat Spreader Top
    const spreaderGeo = new THREE.BoxGeometry(2.5, 0.05, 2.5)
    const spreaderMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    })
    const spreaderMesh = new THREE.Mesh(spreaderGeo, spreaderMat)
    spreaderMesh.position.y = 0.26
    chipGroup.add(spreaderMesh)

    // 3. Simulated BGA Solder Spheres (Bottom Array)
    const sphereGeo = new THREE.SphereGeometry(0.08, 8, 8)
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.9,
      roughness: 0.1,
    })

    const ballCountPerSide = 8
    const step = 4.4 / (ballCountPerSide - 1)
    const bgaGroup = new THREE.Group()

    for (let r = 0; r < ballCountPerSide; r++) {
      for (let c = 0; c < ballCountPerSide; c++) {
        // Skip some middle balls to mimic real BGA thermal pattern
        if (r > 2 && r < 5 && c > 2 && c < 5) continue

        const ball = new THREE.Mesh(sphereGeo, sphereMat)
        ball.position.set(-2.2 + c * step, -0.12, -2.2 + r * step)
        bgaGroup.add(ball)
      }
    }
    chipGroup.add(bgaGroup)

    // 4. Holographic Diagnostic Scanning Ring
    const scanRingGeo = new THREE.RingGeometry(3.6, 3.68, 64)
    const scanRingMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    })
    const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat)
    scanRing.rotation.x = Math.PI / 2
    scanRing.position.y = 0.1
    chipGroup.add(scanRing)

    // Outer Orbiting Coordinate Ring
    const orbitRingGeo = new THREE.TorusGeometry(4.8, 0.02, 16, 100)
    const orbitRingMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.35,
    })
    const orbitRing = new THREE.Mesh(orbitRingGeo, orbitRingMat)
    orbitRing.rotation.x = Math.PI / 2.5
    scene.add(orbitRing)

    // Interactive Drag / Cursor Tracking
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let targetRotationX = 0.45
    let targetRotationY = 0.65

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouseX
        const deltaY = e.clientY - prevMouseY
        targetRotationY += deltaX * 0.01
        targetRotationX += deltaY * 0.01
        prevMouseX = e.clientX
        prevMouseY = e.clientY
      }
    }

    const onMouseUp = () => {
      isDragging = false
    }

    container.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", onResize)

    let reqId: number
    let clock = new THREE.Clock()

    const renderLoop = () => {
      reqId = requestAnimationFrame(renderLoop)
      const elapsedTime = clock.getElapsedTime()

      if (!isDragging) {
        targetRotationY += 0.006
      }

      chipGroup.rotation.y += (targetRotationY - chipGroup.rotation.y) * 0.08
      chipGroup.rotation.x += (targetRotationX - chipGroup.rotation.x) * 0.08

      // Laser scanner elevation pulse
      scanRing.position.y = Math.sin(elapsedTime * 2.2) * 0.45 + 0.1
      orbitRing.rotation.z += 0.003

      renderer.render(scene, camera)
    }

    renderLoop()

    return () => {
      cancelAnimationFrame(reqId)
      container.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("resize", onResize)

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
      />

      {/* Floating Precision Micro-HUDs */}
      <div className="absolute -top-3 left-2 sm:-left-4 z-20 px-3.5 py-2 rounded-lg bg-zinc-950/80 border border-violet-500/30 backdrop-blur-md text-[11px] font-mono flex items-center gap-2 shadow-xl shadow-black/60">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-zinc-400">BENCH STATUS:</span>
        <span className="text-violet-300 font-semibold tracking-wider">CHIP ACTIVE</span>
      </div>

      <div className="absolute top-1/4 -right-2 sm:-right-6 z-20 px-3 py-2 rounded-lg bg-zinc-950/80 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono flex flex-col gap-0.5 shadow-xl shadow-black/60">
        <div className="flex items-center gap-1.5 text-cyan-400 text-[10px] tracking-wider font-semibold">
          <Activity className="w-3 h-3" />
          <span>MICRO-TOLERANCE</span>
        </div>
        <span className="text-zinc-300 font-bold">± 0.02 mm BALL PITCH</span>
      </div>

      <div className="absolute -bottom-3 left-4 sm:left-6 z-20 px-4 py-2.5 rounded-xl bg-zinc-950/90 border border-white/10 backdrop-blur-md text-[11px] font-mono flex items-center gap-3 shadow-2xl shadow-black/80">
        <div className="p-1.5 rounded-md bg-violet-600/20 text-violet-400 border border-violet-500/20">
          <Cpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Diagnostic Station</div>
          <div className="text-zinc-200 font-semibold tracking-wide">BGA & VGA Reflow Profiling</div>
        </div>
      </div>

      <div className="absolute bottom-6 -right-2 sm:-right-4 z-20 px-3 py-1.5 rounded-lg bg-zinc-950/70 border border-zinc-800 backdrop-blur-sm text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
        <Terminal className="w-3 h-3 text-violet-400" />
        <span>Drag 3D model to inspect</span>
      </div>
    </div>
  )
}

