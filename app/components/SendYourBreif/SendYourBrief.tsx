"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const marqueeItems = [
  {
    id: 1,
    text: "Creators",
    image: "/images/1.webp",
  },
  {
    id: 2,
    text: "Not Algorithm",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    text: "Human Strategy",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    text: "Organic Reach",
    image: "/images/4.webp",
  },
];

const SendYourBrief = () => {
  const [hovered, setHovered] = useState(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  const xPercentRef = useRef(0);

  // DEFAULT = LEFT
  const directionRef = useRef(-1);

  useEffect(() => {
    let animationFrame: number;

    const speed = 0.03;

    const animate = () => {
      if (!marqueeRef.current) return;

      // SAME SPEED BOTH DIRECTIONS
      xPercentRef.current += speed * directionRef.current;

      // LOOP
      if (xPercentRef.current <= -50) {
        xPercentRef.current = 0;
      }

      if (xPercentRef.current >= 0) {
        xPercentRef.current = -50;
      }

      gsap.set(marqueeRef.current, {
        xPercent: xPercentRef.current,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // SCROLL UP → RIGHT
      if (currentScrollY < lastScrollY) {
        directionRef.current = 1;
      }

      // SCROLL DOWN → LEFT
      else {
        directionRef.current = -1;
      }

      lastScrollY = currentScrollY;

      // AFTER SCROLL STOP → BACK TO LEFT
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        directionRef.current = -1;
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cursorRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.15,
      ease: "power3.out",
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full bg-[#efefec] overflow-hidden py-8 cursor-none"
    >

      {/* CUSTOM CURSOR */}
      {hovered && (
        <div
          ref={cursorRef}
          className="absolute top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          <div className="px-8 h-16 rounded-full bg-[#B8FFE7] flex items-center gap-3 whitespace-nowrap shadow-xl">

            <span className="text-black text-[18px] font-medium">
              Send Us Your Brief
            </span>

            <svg
              className="w-5 h-5 text-black"
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
        </div>
      )}

      {/* MARQUEE */}
      <div
        ref={marqueeRef}
        className="flex w-max"
      >

        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-10 px-8"
          >

            {/* TEXT */}
            <h2 className="text-[140px] leading-none tracking-[-10px] font-semibold text-black whitespace-nowrap">
              {item.text}
            </h2>

            {/* IMAGE */}
            <div className="relative w-[200px] h-[200px] rounded-[40px] overflow-hidden flex-shrink-0">

              <Image
                src={item.image}
                alt={item.text}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SendYourBrief;