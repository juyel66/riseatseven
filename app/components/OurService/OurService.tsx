"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";

const services = [
  {
    id: 1,
    title: "Digital PR",
    image: "/images/1.webp",
  },
  {
    id: 2,
    title: "Organic Social & Content",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Search & Growth Strategy",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "Content Experience",
    image: "/images/4.webp",
  },
  {
    id: 5,
    title: "Data & Insights",
    image: "/images/5.jpg",
  },
  {
    id: 6,
    title: "Onsite SEO",
    image: "/images/6.jpg",
  },
];

const OurService = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const viewAllButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleButtonHover = (
    buttonRef: React.RefObject<HTMLButtonElement | null>,
    isEnter: boolean,
  ) => {
    if (!buttonRef.current) return;

    const initialText = buttonRef.current.querySelector(".initial-text");
    const hoverText = buttonRef.current.querySelector(".hover-text");

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

  return (
    <section className="w-full bg-[#efefec] px-7 py-10 md:px-10 lg:px-8">

      {/* TOP */}
      <div className="flex items-start justify-between border-b border-black/10 pb-10">

        {/* TITLE */}
        <div className="flex items-center gap-5">

          <h2 className="text-[70px] leading-none font-semibold  text-black">
            Our
          </h2>

          <div className="relative w-[100px] h-[100px] rounded-[28px] overflow-hidden mt-2">
            <Image
              src="/images/1.webp"
              alt="service"
              fill
              className="object-cover"
            />
          </div>

          {/* This is send your brief sections   */}

          <div>

          </div>

          <h2 className="text-[70px] leading-none font-semibold  text-black">
            Services
          </h2>
        </div>

        {/* BUTTON */}
        <button
          ref={viewAllButtonRef}
          onMouseEnter={() => handleButtonHover(viewAllButtonRef, true)}
          onMouseLeave={() => handleButtonHover(viewAllButtonRef, false)}
          className="px-6 h-12 bg-white border border-gray-300 rounded-full inline-flex items-center justify-center gap-2 text-black font-medium text-[14px]  transition relative overflow-hidden"
        >
          <div className="initial-text flex items-center gap-2">
            View All Services
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <div className="hover-text absolute flex items-center gap-2 translate-y-12 opacity-0">
            View All Services
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* SERVICES */}
      <div className="grid grid-cols-2 gap-x-24 pt-10">

        {/* LEFT */}
        <div className="flex flex-col">
          {services.slice(0, 3).map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative border-b border-black/10 py-6 overflow-hidden cursor-pointer"
              >

                {/* HOVER BG */}
                <div
                  className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-500 ${
                    isHovered
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/35" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-center gap-3 px-6">

                  {/* ARROW */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isHovered
                        ? "w-8 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M7 17L17 7M17 7H8M17 7V16"
                      />
                    </svg>
                  </div>

                  {/* TEXT */}
                  <h3
                    className={`text-[42px] leading-none tracking-[-2px] font-medium whitespace-nowrap transition-colors duration-300 ${
                      isHovered
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          {services.slice(3, 6).map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative border-b border-black/10 py-6 overflow-hidden cursor-pointer"
              >

                {/* HOVER BG */}
                <div
                  className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-500 ${
                    isHovered
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/35" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-center gap-3 px-6">

                  {/* ARROW */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isHovered
                        ? "w-8 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M7 17L17 7M17 7H8M17 7V16"
                      />
                    </svg>
                  </div>

                  {/* TEXT */}
                  <h3
                    className={`text-[42px] leading-none tracking-[-2px] font-medium whitespace-nowrap transition-colors duration-300 ${
                      isHovered
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurService;