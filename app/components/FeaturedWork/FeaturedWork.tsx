"use client";

import { useLayoutEffect, useRef, useState, type MouseEvent } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FeaturedWorkProps } from "../types/featured-work.types";

gsap.registerPlugin(ScrollTrigger);

const createFeaturedItems = (items: FeaturedWorkProps["items"]) => {
  const targetCount = 10;
  const backgrounds = [
    "linear-gradient(135deg,#f6d365 0%,#fda085 100%)",
    "linear-gradient(135deg,#a18cd1 0%,#fbc2eb 100%)",
    "linear-gradient(135deg,#fad0c4 0%,#ffd1ff 100%)",
    "linear-gradient(135deg,#ffecd2 0%,#fcb69f 100%)",
    "linear-gradient(135deg,#f093fb 0%,#f5576c 100%)",
    "linear-gradient(135deg,#5ee7df 0%,#b490ca 100%)",
    "linear-gradient(135deg,#c3cfe2 0%,#c3cfe2 100%)",
    "linear-gradient(135deg,#89f7fe 0%,#66a6ff 100%)",
    "linear-gradient(135deg,#fddb92 0%,#d1fdff 100%)",
    "linear-gradient(135deg,#fdfbfb 0%,#ebedee 100%)",
  ];

  const baseItems = items ? [...items] : [];

  for (let index = baseItems.length; index < targetCount; index += 1) {
    baseItems.push({
      id: index + 1,
      title: `Project ${index + 1}`,
      category: ["Branding", "Web", "Product", "Campaign"][index % 4],
      background: backgrounds[index % backgrounds.length],
    });
  }

  return baseItems.slice(0, targetCount);
};

const FeaturedWork = ({ items }: FeaturedWorkProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftListRef = useRef<HTMLDivElement | null>(null);

  const allItems = createFeaturedItems(items);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useLayoutEffect(() => {
    if (!sectionRef.current || !leftListRef.current) return;

    const ctx = gsap.context(() => {
      const lineStepRem = 3.6;
      const visibleLines = 4;
      const travelRem = Math.max(0, allItems.length - visibleLines) * lineStepRem;

      gsap.fromTo(
        leftListRef.current,
        { y: 0 },
        {
          y: `-${travelRem}rem`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [allItems.length]);

  return (
    <section ref={sectionRef} className="w-full bg-[#0b0b0b] px-4 py-4 md:px-6 md:py-6 lg:px-4 lg:py-4">
      <div className="grid gap-4 lg:grid-cols-[0.92fr_1fr] lg:items-center">
        <div className="sticky rounded-[28px] bg-[#0b0b0b] p-5 text-white md:p-8 lg:top-1/2 lg:h-screen lg:-translate-y-1/2 lg:p-10 lg:overflow-hidden">
          <div className="flex h-full items-center justify-center">
            <div className="relative mx-auto h-80 w-full max-w-4xl overflow-hidden sm:h-112 md:h-136 lg:h-152">
              <div ref={leftListRef} className="flex flex-col gap-4 will-change-transform">
                {allItems.map((item, index) => (
                  <div key={item.id} className="py-2">
                    <h2 className="text-[clamp(3rem,6.6vw,7rem)] font-semibold leading-[0.8] tracking-[-0.08em] text-white/96">
                      {String(index + 1).padStart(2, "0")} {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#0b0b0b] p-4 md:p-6 lg:p-6">
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
                    <h3 className="text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-white/55">Dummy project description for the card.</p>
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
