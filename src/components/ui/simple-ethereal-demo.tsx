'use client';

import { EtherealShadow } from "@/components/ui/etheral-shadow";

// Simple demo without Framer Motion to avoid server-side rendering issues
export function SimpleEtherealDemo() {
    return (
        <div className="relative w-full min-h-screen bg-[#000814] overflow-hidden">
            {/* Ethereal Shadow Background - positioned absolutely behind everything */}
            <div className="absolute inset-0 z-0">
                <EtherealShadow
                    color="rgba(128, 128, 128, 1)"
                    animation={{ scale: 100, speed: 90 }}
                    noise={{ opacity: 1, scale: 1.2 }}
                    sizing="fill"
                    intensity={0.4}
                />
            </div>

            {/* Original gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.06] via-transparent to-cyan-400/[0.06] blur-3xl z-[1]" />
            
            {/* Vignette Effect */}
            <div className="absolute inset-0 pointer-events-none z-[2]" style={{
                background: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.3) 100%)'
            }} />

            {/* Content Layer - highest z-index */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="md:text-7xl text-6xl lg:text-8xl font-bold text-center text-white mb-6">
                        Ethereal Shadows
                    </h1>
                    <p className="text-lg text-white/80">
                        Background effects with your existing floating shapes preserved
                    </p>
                </div>
            </div>
        </div>
    );
}