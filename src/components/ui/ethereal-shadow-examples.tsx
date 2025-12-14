'use client';

import { EtherealShadow } from "@/components/ui/etheral-shadow";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Example 1: Subtle background effect
export function SubtleExample() {
    return (
        <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden">
            <EtherealShadow
                color="rgba(148, 163, 184, 0.8)"
                animation={{ scale: 50, speed: 80 }}
                noise={{ opacity: 0.8, scale: 1.0 }}
                sizing="fill"
                intensity={0.2}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-2xl font-bold text-white">Subtle Background</h3>
            </div>
        </div>
    );
}

// Example 2: Medium intensity with custom color
export function MediumIntensityExample() {
    return (
        <div className="relative w-full h-96 bg-indigo-900 rounded-lg overflow-hidden">
            <EtherealShadow
                color="rgba(99, 102, 241, 0.6)"
                animation={{ scale: 75, speed: 60 }}
                noise={{ opacity: 1, scale: 1.2 }}
                sizing="fill"
                intensity={0.5}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-2xl font-bold text-white">Medium Intensity</h3>
            </div>
        </div>
    );
}

// Example 3: Full intensity with fast animation
export function FullIntensityExample() {
    return (
        <div className="relative w-full h-96 bg-purple-900 rounded-lg overflow-hidden">
            <EtherealShadow
                color="rgba(168, 85, 247, 0.7)"
                animation={{ scale: 100, speed: 30 }}
                noise={{ opacity: 1, scale: 1.5 }}
                sizing="fill"
                intensity={0.8}
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-2xl font-bold text-white">Full Intensity</h3>
            </div>
        </div>
    );
}

// Example 4: Integration with existing shapes (like your portfolio)
export function PortfolioIntegrationExample() {
    return (
        <div className="relative w-full h-screen bg-[#000814] overflow-hidden">
            {/* Ethereal Shadow Background */}
            <div className="absolute inset-0 z-0">
                <EtherealShadow
                    color="rgba(128, 128, 128, 1)"
                    animation={{ scale: 100, speed: 90 }}
                    noise={{ opacity: 1, scale: 1.2 }}
                    sizing="fill"
                    intensity={0.4}
                />
            </div>

            {/* Your existing gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/[0.06] via-transparent to-cyan-400/[0.06] blur-3xl z-[1]" />

            {/* Your floating shapes would go here */}
            <div className="absolute inset-0 overflow-hidden z-[3]">
                {/* Example floating shapes */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm"
                    animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    style={{ left: '20%', top: '30%' }}
                />
                <motion.div
                    className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-sm"
                    animate={{ y: [0, 15, 0], rotate: [360, 180, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ right: '25%', top: '60%' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-6xl font-bold text-white mb-4">
                        Portfolio with Ethereal Effects
                    </h1>
                    <p className="text-xl text-white/80">
                        Your floating shapes remain visible with enhanced background
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

// Example 5: Different sizing options
export function SizingExamples() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Fill (default) */}
            <div className="relative h-64 bg-slate-800 rounded-lg overflow-hidden">
                <EtherealShadow
                    color="rgba(59, 130, 246, 0.5)"
                    animation={{ scale: 80, speed: 70 }}
                    sizing="fill"
                    intensity={0.6}
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-white font-semibold">Fill (Default)</span>
                </div>
            </div>

            {/* Stretch */}
            <div className="relative h-64 bg-slate-800 rounded-lg overflow-hidden">
                <EtherealShadow
                    color="rgba(59, 130, 246, 0.5)"
                    animation={{ scale: 80, speed: 70 }}
                    sizing="stretch"
                    intensity={0.6}
                />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-white font-semibold">Stretch</span>
                </div>
            </div>
        </div>
    );
}

// Example 6: All-in-one showcase
export function EtherealShadowShowcase() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Ethereal Shadow Component
                    </h1>
                    <p className="text-xl text-white/80">
                        Various intensity levels and configurations
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <SubtleExample />
                    <MediumIntensityExample />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <FullIntensityExample />
                    <SizingExamples />
                </div>

                <PortfolioIntegrationExample />
            </div>
        </div>
    );
}