"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 gpu-accelerated"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-14 sm:h-16 lg:h-20 mobile-text-optimized">
                    {/* Badge Component */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] ml-4 sm:ml-6 lg:ml-8 touch-target"
                    >
                        <Circle className="h-1.5 w-1.5 sm:h-2 sm:w-2 fill-rose-500/80" />
                        <span className="text-xs sm:text-sm text-white/60 tracking-wide">
                            Designer Portfolio
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}