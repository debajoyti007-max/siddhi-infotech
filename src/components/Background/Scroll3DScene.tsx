import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Scroll3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 80)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    container.appendChild(renderer.domElement)

    // 1. Electronic Circuit Constellation (Hardware Nodes)
    const particleCount = 220
    const positions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 160
      const y = (Math.random() - 0.5) * 120
      const z = (Math.random() - 0.5) * 80

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z

      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.02,
      })
    }

    const pGeometry = new THREE.BufferGeometry()
    pGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    const pMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 1.8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    })
    const particleMesh = new THREE.Points(pGeometry, pMaterial)
    scene.add(particleMesh)

    // 2. Interconnected Circuit Lines
    const lineGeo = new THREE.BufferGeometry()
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    })
    const lineMesh = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lineMesh)

    // 3. Floating 3D Micro-Capacitors & Silicon Chips (Procedural Geometries)
    const chipGroup = new THREE.Group()
    scene.add(chipGroup)

    const chipGeo = new THREE.BoxGeometry(2.4, 0.4, 2.4)
    const chipMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    })

    for (let i = 0; i < 14; i++) {
      const chip = new THREE.Mesh(chipGeo, chipMat)
      chip.position.set(
        (Math.random() - 0.5) * 120,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 50
      )
      chip.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0)
      chipGroup.add(chip)
    }

    // Scroll & Mouse Tracking
    let scrollProgress = 0
    let targetScrollProgress = 0
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll > 0) {
        targetScrollProgress = window.scrollY / maxScroll
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.02
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.02
    }
    window.addEventListener("mousemove", onMouseMove)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", onResize)

    let reqId: number

    const animate = () => {
      reqId = requestAnimationFrame(animate)

      // Smooth interpolation for scroll and mouse
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.06
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05

      // ── Dynamic 3D Morphing on Scroll ──
      // 1. Camera Elevation & Rotation follows page depth
      camera.position.z = 80 - scrollProgress * 30 // Zooms in as user reads down
      camera.position.y = -scrollProgress * 25 + mouseY * 0.4
      camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 15 + mouseX * 0.4
      camera.rotation.z = Math.sin(scrollProgress * Math.PI) * 0.25
      camera.rotation.y = scrollProgress * 0.4 + mouseX * 0.005

      // 2. Chip rotations speed up and orient with scroll
      chipGroup.rotation.y = scrollProgress * Math.PI + mouseX * 0.01
      chipGroup.rotation.x = scrollProgress * 0.8

      // 3. Dynamic color shift as sections advance
      // Hero (Deep Blue/Cyan) -> Services/Brands (Violet/Indigo) -> Contact (Emerald/Teal)
      if (scrollProgress < 0.35) {
        pMaterial.color.setHex(0x60a5fa) // Bright Blue
        lineMat.color.setHex(0x3b82f6)
      } else if (scrollProgress < 0.7) {
        pMaterial.color.setHex(0x38bdf8) // Vibrant Cyan
        lineMat.color.setHex(0x0284c7)
      } else {
        pMaterial.color.setHex(0x10b981) // Emerald (Shop Open)
        lineMat.color.setHex(0x059669)
      }

      // Update particle positions with subtle drift
      const pos = pGeometry.attributes.position.array as Float32Array
      const linePositions: number[] = []

      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x
        pos[i * 3 + 1] += velocities[i].y
        pos[i * 3 + 2] += velocities[i].z

        if (Math.abs(pos[i * 3]) > 80) velocities[i].x *= -1
        if (Math.abs(pos[i * 3 + 1]) > 60) velocities[i].y *= -1
        if (Math.abs(pos[i * 3 + 2]) > 40) velocities[i].z *= -1

        // Connect neighboring nodes
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < 16) {
            linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2])
            linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2])
          }
        }
      }

      pGeometry.attributes.position.needsUpdate = true
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3))

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", onResize)
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      pGeometry.dispose()
      pMaterial.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      chipGeo.dispose()
      chipMat.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.75 }}
    />
  )
}