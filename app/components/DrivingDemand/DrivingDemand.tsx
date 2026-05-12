"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import drivingDemand from "../../../public/images/drivingDemand.webp";

const DrivingDemand = () => {
  const storyButtonRef = useRef<HTMLButtonElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);

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
    <section className="w-full  bg-[#f3f3f1] py-20 flex items-center">
      <div className="w-full container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="pt-6 md:pt-10 max-w-[520px]">
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-black">
              A global team of search-first content marketers engineering
              semantic relevancy & category signals for both the internet and
              people
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-black leading-[0.95] text-[65px]">
              Driving Demand & <br />
              <span className="inline-flex items-center gap-3">
                Discovery
                <span className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={drivingDemand}
                    alt=""
                    width={70}
                    height={70}
                    className="w-full h-full object-cover"
                  />
                </span>
              </span>
            </h1>

            <div className="flex gap-4 mt-8">
              <button
                ref={storyButtonRef}
                onMouseEnter={() => handleButtonHover(storyButtonRef, true)}
                onMouseLeave={() => handleButtonHover(storyButtonRef, false)}
                className="px-6 h-12 bg-white border border-gray-300 rounded-full inline-flex items-center justify-center gap-2 text-black font-medium text-[14px] hover:bg-gray-50 transition relative overflow-hidden"
              >
                <div className="initial-text flex items-center gap-2">
                  Our Story
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
                  Our Story
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

              <button
                ref={servicesButtonRef}
                onMouseEnter={() => handleButtonHover(servicesButtonRef, true)}
                onMouseLeave={() => handleButtonHover(servicesButtonRef, false)}
                className="px-6 h-12   rounded-full inline-flex items-center justify-center gap-2 text-black font-medium text-[14px]  transition relative overflow-hidden"
              >
                <div className="initial-text flex items-center gap-2">
                  Our Services
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
                  Our Services
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingDemand;
