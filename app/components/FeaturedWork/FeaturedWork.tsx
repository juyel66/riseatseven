"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const featuredItems = [
  {
    id: 1,
    title: "Scaling Modern E-Commerce Brands Globally",
    year: "[2023-2024]",
    image: "/images/1.webp",
    tag: "E-Commerce",
  },
  {
    id: 2,
    title: "Building AI-Driven Digital Experiences",
    year: "[2024]",
    image: "/images/2.jpg",
    tag: "Artificial Intelligence",
  },
  {
    id: 3,
    title: "Creative Strategy For Luxury Fashion",
    year: "[2022-2025]",
    image: "/images/3.jpg",
    tag: "Luxury Fashion",
  },
  {
    id: 4,
    title: "High-Converting Social Media Campaigns",
    year: "[2023]",
    image: "/images/4.webp",
    tag: "Marketing",
  },
  {
    id: 5,
    title: "Reimagining Search Visibility Worldwide",
    year: "[2021-2024]",
    image: "/images/5.jpg",
    tag: "SEO",
  },
  {
    id: 6,
    title: "Premium Branding For Global Startups",
    year: "[2024]",
    image: "/images/6.jpg",
    tag: "Branding",
  },
  {
    id: 7,
    title: "Transforming User Experience Through Design",
    year: "[2022-2025]",
    image: "/images/7.webp",
    tag: "UI/UX",
  },
];

const FeaturedWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const progress = Math.min(
        Math.max(-rect.top / rect.height, 0),
        0.999
      );

      const index = Math.floor(progress * featuredItems.length);

      setActiveIndex(index);
    };
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(textWrapperRef.current, {
      y: -(activeIndex * 120),
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.fromTo(
      imageRef.current,
      {
        scale: 1.05,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [activeIndex]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cursorRef.current) return;

    const bounds = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] bg-[#efefec] rounded-[36px] overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex">

        {/* LEFT */}
        <div className="w-1/2 h-screen px-14 py-14 flex flex-col border-r border-white/5 overflow-hidden">

          {/* Heading */}
          <div className="mb-16">
            <p className="text-white text-[42px] font-medium tracking-tight">
              Featured Work
            </p>
          </div>

          {/* TEXT SCROLLER */}
          <div className="relative h-[480px] overflow-hidden">

            <div
              ref={textWrapperRef}
              className="flex flex-col gap-8"
            >
              {featuredItems.map((item) => (
                <div
                  key={item.id}
                  className="min-h-[110px] flex items-start justify-between gap-8"
                >
                  <h2 className="text-white text-[72px] leading-[0.9] font-semibold tracking-[-4px] max-w-[700px]">
                    {item.title}
                  </h2>

                  <span className="text-white/60 text-xl mt-4 whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>

            {/* TOP FADE */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#050505] to-transparent z-10" />

            {/* BOTTOM FADE */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#050505] to-transparent z-10" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 h-screen p-5">

          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full rounded-[32px] overflow-hidden cursor-none"
          >

            {/* IMAGE */}
            <Image
              src={featuredItems[activeIndex].image}
              alt="featured"
              fill
              priority
              className="object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/10" />

            {/* TITLE */}
            <div className="absolute top-10 left-10 z-20 max-w-[650px]">
              <h3 className="text-white text-[68px] leading-[0.92] font-semibold tracking-[-4px]">
                {featuredItems[activeIndex].title}
              </h3>
            </div>

            {/* CUSTOM CURSOR */}
            <div
              ref={cursorRef}
              className="absolute top-0 left-0 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-36 h-36 rounded-full bg-[#B7F5E5] flex items-center justify-center">

                <svg
                  className="w-14 h-14 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>
              </div>
            </div>

            {/* TAG */}
            <div className="absolute right-8 bottom-8 z-20">
              <div className="px-5 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center gap-3 text-white">

                <span className="font-medium text-[15px]">
                  {featuredItems[activeIndex].tag}
                </span>

                <svg
                  className="w-4 h-4"
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

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;