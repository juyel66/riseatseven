"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { AgencyItem, AgencyProps } from "../types/agency.types";

const Agency = ({ items }: AgencyProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const xRef = useRef(0);
  const directionRef = useRef(-1);
  const velocityRef = useRef(0.8);
  const targetVelocityRef = useRef(0.8);
  const lastPointerXRef = useRef<number | null>(null);
  const isPointerDownRef = useRef(false);
  const isDraggingRef = useRef(false);

  const sliderItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    if (!containerRef.current) return;

    const track = containerRef.current;
    let halfWidth = track.scrollWidth / 2;
    let wrapX = gsap.utils.wrap(-halfWidth, 0);

    const refreshBounds = () => {
      halfWidth = track.scrollWidth / 2;
      wrapX = gsap.utils.wrap(-halfWidth, 0);
    };

    refreshBounds();
    gsap.set(track, { x: 0 });

    const tick = () => {
      velocityRef.current += (targetVelocityRef.current - velocityRef.current) * 0.08;
      xRef.current += velocityRef.current * directionRef.current;
      xRef.current = wrapX(xRef.current);

      gsap.set(track, { x: xRef.current });
    };

    gsap.ticker.add(tick);
    window.addEventListener("resize", refreshBounds);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", refreshBounds);
    };
  }, []);

  const handlePointerDown = () => {
    isPointerDownRef.current = true;
    isDraggingRef.current = false;
    lastPointerXRef.current = null;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to movement if pointer is down
    if (!isPointerDownRef.current) return;

    if (lastPointerXRef.current === null) {
      lastPointerXRef.current = event.clientX;
      return;
    }

    const deltaX = event.clientX - lastPointerXRef.current;
    lastPointerXRef.current = event.clientX;

    if (deltaX === 0) return;

    // Mark as dragging once there's actual movement
    isDraggingRef.current = true;

    // Reverse direction: moving right means deltaX is positive, slider should move right (+1)
    directionRef.current = deltaX > 0 ? 1 : -1;
    targetVelocityRef.current = gsap.utils.clamp(0.5, 3, Math.abs(deltaX) / 12);
  };

  const handlePointerUp = () => {
    isPointerDownRef.current = false;
    isDraggingRef.current = false;
    lastPointerXRef.current = null;
    // Return to auto-scroll
    directionRef.current = -1;
    targetVelocityRef.current = 0.8;
  };

  const handlePointerLeave = () => {
    if (isPointerDownRef.current) {
      handlePointerUp();
    }
  };

  return (
    <section
      ref={sectionRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className="w-full bg-[#F3F3F1] py-12 md:py-16 overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <div
        ref={containerRef}
        className="flex w-max items-center gap-24 px-6 md:px-20 select-none"
      >
      
        <div className="min-w-75 shrink-0 text-black text-lg font-medium">
          The agency behind
        </div>

   
        {sliderItems.map((item: AgencyItem, index: number) => (
          <div
            key={`${item.id}-${index}`}
            className="min-w-50 shrink-0 flex justify-center items-center"
          >
            <Image
              src={item.logo}
              alt={`logo-${item.id}`}
              width={140}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agency;