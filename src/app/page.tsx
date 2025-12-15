"use client"

import ShaderDemo_ATC from "@/components/ui/atc-shader"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { AnimatedLetterText } from "@/components/ui/potfolio-text"
import { Home, User, Briefcase, Settings } from 'lucide-react'

export default function HomePage() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Settings },
    { name: 'About', url: '/about', icon: User },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center gap-16 p-8">
        <div className="flex flex-col items-center gap-8 text-center z-10">
          <AnimatedLetterText text="PORTFOLIO" letterToReplace="o" className="text-7xl md:text-9xl text-white" />

          <p className="text-white/80 text-lg max-w-md">
            An elegant text component where letters transform into animated visuals
          </p>
        </div>
      </div>
      <div className="relative">
        <NavBar items={navItems} />
      </div>
      <div className="absolute inset-0 -z-10">
        <ShaderDemo_ATC />
      </div>
    </main>
  )
}