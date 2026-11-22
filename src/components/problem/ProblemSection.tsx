"use client";

import React, { useState } from "react";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import {
  Folder,
  HardDrive,
  AlertTriangle,
  RotateCw,
  Eye,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Package,
  Layers,
  ShieldCheck,
  Ban,
  FileCode,
  FolderOpen,
} from "lucide-react";

export const ProblemSection: React.FC = () => {
  // Card 1 State: Explorer Blindness
  const [selectedExplorerFolder, setSelectedExplorerFolder] = useState<string>("Users");
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [showProperties, setShowProperties] = useState<boolean>(false);

  // Card 2 State: Hidden Bloat
  const [activeBloatCategory, setActiveBloatCategory] = useState<string>("docker");

  // Card 3 State: Cleaner Contrast
  const [cleanerMode, setCleanerMode] = useState<"bloatware" | "disksense">("bloatware");

  const handleCalculate = () => {
    setIsCalculating(true);
    setShowProperties(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 1400);
  };

  const bloatItems = {
    docker: {
      title: "Docker WSL2 Virtual Disk",
      path: "C:\\Users\\...\\AppData\\Local\\Docker\\wsl\\data\\ext4.vhdx",
      size: "48.2 GB",
      cause: "WSL2 virtual hard disk never shrinks itself automatically after deleting containers or images.",
      badge: "Invisible to Windows Storage",
    },
    npm: {
      title: "NPM & Pip Package Cache",
      path: "C:\\Users\\...\\AppData\\Local\\npm-cache\\_cacache",
      size: "19.7 GB",
      cause: "Build artifacts and downloaded wheel binaries silently accumulate for projects you haven't opened in years.",
      badge: "Deep Nested Folder",
    },
    msi: {
      title: "Orphaned Installer Caches",
      path: "C:\\Windows\\Installer\\*.msi",
      size: "11.5 GB",
      cause: "Cached setup installers for software updates remain permanently stored even after installation finishes.",
      badge: "Hidden System Path",
    },
    temp: {
      title: "Browser & App Shader Cache",
      path: "C:\\Users\\...\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache",
      size: "8.4 GB",
      cause: "GPU shader caches, stale web databases, and Discord media buffers that expand indefinitely.",
      badge: "Silent Accumulator",
    },
  };

  const currentBloat = bloatItems[activeBloatCategory as keyof typeof bloatItems];

  return (
    <section id="problem" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Header Section (Bounded within 1200px container, NO duplicate top divider) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 pt-12 sm:pt-20 pb-10 sm:pb-16 flex flex-col items-center text-center relative bg-white dark:bg-[#151619] transition-colors">
          <div className="mb-4 sm:mb-5">
            <TechnicalLabel>THE STORAGE DILEMMA</TechnicalLabel>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.15] sm:leading-[1.12] mb-4 max-w-3xl transition-colors">
            Your C: Drive Is Almost Full.
            <span className="block mt-1 sm:mt-1.5 text-[#174BFF] dark:text-[#3B82F6]">
              Windows Won&apos;t Tell You Why.
            </span>
          </h2>

          <p className="text-xs xs:text-sm sm:text-base text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-[620px] font-normal transition-colors">
            Windows Explorer was built to browse files alphabetically, not to diagnose storage
            bottlenecks. Finding where 80 gigabytes vanished turns into hours of clicking properties
            and guessing.
          </p>
        </div>
      </div>

      {/* 02. Section Divider Line with Crosshairs */}
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

      {/* 03. 3-Column Architectural Cards Grid (Static cards, NO hover shifts, secondary #000000 surface in dark mode) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE1EA] dark:divide-[#27292E] bg-white dark:bg-[#000000] transition-colors">
            
            {/* ================= CARD 01: EXPLORER BLINDNESS ================= */}
            <div className="p-5 xs:p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#000000] select-none">
              <div>
                {/* Card Top: Number & Category */}
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] dark:text-[#64748B] mb-4">
                  <span className="text-[11px] font-bold text-[#174BFF] dark:text-[#3B82F6]">01 / NAVIGATIONAL</span>
                  <span className="text-[10px]">SYS://EXPLORER</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug mb-2">
                  Exploration Blindness
                </h3>

                <p className="text-xs sm:text-[13px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed mb-5 font-normal">
                  Windows Explorer leaves folder sizes blank by design. To find what is hogging space,
                  you are forced to manually inspect folder properties one by one.
                </p>
              </div>

              {/* MOCKED UI: Interactive Windows Explorer Window */}
              <div className="rounded-xl border border-[#DCE1EA] dark:border-[#222429] bg-[#F8FAFC] dark:bg-[#0D0E11] p-3 text-xs font-sans shadow-2xs">
                {/* Explorer Address Bar */}
                <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#E2E8F0] dark:border-[#1F2126] text-[10px] text-[#64748B]">
                  <div className="flex items-center gap-1.5 truncate">
                    <HardDrive className="w-3 h-3 text-[#174BFF] shrink-0" />
                    <span className="truncate font-mono">C:\ Local Disk</span>
                  </div>
                  <span className="text-[9px] text-[#94A3B8] shrink-0">Explorer 11</span>
                </div>

                {/* Explorer Columns Header */}
                <div className="grid grid-cols-12 text-[9px] font-bold text-[#94A3B8] px-1 pb-1">
                  <span className="col-span-7">Name</span>
                  <span className="col-span-5 text-right">Size</span>
                </div>

                {/* Folder Rows */}
                <div className="space-y-1">
                  {[
                    { name: "Users", type: "folder" },
                    { name: "Program Files", type: "folder" },
                    { name: "AppData", type: "folder" },
                  ].map((folder) => {
                    const isSelected = selectedExplorerFolder === folder.name;
                    return (
                      <div
                        key={folder.name}
                        onClick={() => {
                          setSelectedExplorerFolder(folder.name);
                          setShowProperties(false);
                        }}
                        className={`grid grid-cols-12 items-center px-2 py-1.5 rounded-md cursor-pointer transition-colors text-[11px] ${
                          isSelected
                            ? "bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#3B82F6]/15 dark:text-[#60A5FA] font-semibold"
                            : "hover:bg-[#F1F5F9] dark:hover:bg-[#15161A] text-[#1E293B] dark:text-[#CBD5E1]"
                        }`}
                      >
                        <div className="col-span-7 flex items-center gap-1.5 min-w-0">
                          <Folder className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                          <span className="truncate">{folder.name}</span>
                        </div>
                        <div className="col-span-5 text-right font-mono text-[10px] text-[#DC2626] dark:text-[#F87171] font-bold">
                          — (blank)
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Action & Properties Drawer */}
                <div className="mt-3 pt-2.5 border-t border-[#E2E8F0] dark:border-[#1F2126] flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8]">
                      Selected: <strong>{selectedExplorerFolder}</strong>
                    </span>
                    <button
                      onClick={handleCalculate}
                      className="px-2.5 py-1 rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] font-bold cursor-pointer transition-colors flex items-center gap-1"
                    >
                      {isCalculating ? (
                        <>
                          <RotateCw className="w-2.5 h-2.5 animate-spin" />
                          <span>Calculating...</span>
                        </>
                      ) : (
                        <span>Check Properties</span>
                      )}
                    </button>
                  </div>

                  {showProperties && (
                    <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-[10px] text-amber-800 dark:text-amber-300 flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>
                        {isCalculating
                          ? "Scanning 45,000 subfolders... Explorer cannot index folder weight."
                          : "DiskSense reveals: 217.7 GB instantly without waiting."}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ================= CARD 02: SILENT BACKGROUND BLOAT ================= */}
            <div className="p-5 xs:p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#000000] select-none">
              <div>
                {/* Card Top: Number & Category */}
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] dark:text-[#64748B] mb-4">
                  <span className="text-[11px] font-bold text-[#174BFF] dark:text-[#3B82F6]">02 / ACCUMULATION</span>
                  <span className="text-[10px]">CACHE://HIDDEN_PATHS</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug mb-2">
                  Silent Background Bloat
                </h3>

                <p className="text-xs sm:text-[13px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed mb-5 font-normal">
                  Virtual machines, package caches, and discarded installer remnants quietly grow in
                  obscure paths without ever triggering a system alert.
                </p>
              </div>

              {/* MOCKED UI: Interactive Deep Storage Inspector */}
              <div className="rounded-xl border border-[#DCE1EA] dark:border-[#222429] bg-[#F8FAFC] dark:bg-[#0D0E11] p-3 text-xs font-sans shadow-2xs">
                {/* Category Selector Pills */}
                <div className="grid grid-cols-2 gap-1 mb-2.5">
                  {[
                    { id: "docker", label: "Docker WSL2", size: "48.2 GB" },
                    { id: "npm", label: "NPM / Pip", size: "19.7 GB" },
                    { id: "msi", label: "MSI Setup", size: "11.5 GB" },
                    { id: "temp", label: "GPU Shaders", size: "8.4 GB" },
                  ].map((cat) => {
                    const isActive = activeBloatCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveBloatCategory(cat.id)}
                        className={`flex items-center justify-between px-2 py-1.5 rounded-md text-[10px] font-semibold cursor-pointer transition-all border ${
                          isActive
                            ? "bg-white dark:bg-[#1A1C23] border-[#2563EB] text-[#2563EB] dark:text-[#60A5FA] shadow-2xs font-bold"
                            : "bg-[#F1F5F9] dark:bg-[#121316] border-transparent text-[#64748B] dark:text-[#94A3B8] hover:text-[#111827]"
                        }`}
                      >
                        <span className="truncate">{cat.label}</span>
                        <span className="font-mono text-[9px] font-bold">{cat.size}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Category Detail Card */}
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#14161C] border border-[#E2E8F0] dark:border-[#202228] text-[10.5px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#111827] dark:text-[#F8FAFC]">
                      {currentBloat.title}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-mono text-[9px] font-bold">
                      {currentBloat.size}
                    </span>
                  </div>

                  <p className="font-mono text-[9px] text-[#64748B] dark:text-[#8E929E] truncate mb-2">
                    {currentBloat.path}
                  </p>

                  <p className="text-[10px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed">
                    {currentBloat.cause}
                  </p>
                </div>

                {/* Footer status pill */}
                <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-[#94A3B8]">
                  <span>DIAGNOSTIC:</span>
                  <span className="text-[#174BFF] dark:text-[#3B82F6] font-semibold">
                    {currentBloat.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* ================= CARD 03: DECEPTIVE CLEANER CONTRAST ================= */}
            <div className="p-5 xs:p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-[#000000] select-none">
              <div>
                {/* Card Top: Number & Category */}
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] dark:text-[#64748B] mb-4">
                  <span className="text-[11px] font-bold text-[#174BFF] dark:text-[#3B82F6]">03 / UTILITIES</span>
                  <span className="text-[10px]">COMPARE://SECURITY</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug mb-2">
                  Outdated & Deceptive Tools
                </h3>

                <p className="text-xs sm:text-[13px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed mb-5 font-normal">
                  Traditional disk analyzers look like 1995 mosaics, while commercial cleaner apps push
                  fake registry alarms and aggressive subscription popups.
                </p>
              </div>

              {/* MOCKED UI: Interactive Mode Switcher */}
              <div className="rounded-xl border border-[#DCE1EA] dark:border-[#222429] bg-[#F8FAFC] dark:bg-[#0D0E11] p-3 text-xs font-sans shadow-2xs">
                {/* Mode Toggle Switch */}
                <div className="grid grid-cols-2 p-0.5 rounded-lg bg-[#E2E8F0] dark:bg-[#18191E] mb-3 text-[10px] font-bold">
                  <button
                    onClick={() => setCleanerMode("bloatware")}
                    className={`py-1 rounded-md transition-all cursor-pointer ${
                      cleanerMode === "bloatware"
                        ? "bg-white dark:bg-[#252830] text-[#DC2626] dark:text-[#F87171] shadow-2xs"
                        : "text-[#64748B] hover:text-[#111827]"
                    }`}
                  >
                    Legacy Cleaner
                  </button>
                  <button
                    onClick={() => setCleanerMode("disksense")}
                    className={`py-1 rounded-md transition-all cursor-pointer ${
                      cleanerMode === "disksense"
                        ? "bg-[#2563EB] text-white shadow-2xs"
                        : "text-[#64748B] hover:text-[#111827]"
                    }`}
                  >
                    DiskSense
                  </button>
                </div>

                {/* Conditional Mock Screen */}
                {cleanerMode === "bloatware" ? (
                  <div className="p-2.5 rounded-lg bg-red-50/70 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-[10px]">
                    <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400 font-bold mb-1.5">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>4,829 &quot;Critical Registry Errors&quot;</span>
                    </div>

                    <p className="text-[#64748B] dark:text-[#94A3B8] text-[9.5px] leading-relaxed mb-2.5">
                      Fake emergency alerts designed to intimidate users into paying $39.99/year to
                      clean 12 megabytes of browser cache.
                    </p>

                    <div className="p-1.5 rounded bg-white dark:bg-[#181A20] border border-red-100 dark:border-red-900/30 flex items-center justify-between font-mono text-[9px]">
                      <span className="text-[#DC2626] font-bold">BUY PRO LICENSE</span>
                      <span className="text-[#64748B]">Cloud Telemetry Active</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-[10px]">
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>100% Local & Transparent Analysis</span>
                    </div>

                    <p className="text-[#64748B] dark:text-[#94A3B8] text-[9.5px] leading-relaxed mb-2.5">
                      Zero cloud telemetry, no fake warnings, and direct control over your storage.
                      Only you decide what to inspect or remove.
                    </p>

                    <div className="p-1.5 rounded bg-white dark:bg-[#181A20] border border-blue-100 dark:border-blue-900/30 flex items-center justify-between font-mono text-[9px]">
                      <span className="text-[#10B981] font-bold">100% OFFLINE</span>
                      <span className="text-[#64748B]">Zero Fake Alerts</span>
                    </div>
                  </div>
                )}

                <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-[#94A3B8]">
                  <span>ARCHITECTURE:</span>
                  <span className="text-[#10B981] font-semibold">Windows Kernel Rust API</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
