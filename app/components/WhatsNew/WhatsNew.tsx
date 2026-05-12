"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";

const newsData = [
  {
    id: 1,
    title:
      "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: "Carrie Rose",
    time: "2 mins",
    category: "News",
    image: "/images/1.webp",
    authorImage: "/images/1.webp",
  },
  {
    id: 2,
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
    author: "Ray Saddiq",
    time: "2 mins",
    category: "Food/Hospitality",
    image: "/images/2.jpg",
    authorImage: "/images/2.jpg",
  },
  {
    id: 3,
    title:
      "Rise at Seven Appointed by Langtins to Drive Demand and Retail Growth",
    author: "Carrie Rose",
    time: "2 mins",
    category: "Drink",
    image: "/images/3.jpg",
    authorImage: "/images/1.webp",
  },
];

const WhatsNew = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const explorMoreButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonHover = (
    buttonRef: React.RefObject<HTMLButtonElement> | HTMLDivElement,
    isEnter: boolean,
  ) => {
    let element: HTMLElement | null = null;
    
    if (buttonRef instanceof HTMLElement) {
      element = buttonRef;
    } else if ("current" in buttonRef) {
      element = buttonRef.current;
    }

    if (!element) return;

    const initialText = element.querySelector(".initial-text");
    const hoverText = element.querySelector(".hover-text");

    if (isEnter) {
      gsap.to(initialText, {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(hoverText, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(initialText, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      gsap.to(hoverText, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cursorRef.current) return;

    const x = e.clientX;
    const y = e.clientY;

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.22,
      ease: "power3.out",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#efefec] px-4  md:px-6 md:py-14 lg:px-8">

      {/* GLOBAL CURSOR */}
      <div
        ref={cursorRef}
        className={`fixed left-0 top-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
          activeCard ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#B8FFE7] shadow-2xl">

          <svg
            className="h-8 w-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M7 17L17 7M17 7H8M17 7V16"
            />
          </svg>
        </div>
      </div>

      {/* TOP */}
      <div className="mb-8 flex items-start justify-between gap-6 md:items-center">

        {/* TITLE */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5">

          <h2 className="text-[52px] font-semibold leading-none tracking-[-4px] text-black md:text-[92px] md:tracking-[-6px]">
            What's
          </h2>

          <div className="relative h-16 w-16 overflow-hidden rounded-[18px] md:h-20 md:w-20">

            <Image
              src="/images/2.jpg"
              alt="What's New"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-[52px] font-semibold leading-none tracking-[-4px] text-black md:text-[92px] md:tracking-[-6px]">
            New
          </h2>
        </div>

        {/* BUTTON */}
        <button
          ref={explorMoreButtonRef}
          onMouseEnter={() => handleButtonHover(explorMoreButtonRef, true)}
          onMouseLeave={() => handleButtonHover(explorMoreButtonRef, false)}
          className="hidden h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black   transition md:flex relative overflow-hidden"
        >

          <div className="initial-text flex items-center gap-2">
            <span>Explore More Thoughts</span>

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H8M17 7V16"
              />
            </svg>
          </div>

          <div className="hover-text absolute flex items-center gap-2 translate-y-12 opacity-0">
            <span>Explore More Thoughts</span>

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H8M17 7V16"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* LINE */}
      <div className="mb-6 h-px w-full bg-black/10 md:mb-8" />

      {/* GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {newsData.map((item) => (
          <div
            key={item.id}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setActiveCard(item.id)}
            onMouseLeave={() => setActiveCard(null)}
            className="group relative cursor-none"
          >

            {/* IMAGE CARD */}
            <div className="relative h-[420px] overflow-hidden rounded-[28px] bg-black md:h-[560px]">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/15" />

              {/* CATEGORY */}
              <div className="absolute left-3 top-3 z-20 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-black backdrop-blur-md">
                {item.category}
              </div>
            </div>

            {/* META */}
            <div className="mt-4 flex items-center gap-4">

              {/* AUTHOR */}
              <div className="flex items-center gap-2">

                <div className="relative h-7 w-7 overflow-hidden rounded-full">

                  <Image
                    src={item.authorImage}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="text-sm text-black/70">
                  {item.author}
                </span>
              </div>

              {/* TIME */}
              <div className="flex items-center gap-1 text-sm text-black/60">

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>{item.time}</span>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="mt-3 max-w-[95%] text-[20px] font-medium leading-[1.05] tracking-[-2px] text-black md:text-[42px]">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsNew;