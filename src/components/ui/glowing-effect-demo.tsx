"use client";

import { motion } from "framer-motion";
import { Palette, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-2 lg:gap-8 xl:max-h-[24rem]">
      <GridItem
        area="md:[grid-area:1/1/2/7] lg:[grid-area:1/1/3/7]"
        icon={<Palette className="h-5 w-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
        title="Skills & Software"
        description={
          <div className="space-y-2">
            <p>• Adobe Creative Suite (Photoshop, Illustrator, InDesign)</p>
            <p>• Figma, Sketch & Adobe XD</p>
            <p>• Brand Identity & Logo Design</p>
            <p>• Print & Digital Design</p>
            <p>• Typography & Layout Design</p>
          </div>
        }
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] lg:[grid-area:1/7/3/13]"
        icon={<Sparkles className="h-5 w-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />}
        title="Design Solutions"
        description={
          <div className="space-y-2">
            <p>• Custom Brand Identity Systems</p>
            <p>• Marketing Materials & Collateral</p>
            <p>• Web & Mobile App Design</p>
            <p>• Packaging & Product Design</p>
            <p>• Creative Strategy & Consulting</p>
          </div>
        }
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[18rem] list-none", area)}>
      <div className="relative h-full rounded-[1.5rem] border border-white/10 p-3 md:rounded-[2rem] md:p-4">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/20 p-8 md:p-10">
          {/* Flowing white border effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0,
            }}
          />
          
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-sm p-3 shadow-lg">
                {icon}
              </div>
              <h3 className="text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white/90">
                {title}
              </h3>
            </div>
            <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/60">
              {description}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};