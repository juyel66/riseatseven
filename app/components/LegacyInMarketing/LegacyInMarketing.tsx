"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "Pioneers",
    description:
      "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR and Social Search.",
    image: "/images/1.webp",
    bg: "#000000",
    text: "#ffffff",
  },
  {
    id: 2,
    title: "Award Winning",
    description:
      "A roll top bath full of 79 awards. Voted The Drum’s best agency outside of London. We are official judges for industry awards including Global Search Awards.",
    image: "/images/2.jpg",
    bg: "#B8FFE7",
    text: "#000000",
  },
  {
    id: 3,
    title: "Speed",
    description:
      "Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    image: "/images/3.jpg",
    bg: "#ffffff",
    text: "#000000",
  },
];

const LegacyInMarketing = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardsEl = gsap.utils.toArray<HTMLElement>(".legacy-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(cardsEl[0], {
        yPercent: -70,
        rotate: -22,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });

      tl.to(cardsEl[1], {
        yPercent: -70,
        rotate: -22,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });

      tl.to(cardsEl[2], {
        yPercent: -70,
        rotate: -22,
        opacity: 0,
        ease: "power2.inOut",
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-205 w-full flex-col items-center overflow-hidden bg-[#efefec]"
    >

      {/* TITLE */}
      <div className="relative z-100 mb-4 pt-4">
        <h2 className="text-[34px] font-medium text-black">
          Legacy In The Making
        </h2>
      </div>

      
      <div className="relative flex h-155 w-155 items-center justify-center">

        {cards.map((card, index) => (
          <div
            key={card.id}
            className="legacy-card absolute h-155 w-155 rounded-[42px] shadow-[0_20px_80px_rgba(0,0,0,0.12)]"
            style={{
              background: card.bg,
              color: card.text,
              zIndex: cards.length - index,
              transform:
                index === 0
                  ? "rotate(-5deg)"
                  : index === 1
                  ? "rotate(5deg)"
                  : "rotate(-5deg)",
            }}
          >

            {/* CONTENT */}
            <div className="flex flex-col items-center justify-center h-full px-16 text-center">

              {/* IMAGE */}
              <div className="relative mb-8 h-50 w-50 overflow-hidden rounded-[28px]">

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[64px] leading-none tracking-[-3px] font-semibold mb-6">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="max-w-117.5 text-[22px] leading-normal opacity-90">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegacyInMarketing;  
