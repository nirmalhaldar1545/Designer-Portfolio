"use client"

import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, Settings } from 'lucide-react'

export default function HomePage() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Settings },
    { name: 'About', url: '/about', icon: User },
  ]

  return (
    <div className="relative min-h-screen">
      <HeroGeometric />
      <AnimatedBackground />
      <NavBar items={navItems} />
    </div>
  )
}