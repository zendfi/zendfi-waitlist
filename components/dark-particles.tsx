// components/DarkParticles.tsx
'use client'

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import * as THREE from "three"

export default function DarkParticles() {
  const particlesRef = useRef<THREE.Group | null>(null)
  const time = useRef(0)

  // Respect prefers-reduced-motion
  const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // adjust density by viewport width
  const count = typeof window !== "undefined"
    ? window.innerWidth < 640 ? 600 : window.innerWidth < 1024 ? 1200 : 2000
    : 800

  useFrame(({ clock }) => {
    if (prefersReduced) return
    time.current = clock.elapsedTime
    if (!particlesRef.current) return
    particlesRef.current.rotation.x = Math.sin(time.current * 0.01) * 0.1 + time.current * 0.02
    particlesRef.current.rotation.y = Math.cos(time.current * 0.015) * 0.15 + time.current * 0.05
  })

  return (
    <group ref={particlesRef}>
      <Stars
        radius={100}
        depth={60}
        count={count}
        factor={4}
        saturation={0}
        fade
        speed={prefersReduced ? 0 : 0.5}
      />
    </group>
  )
}