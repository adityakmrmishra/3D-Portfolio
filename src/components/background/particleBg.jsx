"use client"
import particlesConfig from "./particles-Config"
import Particles from "@tsparticles/react"
const ParticlesBg = () => {
  return (
    <Particles params={particlesConfig} >
    </Particles>
  )
}

export default ParticlesBg