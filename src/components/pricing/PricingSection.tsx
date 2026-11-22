"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";
import { FloatingClusterBackground } from "./FloatingClusterBackground";

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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${currency === "USD"
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "text-[#64748B] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white"
                  }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${currency === "INR"
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

      {/* 04. Centerpiece: Pricing Card with V-Shape Floating Icons Bursting from Behind */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors overflow-hidden">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-3 xs:px-6 sm:px-10 py-16 xs:py-20 sm:py-24 lg:py-28 flex items-center justify-center relative transition-colors">

          {/* Card Wrapper that anchors the dense, overlapping icons cradle directly behind it */}
          <div className="relative w-full max-w-[285px] xs:max-w-[310px] sm:max-w-[350px] lg:max-w-[365px] mx-auto flex items-center justify-center">

            {/* ============================================================== */}
            {/* 3D FLOATING STORAGE & CACHE ICONS CLUSTER                      */}
            {/* (Docker, .exe, .zip, .next, Folder, GitHub, Cache, node_modules) */}
            {/* ============================================================== */}
            <FloatingClusterBackground />

            {/* ============================================================== */}
            {/* THE PRICING CARD (Direct replica of media_1794216877315_b834e6f5.jpg) */}
            {/* ============================================================== */}
            <div className="relative z-10 w-full rounded-[22px] sm:rounded-[26px] bg-white dark:bg-[#12141A] border border-[#CBD5E1] dark:border-[#262A36] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] p-4 xs:p-5 sm:p-7 text-left transition-all">

              {/* Top Price Row: Beautiful Proportional Typography */}
              <div className="flex items-baseline justify-between gap-1.5 xs:gap-2 pb-3.5 sm:pb-5 border-b border-[#F1F5F9] dark:border-[#1E222D]">
                <div className="flex items-baseline gap-1.5 xs:gap-2">
                  {/* Crossed out regular price */}
                  <span className="text-lg xs:text-xl sm:text-[23px] font-medium text-[#94A3B8] dark:text-[#64748B] line-through font-sans">
                    {currency === "USD" ? "$9" : "₹799"}
                  </span>

                  {/* Big Clean Launch Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl xs:text-3xl sm:text-[38px] font-bold text-[#101828] dark:text-white tracking-tight font-sans">
                      {currency === "USD" ? "$5" : "₹399"}
                    </span>
                    <span className="text-[10px] xs:text-[11px] sm:text-[12px] text-[#6B7280] dark:text-[#9EA2AD] font-normal">
                      /one-time
                    </span>
                  </div>
                </div>

                {/* Launch Discount Badge */}
                <span className="shrink-0 text-[9.5px] xs:text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40">
                  {currency === "USD" ? "45% OFF" : "50% OFF"}
                </span>
              </div>

              {/* Feature List (Clean checkmark badges) */}
              <div className="py-3.5 sm:py-5 space-y-2.5 sm:space-y-3 text-[11px] xs:text-[11.5px] sm:text-[12.5px] text-[#334155] dark:text-[#CBD5E1] font-medium">

                <div className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>Lifetime license & all future updates</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>All 5 visualizers (Folders, Treemap, Flow, Skyline, Hotspots)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>Dev Cache Cleaner (Node, Docker, Rust, Python, Gradle)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>Smart Post-Install App Clean for Windows</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#174BFF] dark:text-[#60A5FA] border border-blue-200/80 dark:border-blue-800/80 shrink-0 flex items-center justify-center shadow-2xs">
                    <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                  </div>
                  <span>100% offline & local — zero telemetry</span>
                </div>

              </div>

              {/* Blue Tactile Button from the Hero Section */}
              <div className="pt-1">
                <a
                  href="#download"
                  className="btn-primary-pill w-full py-2.5 sm:py-3 px-4 sm:px-5 text-xs xs:text-[13px] sm:text-[14px] inline-flex items-center justify-center cursor-pointer gap-2"
                >
                  <span>Get Lifetime Access</span>
                  <span className="font-mono opacity-90">({currency === "USD" ? "$5" : "₹399"})</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

              {/* Micro Footnote (Matching reference image) */}
              <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] text-[#64748B] dark:text-[#8E929E] text-center mt-3.5 sm:mt-4 leading-relaxed font-normal">
                *One-time payment for lifetime ownership. No recurring subscription. Use on all your personal Windows devices.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
