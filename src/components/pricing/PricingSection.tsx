"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";

export const PricingSection: React.FC = () => {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  return (
    <section id="pricing" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs at top) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Header Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 pt-14 sm:pt-20 pb-8 sm:pb-12 text-center transition-colors">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            
            <div className="mb-3.5 sm:mb-4">
              <TechnicalLabel>LAUNCH SPECIAL</TechnicalLabel>
            </div>

            {/* Main Heading (Exact match to reference image: "Expect more and pay less") */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-0.035em] text-[#101828] dark:text-[#F8FAFC] leading-[1.12]">
              Expect more{" "}
              <span className="block mt-1 sm:mt-1.5 text-[#174BFF] dark:text-[#3B82F6]">
                and pay less
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs xs:text-sm sm:text-[15px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-lg mt-4 font-normal">
              We don&apos;t charge per seat or monthly subscriptions. Delivering a premium storage cleanup experience shouldn&apos;t come with recurring fees. Receive limited launch pricing.
            </p>

            {/* Currency Selector Pill (USD vs INR) */}
            <div className="mt-6 p-1 rounded-xl bg-[#F1F3F7] dark:bg-[#1A1D24] border border-[#E2E6EC] dark:border-[#272B36] flex items-center gap-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === "USD"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-[#64748B] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white"
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === "INR"
                    ? "bg-[#2563EB] text-white shadow-xs"
                    : "text-[#64748B] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white"
                }`}
              >
                INR (₹)
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 03. Single Horizontal Divider Line with + Crosshairs */}
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

      {/* 04. Centerpiece: Pricing Card with 14 Official Devicon Cache Icons Bursting from Behind */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors overflow-hidden">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 py-16 sm:py-24 flex items-center justify-center relative transition-colors">
          
          {/* Card Wrapper that anchors the dense, overlapping icons cradle directly behind it */}
          <div className="relative w-full max-w-[390px] sm:max-w-[420px] mx-auto flex items-center justify-center">
            
            {/* ============================================================== */}
            {/* OFFICIAL DEVICON CACHE ICONS POPPING OUT FROM BEHIND THE CARD   */}
            {/* Cleanly framed, non-breaking, properly sized and responsive     */}
            {/* ============================================================== */}
            <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
              
              {/* --- LEFT FLANK --- */}

              {/* 1. Docker Whale (Top Left) */}
              <div className="absolute top-4 -left-7 lg:-left-16 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg -rotate-[12deg] flex items-center justify-center text-[#2496ED]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M13.98 11.08h2.12a.19.19 0 00.19-.19V9.01a.19.19 0 00-.19-.19h-2.12a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m-2.95-5.43h2.12a.19.19 0 00.19-.19V3.57a.19.19 0 00-.19-.19h-2.12a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m0 2.72h2.12a.19.19 0 00.19-.19V6.29a.19.19 0 00-.19-.19h-2.12a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m-2.95 0h2.12a.19.19 0 00.19-.19V6.29a.19.19 0 00-.19-.19H8.08a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m-2.96 0h2.12a.19.19 0 00.19-.19V6.29a.19.19 0 00-.19-.19H5.12a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m11.81 2.71h2.12a.19.19 0 00.19-.18V9.01a.19.19 0 00-.19-.19h-2.12a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m-8.85 0h2.12a.19.19 0 00.19-.18V9.01a.19.19 0 00-.19-.19H8.08a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m-2.96 0h2.12a.19.19 0 00.19-.18V9.01a.19.19 0 00-.19-.19H5.12a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m-2.95 0h2.12a.19.19 0 00.19-.18V9.01a.19.19 0 00-.19-.19H2.17a.19.19 0 00-.19.19v1.88c0 .1.08.19.19.19m19.34 1.76a4.91 4.91 0 00-2.45-.67c-.29 0-.58.03-.87.08a3.64 3.64 0 00-.63-1.64l-.27-.37-.43.17c-.89.36-1.57 1.05-1.92 1.95a7.92 7.92 0 00-2.32-.35H1.36a1.14 1.14 0 00-1.14 1.14 9.5 9.5 0 002.83 6.75c2.52 2.5 6.14 3.01 10.38 3.01 7.11 0 11.24-3.93 11.24-9.08 0-.74-.09-1.47-.27-2.19" />
                </svg>
              </div>

              {/* 2. Python Dual Snake (Mid-Upper Left) */}
              <div className="absolute top-32 -left-9 lg:-left-20 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg rotate-[8deg] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8">
                  <path fill="#387EB8" d="M11.91 2c-5.06 0-4.74 2.19-4.74 2.19l.01 2.27h4.81v.68H5.21S2 6.77 2 11.83c0 5.06 2.8 4.9 2.8 4.9h1.67v-2.35s-.09-2.8 2.76-2.8h4.75s2.67.04 2.67-2.61V4.65S16.97 2 11.91 2zm-2.6 1.48a.93.93 0 110 1.86.93.93 0 010-1.86z" />
                  <path fill="#FFE052" d="M12.09 22c5.06 0 4.74-2.19 4.74-2.19l-.01-2.27h-4.81v-.68h6.78s3.21.37 3.21-4.69c0-5.06-2.8-4.9-2.8-4.9h-1.67v2.35s.09 2.8-2.76 2.8h-4.75s-2.67-.04-2.67 2.61v4.32S7.03 22 12.09 22zm2.6-1.48a.93.93 0 110-1.86.93.93 0 010 1.86z" />
                </svg>
              </div>

              {/* 3. npm Package Cache (Mid-Lower Left) */}
              <div className="absolute bottom-32 -left-9 lg:-left-20 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg -rotate-[8deg] flex items-center justify-center text-[#CB3837]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M0 7.33v9.34h7.33v-7h4.67v7H24V7.33H0zm2.67 6.67H4v-4H2.67v4zm4 0h1.33v-4H6.67v4zm5.33 0h1.33v-4H12v4zm4 0h1.33v-4H16v4zm2.67 0H20v-4h-1.33v4z" />
                </svg>
              </div>

              {/* 4. VS Code Workspace Cache (Bottom Left) */}
              <div className="absolute bottom-6 -left-7 lg:-left-16 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg rotate-[12deg] flex items-center justify-center text-[#007ACC]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M23.15 2.59L18.21.21a1.49 1.49 0 00-1.7.29l-9.46 8.63-4.12-3.13a1 1 0 00-1.28.06L.33 7.26a1 1 0 00-.01 1.44l3.75 3.3-3.75 3.3a1 1 0 00.01 1.44l1.32 1.2a1 1 0 001.28.06l4.12-3.13 9.46 8.63a1.49 1.49 0 001.7.29l4.94-2.38A1.5 1.5 0 0024 20.06V3.94a1.5 1.5 0 00-.85-1.35zm-5.15 14.86L10.83 12l7.17-5.45v10.9z" />
                </svg>
              </div>

              {/* --- RIGHT FLANK --- */}

              {/* 5. Node.js Hexagon (Top Right) */}
              <div className="absolute top-4 -right-7 lg:-right-16 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg rotate-[12deg] flex items-center justify-center text-[#539E43]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4zm0 3.2a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                </svg>
              </div>

              {/* 6. Rust / Cargo Target (Mid-Upper Right) */}
              <div className="absolute top-32 -right-9 lg:-right-20 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg -rotate-[8deg] flex items-center justify-center text-[#DEA584] dark:text-[#E59866]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M21.84 10.5h-1.07a8.55 8.55 0 00-.77-1.85l.76-.76a.75.75 0 000-1.06l-1.29-1.29a.75.75 0 00-1.06 0l-.76.76c-.58-.33-1.2-.59-1.85-.77V4.5a.75.75 0 00-.75-.75h-1.82a.75.75 0 00-.75.75v1.07c-.65.18-1.27.44-1.85.77l-.76-.76a.75.75 0 00-1.06 0L7.33 6.83a.75.75 0 000 1.06l.76.76c-.33.58-.59 1.2-.77 1.85H6.25a.75.75 0 00-.75.75v1.82c0 .41.34.75.75.75h1.07c.18.65.44 1.27.77 1.85l-.76.76a.75.75 0 000 1.06l1.29 1.29c.29.29.77.29 1.06 0l.76-.76c.58.33 1.2.59 1.85.77v1.07c0 .41.34.75.75.75h1.82c.41 0 .75-.34.75-.75v-1.07c.65-.18 1.27-.44 1.85-.77l.76.76c.29.29.77.29 1.06 0l1.29-1.29a.75.75 0 000-1.06l-.76-.76c.33-.58.59-1.2.77-1.85h1.07c.41 0 .75-.34.75-.75v-1.82a.75.75 0 00-.75-.75zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>

              {/* 7. Git Repos & Packfiles (Mid-Lower Right) */}
              <div className="absolute bottom-32 -right-9 lg:-right-20 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg rotate-[8deg] flex items-center justify-center text-[#F05032]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M21.71 10.29l-8-8a1 1 0 00-1.42 0l-1.58 1.59 2.29 2.29a2.5 2.5 0 013.17 3.17l2.25 2.25a2.5 2.5 0 11-1.42 1.41l-2.24-2.24a2.5 2.5 0 01-3.17-3.17L9.29 5.29 2.29 12.29a1 1 0 000 1.42l8 8a1 1 0 001.42 0l8-8a1 1 0 000-1.42zM12 9a1 1 0 101 1 1 1 0 00-1-1z" />
                </svg>
              </div>

              {/* 8. Gradle Elephant (Bottom Right) */}
              <div className="absolute bottom-6 -right-7 lg:-right-16 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white dark:bg-[#1A1D24] border border-[#E2E8F0] dark:border-[#2D3342] p-2.5 shadow-lg -rotate-[12deg] flex items-center justify-center text-[#02303A] dark:text-[#00D4FF]">
                <svg viewBox="0 0 24 24" className="w-7 h-7 lg:w-8 lg:h-8 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>

            </div>

            {/* ============================================================== */}
            {/* THE PRICING CARD (Direct replica of media_1794216877315_b834e6f5.jpg) */}
            {/* ============================================================== */}
            <div className="relative z-10 w-full rounded-[26px] sm:rounded-[30px] bg-white dark:bg-[#12141A] border border-[#CBD5E1] dark:border-[#262A36] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] p-6 sm:p-9 text-left transition-all">
              
              {/* Top Price Row: Beautiful Proportional Typography */}
              <div className="flex items-baseline gap-2.5 pb-6 border-b border-[#F1F5F9] dark:border-[#1E222D]">
                {/* Crossed out regular price */}
                <span className="text-2xl sm:text-[28px] font-medium text-[#94A3B8] dark:text-[#64748B] line-through font-sans">
                  {currency === "USD" ? "$9" : "₹799"}
                </span>

                {/* Big Clean Launch Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-[46px] font-bold text-[#101828] dark:text-white tracking-tight font-sans">
                    {currency === "USD" ? "$5" : "₹399"}
                  </span>
                  <span className="text-xs sm:text-[13px] text-[#6B7280] dark:text-[#9EA2AD] font-normal">
                    /one-time
                  </span>
                </div>

                {/* Launch Discount Badge */}
                <span className="ml-auto text-[10.5px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40">
                  {currency === "USD" ? "45% OFF" : "50% OFF"}
                </span>
              </div>

              {/* Feature List (Clean checkmark badges) */}
              <div className="py-6 space-y-3.5 text-xs sm:text-[13.5px] text-[#334155] dark:text-[#CBD5E1] font-medium">
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Lifetime license & all future updates</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>All 5 visualizers (Folders, Treemap, Flow, Skyline, Hotspots)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Dev Cache Cleaner (Node, Docker, Rust, Python, Gradle)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>Smart Post-Install App Clean for Windows</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>100% offline & local — zero telemetry</span>
                </div>

              </div>

              {/* Blue Tactile Button from the Hero Section */}
              <div className="pt-2">
                <a
                  href="#download"
                  className="btn-primary-pill w-full py-3.5 sm:py-4 px-6 text-[14px] sm:text-[15px] inline-flex items-center justify-center cursor-pointer gap-2"
                >
                  <span>Get Lifetime Access</span>
                  <span className="font-mono opacity-90">({currency === "USD" ? "$5" : "₹399"})</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>
              </div>

              {/* Micro Footnote (Matching reference image) */}
              <p className="text-[10.5px] sm:text-[11px] text-[#64748B] dark:text-[#8E929E] text-center mt-5 leading-relaxed font-normal">
                *One-time payment for lifetime ownership. No recurring subscription. Use on all your personal Windows devices.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
