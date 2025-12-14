"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
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

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="relative w-full overflow-hidden bg-[#030303] pt-16 md:pt-20 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    colorFlow={true}
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    colorFlow={true}
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    colorFlow={true}
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    colorFlow={true}
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    colorFlow={true}
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Section - Text Content */}
                        <div className="lg:col-span-7 xl:col-span-6">
                            <div className="lg:pr-8 xl:pr-12">
                                {/* Badge moved to navbar */}

                                <motion.div
                                    variants={fadeUpVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="text-left"
                                >
                                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                            {title1}
                                        </span>
                                        <br />
                                        <span
                                            className={cn(
                                                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                                            )}
                                        >
                                            {title2}
                                        </span>
                                        </h1>
                                </motion.div>

                                <motion.div
                                    variants={fadeUpVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.9 }}
                                    className="text-left"
                                >
                                    <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-lg">
                                        Crafting exceptional digital experiences through
                                        innovative design and cutting-edge technology.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* SVG section removed */}

                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }