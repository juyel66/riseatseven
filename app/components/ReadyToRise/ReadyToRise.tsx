"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const text = "Ready to Rise at Seven?";

const ReadyToRise = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {

      // SPLIT CHARACTERS
      const split = SplitText.create(textRef.current, {
        type: "chars",
      });

      // INITIAL STATE
      gsap.set(split.chars, {
        y: -700,
      });

      // MAIN HORIZONTAL SCROLL
      const horizontalTween = gsap.to(textRef.current, {
        x: () => -(textRef.current!.scrollWidth - window.innerWidth + 200),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=4200",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // CHARACTER DROP ANIMATION
      split.chars.forEach((char, index) => {
        gsap.to(char, {
          y: 0,
          ease: "power3.out",

          scrollTrigger: {
            trigger: char,
            containerAnimation: horizontalTween,
            start: "left 92%",
            end: "left 72%",
            scrub: 1,
          },
        });
      });

      // WHOLE SECTION MOVE UP END
      gsap.to(sectionRef.current, {
        y: -180,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#efefec]
      "
    >
      <div
        className="
          flex
          h-full
          items-center
        "
      >
        <h2
          ref={textRef}
          className="
            whitespace-nowrap
            pl-[100vw]

            text-black
            font-semibold
            leading-none
            tracking-[-0.08em]

            text-[90px]
            md:text-[150px]
            lg:text-[200px]
          "
        >
          {text}
        </h2>
      </div>
    </section>
  );
};

export default ReadyToRise;