"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
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
        <div className="relative w-full overflow-hidden bg-[#030303] pt-14 sm:pt-16 lg:pt-20 min-h-screen mobile-text-optimized gpu-accelerated">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
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

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Image positioned at container level (same as navbar) */}
                <div className="absolute left-4 sm:left-6 lg:left-8 top-0 sm:top-4 lg:top-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="relative z-10 w-full"
                    >
                        <Image
                            src="/Assets/Images/figure.png"
                            alt="Designer figure"
                            width={100}
                            height={133}
                            className="w-[64px] h-auto sm:w-[96px] md:w-[128px] lg:w-[160px] xl:w-[200px] object-contain image-responsive"
                            priority={false}
                            sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, (max-width: 1024px) 128px, (max-width: 1280px) 160px, 200px"
                            loading="lazy"
                            decoding="async"
                        />
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-6 items-start">
                        {/* Right Section - Text Content */}
                        <div className="lg:col-span-6 xl:col-span-7 order-2 lg:order-2 lg:col-start-7">
                            <div className="pl-20 sm:pl-24 md:pl-28 lg:pl-32 xl:pl-36 2xl:pl-40 lg:pr-6 ml-0 sm:ml-2 lg:ml-3 xl:ml-4 pt-4 sm:pt-8 lg:pt-12">
                                {/* Badge moved to navbar */}

                                <motion.div
                                    variants={fadeUpVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 1, delay: 0.7 }}
                                    className="text-left"
                                >
                                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight">
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

                                {/* Description text removed */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }