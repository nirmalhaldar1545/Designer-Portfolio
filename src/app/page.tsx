"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { AnimatedLetterText } from "@/components/ui/potfolio-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Home, User, Briefcase, Settings } from 'lucide-react'

export default function HomePage() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Settings },
    { name: 'About', url: '/about', icon: User },
  ]

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-16 p-8">
          <div className="flex flex-col items-center gap-8 text-center">
            <AnimatedLetterText text="PORTFOLIO" letterToReplace="o" className="text-7xl md:text-9xl text-white drop-shadow-lg" />

            <p className="text-white/90 text-lg max-w-md drop-shadow-md">
              An elegant text component where letters transform into animated visuals
            </p>
          </div>
        </div>
        <div className="relative">
          <NavBar items={navItems} />
        </div>
      </div>
    </div>
  )
}