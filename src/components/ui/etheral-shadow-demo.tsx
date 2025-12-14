'use client';

import { EtherealShadow } from "@/components/ui/etheral-shadow";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    colorFlow = false,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    colorFlow?: boolean;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        // Color motion flow classes
                        colorFlow && "animate-gradient-x bg-gradient-to-r",
                        !colorFlow && "bg-gradient-to-r to-transparent",
                        gradient
                    )}
                    style={{
                        // Enhanced color motion flow with CSS custom properties
                        ...(colorFlow && {
                            background: `linear-gradient(45deg,
                                var(--gradient-start, rgba(99, 102, 241, 0.15)) 0%,
                                var(--gradient-mid, rgba(168, 85, 247, 0.12)) 25%,
                                var(--gradient-end, rgba(236, 72, 153, 0.15)) 50%,
                                var(--gradient-mid, rgba(168, 85, 247, 0.12)) 75%,
                                var(--gradient-start, rgba(99, 102, 241, 0.15)) 100%)`,
                            backgroundSize: '300% 300%',
                            animation: 'gradientShift 8s ease-in-out infinite',
                        }),
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

export function DemoOne() {
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

            {/* Floating Shapes Layer - positioned above background */}
            <div className="absolute inset-0 overflow-hidden z-[3]">
                <ElegantShape
                    delay={0.3}
                    width={300}
                    height={70}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    colorFlow={true}
                    className="left-[-15%] sm:left-[-10%] lg:left-[-5%] top-[10%] sm:top-[15%] lg:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={250}
                    height={60}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    colorFlow={true}
                    className="right-[-10%] sm:right-[-5%] lg:right-[0%] top-[65%] sm:top-[70%] lg:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={150}
                    height={40}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    colorFlow={true}
                    className="left-[0%] sm:left-[5%] lg:left-[10%] bottom-[0%] sm:bottom-[5%] lg:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={100}
                    height={30}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    colorFlow={true}
                    className="right-[10%] sm:right-[15%] lg:right-[20%] top-[5%] sm:top-[10%] lg:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={75}
                    height={20}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    colorFlow={true}
                    className="left-[15%] sm:left-[20%] lg:left-[25%] top-[0%] sm:top-[5%] lg:top-[10%]"
                />
            </div>

            {/* Content Layer - highest z-index */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-center"
                >
                    <h1 className="md:text-7xl text-6xl lg:text-8xl font-bold text-center text-foreground relative z-20">
                        Ethereal Shadows
                    </h1>
                    <p className="text-lg text-white/80 mt-4">
                        Floating shapes with ethereal background effects
                    </p>
                </motion.div>
            </div>
        </div>
    );
}