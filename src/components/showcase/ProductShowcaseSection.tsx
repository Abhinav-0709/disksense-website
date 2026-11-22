"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";
import {
  Minus,
  Square,
  X,
  HardDrive,
  File,
  Check,
  Trash2,
  ChevronDown,
  RotateCw,
  Search,
  Sparkles,
  Plus,
  PackageCheck,
  Boxes,
} from "lucide-react";

export const ProductShowcaseSection: React.FC = () => {
  // Card 2: Interactive file selection
  const [selectedFile, setSelectedFile] = useState<string>("Windows.iso");

  const largeFiles = [
    { name: "Windows.iso", type: "ISO Image", size: "4.2 GB", path: "C:\\Downloads" },
    { name: "GameSetup.exe", type: "Installer", size: "3.1 GB", path: "C:\\Games\\Temp" },
    { name: "Project_Backup.zip", type: "Archive", size: "1.9 GB", path: "C:\\Users\\Backup" },
    { name: "Dataset_Models.bin", type: "Binary Data", size: "1.6 GB", path: "C:\\Projects\\AI" },
  ];

  // Card 3: Interactive cleanup items matching media_1794164294013_123ff8ff.jpg
  const [queuedItems, setQueuedItems] = useState<string[]>(["docker"]);

  const toggleQueue = (id: string) => {
    setQueuedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cleanupRecs = [
    {
      id: "anydesk",
      name: "AnyDesk.exe",
      cat: "Unused Installers",
      subtitle: "Docker Desktop is already installed",
      size: "8.2 MB",
      bytes: 8.2 * 1024 * 1024,
    },
    {
      id: "omnirush",
      name: "omnirush-win-x64-3.8.2.exe",
      cat: "Unused Installers",
      subtitle: "omnirush 3.8.2 is already installed",
      size: "186.4 MB",
      bytes: 186.4 * 1024 * 1024,
    },
    {
      id: "docker",
      name: "Docker",
      cat: "Docker Cache",
      subtitle: "Docker images, containers, and build cache",
      size: "16.6 GB",
      bytes: 16.6 * 1024 * 1024 * 1024,
    },
    {
      id: "target",
      name: "target",
      cat: "Rust Cargo Build",
      subtitle: "Rebuildable cargo target binaries",
      size: "11.8 GB",
      bytes: 11.8 * 1024 * 1024 * 1024,
    },
  ];

  return (
    <section id="product-showcase" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs at top) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Header Container with Split Title & Subtitle */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-12 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">

            {/* Left: Badge + Heading */}
            <div className="flex flex-col items-start max-w-xl">
              <div className="mb-3.5 sm:mb-4">
                <TechnicalLabel>BUILT FOR WINDOWS</TechnicalLabel>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.14]">
                A better way to understand
                <span className="block mt-1 text-[#174BFF] dark:text-[#3B82F6]">
                  your Windows storage.
                </span>
              </h2>
            </div>

            {/* Right: Subtitle with architectural vertical separator on desktop */}
            <div className="lg:max-w-md lg:border-l lg:border-[#DCE1EA] lg:dark:border-[#27292E] lg:pl-6 pb-1 text-left">
              <p className="text-xs xs:text-sm sm:text-[14.5px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed font-normal">
                A modern, fast, and privacy-first desktop application designed for Windows 10 and 11.
              </p>
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

      {/* 04. 3 Showcase Cards Grid (Matching media_1794138737435_6a71fb75.png Aceternity UI Card Style) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 py-10 sm:py-16 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* ============================================================== */}
            {/* CARD 01: STORAGE OVERVIEW                                      */}
            {/* ============================================================== */}
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#24262D] bg-white dark:bg-[#000000] p-2 sm:p-2.5 flex flex-col justify-between shadow-xs select-none transition-colors">
              <div>
                {/* Top Preview Stage: Very tight margin around the mocked window (matching media_1794138737435_6a71fb75.png) */}
                <div className="rounded-xl bg-[#F4F5F7] dark:bg-[#121316] border border-[#E5E7EB]/70 dark:border-[#1E2026] p-2 sm:p-2.5 overflow-hidden">

                  {/* Mockup Window */}
                  <div className="rounded-lg border border-[#CBD5E1] dark:border-[#222530] bg-white dark:bg-[#0A0B0E] overflow-hidden shadow-xs w-full">

                    {/* Windows 11 App Titlebar */}
                    <div className="h-7 bg-[#F8FAFC] dark:bg-[#12141A] border-b border-[#E2E8F0] dark:border-[#1E2028] px-2.5 flex items-center justify-between text-[10px] text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
                          <Image src="/app-icon.png" alt="Icon" width={14} height={14} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-extrabold text-[#1F2937] dark:text-[#E5E7EB] text-[10px]">DiskSense</span>
                        <span className="text-[9px] text-[#94A3B8] font-mono hidden xs:inline">• C:\</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#9CA3AF]">
                        <Minus className="w-2.5 h-2.5" />
                        <Square className="w-2 h-2" />
                        <X className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    {/* Real DiskSense Top Bar: Drive Selector Pill + Rescan */}
                    <div className="px-3 py-2 bg-white dark:bg-[#0E1015] border-b border-[#F1F5F9] dark:border-[#181A22] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#EFF3FD] dark:bg-[#161824] text-[9.5px] font-bold text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/20">
                        <HardDrive className="w-3 h-3 text-[#2563EB] dark:text-[#60A5FA]" />
                        <span>C:\ Local Disk (512 GB)</span>
                        <ChevronDown className="w-2.5 h-2.5 opacity-60 ml-0.5" />
                      </div>
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#2563EB] text-white text-[9px] font-bold shadow-2xs">
                        <RotateCw className="w-2 h-2" />
                        <span>Rescan</span>
                      </div>
                    </div>

                    {/* Horizontal Visualizer Switcher Pills (NO SIDEBAR) */}
                    <div className="px-3 py-1.5 bg-[#F8FAFC] dark:bg-[#0A0B0E] border-b border-[#F1F5F9] dark:border-[#161820] flex items-center gap-1 text-[8.5px] font-bold">
                      <span className="px-2 py-0.5 rounded bg-[#2563EB] text-white shadow-2xs">Overview</span>
                      <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Folders</span>
                      <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Treemap</span>
                      <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Clean Up</span>
                    </div>

                    {/* Drive Overview Body */}
                    <div className="p-3 space-y-2.5 bg-white dark:bg-[#0E1015]">
                      {/* Stat Numbers */}
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[13px] font-black text-[#111827] dark:text-[#F8FAFC] block font-mono leading-none">
                            346.0 GB <span className="text-[9.5px] font-medium text-[#64748B]">used</span>
                          </span>
                          <span className="text-[8px] text-[#94A3B8] font-mono mt-0.5 block">of 512.0 GB capacity (67.6%)</span>
                        </div>
                        <span className="text-[8.5px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-800/40">
                          166.0 GB Free
                        </span>
                      </div>

                      {/* Segmented Allocation Bar */}
                      <div className="w-full h-2.5 rounded overflow-hidden flex bg-[#F1F5F9] dark:bg-[#1A1C24]">
                        <div style={{ width: "42%" }} className="h-full bg-[#2563EB]" title="Applications" />
                        <div style={{ width: "22%" }} className="h-full bg-[#8B5CF6]" title="Users" />
                        <div style={{ width: "14%" }} className="h-full bg-[#10B981]" title="Windows" />
                        <div style={{ width: "22%" }} className="h-full bg-transparent" title="Free Space" />
                      </div>

                      {/* Category Breakdown List */}
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5 text-[8.5px] font-mono">
                        <div className="flex items-center gap-1.5 p-1 rounded bg-[#F8FAFC] dark:bg-[#12141A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                          <span className="text-[#334155] dark:text-[#CBD5E1] truncate font-medium">Apps: 142 GB</span>
                        </div>
                        <div className="flex items-center gap-1.5 p-1 rounded bg-[#F8FAFC] dark:bg-[#12141A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] shrink-0" />
                          <span className="text-[#334155] dark:text-[#CBD5E1] truncate font-medium">Users: 75 GB</span>
                        </div>
                        <div className="flex items-center gap-1.5 p-1 rounded bg-[#F8FAFC] dark:bg-[#12141A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                          <span className="text-[#334155] dark:text-[#CBD5E1] truncate font-medium">System: 43 GB</span>
                        </div>
                        <div className="flex items-center gap-1.5 p-1 rounded bg-[#F8FAFC] dark:bg-[#12141A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8] shrink-0" />
                          <span className="text-[#334155] dark:text-[#CBD5E1] truncate font-medium">Free: 166 GB</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Content Area (Matching Aceternity UI Pro Card text hierarchy) */}
                <div className="px-2 pt-3 pb-2">
                  <div className="text-[11px] font-bold text-[#174BFF] dark:text-[#3B82F6] tracking-wide uppercase font-mono">
                    Storage Overview
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug mt-0.5">
                    Understand disk allocation at a glance
                  </h3>
                  <p className="text-xs text-[#667085] dark:text-[#9EA2AD] leading-relaxed mt-1">
                    Visual live breakdown of your Windows drive capacity, free headroom, and high-level system usage.
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* CARD 02: FIND LARGE FILES                                      */}
            {/* ============================================================== */}
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#24262D] bg-white dark:bg-[#000000] p-2 sm:p-2.5 flex flex-col justify-between shadow-xs select-none transition-colors">
              <div>
                {/* Top Preview Stage: Very tight margin around the mocked window (matching media_1794138737435_6a71fb75.png) */}
                <div className="rounded-xl bg-[#F4F5F7] dark:bg-[#121316] border border-[#E5E7EB]/70 dark:border-[#1E2026] p-2 sm:p-2.5 overflow-hidden">

                  {/* Mockup Window */}
                  <div className="rounded-lg border border-[#CBD5E1] dark:border-[#222530] bg-white dark:bg-[#0A0B0E] overflow-hidden shadow-xs w-full">

                    {/* Windows 11 App Titlebar */}
                    <div className="h-7 bg-[#F8FAFC] dark:bg-[#12141A] border-b border-[#E2E8F0] dark:border-[#1E2028] px-2.5 flex items-center justify-between text-[10px] text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
                          <Image src="/app-icon.png" alt="Icon" width={14} height={14} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-extrabold text-[#1F2937] dark:text-[#E5E7EB] text-[10px]">DiskSense</span>
                        <span className="text-[9px] text-[#94A3B8] font-mono hidden xs:inline">• Treemap</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#9CA3AF]">
                        <Minus className="w-2.5 h-2.5" />
                        <Square className="w-2 h-2" />
                        <X className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    {/* Real DiskSense Top Bar: Drive Selector + Search Filter */}
                    <div className="px-3 py-2 bg-white dark:bg-[#0E1015] border-b border-[#F1F5F9] dark:border-[#181A22] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#EFF3FD] dark:bg-[#161824] text-[9.5px] font-bold text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/20 shrink-0">
                        <HardDrive className="w-3 h-3 text-[#2563EB] dark:text-[#60A5FA]" />
                        <span>C:\ Local Disk</span>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#F8FAFC] dark:bg-[#141620] border border-[#E2E8F0] dark:border-[#222530] text-[8.5px] text-[#94A3B8] flex-1 max-w-[110px]">
                        <Search className="w-2.5 h-2.5 text-[#94A3B8]" />
                        <span className="truncate">Filter files...</span>
                      </div>
                    </div>

                    {/* Horizontal Visualizer Switcher Pills with Treemap active */}
                    <div className="px-3 py-1.5 bg-[#F8FAFC] dark:bg-[#0A0B0E] border-b border-[#F1F5F9] dark:border-[#161820] flex items-center gap-1 text-[8.5px] font-bold">
                      <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Folders</span>
                      <span className="px-2 py-0.5 rounded bg-[#2563EB] text-white shadow-2xs">Treemap</span>
                      <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Hotspots</span>
                      <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Clean Up</span>
                    </div>

                    {/* Large Files Table Body */}
                    <div className="p-2.5 space-y-1 bg-white dark:bg-[#0E1015]">
                      {largeFiles.map((file) => {
                        const isSelected = selectedFile === file.name;
                        return (
                          <div
                            key={file.name}
                            onClick={() => setSelectedFile(file.name)}
                            className={`flex items-center justify-between px-2 py-1.5 rounded-md border transition-all cursor-pointer text-[9px] ${isSelected
                                ? "bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border-[#2563EB]/40 dark:border-[#3B82F6]/40 text-[#2563EB] dark:text-[#60A5FA] font-bold shadow-2xs"
                                : "bg-[#F8FAFC] dark:bg-[#12141A] border-transparent hover:border-[#CBD5E1] dark:hover:border-[#27292E] text-[#1E293B] dark:text-[#CBD5E1]"
                              }`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0 pr-1">
                              <File className={`w-3 h-3 shrink-0 ${isSelected ? "text-[#2563EB] dark:text-[#60A5FA]" : "text-[#F59E0B]"}`} />
                              <div className="min-w-0">
                                <span className="truncate block font-semibold leading-tight">{file.name}</span>
                                <span className="text-[7.5px] text-[#94A3B8] font-mono truncate block">{file.path}</span>
                              </div>
                            </div>
                            <div className="text-right shrink-0 ml-1">
                              <span className="font-mono block font-black">{file.size}</span>
                              <span className="text-[7px] font-mono text-[#94A3B8] block">{file.type}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>

                {/* Bottom Content Area (Matching Aceternity UI Pro Card text hierarchy) */}
                <div className="px-2 pt-3 pb-2">
                  <div className="text-[11px] font-bold text-[#174BFF] dark:text-[#3B82F6] tracking-wide uppercase font-mono">
                    Large File Finder
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug mt-0.5">
                    Instantly pinpoint the heaviest files
                  </h3>
                  <p className="text-xs text-[#667085] dark:text-[#9EA2AD] leading-relaxed mt-1">
                    Sorted byte-ranking and visual treemap boxes reveal where gigabytes are hiding without manual searching.
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* CARD 03: APP CLEAN (Exact replica of media_1794164315594_29087ce5.jpg) */}
            {/* ============================================================== */}
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-[#24262D] bg-white dark:bg-[#000000] p-2 sm:p-2.5 flex flex-col justify-between shadow-xs select-none transition-colors">
              <div>
                {/* Top Preview Stage: Tight margin around the mocked window (Aceternity style) */}
                <div className="rounded-xl bg-[#F4F5F7] dark:bg-[#121316] border border-[#E5E7EB]/70 dark:border-[#1E2026] p-2 sm:p-2.5 overflow-hidden">

                  {/* Mockup Window */}
                  <div className="rounded-lg border border-[#CBD5E1] dark:border-[#222530] bg-white dark:bg-[#0A0B0E] overflow-hidden shadow-xs w-full relative">

                    {/* Windows 11 App Titlebar */}
                    <div className="h-7 bg-[#F8FAFC] dark:bg-[#12141A] border-b border-[#E2E8F0] dark:border-[#1E2028] px-2.5 flex items-center justify-between text-[10px] text-[#6B7280]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
                          <Image src="/app-icon.png" alt="Icon" width={14} height={14} className="w-full h-full object-contain" />
                        </div>
                        <span className="font-extrabold text-[#1F2937] dark:text-[#E5E7EB] text-[10px]">DiskSense</span>
                        <span className="text-[9px] text-[#94A3B8] font-mono hidden xs:inline">• App Clean</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#9CA3AF]">
                        <Minus className="w-2.5 h-2.5" />
                        <Square className="w-2 h-2" />
                        <X className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    {/* App Clean Top Navigation Bar with App Clean (2) Active */}
                    <div className="px-2.5 py-1.5 bg-[#F8FAFC] dark:bg-[#0A0B0E] border-b border-[#F1F5F9] dark:border-[#161820] flex items-center justify-between gap-1 text-[8px] font-bold overflow-hidden">
                      <div className="flex items-center gap-1 overflow-hidden">
                        <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Folders</span>
                        <span className="px-1.5 py-0.5 rounded text-[#64748B] dark:text-[#94A3B8]">Clean Up</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#2563EB] text-white shadow-2xs flex items-center gap-1 font-extrabold">
                          <PackageCheck className="w-2.5 h-2.5" />
                          <span>App Clean</span>
                          <span className="w-2.5 h-2.5 rounded-full bg-white text-[#2563EB] text-[7px] flex items-center justify-center font-black">
                            2
                          </span>
                        </span>
                      </div>
                      <span className="text-[7.5px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded-md">
                        100% Offline
                      </span>
                    </div>

                    {/* Top KPI Cards (from Screenshot) */}
                    <div className="p-2 grid grid-cols-2 gap-1.5 bg-[#F8FAFC]/50 dark:bg-[#0E1015]/50 border-b border-[#F1F5F9] dark:border-[#181A22]">
                      <div className="p-1.5 rounded-lg bg-white dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530]">
                        <span className="text-[7px] font-mono font-bold text-[#94A3B8] block uppercase">Potential Savings</span>
                        <span className="text-[11px] font-mono font-black text-[#2563EB] dark:text-[#60A5FA]">194.5 MB</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-white dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530]">
                        <span className="text-[7px] font-mono font-bold text-[#94A3B8] block uppercase">Ready to Clean</span>
                        <span className="text-[11px] font-mono font-black text-[#111827] dark:text-[#F8FAFC]">2 installers</span>
                      </div>
                    </div>

                    {/* Installer Items List from Screenshot */}
                    <div className="p-2 space-y-1.5 bg-white dark:bg-[#0E1015]">
                      {/* omnirush */}
                      <div className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#222530] bg-[#F8FAFC] dark:bg-[#12141A] flex items-center justify-between text-[8px]">
                        <div className="flex items-center gap-1.5 min-w-0 pr-1">
                          <div className="w-4 h-4 rounded-md bg-blue-500/10 dark:bg-blue-500/20 text-[#2563EB] flex items-center justify-center shrink-0">
                            <Boxes className="w-2.5 h-2.5" />
                          </div>
                          <div className="min-w-0 leading-tight">
                            <div className="flex items-center gap-1">
                              <span className="font-extrabold text-[#111827] dark:text-[#F8FAFC] truncate">
                                omnirush-win-x64-3.8.2.exe
                              </span>
                              <span className="text-[6.5px] font-bold px-1 py-0.2 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                Installed
                              </span>
                            </div>
                            <span className="text-[7px] text-[#64748B] dark:text-[#94A3B8] block truncate">
                              Reclaim 186 MB safely
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <span className="font-mono font-bold text-[7.5px] text-[#64748B] dark:text-[#94A3B8]">186.4 MB</span>
                          <span className="text-[7.5px] font-extrabold px-1.5 py-0.5 rounded bg-[#2563EB] text-white">
                            Clean
                          </span>
                        </div>
                      </div>

                      {/* AnyDesk / Docker Setup */}
                      <div className="p-1.5 rounded-lg border border-[#E2E8F0] dark:border-[#222530] bg-[#F8FAFC] dark:bg-[#12141A] flex items-center justify-between text-[8px]">
                        <div className="flex items-center gap-1.5 min-w-0 pr-1">
                          <div className="w-4 h-4 rounded-md bg-blue-500/10 dark:bg-blue-500/20 text-[#2563EB] flex items-center justify-center shrink-0">
                            <Boxes className="w-2.5 h-2.5" />
                          </div>
                          <div className="min-w-0 leading-tight">
                            <div className="flex items-center gap-1">
                              <span className="font-extrabold text-[#111827] dark:text-[#F8FAFC] truncate">
                                AnyDesk.exe
                              </span>
                              <span className="text-[6.5px] font-bold px-1 py-0.2 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                Installed
                              </span>
                            </div>
                            <span className="text-[7px] text-[#64748B] dark:text-[#94A3B8] block truncate">
                              Reclaim 8 MB safely
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <span className="font-mono font-bold text-[7.5px] text-[#64748B] dark:text-[#94A3B8]">8.2 MB</span>
                          <span className="text-[7.5px] font-extrabold px-1.5 py-0.5 rounded bg-[#2563EB] text-white">
                            Clean
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Toast Notification (bottom right of mockup window) */}
                    <div className="p-1.5 bg-[#EFF4FE] dark:bg-[#141824] border-t border-[#C7D7FD] dark:border-[#1E273E] flex items-center justify-between text-[7.5px]">
                      <div className="flex items-center gap-1 truncate pr-1">
                        <Sparkles className="w-2.5 h-2.5 text-[#2563EB] shrink-0" />
                        <span className="text-[#1E293B] dark:text-[#E2E8F0] truncate font-medium">
                          Docker Desktop installed. Reclaim 8 MB?
                        </span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="text-[#2563EB] font-bold px-1 py-0.5 rounded bg-white dark:bg-[#1A1D24] shadow-2xs">
                          Clean
                        </span>
                        <span className="text-[#94A3B8]">Later</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Content Area (Matching Aceternity UI Pro Card text hierarchy) */}
                <div className="px-2 pt-3 pb-2">
                  <div className="text-[11px] font-bold text-[#174BFF] dark:text-[#3B82F6] tracking-wide uppercase font-mono">
                    Post-Install App Clean
                  </div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug mt-0.5">
                    Automatic installer cleanup notifications
                  </h3>
                  <p className="text-xs text-[#667085] dark:text-[#9EA2AD] leading-relaxed mt-1">
                    Detects when desktop applications are finished installing. Safely cleans setup files into Recycle Bin with one tap.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
