"use client";

import { motion } from "framer-motion";
import { AnimatedLetterText } from "@/components/ui/potfolio-text";
import { cn } from "@/lib/utils";


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
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
                    y: [0, 20, 0],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 8,
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
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[1px] border border-white/20",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "",
    title1 = "",
    title2 = "",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.02] via-transparent to-violet-500/[0.02] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden z-10">
                <ElegantShape
                    delay={0.3}
                    width={700}
                    height={160}
                    rotate={12}
                    gradient="from-indigo-400/[0.25]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={600}
                    height={140}
                    rotate={-15}
                    gradient="from-rose-400/[0.25]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={400}
                    height={100}
                    rotate={-8}
                    gradient="from-violet-400/[0.25]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={300}
                    height={80}
                    rotate={20}
                    gradient="from-amber-400/[0.25]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={250}
                    height={60}
                    rotate={-25}
                    gradient="from-cyan-400/[0.25]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />

                <ElegantShape
                    delay={0.8}
                    width={200}
                    height={50}
                    rotate={35}
                    gradient="from-emerald-400/[0.25]"
                    className="right-[25%] md:right-[30%] bottom-[15%] md:bottom-[20%]"
                />
            </div>

            <div className="relative z-20 flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center gap-8 text-center">
                    <AnimatedLetterText 
                        text="PORTFOLIO" 
                        letterToReplace="o" 
                        className="text-7xl md:text-9xl text-white drop-shadow-lg" 
                    />

                    <p className="text-white/90 text-lg max-w-md drop-shadow-md">
                        An elegant text component where letters transform into animated visuals
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/30 via-transparent to-[#030303]/10 pointer-events-none z-5" />
        </div>
    );
}

export { HeroGeometric }