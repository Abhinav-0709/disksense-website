import React from "react";
import Link from "next/link";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";
import { DitherShader } from "./DitherShader";
import { AppDashboardMockup } from "./AppDashboardMockup";
import { CapabilityStrip } from "./CapabilityStrip";
import { CheckSquare } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center pt-18 sm:pt-20 transition-colors">
      {/* 01. Divider between Navbar and Hero (100% width line + central hatched band + crosshairs) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Hero Text Container (Bounded inside 1200px vertical borders) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 pt-10 sm:pt-16 pb-8 sm:pb-14 flex flex-col items-center text-center relative bg-white dark:bg-[#151619] transition-colors">
          {/* Technical label with light/dark background and sharp corner ticks */}
          <div className="mb-5 sm:mb-6">
            <TechnicalLabel>INTELLIGENT STORAGE ANALYSIS</TechnicalLabel>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.14] sm:leading-[1.12] mb-3 sm:mb-4 max-w-3xl transition-colors">
            Understand What&apos;s
            <span className="block mt-1">
              Taking Up <span className="text-[#174BFF] dark:text-[#3B82F6]">Your Space.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs xs:text-[14px] sm:text-base text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-[560px] mb-6 sm:mb-7 font-normal transition-colors px-1">
            DiskSense gives you a clear picture of your storage. Discover large files,
            understand disk usage, and find forgotten installation files — all processed
            locally on your Windows PC.
          </p>

          {/* Action Buttons — Tactile pill styling matching reference image */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
            <Link
              href="#download"
              className="btn-primary-pill px-4.5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 text-[13px] xs:text-[14px] sm:text-[15px] inline-flex items-center justify-center cursor-pointer"
            >
              Download for Windows
            </Link>

            <Link
              href="#pricing"
              className="btn-secondary-pill px-4.5 py-2 xs:px-6 xs:py-2.5 sm:px-7 sm:py-3 text-[13px] xs:text-[14px] sm:text-[15px] inline-flex items-center justify-center cursor-pointer"
            >
              View pricing
            </Link>
          </div>

          {/* Small Subtext / Badge */}
          <div className="flex items-center gap-1.5 text-[10.5px] xs:text-xs text-[#667085] dark:text-[#9EA2AD] transition-colors">
            <CheckSquare className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#174BFF] dark:text-[#3B82F6]" />
            <span>No credit card required • 100% Local processing</span>
          </div>
        </div>
      </div>

      {/* 03. Full-width Section Divider Line above Dither Shader */}
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

      {/* 04. DITHER SHADER CANVAS CONTAINER — Top floating with breathing room, Bottom touches and gets cut off */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] transition-colors">
          <DitherShader className="w-full pt-4 xs:pt-7 sm:pt-14 px-2 xs:px-4 sm:px-8 lg:px-12 pb-0 flex flex-col justify-start items-center h-[340px] xs:h-[400px] sm:h-[580px] lg:h-[660px] overflow-hidden">
            <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-start">
              <AppDashboardMockup />
            </div>
          </DitherShader>
        </div>
      </div>

      {/* 05. Full-width Section Divider Line directly below cut-off mockup */}
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

      {/* 06. 4-Column Capability Strip on Secondary #000000 Surface */}
      <div className="w-full bg-white dark:bg-[#000000] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] transition-colors">
          <CapabilityStrip />
        </div>
      </div>

      {/* 07. Lower Full-Width Divider with Hatched Band (Separates hero from next section) */}
      <SectionDivider height="h-9 sm:h-12" />
    </section>
  );
};
