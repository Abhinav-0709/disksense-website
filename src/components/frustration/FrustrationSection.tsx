"use client";

import React from "react";
import Image from "next/image";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import {
  Folder,
  PieChart,
  Search,
  Trash2,
  Package,
  Check,
  Layers,
  ShieldCheck,
  Code2,
  CreditCard,
} from "lucide-react";

export const FrustrationSection: React.FC = () => {
  const tableRows = [
    {
      icon: Folder,
      title: "Drive & folder analysis",
      subtitle: "Scan and map all storage space",
      windows: { type: "check" },
      others: { type: "check" },
      disksense: { type: "check" },
    },
    {
      icon: PieChart,
      title: "Visual space breakdown",
      subtitle: "Treemap, Skyline & Flow charts",
      windows: { type: "dash" },
      others: { type: "text", text: "1995 mosaics" },
      disksense: { type: "badge", text: "5 Views" },
    },
    {
      icon: Search,
      title: "Spot hidden space hogs",
      subtitle: "Find massive files instantly",
      windows: { type: "check" },
      others: { type: "check" },
      disksense: { type: "check" },
    },
    {
      icon: Code2,
      title: "Developer cache clean",
      subtitle: "WSL2, Docker, npm & Cargo",
      windows: { type: "dash" },
      others: { type: "dash" },
      disksense: { type: "badge", text: "Auto-detected" },
    },
    {
      icon: Trash2,
      title: "Safe cleanup workflow",
      subtitle: "Permanent or Recycle Bin",
      windows: { type: "text", text: "Basic cleanup" },
      others: { type: "text", text: "Varies" },
      disksense: { type: "badge", text: "Recycle or Delete" },
    },
    {
      icon: Package,
      title: "Installer tracker (App Clean)",
      subtitle: "Recycle forgotten setup files",
      windows: { type: "dash" },
      others: { type: "dash" },
      disksense: { type: "badge", text: "App Clean" },
    },
    {
      icon: ShieldCheck,
      title: "100% Local & Private",
      subtitle: "Zero telemetry or cloud sync",
      windows: { type: "text", text: "OS telemetry" },
      others: { type: "text", text: "Varies" },
      disksense: { type: "badge", text: "100% Offline" },
    },
    {
      icon: CreditCard,
      title: "One-time ownership",
      subtitle: "No recurring subscriptions",
      windows: { type: "text", text: "Pre-installed" },
      others: { type: "text", text: "Free / $39+ Pro" },
      disksense: { type: "badge", text: "$5 Lifetime" },
    },
  ];

  return (
    <section
      id="frustration"
      className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors"
    >
      {/* 01. Section Header Bounded within 1200px container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 pt-12 sm:pt-16 pb-8 sm:pb-10 flex flex-col items-center text-center relative bg-white dark:bg-[#151619] transition-colors">
          <div className="mb-3.5 sm:mb-4">
            <TechnicalLabel>OUR PHILOSOPHY</TechnicalLabel>
          </div>

          {/* Headline strictly in two clean lines */}
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.2] mb-3.5 max-w-4xl transition-colors">
            <span className="block">Your storage shouldn&apos;t be a mystery.</span>
            <span className="block mt-1 sm:mt-1.5 text-[#174BFF] dark:text-[#3B82F6]">
              We believe in complete transparency.
            </span>
          </h2>

          <p className="text-xs xs:text-sm sm:text-base text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-[580px] font-normal transition-colors">
            Most utilities either leave folder weights blank or overwhelm you with dated 1990s mosaics.
            DiskSense is built on a clear principle: you deserve to know exactly where your gigabytes go,
            without cloud tracking, fake alarms, or subscription locks.
          </p>
        </div>
      </div>

      {/* 02. Single Horizontal Divider Line with + Crosshairs */}
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

      {/* 03. Unified Mathematically Aligned Comparison Table Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 py-10 sm:py-16 transition-colors">
          
          {/* Mobile scroll hint */}
          <div className="sm:hidden text-center mb-2.5 text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8]">
            ← Swipe horizontally to compare →
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto pb-4">
            <div className="min-w-[720px] rounded-2xl border border-[#DCE1EA] dark:border-[#27292E] bg-white dark:bg-[#000000] overflow-hidden shadow-sm dark:shadow-[0_1px_1px_rgba(255,255,255,0.05)_inset,0_10px_25px_-5px_rgba(0,0,0,0.8)]">
              
              {/* Header Row: Column 4 has the exact same X-coordinates as the body cells */}
              <div className="grid grid-cols-12 items-stretch">
                {/* Column 1: Feature Title */}
                <div className="col-span-5 pl-5 sm:pl-6 pr-3 py-3.5 border-b border-[#E5E7EB] dark:border-[#22242B] flex items-end">
                  <span className="text-sm sm:text-base font-bold text-[#101828] dark:text-[#F8FAFC]">
                    Feature
                  </span>
                </div>

                {/* Column 2: Windows Storage */}
                <div className="col-span-2 text-center px-2 py-3.5 border-b border-[#E5E7EB] dark:border-[#22242B] flex flex-col items-center justify-end">
                  <div className="mb-1 w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0078D4]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-[#101828] dark:text-[#F8FAFC] leading-tight">
                    Windows Storage
                  </div>
                  <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-normal mt-0.5">
                    Built into Windows
                  </div>
                </div>

                {/* Column 3: Other Analyzers */}
                <div className="col-span-2 text-center px-2 py-3.5 border-b border-[#E5E7EB] dark:border-[#22242B] flex flex-col items-center justify-end">
                  <div className="mb-1 w-6 h-6 flex items-center justify-center text-[#64748B] dark:text-[#94A3B8]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-[#101828] dark:text-[#F8FAFC] leading-tight">
                    Other Analyzers
                  </div>
                  <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-normal mt-0.5">
                    WizTree, TreeSize
                  </div>
                </div>

                {/* Column 4: DiskSense Header (Highlighted with iconic blue gradient and matching top border) */}
                <div className="col-span-3 self-stretch flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3.5 bg-gradient-to-b from-[#1D54FE] to-[#1242E6] text-white border-t-[3px] border-l-2 border-r-2 border-[#174BFF] dark:border-[#3B82F6] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 border border-white/35 overflow-hidden shadow-2xs">
                    <Image
                      src="/app-icon.png"
                      alt="DiskSense"
                      width={28}
                      height={28}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-[15px] font-bold text-white tracking-tight leading-tight">
                      DiskSense
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] text-blue-100/90 font-medium leading-tight mt-0.5">
                      Modern storage
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Body Rows: Both borders & cells are attached to col-span-3 for absolute alignment */}
              <div>
                {tableRows.map((row, idx) => {
                  const isLast = idx === tableRows.length - 1;
                  return (
                    <div
                      key={row.title}
                      className="grid grid-cols-12 items-stretch"
                    >
                      {/* Column 1: Feature Details (Larger text size as requested) */}
                      <div className="col-span-5 flex items-center gap-3 sm:gap-3.5 pl-5 sm:pl-6 pr-3 py-3.5 border-b border-[#E5E7EB] dark:border-[#22242B]">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 text-[#174BFF] dark:text-[#60A5FA] flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40 shadow-2xs">
                          <row.icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.75]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm sm:text-[15px] font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug">
                            {row.title}
                          </div>
                          <div className="text-xs sm:text-[12.5px] text-[#64748B] dark:text-[#94A3B8] leading-tight mt-0.5">
                            {row.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Windows Storage Cell */}
                      <div className="col-span-2 text-center text-xs text-[#334155] dark:text-[#CBD5E1] px-2 py-3.5 border-b border-[#E5E7EB] dark:border-[#22242B] flex justify-center items-center">
                        {row.windows.type === "check" ? (
                          <Check className="w-4 h-4 text-[#101828] dark:text-[#F8FAFC] stroke-[2.5]" />
                        ) : row.windows.type === "dash" ? (
                          <span className="text-[#94A3B8] font-bold select-none">—</span>
                        ) : (
                          <span className="text-[11px] text-[#475467] dark:text-[#9EA2AD] font-medium">
                            {row.windows.text}
                          </span>
                        )}
                      </div>

                      {/* Column 3: Other Analyzers Cell */}
                      <div className="col-span-2 text-center text-xs text-[#334155] dark:text-[#CBD5E1] px-2 py-3.5 border-b border-[#E5E7EB] dark:border-[#22242B] flex justify-center items-center">
                        {row.others.type === "check" ? (
                          <Check className="w-4 h-4 text-[#101828] dark:text-[#F8FAFC] stroke-[2.5]" />
                        ) : row.others.type === "dash" ? (
                          <span className="text-[#94A3B8] font-bold select-none">—</span>
                        ) : (
                          <span className="text-[11px] text-[#475467] dark:text-[#9EA2AD] font-medium">
                            {row.others.text}
                          </span>
                        )}
                      </div>

                      {/* Column 4: DiskSense Cell (Border on col-span-3 directly, fusing seamlessly with the header) */}
                      <div
                        className={`col-span-3 px-2.5 py-3.5 flex items-center justify-center bg-blue-50/70 dark:bg-[#0C152E] border-l-2 border-r-2 border-[#174BFF] dark:border-[#3B82F6] ${
                          isLast
                            ? "border-b-[3px] border-b-[#174BFF] dark:border-b-[#3B82F6]"
                            : "border-b border-blue-100 dark:border-blue-900/40"
                        }`}
                      >
                        {row.disksense.type === "check" ? (
                          <div className="w-5 h-5 rounded-full bg-[#174BFF] text-white flex items-center justify-center shadow-xs">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800/80 text-[#174BFF] dark:text-[#60A5FA] text-[10px] sm:text-[10.5px] font-bold shadow-2xs whitespace-nowrap">
                            <div className="w-3.5 h-3.5 rounded-full bg-[#174BFF] text-white flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span>{row.disksense.text}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
