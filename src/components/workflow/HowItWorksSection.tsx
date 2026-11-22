"use client";

import React from "react";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";
import {
  Target,
  AlignLeft,
  CornerDownRight,
  HardDrive,
  RotateCw,
  Folder,
} from "lucide-react";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs at top) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Header Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 pt-14 sm:pt-20 pb-10 sm:pb-12 text-center transition-colors">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <div className="mb-3.5 sm:mb-4">
              <TechnicalLabel>SIMPLE 3-STEP WORKFLOW</TechnicalLabel>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.14]">
              Follow the gigabytes down to the
              <span className="block mt-1 text-[#174BFF] dark:text-[#3B82F6]">
                exact folder
              </span>
            </h2>

            <p className="text-xs xs:text-sm sm:text-[15px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-lg mt-3.5 font-normal">
              Scan, observe the heaviest directories, and drill straight into what matters.
            </p>
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

      {/* 04. 3 Workflow Cards Grid (Matching media_1794162283845_62bad9d8.jpg) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 py-12 sm:py-16 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* ============================================================== */}
            {/* CARD 01: STEP 01 - SCAN YOUR DRIVE                            */}
            {/* ============================================================== */}
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#24262D] bg-white dark:bg-[#000000] p-5 sm:p-6 flex flex-col justify-between shadow-xs select-none transition-colors">
              <div>
                {/* Header row: Step Label + Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#667085] dark:text-[#9EA2AD] uppercase">
                    STEP 01
                  </span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#174BFF] dark:text-[#3B82F6] flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40">
                    <Target className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight">
                  Scan your drive
                </h3>
                <p className="text-xs sm:text-[13px] text-[#667085] dark:text-[#9EA2AD] leading-relaxed mt-1.5">
                  Pick a drive or any target folder. Instant high-speed indexing surfaces every byte without slowing down your system.
                </p>
              </div>

              {/* Mockup Container (Aceternity style with tight padding) */}
              <div className="rounded-xl bg-[#F4F5F7] dark:bg-[#121316] border border-[#E5E7EB]/70 dark:border-[#1E2026] p-2.5 sm:p-3 mt-6">
                <div className="rounded-lg border border-[#CBD5E1] dark:border-[#222530] bg-white dark:bg-[#0A0B0E] p-3 space-y-2.5 shadow-xs">
                  {/* Drive 1 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-[#2563EB] shrink-0 border border-blue-200/40 dark:border-blue-800/30">
                        <HardDrive className="w-3 h-3 text-[#2563EB]" />
                      </div>
                      <span className="font-semibold text-[#1F2937] dark:text-[#E5E7EB]">
                        C: System SSD
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#64748B] dark:text-[#94A3B8]">
                      380 / 512 GB
                    </span>
                  </div>

                  {/* Drive 2 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[#64748B] shrink-0 border border-neutral-200 dark:border-neutral-700">
                        <HardDrive className="w-3 h-3 text-[#64748B]" />
                      </div>
                      <span className="font-semibold text-[#1F2937] dark:text-[#E5E7EB]">
                        D: Secondary Data
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#64748B] dark:text-[#94A3B8]">
                      1.2 / 2.0 TB
                    </span>
                  </div>

                  {/* Indexing Status */}
                  <div className="pt-2 border-t border-[#F1F5F9] dark:border-[#181A22] flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA]">
                      <RotateCw className="w-3 h-3 animate-spin" />
                      <span className="font-semibold">Indexing MFT...</span>
                    </div>
                    <span className="text-[#64748B] dark:text-[#94A3B8] font-bold">
                      3.4s
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* CARD 02: STEP 02 - FIND THE BIGGEST                           */}
            {/* ============================================================== */}
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#24262D] bg-white dark:bg-[#000000] p-5 sm:p-6 flex flex-col justify-between shadow-xs select-none transition-colors">
              <div>
                {/* Header row: Step Label + Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#667085] dark:text-[#9EA2AD] uppercase">
                    STEP 02
                  </span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#174BFF] dark:text-[#3B82F6] flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40">
                    <AlignLeft className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight">
                  Find the biggest
                </h3>
                <p className="text-xs sm:text-[13px] text-[#667085] dark:text-[#9EA2AD] leading-relaxed mt-1.5">
                  The largest folders are always right at the top, ranked strictly by disk weight. No scrolling through empty system directories.
                </p>
              </div>

              {/* Mockup Container (Aceternity style with tight padding) */}
              <div className="rounded-xl bg-[#F4F5F7] dark:bg-[#121316] border border-[#E5E7EB]/70 dark:border-[#1E2026] p-2.5 sm:p-3 mt-6">
                <div className="rounded-lg border border-[#CBD5E1] dark:border-[#222530] bg-white dark:bg-[#0A0B0E] p-3 space-y-2.5 shadow-xs">
                  {/* Ranked Item 1 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#2563EB] dark:text-[#60A5FA]">
                        #1
                      </span>
                      <span className="font-bold text-[#111827] dark:text-[#F8FAFC]">
                        Users
                      </span>
                    </div>
                    <span className="font-mono text-xs font-black text-[#2563EB] dark:text-[#60A5FA]">
                      142 GB
                    </span>
                  </div>

                  {/* Ranked Item 2 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#64748B]">
                        #2
                      </span>
                      <span className="font-semibold text-[#1F2937] dark:text-[#E5E7EB]">
                        Program Files
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#475467] dark:text-[#CBD5E1]">
                      78 GB
                    </span>
                  </div>

                  {/* Ranked Item 3 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#64748B]">
                        #3
                      </span>
                      <span className="font-semibold text-[#1F2937] dark:text-[#E5E7EB]">
                        Docker
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#475467] dark:text-[#CBD5E1]">
                      28 GB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* CARD 03: STEP 03 - KEEP DRILLING                              */}
            {/* ============================================================== */}
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#24262D] bg-white dark:bg-[#000000] p-5 sm:p-6 flex flex-col justify-between shadow-xs select-none transition-colors">
              <div>
                {/* Header row: Step Label + Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#667085] dark:text-[#9EA2AD] uppercase">
                    STEP 03
                  </span>
                  <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#174BFF] dark:text-[#3B82F6] flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40">
                    <CornerDownRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight">
                  Keep drilling
                </h3>
                <p className="text-xs sm:text-[13px] text-[#667085] dark:text-[#9EA2AD] leading-relaxed mt-1.5">
                  Click into any folder to see the biggest items inside it, until you pinpoint the exact cause. Open directly in Windows Explorer.
                </p>
              </div>

              {/* Mockup Container (Aceternity style with tight padding) */}
              <div className="rounded-xl bg-[#F4F5F7] dark:bg-[#121316] border border-[#E5E7EB]/70 dark:border-[#1E2026] p-2.5 sm:p-3 mt-6">
                <div className="rounded-lg border border-[#CBD5E1] dark:border-[#222530] bg-white dark:bg-[#0A0B0E] p-2.5 space-y-1.5 shadow-xs">
                  {/* Trail Header */}
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#F1F5F9] dark:border-[#181A22] text-[10.5px] font-bold text-[#64748B] dark:text-[#94A3B8]">
                    <span>Storage trail</span>
                    <Folder className="w-3.5 h-3.5 text-[#2563EB]" />
                  </div>

                  {/* Hierarchy Level 1: C: Drive */}
                  <div className="flex items-center justify-between text-[11px] px-1 py-0.5">
                    <span className="text-[#334155] dark:text-[#CBD5E1] font-medium">
                      C: Drive
                    </span>
                    <span className="font-mono text-[#64748B] dark:text-[#94A3B8]">
                      380 GB
                    </span>
                  </div>

                  {/* Hierarchy Level 2: Users */}
                  <div className="flex items-center justify-between text-[11px] px-1 py-0.5 font-mono">
                    <span className="text-[#334155] dark:text-[#CBD5E1] pl-2 font-sans font-medium">
                      └ Users
                    </span>
                    <span className="text-[#64748B] dark:text-[#94A3B8]">
                      142 GB
                    </span>
                  </div>

                  {/* Hierarchy Level 3: AppData */}
                  <div className="flex items-center justify-between text-[11px] px-1 py-0.5 font-mono">
                    <span className="text-[#334155] dark:text-[#CBD5E1] pl-4 font-sans font-medium">
                      └ AppData
                    </span>
                    <span className="text-[#64748B] dark:text-[#94A3B8]">
                      65 GB
                    </span>
                  </div>

                  {/* Hierarchy Level 4: Docker (.vhdx) Highlighted */}
                  <div className="flex items-center justify-between text-[11px] px-2 py-1 rounded bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/30 font-mono">
                    <span className="font-sans font-bold text-[#2563EB] dark:text-[#60A5FA] pl-4">
                      └ Docker (.vhdx)
                    </span>
                    <span className="font-black text-[#2563EB] dark:text-[#60A5FA]">
                      24 GB
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
