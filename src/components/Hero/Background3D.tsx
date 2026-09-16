import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 80

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Particle nodes (Cybernetic Constellation / Circuit Grid)
    const particleCount = 200
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60

      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.02,
      })
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

    // Subtle glowing violet and cyan point material
    const pMaterial = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 1.4,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    })

    const pointCloud = new THREE.Points(geometry, pMaterial)
    scene.add(pointCloud)

    // Subtle line connections between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineMesh)

    // Ambient floating ring representing a microscopic silicon wafer
    const ringGeo = new THREE.RingGeometry(38, 38.4, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.07,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 3
    scene.add(ringMesh)

    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.03
      mouseY = (e.clientY - window.innerHeight / 2) * 0.03
    }
    window.addEventListener("mousemove", handleMouseMove)

    const handleResize = () => {
      if (!mount) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      scene.rotation.y = targetX * 0.008
      scene.rotation.x = targetY * 0.008

      ringMesh.rotation.z += 0.001

      const pos = geometry.attributes.position.array as Float32Array
      const linePositions: number[] = []

      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].x
        pos[i * 3 + 1] += velocities[i].y
        pos[i * 3 + 2] += velocities[i].z

        if (Math.abs(pos[i * 3]) > 70) velocities[i].x *= -1
        if (Math.abs(pos[i * 3 + 1]) > 50) velocities[i].y *= -1
        if (Math.abs(pos[i * 3 + 2]) > 30) velocities[i].z *= -1

        // Connect close particles with subtle laser lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3]
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < 18) {
            linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2])
            linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2])
          }
        }
      }

      geometry.attributes.position.needsUpdate = true

      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      )

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      pMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      ringGeo.dispose()
      ringMat.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  )
}
