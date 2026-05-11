"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#efefec] px-2 pb-2 pt-10 md:px-4 md:pb-4 md:pt-14">
      <div className="relative overflow-hidden rounded-[32px] bg-black px-6 py-8 text-white md:rounded-[40px] md:px-10 md:py-12 lg:px-14 lg:py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.55fr_0.55fr_0.55fr]">

          {/* LEFT */}
          <div>

            {/* TITLE */}
            <h2 className="max-w-[420px] text-[36px] font-medium leading-[1] tracking-[-2px] md:text-[54px] lg:text-[64px]">
              Stay updated with Rise news
            </h2>

            {/* INPUT */}
            <div className="mt-8 flex h-20 w-full max-w-[620px] items-center rounded-full bg-[#1b1b1b] px-7">

              <input
                type="text"
                placeholder="Your Email Address"
                className="h-full flex-1 bg-transparent text-[22px] font-medium text-white outline-none placeholder:text-[#7f7f7f] md:text-[34px]"
              />

              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B8FFE7] text-black transition-all duration-300 hover:scale-105">

                <ArrowUpRight className="h-8 w-8" />
              </button>
            </div>

            {/* SOCIALS */}
            <div className="mt-6 flex flex-wrap items-center gap-2">

              {[
                {
                  icon: <Facebook className="h-4 w-4" />,
                },
                {
                  icon: (
                    <span className="text-[15px] font-semibold">X</span>
                  ),
                },
                {
                  icon: <Linkedin className="h-4 w-4" />,
                },
                {
                  icon: <Youtube className="h-4 w-4" />,
                },
                {
                  icon: (
                    <span className="text-[15px] font-semibold">♪</span>
                  ),
                },
                {
                  icon: <Instagram className="h-4 w-4" />,
                },
              ].map((item, index) => (
                <button
                  key={index}
                  className="flex h-9 items-center gap-2 rounded-full bg-white px-3 text-black transition-all duration-300 hover:bg-[#B8FFE7]"
                >
                  {item.icon}

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* COLUMN 1 */}
          <div className="border-white/15 lg:border-l lg:pl-8">

            <div className="flex flex-col gap-3">

              {[
                "Services",
                "Work",
                "About",
                "Culture",
                "Meet The Risers",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="w-fit text-[26px] font-medium leading-none tracking-[-1px] text-white transition-all duration-300 hover:text-[#B8FFE7]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="border-white/15 lg:border-l lg:pl-8">

            <div className="flex flex-col gap-3">

              {[
                "Testimonials",
                "Blog & Resources",
                "Webinars",
                "Careers",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="w-fit text-[26px] font-medium leading-none tracking-[-1px] text-white transition-all duration-300 hover:text-[#B8FFE7]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="border-white/15 lg:border-l lg:pl-8">

            <div className="flex flex-col gap-3">

              {[
                "Sheffield",
                "Manchester",
                "London",
                "New York",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="w-fit text-[26px] font-medium leading-none tracking-[-1px] text-white transition-all duration-300 hover:text-[#B8FFE7]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BIG BRAND */}
        <div className="relative mt-20 overflow-hidden">

          <h1
            className="
              whitespace-nowrap
              text-white
              font-semibold
              leading-[0.85]
              tracking-[-8px]
              

              text-[225px]

            "
          >
            Rise at Seve<span className="text-[225px]">N</span>
          </h1>

          {/* REGISTER */}
          <div className="absolute right-2 top-0 text-[32px] font-semibold md:right-6 md:text-[56px]">
            ®
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/80 md:flex-row md:items-center md:justify-between">

          {/* LEFT */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>

            <span className="hidden md:block">•</span>

            <span>Company Number 11955187</span>

            <span className="hidden md:block">•</span>

            <span>VAT Registered GB 322402945</span>

            <span className="hidden md:block">•</span>

            <span>Privacy Policy</span>
            <span className="">Privecy Policy</span>

            <span className="hidden md:block">•</span>

            <span>Terms & conditions</span>
          </div>

          {/* RIGHT */}
          <div className="text-white/80">
            Website MadeByShape
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 