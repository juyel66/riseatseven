"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ReadyToRise = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {

      // SPLIT TEXT
      const split = SplitText.create(textRef.current, {
        type: "chars",
      });

      // INITIAL CHARACTER POSITION
      gsap.set(split.chars, {
        y: -700,
        opacity: 1,
      });

      // HORIZONTAL SCROLL
      const scrollTween = gsap.to(textRef.current, {
        xPercent: -120,
        ease: "none",

        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          pinSpacing: false, // REMOVE EXTRA HEIGHT
          start: "top top",
          end: "+=5000",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // CHARACTER DROP ANIMATION
      split.chars.forEach((char) => {
        gsap.to(char, {
          y: 0,
          ease: "power3.out",

          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 95%",
            end: "left 65%",
            scrub: 1,
          },
        });
      });

      // SECTION MOVE UP END
      gsap.to(wrapperRef.current, {
        y: -180,
        ease: "none",

        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="
        relative
        flex
        h-[220px]
        w-full
        items-center
        overflow-hidden
        bg-[#efefec]
        p-0
        m-0
      "
    >
      <div className="w-full overflow-hidden p-0 m-0">

        <h2
          ref={textRef}
          className="
            Horizontal__text
            flex
            w-max
            whitespace-nowrap
            pl-[100vw]

            text-black
            font-semibold
            leading-[0.8]
            tracking-[-0.08em]

            p-0
            m-0

            text-[90px]
            md:text-[170px]
            lg:text-[240px]
          "
        >
          Ready&nbsp;to&nbsp;Rise&nbsp;at&nbsp;Seven?
        </h2>
      </div>
    </section>
  );
};

export default ReadyToRise;