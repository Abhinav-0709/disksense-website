"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionDivider } from "../ui/SectionDivider";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center overflow-hidden transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs at top) */}
      <SectionDivider height="h-6 sm:h-8" />

      {/* 02. Footer Main Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-6 sm:px-10 lg:px-12 pt-14 sm:pt-16 pb-6 transition-colors">
          
          {/* Top Section: Brand + Links Grid (Matches media_1794214221293_e30d6d56.jpg) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-[#F1F5F9] dark:border-[#1E2028]">
            
            {/* Left: Brand Identity + Tagline + ONLY X (Twitter) Social Icon */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col items-start max-w-sm">
              <Link href="/" className="flex items-center gap-2.5 group mb-3.5">
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/app-icon.png"
                    alt="DiskSense Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[19px] font-bold tracking-tight text-[#101828] dark:text-white">
                  DiskSense
                </span>
              </Link>

              <p className="text-xs sm:text-[13px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed mb-6 font-normal">
                Built for people who believe their storage should stay private. Fast, visual, and 100% offline disk analysis for Windows.
              </p>

              {/* Bare X (Twitter) Social Link (No box container) */}
              <div className="flex items-center">
                <a
                  href="https://x.com/disksense"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow DiskSense on X"
                  className="text-[#475467] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white transition-colors p-1 -ml-1 group inline-flex items-center justify-center"
                >
                  {/* Official X Logo SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-4.5 h-4.5 fill-current transition-transform group-hover:scale-110"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Focused Minimal Links (Product + Trust/Legal) without clutter */}
            <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 md:justify-end">
              
              {/* Column 1: Product */}
              <div className="flex flex-col items-start space-y-3">
                <span className="text-[13px] font-semibold text-[#101828] dark:text-[#F8FAFC] tracking-tight">
                  Product
                </span>
                <ul className="space-y-2 text-xs sm:text-[13px] text-[#475467] dark:text-[#9EA2AD]">
                  <li>
                    <a href="#interactive-visualizers" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      Visualizers
                    </a>
                  </li>
                  <li>
                    <a href="#intelligent-cleanup" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      Smart Clean Up
                    </a>
                  </li>
                  <li>
                    <a href="#product-showcase" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      App Clean
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-[#101828] dark:hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#download" className="hover:text-[#101828] dark:hover:text-white transition-colors font-medium text-[#2563EB] dark:text-[#60A5FA]">
                      Download Free
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Trust & Legal (Proprietary / 100% Private) */}
              <div className="flex flex-col items-start space-y-3">
                <span className="text-[13px] font-semibold text-[#101828] dark:text-[#F8FAFC] tracking-tight">
                  Trust & Security
                </span>
                <ul className="space-y-2 text-xs sm:text-[13px] text-[#475467] dark:text-[#9EA2AD]">
                  <li>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      100% Offline
                    </span>
                  </li>
                  <li>
                    <span className="text-[#64748B] dark:text-[#94A3B8]">
                      Zero Telemetry
                    </span>
                  </li>
                  <li>
                    <span className="text-[#64748B] dark:text-[#94A3B8]">
                      Privacy by Default
                    </span>
                  </li>
                  <li>
                    <span className="text-[#64748B] dark:text-[#94A3B8]">
                      Local Rust Engine
                    </span>
                  </li>
                  <li>
                    <span className="text-[#64748B] dark:text-[#94A3B8]">
                      Recycle Bin Safe
                    </span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Copyright Row (Matches reference image: "© 2026 OpenNest.") */}
          <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B] dark:text-[#8E929E] font-normal">
            <span>© 2026 DiskSense. All rights reserved.</span>
            <span className="font-mono text-[11px] text-[#94A3B8] dark:text-[#64748B]">
              Windows 10 & 11 • Local & Private
            </span>
          </div>

        </div>
      </div>

      {/* Full-width Divider Line with + Crosshairs right before the large watermark text */}
      <div className="w-full border-t border-[#DCE1EA] dark:border-[#27292E] relative transition-colors">
        <div className="max-w-[1200px] mx-auto relative">
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20">
            +
          </span>
          <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20">
            +
          </span>
        </div>
      </div>

      {/* 03. Giant Bottom Watermark Wordmark (Not cut off, generous vertical padding, no background color patch) */}
      <div className="w-full relative flex items-center justify-center py-6 sm:py-10 select-none pointer-events-none">
        {/* Massive Lowercase Brand Wordmark with leading-[1.05] so letters are never cut off */}
        <h1 className="text-[17vw] sm:text-[16vw] lg:text-[170px] font-black tracking-[-0.05em] leading-[1.05] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#174BFF] via-[#3B82F6] to-transparent dark:from-[#3B82F6] dark:via-[#1D4ED8] dark:to-transparent opacity-90 dark:opacity-85 transition-all">
          disksense
        </h1>

        {/* Subtle bottom edge frosted blur only */}
        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 bg-gradient-to-t from-white dark:from-[#151619] via-white/80 dark:via-[#151619]/80 to-transparent backdrop-blur-[2px] pointer-events-none" />
      </div>
    </footer>
  );
};

