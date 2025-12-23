// components/Starfield.tsx
'use client'

import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import DarkParticles from "./dark-particles"

export default function Starfield({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className} pointer-events-none select-none`}>
      <Canvas
        camera={{ position: [0, 0, 40], fov: 50 }}
        gl={{ antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.18} />
        <pointLight position={[10, 10, 10]} intensity={0.65} />
        <Suspense fallback={null}>
          <DarkParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}