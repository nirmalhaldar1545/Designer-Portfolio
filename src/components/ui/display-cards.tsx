"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  _iconClassName?: string;
  titleClassName?: string;
  image?: string;
  id?: number; // Add id for tracking which card is open
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 sm:size-5 md:size-6 text-orange-300" />,
  title = "Featured",
  description,
  date,
  _iconClassName,
  titleClassName = "text-orange-500",
  image,
  id,
}: DisplayCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default touch behavior
    setIsPopupOpen(!isPopupOpen); // Toggle popup state on single touch
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent text selection
    setIsPopupOpen(!isPopupOpen); // Toggle popup state on click
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleMouseOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.display-card')) {
        setIsPopupOpen(false);
      }
    };

    const handleTouchOutside = (event: TouchEvent) => {
      const target = event.target as Element;
      if (!target.closest('.display-card')) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleMouseOutside);
      document.addEventListener('touchstart', handleTouchOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, [isPopupOpen]);

  return (
    <div
      className={cn(
        "relative flex h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-88 xl:w-88 -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-2 sm:py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-orange-400/60 hover:bg-muted active:border-orange-400/60 active:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2 animate-border-glow touch-manipulation display-card",
        isPopupOpen && "border-orange-400/60 bg-muted",
        className
      )}
      style={{
        borderColor: "rgb(251 146 40 / 0.4)", // orange-400 with opacity
      }}
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
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
            <p className={cn("text-base sm:text-lg md:text-xl font-medium", titleClassName)}>{title}</p>
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
      className: "[grid-area:stack] hover:-translate-y-10 active:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-orange-400/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 active:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 active:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 active:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-orange-400/20 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 active:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 active:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 active:translate-y-10",
    },
  ];

  const displayCards = cards ?? defaultCards;

  return (
    <div className="grid gap-2 sm:gap-4 md:gap-6 \[grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
