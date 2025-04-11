"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerate = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const spans = scope.current?.querySelectorAll("span");
    if (!spans) return;

    animate(
      spans,
      { opacity: 1, scale: 1 },
      {
        duration: 0.6,
        delay: stagger(0.1),
        ease: "easeOut", // ✅ Correct value for @motion.dev/react
      },
    );
  }, [animate, scope]);

  const renderWords = () => {
    const lines = words.split("\n");

    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => (
          <div key={lineIdx} className="inline-block w-full">
            {line.split(" ").map((word, wordIdx) => {
              const globalIdx = lineIdx * 10 + wordIdx;
              const isHighlighted = globalIdx % 5.5 === 0;

              return (
                <motion.span
                  key={`${word}-${lineIdx}-${wordIdx}`}
                  className={cn(
                    "inline-block opacity-0 mr-[0.25em]",
                    isHighlighted
                      ? "text-purple-main dark:text-purple-main"
                      : "dark:text-neutral-50 text-neutral-50",
                  )}
                  style={{
                    transform: "scale(0.95)",
                    transformOrigin: "bottom center",
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
