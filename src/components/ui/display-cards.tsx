"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Image from "next/image";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  _iconClassName?: string;
  titleClassName?: string;
  image?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-orange-300" />,
  title = "Featured",
  description,
  date,
  _iconClassName,
  titleClassName = "text-orange-500",
  image,
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-[22rem] w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-orange-400/60 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2 animate-border-glow",
        className
      )}
      style={{
        borderColor: "rgb(251 146 40 / 0.4)", // orange-400 with opacity
      }}
    >
      <div>
        {image && (
          <Image
            src={image}
            alt="Profile"
            fill
            className="object-cover rounded-lg"
          />
        )}
        {(title || icon) && (
          <>
            <span className="relative inline-block rounded-full bg-orange-800 p-1">
              {icon}
            </span>
            <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
          </>
        )}
      </div>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-orange-400/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-orange-400/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards ?? defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}