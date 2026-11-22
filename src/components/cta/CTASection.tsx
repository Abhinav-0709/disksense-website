"use client";

import React, { useState } from "react";
import { Download, CheckSquare } from "lucide-react";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";

interface MorphingPillProps {
  defaultText: string;
  hoverText: string;
  defaultIcon: React.ReactNode;
  hoverIcon: React.ReactNode;
}

const MorphingPill: React.FC<MorphingPillProps> = ({
  defaultText,
  hoverText,
  defaultIcon,
  hoverIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className={`relative inline-flex items-center gap-2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full transition-all duration-300 ease-out cursor-pointer align-baseline select-none mx-1 my-1 shadow-2xs group ${
        isHovered
          ? "bg-[#E2E6EC] dark:bg-[#252A36] text-[#101828] dark:text-white shadow-xs scale-105 ring-1 ring-[#2563EB]/25"
          : "bg-[#ECEEF2] dark:bg-[#1E2129] text-[#1F2937] dark:text-[#E2E8F0] hover:bg-[#E5E8EE] dark:hover:bg-[#232732]"
      }`}
    >
      {/* 3D Icon Container with Smooth Scale / Rotation Cross-Fade */}
      <span className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0 -mt-2.5">
        {/* Default State Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform ${
            isHovered
              ? "opacity-0 scale-50 -rotate-45 pointer-events-none"
              : "opacity-100 scale-100 rotate-0"
          }`}
        >
          {defaultIcon}
        </span>

        {/* Hovered State Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out transform ${
            isHovered
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 rotate-45 pointer-events-none"
          }`}
        >
          {hoverIcon}
        </span>
      </span>

      {/* Text Container with Smooth Vertical Slide Cross-Fade */}
      <span className="relative inline-flex flex-col justify-center h-6 sm:h-7 overflow-hidden font-medium text-sm sm:text-base md:text-[18px] tracking-tight">
        {/* Default Text */}
        <span
          className={`inline-block whitespace-nowrap transition-all duration-300 ease-out transform ${
            isHovered
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          {defaultText}
        </span>

        {/* Hover Text */}
        <span
          className={`absolute inset-0 flex items-center whitespace-nowrap transition-all duration-300 ease-out transform font-semibold text-[#174BFF] dark:text-[#60A5FA] ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {hoverText}
        </span>
      </span>
    </span>
  );
};

export const CTASection: React.FC = () => {
  return (
    <section id="download" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs at top) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Central Section Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 py-16 sm:py-24 flex flex-col items-center text-center relative bg-white dark:bg-[#151619] transition-colors">
          
          {/* Technical Label */}
          <div className="mb-5 sm:mb-6">
            <TechnicalLabel>TAKE BACK YOUR DISK</TechnicalLabel>
          </div>

          {/* ============================================================== */}
          {/* Main Interactive Headline with Smooth Morphing Icon + Text     */}
          {/* ============================================================== */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.3] sm:leading-[1.35] max-w-4xl text-center select-none">
            The fastest way to explore{" "}
            
            {/* Pill 1: storage -> gigabytes */}
            <MorphingPill
              defaultText="storage"
              hoverText="gigabytes"
              defaultIcon={
                /* 3D Drive / Storage Disc */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 -rotate-6">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] rounded-lg border border-[#334155] shadow-md flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full border border-sky-400/60 bg-sky-950/40 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                    </span>
                  </span>
                </span>
              }
              hoverIcon={
                /* 3D Treemap Visualizer Grid */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 rotate-0">
                  <span className="absolute inset-0 bg-[#2563EB] rounded-lg border border-[#1D4ED8] shadow-[0_3px_8px_rgba(37,99,235,0.4)] p-0.5 grid grid-cols-2 gap-0.5">
                    <span className="bg-white/90 rounded-[2px]" />
                    <span className="bg-emerald-400 rounded-[2px]" />
                    <span className="col-span-2 bg-amber-400 rounded-[2px]" />
                  </span>
                </span>
              }
            />{" "}
            ,
            <br className="hidden sm:inline" />
            {" "}clean forgotten{" "}

            {/* Pill 2: dev caches -> leftovers */}
            <MorphingPill
              defaultText="dev caches"
              hoverText="leftovers"
              defaultIcon={
                /* 3D Cache / Package Block */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 -rotate-12">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#38BDF8] to-[#0284C7] rounded-lg border border-[#0369A1] shadow-[0_3px_8px_rgba(2,132,199,0.4)] flex items-center justify-center text-white">
                    <span className="w-2.5 h-2.5 rounded-sm bg-white/90 rotate-45 shadow-2xs" />
                  </span>
                </span>
              }
              hoverIcon={
                /* 3D Amber Sparkle / Cleaner Badge */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 rotate-6">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#FB923C] to-[#EA580C] rounded-lg border border-[#C2410C] shadow-[0_3px_8px_rgba(234,88,12,0.4)] flex items-center justify-center text-white font-black text-[11px]">
                    ✓
                  </span>
                </span>
              }
            />{" "}
            , and reclaim
            <br className="hidden sm:inline" />
            {" "}your drive with{" "}

            {/* Pill 3: confidence -> DiskSense */}
            <MorphingPill
              defaultText="confidence"
              hoverText="DiskSense"
              defaultIcon={
                /* 3D Privacy Shield */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7">
                  <span className="absolute inset-0 bg-gradient-to-b from-[#10B981] to-[#047857] rounded-full border border-emerald-300/40 shadow-[0_4px_8px_rgba(4,120,87,0.4)] flex items-center justify-center text-white">
                    <span className="w-2 h-2.5 rounded-t-sm border-2 border-white border-b-0 -mt-0.5" />
                  </span>
                </span>
              }
              hoverIcon={
                /* 3D Glowing Cyan DiskSense Orb */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 rotate-0">
                  <span className="absolute inset-0 bg-gradient-to-b from-[#06B6D4] to-[#0891B2] rounded-full border border-cyan-300/60 shadow-[0_0_12px_rgba(6,182,212,0.6)] flex items-center justify-center text-white font-mono font-black text-[10px]">
                    DS
                  </span>
                </span>
              }
            />{" "}
            .
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-[14px] sm:text-base text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-[600px] mt-6 sm:mt-7 mb-7 sm:mb-8 font-normal transition-colors px-1">
            Stop guessing what's eating your C: drive. Scan in seconds, drill into your largest consumers,
            and wipe gigabytes of forgotten build artifacts, Docker images, and installer leftovers —
            all processed 100% locally on your PC.
          </p>

          {/* ============================================================== */}
          {/* CTA Action Buttons — Tactile pill styling from the Hero Section*/}
          {/* ============================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
            <a
              href="#download"
              className="btn-primary-pill px-5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 text-[13px] xs:text-[14px] sm:text-[15px] inline-flex items-center justify-center cursor-pointer gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download for Windows</span>
            </a>

            <a
              href="#interactive-visualizers"
              className="btn-secondary-pill px-5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 text-[13px] xs:text-[14px] sm:text-[15px] inline-flex items-center justify-center cursor-pointer"
            >
              Explore visualizers
            </a>
          </div>

          {/* Small Subtext / Badge (from Hero section) */}
          <div className="flex items-center gap-1.5 text-[10.5px] xs:text-xs text-[#667085] dark:text-[#9EA2AD] transition-colors">
            <CheckSquare className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#174BFF] dark:text-[#3B82F6]" />
            <span>Instant scan • 100% Local & Private • Zero telemetry • Windows 10/11</span>
          </div>

        </div>
      </div>
    </section>
  );
};
