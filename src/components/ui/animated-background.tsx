"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(59, 130, 246, ${0.3 + i * 0.02})`,
        width: 1 + i * 0.05,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="rgb(59, 130, 246)"
                        strokeWidth={path.width}
                        strokeOpacity={0.4 + path.id * 0.02}
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.8, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}