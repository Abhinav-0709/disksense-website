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
            <TechnicalLabel>GET STARTED TODAY</TechnicalLabel>
          </div>

          {/* ============================================================== */}
          {/* Main Interactive Headline with Smooth Morphing Icon + Text     */}
          {/* (Exact match to media_1794215455535_fbe11d75.png)              */}
          {/* ============================================================== */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.3] sm:leading-[1.35] max-w-4xl text-center select-none">
            A tool to create visual{" "}
            
            {/* Pill 1: Themes -> Visualizers */}
            <MorphingPill
              defaultText="themes"
              hoverText="visualizers"
              defaultIcon={
                /* 3D Stacked Theme Cards */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 -rotate-12">
                  <span className="absolute inset-0 bg-white dark:bg-[#2B303C] rounded-lg border border-[#CBD5E1] dark:border-[#3E4554] shadow-xs translate-x-0.5 -translate-y-0.5" />
                  <span className="absolute inset-0 bg-[#0F141C] dark:bg-[#0A0D14] rounded-lg border border-[#2D3340] shadow-md flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-white" />
                    </span>
                  </span>
                </span>
              }
              hoverIcon={
                /* 3D Treemap Grid Tile */
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
            {" "}customize{" "}

            {/* Pill 2: Spacing -> Leftovers */}
            <MorphingPill
              defaultText="spacing"
              hoverText="leftovers"
              defaultIcon={
                /* 3D Yellow Ruler */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 -rotate-30">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#FDE047] via-[#FACC15] to-[#EAB308] rounded-md border border-[#CA8A04] shadow-[0_3px_6px_rgba(202,138,4,0.35)] flex items-center justify-around px-1">
                    <span className="w-px h-2.5 bg-[#854D0E]/60" />
                    <span className="w-px h-1.5 bg-[#854D0E]/60" />
                    <span className="w-px h-2.5 bg-[#854D0E]/60" />
                    <span className="w-px h-1.5 bg-[#854D0E]/60" />
                  </span>
                </span>
              }
              hoverIcon={
                /* 3D Amber Installer Box */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 rotate-6">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#FB923C] to-[#EA580C] rounded-lg border border-[#C2410C] shadow-[0_3px_8px_rgba(234,88,12,0.4)] flex items-center justify-center text-white">
                    <span className="w-2.5 h-2.5 rounded-sm bg-white/90 shadow-2xs rotate-45" />
                  </span>
                </span>
              }
            />{" "}
            , and build
            <br className="hidden sm:inline" />
            {" "}interfaces with{" "}

            {/* Pill 3: Grok -> DiskSense */}
            <MorphingPill
              defaultText="Grok"
              hoverText="DiskSense"
              defaultIcon={
                /* 3D Glossy Obsidian Sphere (Matching Grok in image) */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7">
                  <span className="absolute inset-0 bg-gradient-to-b from-[#1E232E] to-[#05070A] rounded-full border border-white/25 shadow-[0_4px_8px_rgba(0,0,0,0.5)] flex items-center justify-center gap-0.5">
                    <span className="w-1.5 h-2 rounded-full bg-white shadow-[0_0_4px_white]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_3px_white]" />
                  </span>
                </span>
              }
              hoverIcon={
                /* 3D Glowing Cyan Shield */
                <span className="relative w-6 h-6 sm:w-7 sm:h-7 rotate-0">
                  <span className="absolute inset-0 bg-gradient-to-b from-[#06B6D4] to-[#0891B2] rounded-full border border-cyan-300/50 shadow-[0_0_10px_rgba(6,182,212,0.5)] flex items-center justify-center text-white">
                    <span className="w-2 h-2.5 rounded-t-sm border-2 border-white border-b-0 -mt-0.5" />
                  </span>
                </span>
              }
            />{" "}
            .
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-[14px] sm:text-base text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-[560px] mt-6 sm:mt-7 mb-7 sm:mb-8 font-normal transition-colors px-1">
            DiskSense gives you a clear picture of your storage. Discover large files,
            understand disk usage, and find forgotten installation files — all processed
            locally on your Windows PC.
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
            <span>No credit card required • 100% Local processing • Built for Windows</span>
          </div>

        </div>
      </div>
    </section>
  );
};
