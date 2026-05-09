"use client";

import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featuredWorkItems from "./data";
import { FeaturedWorkProps } from "../types/featured-work.types";

gsap.registerPlugin(ScrollTrigger);

const VISIBLE_TEXT_ROWS = 4;
const TEXT_ROW_HEIGHT_REM = 4.25;

const FeaturedWork = ({ items }: FeaturedWorkProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftListRef = useRef<HTMLDivElement | null>(null);

  const allItems = items ?? featuredWorkItems;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useLayoutEffect(() => {
    if (!sectionRef.current || !leftListRef.current) return;

    const ctx = gsap.context(() => {
      const travelRem = Math.max(0, allItems.length - VISIBLE_TEXT_ROWS) * TEXT_ROW_HEIGHT_REM;

      gsap.to(
        leftListRef.current,
        {
          y: `-${travelRem}rem`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `${(allItems.length - VISIBLE_TEXT_ROWS) * 120}px`,
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [allItems.length]);

  return (
    <section ref={sectionRef} className="w-full bg-[#0b0b0b] px-4 py-8 md:px-6 md:py-8 lg:px-4">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1fr] h-150 lg:h-175">
        <div className="rounded-[28px] bg-[#0b0b0b] p-5 text-white md:p-8 lg:p-10 flex items-center justify-center overflow-hidden">
          <div className="flex h-full w-full items-center justify-center">
            <div
              className="relative mx-auto w-full max-w-4xl overflow-hidden"
              style={{ height: `calc(${VISIBLE_TEXT_ROWS} * ${TEXT_ROW_HEIGHT_REM}rem)` }}
            >
              <div ref={leftListRef} className="flex flex-col will-change-transform">
                {allItems.map((item, index) => (
                  <div key={item.id} className="flex h-17 items-center">
                    <h2 className="text-[clamp(2.2rem,4vw,4.4rem)] font-semibold leading-none tracking-[-0.06em] text-white/96">
                      <span className="mr-4 inline-block w-12 text-white/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#0b0b0b] p-4 md:p-6 lg:p-6 overflow-y-auto overflow-x-hidden">
          <div className="space-y-4 md:space-y-6">
            {allItems.map((item, index) => (
              <div
                key={item.id}
                className="group"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative h-90 overflow-hidden rounded-4xl md:h-105 lg:h-115 ${
                    hoveredId === item.id ? "cursor-none" : "cursor-pointer"
                  }`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
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
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between px-1 pb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/55">{item.category} feature case study.</p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-300 group-hover:bg-white group-hover:text-black">
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
