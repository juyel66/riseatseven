"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";

import { FeaturedWorkProps } from "../types/featured-work.types";

const FeaturedWork = ({ items }: FeaturedWorkProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top ?? 0;
      const progress = Math.max(0, window.innerHeight - sectionTop);

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#0b0b0b] px-4 py-4 md:px-6 md:py-6 lg:px-4 lg:py-4">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1fr] lg:items-start">
        <div className="sticky top-4 rounded-[28px] bg-[#0b0b0b] p-5 text-white md:p-8 lg:h-[calc(82vh-1rem)] lg:p-10">
          <div className="flex h-full flex-col justify-center gap-4 md:gap-5 lg:gap-6">
            {items.map((item, index) => {
              const itemOffset = scrollProgress - index * 220;
              const reveal = Math.min(1, Math.max(0, itemOffset / 180));

              return (
                <div
                  key={item.id}
                  className="max-w-4xl transition-all duration-700 ease-out"
                  style={{
                    opacity: reveal,
                    transform: `translateY(${(1 - reveal) * 56}px)`,
                  }}
                >
                  <h2 className="text-[clamp(3.3rem,7vw,7.8rem)] font-semibold leading-[0.86] tracking-[-0.08em] text-white/96">
                    {item.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] bg-[#f5f5f3] p-4 md:p-6 lg:p-6">
          <div className="space-y-4 md:space-y-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="group"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative h-90 overflow-hidden rounded-4xl bg-black/10 md:h-105 lg:h-115 ${
                    hoveredId === item.id ? "cursor-none" : "cursor-pointer"
                  }`}
                  style={{ background: item.background }}
                >
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                  {hoveredId === item.id && (
                    <div
                      className="fixed pointer-events-none z-50"
                      style={{
                        left: `${cursorPos.x}px`,
                        top: `${cursorPos.y}px`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <svg
                        className="h-10 w-10 text-white drop-shadow-lg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black backdrop-blur-md">
                    {item.category}
                  </div>

                  <div className="absolute bottom-5 right-5 rounded-full bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    {index + 1}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-1 pb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-black md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/55">
                      Dummy project description for the card.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-black transition duration-300 group-hover:bg-black group-hover:text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;