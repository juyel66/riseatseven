"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HeroProps } from "../types/hero";
import heroSectionsImg from "../../../public/images/heroSectionsImg.png";
import centerImage from "../../../public/images/hero.png";



const HeroSection = ({
  titleLine1,
  titleLine2Left,
  titleLine2Right,
  subtitle,
  backgroundImage,
  centerImage,
  leftText,
  rightText,
}: HeroProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleLine1Ref = useRef<HTMLDivElement | null>(null);
  const titleLeftRef = useRef<HTMLDivElement | null>(null);
  const titleRightRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const rightTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    
    gsap.fromTo(
      containerRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 2, ease: "power2.out" }
    );

   
    tl.fromTo(
      titleLine1Ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      0
    );

    // Title line 2 - Left part comes from left
    tl.fromTo(
      titleLeftRef.current,
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      0.2
    );

    // Title line 2 - Right part comes from right
    tl.fromTo(
      titleRightRef.current,
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      0.2
    );

    // Center image pop animation
    tl.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0, rotate: -10 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      0.3
    );

    // Subtitle animation
    tl.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      0.6
    );

    // Left text animation
    if (leftTextRef.current) {
      tl.fromTo(
        leftTextRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0.4
      );
    }

    // Right text animation
    if (rightTextRef.current) {
      tl.fromTo(
        rightTextRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
        },
        0.4
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-white/10"></div>

      {/* Background Blur Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          backdropFilter: "blur(2px)",
          background: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)"
        }}
      />

      {/* Top Badge Area with Awards Image */}
      <div className="absolute top-8 md:top-12 z-20 text-center">
        <p className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-90 mb-3">
          #1 MOST RECOMMENDED <br /> CONTENT MARKETING AGENCY
        </p>
        <div className="flex justify-center">
          <Image 
            src={heroSectionsImg} 
            alt="awards" 
            width={200}
            height={140}
            className="h-32 md:h-13 w-auto object-contain opacity-90" 
          />
        </div>
      </div>

      {/* Left Side Text */}
      {leftText && (
        <div
          ref={leftTextRef}
          className="absolute left-6 bottom-12 md:left-16 md:bottom-20 w-full md:w-[30%] text-xs md:text-sm lg:text-base font-light leading-relaxed opacity-90"
        >
          {leftText}
        </div>
      )}

      {/* Right Side Text */}
   {rightText && (
  <div
    ref={rightTextRef}
    className="absolute right-6 bottom-12 md:right-16 md:bottom-20 w-full md:w-[30%] text-xs md:text-sm lg:text-base font-light leading-relaxed text-center md:text-center opacity-90"
  >
    {/* Mobile → normal text */}
    <div className="block md:hidden">{rightText}</div>

    {/* md+ → break after 4 words */}
    <div className="hidden md:block">
      {(() => {
        const words = rightText.split(" ");
        const firstLine = words.slice(0, 4).join(" ");
        const secondLine = words.slice(4).join(" ");

        return (
          <>
            <div>{firstLine}</div>
            <div>{secondLine}</div>
          </>
        );
      })()}
    </div>
  </div>
)}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* First line - "We Create" */}
        <div
          ref={titleLine1Ref}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight mb-2 tracking-tight"
        >
          {titleLine1}
        </div>

        {/* Second line with split animation and center image */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Left part of title */}
          <div
            ref={titleLeftRef}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight"
          >
            {titleLine2Left}
          </div>

          {/* Center Image */}
          <div ref={imageRef} className="flex items-center">
           <Image 
              src={centerImage} 
              alt="Center Image" 
              width={150} 
              height={150} 
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            />
          </div>

          {/* Right part of title */}
          <div
            ref={titleRightRef}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight"
          >
            {titleLine2Right}
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl lg:text-3xl font-light opacity-90 tracking-wide"
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;