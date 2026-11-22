"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";
import {
  Folder,
  LayoutGrid,
  GitFork,
  Building2,
  CircleDot,
  Minus,
  Square,
  X,
  HardDrive,
  ChevronDown,
  RotateCw,
  Search,
  Moon,
  Sparkles,
  PackageCheck,
  PanelRightClose,
  File,
  CornerDownRight,
  Trash2,
  Info,
  Flame,
  Plus,
  Check,
  Boxes,
  Bookmark,
  SlidersHorizontal,
  CheckCircle2,
  Clock,
  ChevronRight,
} from "lucide-react";

type VisualizerMode = "folders" | "treemap" | "flow" | "skyline" | "hotspots" | "cleanup" | "appclean";

interface VisualizerTab {
  id: VisualizerMode;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

const TABS: VisualizerTab[] = [
  { id: "folders", label: "Folders", icon: Folder },
  { id: "treemap", label: "Treemap", icon: LayoutGrid },
  { id: "flow", label: "Flow", icon: GitFork },
  { id: "skyline", label: "Skyline", icon: Building2 },
  { id: "hotspots", label: "Hotspots", icon: CircleDot },
  { id: "cleanup", label: "Clean Up", icon: Sparkles, badge: 1 },
  { id: "appclean", label: "App Clean", icon: PackageCheck, badge: 2 },
];

export const VisualizerShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VisualizerMode>("folders");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [selectedRow, setSelectedRow] = useState<string>("Users");
  const [queuedCleanup, setQueuedCleanup] = useState<string[]>(["docker"]);

  const toggleCleanupQueue = (id: string) => {
    setQueuedCleanup((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Cleanup recommendations matching media_1794164294013_123ff8ff.jpg
  const cleanupRecs = [
    {
      id: "anydesk",
      name: "AnyDesk.exe",
      cat: "Unused Installers",
      subtitle: "Docker Desktop is already installed",
      path: "C:\\Users\\mrxsa\\Downloads\\AnyDesk.exe",
      size: "8.2 MB",
      icon: Sparkles,
    },
    {
      id: "omnirush",
      name: "omnirush-win-x64-3.8.2.exe",
      cat: "Unused Installers",
      subtitle: "omnirush 3.8.2 is already installed",
      path: "C:\\Users\\mrxsa\\Downloads\\omnirush-win-x64-3.8.2.exe",
      size: "186.4 MB",
      icon: Sparkles,
    },
    {
      id: "docker",
      name: "Docker",
      cat: "Docker Cache",
      subtitle: "Docker images, containers, and build cache",
      path: "C:\\Users\\mrxsa\\AppData\\Local\\Docker",
      size: "16.6 GB",
      icon: Boxes,
    },
    {
      id: "target-spacelens",
      name: "target",
      cat: "Rust Cargo Build",
      subtitle: "Rebuildable cargo target binaries and intermediate objects",
      path: "C:\\Personal Project\\spacelens\\src-tauri\\target",
      size: "11.8 GB",
      icon: Sparkles,
    },
    {
      id: "target-echo",
      name: "target",
      cat: "Rust Cargo Build",
      subtitle: "Rebuildable cargo target binaries and intermediate objects",
      path: "C:\\Personal Project\\echo\\src-tauri\\target",
      size: "8.9 GB",
      icon: Sparkles,
    },
  ];

  // Auto 3-second cycle
  useEffect(() => {
    if (isPaused) {
      setProgress(0);
      return;
    }

    const intervalMs = 50;
    const totalMs = 3000;
    const step = (intervalMs / totalMs) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((curr) => {
            const idx = TABS.findIndex((t) => t.id === curr);
            const nextIdx = (idx + 1) % TABS.length;
            return TABS[nextIdx].id;
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isPaused, activeTab]);

  const handleSelectTab = (tab: VisualizerMode) => {
    setActiveTab(tab);
    setProgress(0);
  };

  // Exact data from media_1794163117314_4ece92e1.jpg
  const foldersData = [
    { name: "Users", size: "217.7 GB", pct: "54.0%", pillBg: "bg-[#3B66FF] text-white", items: "21,77,626", mod: "—", isDir: true },
    { name: "Personal Project", size: "54.3 GB", pct: "13.5%", pillBg: "bg-[#8B5CF6] text-white", items: "7,99,668", mod: "—", isDir: true },
    { name: "Windows", size: "43 GB", pct: "10.7%", pillBg: "bg-[#A855F7] text-white", items: "1,91,853", mod: "—", isDir: true },
    { name: "Program Files", size: "18.7 GB", pct: "4.6%", pillBg: "bg-[#10B981] text-white", items: "58,944", mod: "—", isDir: true },
    { name: "Program Files (x86)", size: "18.5 GB", pct: "4.6%", pillBg: "bg-[#F59E0B] text-white", items: "80,797", mod: "—", isDir: true },
    { name: "pagefile.sys", size: "18 GB", pct: "4.5%", pillBg: "bg-[#F97316] text-white", items: "1", mod: "2 weeks ago", isDir: false },
    { name: "ProgramData", size: "12.7 GB", pct: "3.1%", pillBg: "bg-[#3B82F6] text-white", items: "10,371", mod: "—", isDir: true },
    { name: "Recovery", size: "6.6 GB", pct: "1.6%", pillBg: "bg-[#3B82F6] text-white", items: "474", mod: "—", isDir: true },
    { name: "eSupport", size: "6 GB", pct: "1.5%", pillBg: "bg-[#3B82F6] text-white", items: "3,028", mod: "—", isDir: true },
  ];

  // 3D Skyline Buildings matching media_1794163959477_edc7ddbc.png exactly
  const skylineBuildings = [
    {
      rank: "#1",
      name: "Users",
      pct: "54%",
      height: 195,
      frontTop: "#637BFF",
      frontBottom: "#4F6BFF",
      top: "#8FA0FF",
      side: "#3F5BEA",
    },
    {
      rank: "#2",
      name: "Personal ...",
      pct: "13%",
      height: 68,
      frontTop: "#A855F7",
      frontBottom: "#9333EA",
      top: "#C084FC",
      side: "#7E22CE",
    },
    {
      rank: "#3",
      name: "Windows",
      pct: "11%",
      height: 60,
      frontTop: "#34D399",
      frontBottom: "#10B981",
      top: "#6EE7B7",
      side: "#059669",
    },
    {
      rank: "#4",
      name: "Program ...",
      pct: "5%",
      height: 48,
      frontTop: "#FBBF24",
      frontBottom: "#F59E0B",
      top: "#FDE68A",
      side: "#D97706",
    },
    {
      rank: "#5",
      name: "Program ...",
      pct: "5%",
      height: 44,
      frontTop: "#F87171",
      frontBottom: "#EF4444",
      top: "#FCA5A5",
      side: "#DC2626",
    },
    {
      rank: "#6",
      name: "Others",
      pct: "13%",
      height: 68,
      frontTop: "#94A3B8",
      frontBottom: "#64748B",
      top: "#CBD5E1",
      side: "#475569",
    },
  ];

  return (
    <section
      id="visualizers"
      className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 01. Full-Width Architectural Partition Band with + Crosshairs */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Header Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 pt-14 sm:pt-20 pb-10 sm:pb-12 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            
            {/* Left: Headline & Badge */}
            <div className="flex flex-col items-start max-w-2xl">
              <div className="mb-3.5 sm:mb-4">
                <TechnicalLabel>INTERACTIVE VISUALIZERS</TechnicalLabel>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.12]">
                Explore your disk with
                <span className="block mt-1 text-[#174BFF] dark:text-[#3B82F6]">
                  multiple powerful views.
                </span>
              </h2>

              <p className="text-xs xs:text-sm sm:text-[15px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed mt-3 max-w-lg font-normal">
                DiskSense gives you purpose-built visual perspectives to pinpoint heavy files, understand directory hierarchy, and inspect system storage.
              </p>
            </div>

            {/* Right: Architectural Subtitle & Interactive Status */}
            <div className="lg:max-w-md lg:border-l lg:border-[#DCE1EA] lg:dark:border-[#27292E] lg:pl-6 pb-1 text-left">
              <span className="text-[11px] font-mono text-[#94A3B8] dark:text-[#64748B] flex items-center gap-1.5 mb-2">
                <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"}`} />
                {isPaused ? "Paused (hovering)" : "Interactive · Auto-cycling every 3s"}
              </span>
              <p className="text-xs xs:text-sm text-[#475467] dark:text-[#9EA2AD] leading-relaxed font-normal">
                Click any visualizer in the window toolbar below to switch views instantly, or hover to pause and drill into specific directories.
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

      {/* 04. Main Interactive Mockup Stage */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 py-10 sm:py-16 transition-colors">
          
          {/* Main App Window Shell */}
          <div className="w-full rounded-2xl border border-[#DCE1EA] dark:border-[#222530] bg-[#EFF4FE] dark:bg-[#07080A] shadow-2xl overflow-hidden select-none">
            
            {/* Windows 11 App Titlebar */}
            <div className="h-8 bg-white dark:bg-[#0C0E12] border-b border-[#E2E8F0] dark:border-[#1E2028] px-3.5 flex items-center justify-between text-xs text-[#6B7280]">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full overflow-hidden shrink-0">
                  <Image src="/app-icon.png" alt="Icon" width={16} height={16} className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-[#1F2937] dark:text-[#E5E7EB] text-[11px]">DiskSense</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#9CA3AF]">
                <Minus className="w-3 h-3" />
                <Square className="w-2.5 h-2.5" />
                <X className="w-3 h-3" />
              </div>
            </div>

            {/* DiskSense Header Bar: Brand, Drive Selector, Search, Actions */}
            <div className="px-4 py-2.5 bg-white dark:bg-[#0A0B0E] border-b border-[#E2E8F0] dark:border-[#181A22] flex items-center justify-between gap-3">
              {/* Left: Brand Identity & Drive Selector */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                    <Image src="/app-icon.png" alt="Icon" width={28} height={28} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-xs font-black text-[#111827] dark:text-[#F8FAFC] leading-none">DiskSense</h1>
                    <p className="text-[9px] font-semibold text-[#64748B] dark:text-[#94A3B8] mt-0.5">Know Your Storage</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] text-xs font-bold text-[#111827] dark:text-[#F8FAFC] border border-[#CBD5E1] dark:border-[#222530] shadow-2xs">
                  <HardDrive className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>C:\ Local Disk</span>
                  <ChevronDown className="w-3 h-3 opacity-60 ml-0.5" />
                </div>
              </div>

              {/* Center: Search Bar with Ctrl K badge */}
              <div className="flex-1 max-w-md mx-auto relative hidden md:block">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                <input
                  type="text"
                  readOnly
                  placeholder="Search files, folders, or extensions..."
                  className="w-full pl-9 pr-14 py-1.5 text-xs rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] text-[#111827] dark:text-[#F8FAFC] placeholder-[#94A3B8] outline-none"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-white dark:bg-[#1A1C24] text-[#94A3B8] border border-[#E2E8F0] dark:border-[#27292E]">
                  Ctrl K
                </span>
              </div>

              {/* Right: Rescan & Theme Pill */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold shadow-xs">
                  <RotateCw className="w-3 h-3" />
                  <span>Rescan</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#CBD5E1] dark:border-[#222530] text-xs font-bold text-[#111827] dark:text-[#F8FAFC]">
                  <Moon className="w-3 h-3 text-[#2563EB]" />
                  <span className="hidden sm:inline">Dark</span>
                </div>
              </div>
            </div>

            {/* Visualizer Switcher Horizontal Pills Toolbar */}
            <div className="px-4 py-2 bg-white/70 dark:bg-[#07080A]/70 border-b border-[#E2E8F0] dark:border-[#181A22] flex items-center gap-1 overflow-x-auto text-xs font-bold">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                const badgeCount =
                  tab.id === "cleanup"
                    ? queuedCleanup.length
                    : tab.badge;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id)}
                    className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow-xs"
                        : "text-[#64748B] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white hover:bg-white dark:hover:bg-[#141620]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                    {badgeCount !== undefined && badgeCount > 0 && (
                      <span
                        className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black ${
                          isActive
                            ? "bg-white text-[#2563EB]"
                            : "bg-blue-100 dark:bg-blue-900/60 text-[#2563EB] dark:text-[#93C5FD]"
                        }`}
                      >
                        {badgeCount}
                      </span>
                    )}
                    {/* Active timer progress line */}
                    {isActive && !isPaused && (
                      <div
                        className="absolute bottom-0 left-0 h-0.5 bg-white/70 transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ============================================================== */}
            {/* MAIN STAGE (Clean Up, App Clean, or Visualizer Views)          */}
            {/* ============================================================== */}
            {activeTab === "cleanup" ? (
              /* CLEAN UP WORKSPACE (1:1 replica of media_1794164294013_123ff8ff.jpg) */
              <div className="p-3.5 sm:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3.5 min-h-[460px]">
                
                {/* LEFT COLUMN: Smart Recommendations (lg:col-span-8) */}
                <div className="lg:col-span-8 flex flex-col rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs p-4 sm:p-5 justify-between text-left">
                  <div className="space-y-4">
                    {/* Header Row: Title + Badge + Subtitle + Add All */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F1F5F9] dark:border-[#181A22]">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40 shrink-0 shadow-2xs">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-black text-[#111827] dark:text-[#F8FAFC]">
                              Smart Recommendations
                            </h3>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-[#2563EB] dark:text-[#93C5FD]">
                              142 Detected
                            </span>
                          </div>
                          <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                            Safe-to-clean junk, build caches, and heavy media identified from your scan
                          </p>
                        </div>
                      </div>

                      {/* Add All Button */}
                      <button
                        onClick={() => setQueuedCleanup(cleanupRecs.map((r) => r.id))}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-xs cursor-pointer self-start sm:self-auto shrink-0"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add All (141)</span>
                      </button>
                    </div>

                    {/* Potential Savings + Filter Search */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-[#64748B] dark:text-[#94A3B8]">Potential savings:</span>
                        <span className="font-mono font-black text-[#2563EB] dark:text-[#60A5FA]">100.7 GB</span>
                      </div>

                      {/* Search Bar */}
                      <div className="relative sm:w-64">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                        <input
                          type="text"
                          readOnly
                          placeholder="Filter recommendations..."
                          className="w-full pl-8 pr-3 py-1 text-xs rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] text-[#111827] dark:text-[#F8FAFC] placeholder-[#94A3B8] outline-none"
                        />
                      </div>
                    </div>

                    {/* Filter Category Chips from Screenshot */}
                    <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-bold pb-1 no-scrollbar">
                      <span className="px-3 py-1 rounded-xl bg-[#2563EB] text-white shadow-2xs shrink-0 cursor-pointer">
                        All (142)
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#F1F5F9] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 shrink-0 cursor-pointer">
                        Unused Installers (2)
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#F1F5F9] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 shrink-0 cursor-pointer">
                        Docker Cache (5)
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#F1F5F9] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 shrink-0 cursor-pointer">
                        Rust Cargo Build (3)
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#F1F5F9] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 shrink-0 cursor-pointer">
                        Temporary Cache (14)
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#F1F5F9] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] hover:bg-slate-200 shrink-0 cursor-pointer">
                        Build Output (50)
                      </span>
                    </div>

                    {/* Recommendation Rows matching Screenshot */}
                    <div className="space-y-2">
                      {cleanupRecs.map((rec) => {
                        const isQueued = queuedCleanup.includes(rec.id);
                        const Icon = rec.icon;
                        return (
                          <div
                            key={rec.id}
                            onClick={() => toggleCleanupQueue(rec.id)}
                            className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                              isQueued
                                ? "bg-[#2563EB]/8 dark:bg-[#3B82F6]/15 border-[#2563EB]/40 dark:border-[#3B82F6]/40 shadow-xs"
                                : "bg-[#F8FAFC] dark:bg-[#12141A] border-transparent hover:border-[#CBD5E1] dark:hover:border-[#262832]"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 pr-2">
                              <div className="w-8 h-8 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs sm:text-sm font-extrabold text-[#111827] dark:text-[#F8FAFC] truncate">
                                    {rec.name}
                                  </span>
                                  <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                    {rec.cat}
                                  </span>
                                </div>
                                <span className="text-xs text-[#64748B] dark:text-[#94A3B8] block truncate mt-0.5">
                                  {rec.subtitle}
                                </span>
                                <span className="text-[10px] font-mono text-[#94A3B8] dark:text-[#64748B] block truncate mt-0.5">
                                  {rec.path}
                                </span>
                              </div>
                            </div>

                            {/* Size & Button */}
                            <div className="flex items-center gap-3 shrink-0">
                              <span className="text-xs sm:text-sm font-mono font-black text-[#111827] dark:text-[#F8FAFC]">
                                {rec.size}
                              </span>
                              <button
                                type="button"
                                className={`text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all ${
                                  isQueued
                                    ? "bg-blue-100 dark:bg-blue-900/60 text-[#2563EB] dark:text-[#93C5FD] border border-blue-300/40"
                                    : "bg-white dark:bg-[#1A1D24] text-[#111827] dark:text-[#F8FAFC] border border-[#CBD5E1] dark:border-[#262832] shadow-2xs hover:bg-[#F8FAFC]"
                                }`}
                              >
                                {isQueued ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                    <span>Queued</span>
                                  </>
                                ) : (
                                  <>
                                    <Plus className="w-3.5 h-3.5" />
                                    <span>Add</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Deletion Queue (lg:col-span-4) */}
                <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs p-5 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9] dark:border-[#181A22]">
                      <div className="flex items-center gap-2">
                        <Trash2 className="w-4 h-4 text-[#2563EB]" />
                        <h3 className="text-sm sm:text-base font-black text-[#111827] dark:text-[#F8FAFC]">
                          Deletion Queue
                        </h3>
                        <span className="text-xs font-black w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center">
                          {queuedCleanup.length}
                        </span>
                      </div>
                      <button
                        onClick={() => setQueuedCleanup([])}
                        className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-white cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>

                    {/* Custom Path Input */}
                    <div className="relative">
                      <input
                        type="text"
                        readOnly
                        placeholder="Add custom path to delete..."
                        className="w-full pl-3 pr-8 py-2 text-xs rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] text-[#111827] dark:text-[#F8FAFC] placeholder-[#94A3B8] outline-none"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#2563EB] cursor-pointer">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Deselect All Row */}
                    <div className="flex items-center justify-between text-xs text-[#64748B] dark:text-[#94A3B8] font-semibold pt-1">
                      <span className="flex items-center gap-1.5 cursor-pointer">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] stroke-[3]" />
                        <span>Deselect All</span>
                      </span>
                      <span>{queuedCleanup.length} of {queuedCleanup.length} selected</span>
                    </div>

                    {/* Queued Items List */}
                    <div className="space-y-2">
                      {queuedCleanup.map((id) => {
                        const item = cleanupRecs.find((r) => r.id === id);
                        if (!item) return null;
                        return (
                          <div
                            key={id}
                            className="p-3 rounded-xl bg-[#EFF4FE] dark:bg-[#141824] border border-[#C7D7FD] dark:border-[#1E273E] flex items-start justify-between gap-2 shadow-2xs"
                          >
                            <div className="flex items-start gap-2.5 min-w-0">
                              <div className="w-4 h-4 rounded bg-[#2563EB] text-white flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <Boxes className="w-3.5 h-3.5 text-[#2563EB]" />
                                  <span className="font-extrabold text-xs text-[#111827] dark:text-[#F8FAFC]">
                                    {item.name}
                                  </span>
                                </div>
                                <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] block truncate mt-0.5">
                                  {item.path}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs font-mono font-bold text-[#111827] dark:text-[#F8FAFC]">
                                {item.size}
                              </span>
                              <button
                                onClick={() => toggleCleanupQueue(id)}
                                className="text-[#94A3B8] hover:text-red-500 cursor-pointer"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column Bottom Delete Bar */}
                  <div className="pt-4 border-t border-[#F1F5F9] dark:border-[#181A22] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748B] dark:text-[#94A3B8]">Space to reclaim:</span>
                      <span className="font-mono font-black text-[#2563EB] dark:text-[#60A5FA] text-sm">
                        {queuedCleanup.length > 0 ? "16.6 GB" : "0 GB"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="flex-1 py-2.5 px-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-black flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete Selected ({queuedCleanup.length})</span>
                      </button>

                      <button
                        className="py-2.5 px-4 rounded-xl bg-white dark:bg-[#12141A] border border-[#CBD5E1] dark:border-[#262832] text-xs font-bold text-[#111827] dark:text-[#F8FAFC] hover:bg-slate-50 cursor-pointer"
                      >
                        All
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ) : activeTab === "appclean" ? (
              /* APP CLEAN WORKSPACE (1:1 replica of media_1794164315594_29087ce5.jpg) */
              <div className="p-3.5 sm:p-4 flex flex-col gap-3.5 min-h-[460px] text-left relative overflow-hidden">
                {/* 1. TOP BANNER BOX */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs flex flex-col gap-4">
                  {/* Title row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center border border-blue-200/50 dark:border-blue-800/40 shadow-2xs shrink-0">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-black text-[#111827] dark:text-[#F8FAFC]">
                            Smart Post-Installation Cleanup
                          </h3>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                            100% Offline & Private
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                          Automatically identifies setup files you no longer need after installing desktop apps.
                        </p>
                      </div>
                    </div>

                    {/* Top right action buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#141620] border border-[#CBD5E1] dark:border-[#222530] text-xs font-bold text-[#111827] dark:text-[#F8FAFC] shadow-2xs">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>Monitored Folders (1)</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#141620] border border-[#CBD5E1] dark:border-[#222530] text-xs font-bold text-[#111827] dark:text-[#F8FAFC] shadow-2xs">
                        <RotateCw className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>Rescan All Folders</span>
                      </div>
                    </div>
                  </div>

                  {/* 3 Stat KPI Cards from Screenshot */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#94A3B8] block uppercase">
                          POTENTIAL SAVINGS
                        </span>
                        <span className="text-xl font-mono font-black text-[#2563EB] dark:text-[#60A5FA]">
                          194.5 MB
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#94A3B8] block uppercase">
                          READY TO CLEAN
                        </span>
                        <span className="text-xl font-black text-[#111827] dark:text-[#F8FAFC]">
                          2 installers
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#94A3B8] block uppercase">
                          KEPT BY USER
                        </span>
                        <span className="text-xl font-black text-[#111827] dark:text-[#F8FAFC]">
                          2 installers
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 flex items-center justify-center">
                        <Bookmark className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. TABS & SEARCH ROW */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-bold no-scrollbar">
                    <span className="px-3 py-1.5 rounded-xl bg-[#2563EB] text-white shadow-2xs shrink-0 cursor-pointer">
                      Ready to Clean (2)
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#141620] text-[#64748B] dark:text-[#94A3B8] shrink-0 cursor-pointer">
                      Kept Files (2)
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#141620] text-[#64748B] dark:text-[#94A3B8] shrink-0 cursor-pointer">
                      Cleaned / History (7)
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#141620] text-[#64748B] dark:text-[#94A3B8] shrink-0 cursor-pointer">
                      All Tracked (11)
                    </span>
                  </div>

                  <div className="relative sm:w-64">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                    <input
                      type="text"
                      readOnly
                      placeholder="Filter by app or file name..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-[#F8FAFC] dark:bg-[#12141A] border border-[#E2E8F0] dark:border-[#222530] text-[#111827] dark:text-[#F8FAFC] placeholder-[#94A3B8] outline-none"
                    />
                  </div>
                </div>

                {/* 3. INSTALLERS LIST */}
                <div className="space-y-2.5">
                  {/* omnirush card */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-700 mt-1 shrink-0" />
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] flex items-center justify-center shrink-0">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-sm text-[#111827] dark:text-[#F8FAFC]">
                            omnirush-win-x64-3.8.2.exe
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                            omnirush 3.8.2 Installed
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                            186.4 MB
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            Downloads
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
                          omnirush 3.8.2 is installed. You can reclaim 186 MB by safely removing omnirush-win-x64-3.8.2.exe.
                        </p>
                        <span className="text-[10.5px] font-mono text-[#94A3B8] flex items-center gap-1 mt-1">
                          <span>C:\Users\mrxsa\Downloads\omnirush-win-x64-3.8.2.exe</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>1 day ago</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <div className="p-2 rounded-xl border border-[#CBD5E1] dark:border-[#222530] text-[#64748B] hover:text-[#111827] cursor-pointer">
                        <Folder className="w-4 h-4" />
                      </div>
                      <button className="px-3.5 py-1.5 rounded-xl border border-[#CBD5E1] dark:border-[#222530] text-xs font-bold text-[#111827] dark:text-[#F8FAFC] hover:bg-slate-50 cursor-pointer">
                        Keep File
                      </button>
                      <button className="px-4 py-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-2xs cursor-pointer">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clean</span>
                      </button>
                    </div>
                  </div>

                  {/* AnyDesk card */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-700 mt-1 shrink-0" />
                      <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] flex items-center justify-center shrink-0">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-extrabold text-sm text-[#111827] dark:text-[#F8FAFC]">
                            AnyDesk.exe
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                            Docker Desktop Installed
                          </span>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                            8.2 MB
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            Downloads
                          </span>
                        </div>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
                          Docker Desktop is installed. You can reclaim 8 MB by safely removing AnyDesk.exe.
                        </p>
                        <span className="text-[10.5px] font-mono text-[#94A3B8] flex items-center gap-1 mt-1">
                          <span>C:\Users\mrxsa\Downloads\AnyDesk.exe</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>1 day ago</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <div className="p-2 rounded-xl border border-[#CBD5E1] dark:border-[#222530] text-[#64748B] hover:text-[#111827] cursor-pointer">
                        <Folder className="w-4 h-4" />
                      </div>
                      <button className="px-3.5 py-1.5 rounded-xl border border-[#CBD5E1] dark:border-[#222530] text-xs font-bold text-[#111827] dark:text-[#F8FAFC] hover:bg-slate-50 cursor-pointer">
                        Keep File
                      </button>
                      <button className="px-4 py-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-extrabold flex items-center gap-1.5 shadow-2xs cursor-pointer">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Clean</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. FLOATING DESKTOP NOTIFICATION TOAST (bottom right, matching screenshot) */}
                <div className="sm:absolute sm:bottom-4 sm:right-4 z-20 w-full sm:w-[380px] p-4 rounded-2xl bg-white dark:bg-[#12141C] border border-[#C7D7FD] dark:border-[#242C42] shadow-2xl space-y-3">
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[11px] font-black tracking-wide text-[#2563EB] uppercase">
                        SMART POST-INSTALL CLEANUP (1 of 2)
                      </span>
                    </div>
                    <X className="w-3.5 h-3.5 text-[#94A3B8] cursor-pointer" />
                  </div>

                  <p className="text-xs font-bold text-[#111827] dark:text-[#F8FAFC] leading-snug">
                    Docker Desktop is installed. You can reclaim 8 MB by removing the setup file.
                  </p>

                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Moves safely to Recycle Bin • Never deleted permanently</span>
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-xs font-bold">
                    <button className="px-3.5 py-1.5 rounded-xl bg-[#2563EB] text-white flex items-center gap-1.5 shadow-2xs cursor-pointer">
                      <Trash2 className="w-3 h-3" />
                      <span>Clean (8 MB)</span>
                    </button>
                    <button className="px-3 py-1.5 rounded-xl bg-[#F8FAFC] dark:bg-[#1A1D26] border border-[#CBD5E1] dark:border-[#262832] text-[#64748B] flex items-center gap-1 cursor-pointer">
                      <Clock className="w-3 h-3" />
                      <span>Later</span>
                    </button>
                    <button className="px-2.5 py-1.5 text-[#64748B] hover:text-[#111827] cursor-pointer">
                      Keep
                    </button>
                    <div className="p-1.5 rounded-lg border border-[#CBD5E1] dark:border-[#262832] text-[#64748B] cursor-pointer ml-auto">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* STANDARD TWO-COLUMN STAGE (Visualizer on Left, FolderDetails on Right) */
              <div className="p-3.5 sm:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3.5 min-h-[460px]">
              
              {/* LEFT / CENTER PANEL: The Active Visualizer View (~72% width) */}
              <div className="lg:col-span-8 flex flex-col rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs overflow-hidden">
                
                {/* Panel Header: Path, Items count, Total size & Hide Details */}
                <div className="px-4 py-3 border-b border-[#F1F5F9] dark:border-[#181A22] flex items-center justify-between">
                  <span className="font-extrabold text-sm sm:text-base text-[#111827] dark:text-[#F8FAFC]">
                    C:\
                  </span>

                  <div className="flex items-center gap-2">
                    {activeTab !== "flow" && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F8FAFC] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#22242C]">
                        {activeTab === "treemap" ? "24 items" : "39 items"}
                      </span>
                    )}
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F8FAFC] dark:bg-[#161822] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#22242C]">
                      403.1 GB
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#2563EB] text-white text-xs font-bold shadow-2xs">
                      <PanelRightClose className="w-3 h-3" />
                      <span>Hide Details</span>
                    </div>
                  </div>
                </div>

                {/* VISUALIZER VIEW CONTENT */}
                <div className="flex-1 p-2 sm:p-3 overflow-y-auto">
                  
                  {/* MODE 1: FOLDERS (Exact table from media_1794163117314_4ece92e1.jpg) */}
                  {activeTab === "folders" && (
                    <div className="w-full text-left">
                      {/* Table Columns Header */}
                      <div className="grid grid-cols-12 px-3 py-2 text-[10.5px] font-semibold text-[#94A3B8] border-b border-[#F1F5F9] dark:border-[#181A22]">
                        <span className="col-span-5">Name</span>
                        <span className="col-span-2 text-right">Size</span>
                        <span className="col-span-2 text-center">Percentage</span>
                        <span className="col-span-2 text-right hidden sm:block">Items</span>
                        <span className="col-span-1 text-center hidden sm:block">Last Modified</span>
                      </div>

                      {/* Folder Table Rows */}
                      <div className="space-y-0.5 pt-1">
                        {foldersData.map((row) => (
                          <div
                            key={row.name}
                            onClick={() => setSelectedRow(row.name)}
                            className={`grid grid-cols-12 items-center px-3 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                              selectedRow === row.name
                                ? "bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 font-bold"
                                : "hover:bg-[#F8FAFC] dark:hover:bg-[#12141A]"
                            }`}
                          >
                            {/* Name + Icon */}
                            <div className="col-span-5 flex items-center gap-2 min-w-0 pr-1">
                              {row.isDir ? (
                                <Folder className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B] shrink-0" />
                              ) : (
                                <File className="w-4 h-4 text-[#64748B] shrink-0" />
                              )}
                              <span className="truncate text-[#111827] dark:text-[#F8FAFC]">
                                {row.name}
                              </span>
                            </div>

                            {/* Size */}
                            <span className="col-span-2 text-right font-mono font-bold text-[#111827] dark:text-[#F8FAFC]">
                              {row.size}
                            </span>

                            {/* Percentage Pill */}
                            <div className="col-span-2 flex justify-center">
                              <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full ${row.pillBg}`}>
                                {row.pct}
                              </span>
                            </div>

                            {/* Items count */}
                            <span className="col-span-2 text-right font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8] hidden sm:block">
                              {row.items}
                            </span>

                            {/* Last modified */}
                            <span className="col-span-1 text-center text-[10px] text-[#94A3B8] hidden sm:block">
                              {row.mod}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MODE 2: TREEMAP (Exact layout from media_1794163346557_b84602fb.png) */}
                  {activeTab === "treemap" && (
                    <div className="w-full h-[370px] rounded-xl overflow-hidden border border-[#CBD5E1] dark:border-[#222530] flex gap-1.5 p-1 bg-[#F8FAFC] dark:bg-[#0E1015] text-white">
                      
                      {/* COLUMN 1: Users (Big Blue Block, ~48% width) */}
                      <div className="w-[48%] h-full rounded-lg bg-[#3F5BEA] p-2 flex flex-col justify-between shadow-xs">
                        <div className="flex items-center gap-1 text-[11px] font-bold">
                          <Folder className="w-3.5 h-3.5 fill-current text-white/90" />
                          <span>Users</span>
                        </div>

                        {/* Sub-blocks inside Users */}
                        <div className="flex-1 flex flex-col justify-between gap-1.5 mt-1">
                          {/* mrxsa (176.3 GB) */}
                          <div className="flex-1 rounded-md bg-[#4F6BFF] p-2 flex flex-col justify-between border border-blue-400/20">
                            <span className="text-[11px] font-semibold text-white/95">mrxsa</span>
                            <span className="text-[10px] font-mono text-white/80">176.3 GB</span>
                          </div>

                          {/* Abhinav (41.4 GB) */}
                          <div className="h-16 rounded-md bg-[#4F6BFF]/90 p-2 flex flex-col justify-between border border-blue-400/20">
                            <span className="text-[11px] font-semibold text-white/95">Abhinav</span>
                            <span className="text-[10px] font-mono text-white/80">41.4 GB</span>
                          </div>
                        </div>
                      </div>

                      {/* COLUMN 2: Personal Project, Program Files, etc. (~26% width) */}
                      <div className="w-[26%] h-full flex flex-col gap-1.5">
                        
                        {/* Personal Project (Indigo block, ~58% height) */}
                        <div className="h-[58%] rounded-lg bg-[#6366F1] p-2 flex flex-col justify-between shadow-xs">
                          <div className="flex items-center gap-1 text-[11px] font-bold">
                            <Folder className="w-3.5 h-3.5 fill-current text-white/90" />
                            <span className="truncate">Personal Project</span>
                          </div>

                          {/* Grid of sub-projects */}
                          <div className="grid grid-cols-2 gap-1 mt-1 flex-1">
                            <div className="rounded bg-[#5558E6] p-1.5 flex flex-col justify-between text-[9.5px]">
                              <span className="font-semibold truncate">spacelens</span>
                              <span className="text-white/70 font-mono text-[8.5px]">12.1 GB</span>
                            </div>
                            <div className="rounded bg-[#5558E6] p-1.5 flex flex-col justify-between text-[9.5px]">
                              <span className="font-semibold truncate">echo</span>
                              <span className="text-white/70 font-mono text-[8.5px]">9 GB</span>
                            </div>
                            <div className="rounded bg-[#5558E6] p-1.5 flex flex-col justify-between text-[9.5px]">
                              <span className="font-semibold truncate">lil-agents</span>
                              <span className="text-white/70 font-mono text-[8.5px]">7.4 GB</span>
                            </div>
                            <div className="rounded bg-[#5558E6] p-1.5 flex flex-col justify-between text-[9.5px]">
                              <span className="font-semibold truncate">Ne...</span>
                              <span className="text-white/70 font-mono text-[8.5px]">cam...</span>
                            </div>
                          </div>
                        </div>

                        {/* Program Files (Orange block, ~22% height) */}
                        <div className="h-[22%] rounded-lg bg-[#EA580C] p-1.5 flex flex-col justify-between text-[10px]">
                          <div className="flex items-center gap-1 font-bold">
                            <Folder className="w-3 h-3 fill-current text-white/90" />
                            <span className="truncate">Program...</span>
                          </div>
                          <div className="flex items-center justify-between text-[8.5px] font-mono text-white/80">
                            <span>Microsoft O (4.7 GB)</span>
                            <span>Docker</span>
                          </div>
                        </div>

                        {/* Program Files x86 (Light Blue block, ~20% height) */}
                        <div className="h-[20%] rounded-lg bg-[#0284C7] p-1.5 flex flex-col justify-between text-[10px]">
                          <div className="flex items-center gap-1 font-bold">
                            <Folder className="w-3 h-3 fill-current text-white/90" />
                            <span className="truncate">Program...</span>
                          </div>
                          <div className="flex items-center justify-between text-[8.5px] font-mono text-white/80">
                            <span>Micr... 6.3 GB</span>
                            <span>Wind... 4.6 GB</span>
                          </div>
                        </div>

                      </div>

                      {/* COLUMN 3: Windows, pagefile, ProgramData (~26% width) */}
                      <div className="w-[26%] h-full flex flex-col gap-1.5">
                        
                        {/* Windows (Teal/Green Block, ~48% height) */}
                        <div className="h-[48%] rounded-lg bg-[#0D9488] p-2 flex flex-col justify-between shadow-xs">
                          <div className="flex items-center gap-1 text-[11px] font-bold">
                            <Folder className="w-3.5 h-3.5 fill-current text-white/90" />
                            <span>Windows</span>
                          </div>

                          <div className="grid grid-cols-2 gap-1 mt-1 flex-1">
                            <div className="rounded bg-[#0F766E] p-1.5 flex flex-col justify-between text-[9.5px]">
                              <span className="font-semibold">WinSxS</span>
                              <span className="text-white/70 font-mono text-[8.5px]">18 GB</span>
                            </div>
                            <div className="rounded bg-[#0F766E] p-1.5 flex flex-col justify-between text-[9.5px]">
                              <span className="font-semibold">System32</span>
                              <span className="text-white/70 font-mono text-[8.5px]">11.8 GB</span>
                            </div>
                          </div>
                        </div>

                        {/* Row: pagefile.sys + ProgramData (~32% height) */}
                        <div className="h-[32%] flex gap-1.5">
                          {/* pagefile.sys (Purple) */}
                          <div className="flex-1 rounded-lg bg-[#7C3AED] p-2 flex flex-col justify-between">
                            <div className="flex items-center gap-1 text-[10px] font-bold">
                              <File className="w-3 h-3" />
                              <span className="truncate">pagefil...</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold">18 GB <span className="text-[8px] opacity-75">4%</span></span>
                          </div>

                          {/* ProgramData (Blue) */}
                          <div className="w-[42%] rounded-lg bg-[#0284C7] p-2 flex flex-col justify-between">
                            <Folder className="w-3 h-3 fill-current text-white/90" />
                            <span className="text-[10px] font-mono font-bold">12.7 GB <span className="text-[8px] opacity-75">3%</span></span>
                          </div>
                        </div>

                        {/* Bottom Row: Recovery (Dark) + Cache (Green) + F (Magenta) (~20% height) */}
                        <div className="h-[20%] flex gap-1.5">
                          <div className="flex-1 rounded-lg bg-[#334155] p-1.5 flex items-center justify-between text-[9px] font-mono font-bold">
                            <span>6.6 GB</span>
                            <span className="text-[8px] opacity-75">2%</span>
                          </div>
                          <div className="w-8 rounded-lg bg-[#059669] p-1 flex items-center justify-center">
                            <Folder className="w-3 h-3 fill-current text-white/90" />
                          </div>
                          <div className="w-12 rounded-lg bg-[#C026D3] p-1 flex items-center justify-center text-[9px] font-bold">
                            f...
                          </div>
                        </div>

                      </div>

                    </div>
                  )}

                  {/* MODE 3: FLOW (Full-Height, Non-overlapping SVG Flow Canvas, 100% faithful to media_1794163521206_b7900cd9.jpg) */}
                  {activeTab === "flow" && (
                    <div className="w-full h-[400px] sm:h-[430px] relative select-none overflow-hidden bg-white dark:bg-[#0D0F14] flex flex-col justify-between p-2">
                      
                      {/* Responsive Full-Height SVG */}
                      <svg
                        className="w-full h-[340px] sm:h-[370px]"
                        viewBox="0 0 650 370"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <linearGradient id="flow-grad-users" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8FA0FF" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0.60" />
                          </linearGradient>
                          <linearGradient id="flow-grad-proj" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.40" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0.55" />
                          </linearGradient>
                          <linearGradient id="flow-grad-win" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.40" />
                            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.55" />
                          </linearGradient>
                          <linearGradient id="flow-grad-prog" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.40" />
                            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.55" />
                          </linearGradient>
                          <linearGradient id="flow-grad-oth" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.40" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.55" />
                          </linearGradient>
                          <linearGradient id="flow-grad-mrxsa" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8FA0FF" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#4F6BFF" stopOpacity="0.60" />
                          </linearGradient>
                          <linearGradient id="flow-grad-abhinav" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.60" />
                          </linearGradient>
                        </defs>

                        {/* Ribbon 1: C:\ to Users */}
                        <path
                          d="M 66 112 C 120 112, 120 25, 175 25 L 175 165 C 120 165, 120 200, 66 200 Z"
                          fill="url(#flow-grad-users)"
                        />

                        {/* Ribbon 2: C:\ to Personal Project */}
                        <path
                          d="M 66 200 C 120 200, 120 182, 175 182 L 175 210 C 120 210, 120 220, 66 220 Z"
                          fill="url(#flow-grad-proj)"
                        />

                        {/* Ribbon 3: C:\ to Windows */}
                        <path
                          d="M 66 220 C 120 220, 120 224, 175 224 L 175 248 C 120 248, 120 238, 66 238 Z"
                          fill="url(#flow-grad-win)"
                        />

                        {/* Ribbon 4: C:\ to Program Files */}
                        <path
                          d="M 66 238 C 120 238, 120 260, 175 260 L 175 275 C 120 275, 120 248, 66 248 Z"
                          fill="url(#flow-grad-prog)"
                        />

                        {/* Ribbon 5: C:\ to Others */}
                        <path
                          d="M 66 248 C 120 248, 120 288, 175 288 L 175 322 C 120 322, 120 275, 66 275 Z"
                          fill="url(#flow-grad-oth)"
                        />

                        {/* Ribbon 6: Users to mrxsa */}
                        <path
                          d="M 191 25 C 285 25, 285 25, 380 25 L 380 120 C 285 120, 285 120, 191 120 Z"
                          fill="url(#flow-grad-mrxsa)"
                        />

                        {/* Ribbon 7: Users to Abhinav */}
                        <path
                          d="M 191 120 C 285 120, 285 136, 380 136 L 380 162 C 285 162, 285 148, 191 148 Z"
                          fill="url(#flow-grad-abhinav)"
                        />

                        {/* Ribbon 8: Users to Others */}
                        <path
                          d="M 191 148 C 285 148, 285 174, 380 174 L 380 188 C 285 188, 285 165, 191 165 Z"
                          fill="url(#flow-grad-users)"
                        />

                        {/* COLUMN 1: Root Node C:\ */}
                        <rect x="20" y="112" width="46" height="163" rx="8" fill="#4F6BFF" />
                        <text x="32" y="186" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                          C:\
                        </text>
                        <text x="27" y="206" fill="#FFFFFF" fontSize="10.5" fontWeight="700" fontFamily="monospace">
                          403.1
                        </text>
                        <text x="33" y="220" fill="#FFFFFF" fontSize="10.5" fontWeight="700" fontFamily="monospace">
                          GB
                        </text>

                        {/* COLUMN 2: Level 1 Nodes */}
                        <rect x="171" y="21" width="22" height="148" rx="11" fill="none" stroke="#2563EB" strokeWidth="2.5" />
                        <rect x="175" y="25" width="14" height="140" rx="7" fill="#4F6BFF" />
                        <text x="200" y="92" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="13" fontWeight="800" fontFamily="sans-serif">
                          Users
                        </text>
                        <text x="200" y="108" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="monospace">
                          217.7 GB
                        </text>

                        {/* Personal Project */}
                        <rect x="175" y="182" width="14" height="28" rx="4" fill="#10B981" />
                        <text x="198" y="196" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                          Personal Project
                        </text>
                        <text x="198" y="210" fill="#64748B" fontSize="11" fontWeight="600" fontFamily="monospace">
                          54.3 GB
                        </text>

                        {/* Windows */}
                        <rect x="175" y="224" width="14" height="24" rx="4" fill="#F59E0B" />
                        <text x="198" y="236" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                          Windows
                        </text>
                        <text x="198" y="250" fill="#64748B" fontSize="11" fontWeight="600" fontFamily="monospace">
                          43 GB
                        </text>

                        {/* Program Files */}
                        <rect x="175" y="260" width="14" height="15" rx="4" fill="#EF4444" />
                        <text x="198" y="270" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                          Program Files
                        </text>
                        <text x="198" y="284" fill="#64748B" fontSize="11" fontWeight="600" fontFamily="monospace">
                          18.7 GB
                        </text>

                        {/* Others */}
                        <rect x="175" y="288" width="14" height="34" rx="4" fill="#8B5CF6" />
                        <text x="198" y="304" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                          Others
                        </text>
                        <text x="198" y="318" fill="#64748B" fontSize="11" fontWeight="600" fontFamily="monospace">
                          69.3 GB
                        </text>

                        {/* COLUMN 3: Level 2 Sub-nodes */}
                        <rect x="380" y="25" width="14" height="95" rx="4" fill="#4F6BFF" />
                        <text x="404" y="68" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="13" fontWeight="800" fontFamily="sans-serif">
                          mrxsa
                        </text>
                        <text x="404" y="84" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="monospace">
                          176.3 GB
                        </text>

                        <rect x="380" y="136" width="14" height="26" rx="4" fill="#A855F7" />
                        <text x="404" y="148" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                          Abhinav
                        </text>
                        <text x="404" y="162" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="11" fontWeight="600" fontFamily="monospace">
                          41.4 GB
                        </text>

                        <rect x="380" y="174" width="14" height="14" rx="4" fill="#6366F1" />
                        <text x="404" y="184" fill="currentColor" className="text-[#111827] dark:text-[#F8FAFC]" fontSize="11.5" fontWeight="700" fontFamily="sans-serif">
                          Others
                        </text>
                        <text x="404" y="196" fill="#64748B" fontSize="10" fontWeight="600" fontFamily="monospace">
                          2.9 MB
                        </text>
                      </svg>

                      {/* Bottom Info Callout Box */}
                      <div className="flex justify-end pt-1">
                        <div className="px-3.5 py-2 rounded-xl bg-[#F0F4FE] dark:bg-[#141624] border border-[#DCE4FD] dark:border-[#222736] flex items-center gap-2.5 max-w-md shadow-2xs">
                          <Info className="w-4 h-4 text-[#2563EB] shrink-0" />
                          <span className="text-[11px] text-[#475467] dark:text-[#9EA2AD] leading-snug">
                            This view shows how storage flows through your folders. Thicker connections mean more space.
                          </span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* MODE 4: SKYLINE (Faithful 3D Isometric replica of media_1794163959477_edc7ddbc.png) */}
                  {activeTab === "skyline" && (
                    <div className="w-full h-[400px] sm:h-[430px] p-4 flex flex-col justify-between bg-white dark:bg-[#0D0F14]">
                      {/* Interior Title */}
                      <div className="text-left">
                        <h4 className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-[#F8FAFC]">
                          Storage Skyline
                        </h4>
                        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                          Each bar represents a folder. Height = size.
                        </p>
                      </div>

                      {/* Main 3D Skyline Stage with Platform Shelf */}
                      <div className="relative flex-1 w-full flex flex-col justify-end pb-3">
                        {/* Soft Frosted Shelf Platform Underneath matching screenshot */}
                        <div className="absolute bottom-[42px] left-3 right-3 h-14 rounded-2xl bg-[#F1F5F9]/80 dark:bg-[#161922]/80 border border-[#E2E8F0]/80 dark:border-[#222632] pointer-events-none shadow-xs" />

                        {/* 6 Isometric 3D Skyline Columns */}
                        <div className="w-full flex items-end justify-around gap-2 sm:gap-4 px-2 z-10">
                          {skylineBuildings.map((col, idx) => {
                            const depthX = 14;
                            const depthY = 10;
                            const colWidth = 52;
                            const svgWidth = colWidth + depthX;
                            const svgHeight = col.height + depthY + 4;

                            return (
                              <div
                                key={col.name + idx}
                                className="flex flex-col items-center cursor-pointer group select-none relative"
                                style={{ width: `${colWidth + 12}px` }}
                              >
                                {/* Rank Label (#1, #2...) */}
                                <span className="text-[10px] font-extrabold font-mono text-[#94A3B8] dark:text-[#64748B] mb-1.5 transition-colors group-hover:text-[#2563EB]">
                                  {col.rank}
                                </span>

                                {/* 3D SVG Isometric Cuboid */}
                                <div className="relative transition-transform duration-200 group-hover:-translate-y-1">
                                  <svg
                                    width={svgWidth}
                                    height={svgHeight}
                                    className="overflow-visible"
                                  >
                                    <defs>
                                      <linearGradient id={`skyline-grad-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor={col.frontTop} />
                                        <stop offset="100%" stopColor={col.frontBottom} />
                                      </linearGradient>
                                    </defs>

                                    {/* 1. Isometric Top Face (Rhombus cap) */}
                                    <polygon
                                      points={`0,${depthY} ${colWidth},${depthY} ${colWidth + depthX},0 ${depthX},0`}
                                      fill={col.top}
                                      opacity={0.95}
                                    />

                                    {/* 2. Isometric Right-Side Face (Parallelogram) */}
                                    <polygon
                                      points={`${colWidth},${depthY} ${colWidth + depthX},0 ${colWidth + depthX},${col.height} ${colWidth},${col.height + depthY}`}
                                      fill={col.side}
                                      opacity={0.9}
                                    />

                                    {/* 3. Front Face (Main vertical rectangle) */}
                                    <rect
                                      x={0}
                                      y={depthY}
                                      width={colWidth}
                                      height={col.height}
                                      fill={`url(#skyline-grad-${idx})`}
                                      rx={2}
                                    />

                                    {/* Front face sheen reflection highlight */}
                                    <line
                                      x1={1}
                                      y1={depthY + 2}
                                      x2={1}
                                      y2={depthY + col.height - 2}
                                      stroke="rgba(255,255,255,0.4)"
                                      strokeWidth={1}
                                    />
                                  </svg>
                                </div>

                                {/* Label Below: Name & Percentage */}
                                <div className="mt-2 text-center leading-tight">
                                  <span className="text-xs font-bold text-[#111827] dark:text-[#F8FAFC] block truncate max-w-[68px]">
                                    {col.name}
                                  </span>
                                  <span className="text-[10px] font-mono text-[#64748B] dark:text-[#94A3B8] block mt-0.5">
                                    {col.pct}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Mini Sparkline / Histogram Strip (31 mini bars from screenshot) */}
                      <div className="pt-2 border-t border-[#F1F5F9] dark:border-[#181A22] text-left">
                        <div className="flex items-end gap-1.5 h-6 px-1 mb-1">
                          {[
                            { h: 22, bg: "bg-[#2563EB]" },
                            { h: 10, bg: "bg-[#3B82F6]" },
                            { h: 8, bg: "bg-[#60A5FA]" },
                            { h: 7, bg: "bg-[#93C5FD]" },
                            { h: 6, bg: "bg-[#BFDBFE]" },
                            ...Array.from({ length: 26 }).map((_, i) => ({
                              h: 4,
                              bg: i < 5 ? "bg-[#DBEAFE] dark:bg-blue-950" : "bg-neutral-200 dark:bg-neutral-800",
                            })),
                          ].map((bar, i) => (
                            <div
                              key={i}
                              style={{ height: `${bar.h}px` }}
                              className={`w-1 rounded-full ${bar.bg} transition-all`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono text-[#94A3B8]">
                          Each column represents a folder in C:\ (top 31 shown)
                        </span>
                      </div>
                    </div>
                  )}

                  {/* MODE 5: HOTSPOTS (Direct replica of real src/components/visualizers/SpaceHotspotsView.tsx) */}
                  {activeTab === "hotspots" && (
                    <div className="w-full h-[400px] sm:h-[430px] p-4 flex flex-col justify-between bg-white dark:bg-[#0D0F14] overflow-hidden select-none">
                      {/* Interior Header & Filter Pills */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2 border-b border-[#F1F5F9] dark:border-[#181A22]">
                        <div className="text-left">
                          <h4 className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-[#F8FAFC] flex items-center gap-1.5">
                            <Flame className="w-4 h-4 text-[#EF4444]" />
                            <span>Storage Hotspots</span>
                          </h4>
                          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                            Folders that are unusually large compared to their surroundings.
                          </p>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex items-center p-0.5 rounded-lg bg-[#F1F5F9] dark:bg-[#161822] border border-[#E2E8F0] dark:border-[#222530] text-[11px] font-bold self-start sm:self-auto">
                          <span className="px-2.5 py-1 rounded-md bg-[#2563EB] text-white shadow-2xs font-extrabold">All</span>
                          <span className="px-2.5 py-1 text-[#64748B] dark:text-[#94A3B8]">Caches</span>
                          <span className="px-2.5 py-1 text-[#64748B] dark:text-[#94A3B8]">Builds</span>
                          <span className="px-2.5 py-1 text-[#64748B] dark:text-[#94A3B8]">System</span>
                        </div>
                      </div>

                      {/* Ambient Spatial Bubble Canvas */}
                      <div className="relative flex-1 w-full my-2 overflow-hidden rounded-xl bg-[#F8FAFC]/50 dark:bg-[#0A0C10]/50 border border-[#F1F5F9] dark:border-[#161822]">
                        {/* Subtle ambient depth dots */}
                        <div className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-red-500/15" />
                        <div className="absolute top-[35%] left-[45%] w-3 h-3 rounded-full bg-blue-500/10" />
                        <div className="absolute top-[68%] left-[25%] w-2.5 h-2.5 rounded-full bg-slate-400/15" />
                        <div className="absolute top-[22%] right-[18%] w-3 h-3 rounded-full bg-red-500/15" />
                        <div className="absolute top-[75%] right-[28%] w-3.5 h-3.5 rounded-full bg-blue-500/10" />

                        {/* 3D Hotspot Spheres with Pulsing Halos */}
                        {[
                          { id: "ext4", name: "ext4.vhdx", size: "24.2 GB", top: "28%", left: "22%", r: 24, cat: "Cache", selected: true },
                          { id: "nvidia", name: "AppData\\Local\\NV", size: "14.8 GB", top: "68%", left: "34%", r: 18, cat: "Cache" },
                          { id: "winsxs", name: "WinSxS", size: "11.8 GB", top: "32%", left: "62%", r: 16, cat: "System" },
                          { id: "npm", name: "node_modules", size: "7.4 GB", top: "72%", left: "70%", r: 14, cat: "Build" },
                        ].map((spot) => (
                          <div
                            key={spot.id}
                            style={{ top: spot.top, left: spot.left }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 cursor-pointer group z-10 hover:z-20"
                          >
                            {/* Glowing 3D Bubble Container */}
                            <div
                              style={{ width: `${spot.r * 2.6}px`, height: `${spot.r * 2.6}px` }}
                              className="relative flex items-center justify-center shrink-0"
                            >
                              {/* Outer Pulsing Radial Halo */}
                              <div
                                style={{
                                  borderRadius: "50%",
                                  background: "radial-gradient(circle, rgba(239, 68, 68, 0.32) 0%, rgba(239, 68, 68, 0.10) 60%, transparent 75%)",
                                }}
                                className={`absolute inset-0 transition-transform duration-300 ${
                                  spot.selected ? "scale-115 opacity-100" : "opacity-80 group-hover:scale-110"
                                }`}
                              />

                              {/* Core 3D Spherical Red Bubble */}
                              <div
                                style={{
                                  width: `${spot.r * 2}px`,
                                  height: `${spot.r * 2}px`,
                                  borderRadius: "50%",
                                  background: "radial-gradient(circle at 35% 32%, #FFA3A3 0%, #FF5252 40%, #EF4444 65%, #B91C1C 100%)",
                                  boxShadow: spot.selected
                                    ? "0 0 0 2.5px rgba(255,255,255,0.9), 0 0 20px rgba(239,68,68,0.7)"
                                    : "0 4px 12px rgba(220, 38, 38, 0.35)",
                                }}
                                className="transition-transform duration-200 group-hover:scale-105"
                              />
                            </div>

                            {/* Label beside the sphere */}
                            <div className="flex flex-col text-left whitespace-nowrap">
                              <span className="text-xs font-black text-[#111827] dark:text-[#F8FAFC] group-hover:text-red-500 transition-colors">
                                {spot.name}
                              </span>
                              <span className="text-xs font-black text-red-500 font-mono leading-tight">
                                {spot.size}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Hotspots Footer Note */}
                      <div className="flex items-center justify-between text-[10.5px] font-mono text-[#94A3B8] pt-1">
                        <span>● Dynamic bloat candidate detection</span>
                        <span>4 active hotspots found</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* RIGHT PANEL: FolderDetails Inspector (Faithful to media_1794163117314_4ece92e1.jpg) */}
              <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-[#0D0F14] border border-[#CBD5E1] dark:border-[#1E2028] shadow-xs p-5 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  {/* Folder Icon & Title Row */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-11 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Folder className="w-6 h-6 text-[#F59E0B] fill-[#F59E0B]" />
                    </div>

                    <div className="min-w-0 flex-1 leading-snug">
                      <h3 className="text-base font-black text-[#111827] dark:text-[#F8FAFC]">
                        C:\
                      </h3>
                      <span className="text-sm font-bold text-[#111827] dark:text-[#F8FAFC] block">
                        403.1 GB <span className="text-xs font-semibold text-[#64748B]">(100%)</span>
                      </span>
                      <span className="text-[10px] font-mono text-[#94A3B8] block mt-0.5">
                        C:\
                      </span>
                    </div>
                  </div>

                  {/* Tabs: Overview (Active) | Top Files */}
                  <div className="flex items-center gap-5 border-b border-[#F1F5F9] dark:border-[#181A22] text-xs font-bold pt-1">
                    <span className="text-[#2563EB] pb-2 border-b-2 border-[#2563EB] cursor-pointer">
                      Overview
                    </span>
                    <span className="text-[#64748B] dark:text-[#94A3B8] pb-2 hover:text-[#111827] dark:hover:text-white cursor-pointer">
                      Top Files
                    </span>
                  </div>

                  {/* Metadata Key-Value Rows */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
                        <File className="w-3.5 h-3.5" />
                        <span>Type</span>
                      </span>
                      <span className="font-bold text-[#111827] dark:text-[#F8FAFC]">File folder</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
                        <HardDrive className="w-3.5 h-3.5" />
                        <span>Size</span>
                      </span>
                      <span className="font-mono font-bold text-[#111827] dark:text-[#F8FAFC]">403.1 GB</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
                        <Square className="w-3.5 h-3.5" />
                        <span>Contains</span>
                      </span>
                      <span className="font-mono font-bold text-[#111827] dark:text-[#F8FAFC]">34,11,904 items</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
                        <Minus className="w-3.5 h-3.5" />
                        <span>Created</span>
                      </span>
                      <span className="text-[#64748B] dark:text-[#94A3B8]">—</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#64748B] dark:text-[#94A3B8] flex items-center gap-2">
                        <Minus className="w-3.5 h-3.5" />
                        <span>Modified</span>
                      </span>
                      <span className="text-[#64748B] dark:text-[#94A3B8]">—</span>
                    </div>
                  </div>
                </div>

                {/* Inspector Bottom Action Buttons */}
                <div className="space-y-2 pt-4 border-t border-[#F1F5F9] dark:border-[#181A22] text-xs font-bold">
                  <button className="w-full py-2 px-3 rounded-xl bg-white dark:bg-[#12141A] border border-[#CBD5E1] dark:border-[#262832] text-[#111827] dark:text-[#F8FAFC] flex items-center justify-center gap-2 shadow-2xs hover:bg-[#F8FAFC] cursor-pointer">
                    <Folder className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Open in Explorer</span>
                  </button>

                  <button className="w-full py-2 px-3 rounded-xl bg-[#EFF3FD] dark:bg-[#161824] border border-[#2563EB]/20 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center gap-2 shadow-2xs hover:bg-blue-100/50 cursor-pointer">
                    <CornerDownRight className="w-3.5 h-3.5" />
                    <span>Scan Inside</span>
                  </button>

                  <button className="w-full py-2 px-3 rounded-xl bg-transparent border border-[#CBD5E1] dark:border-[#262832] text-[#64748B] dark:text-[#94A3B8] flex items-center justify-center gap-2 hover:text-red-500 cursor-pointer">
                    <Trash2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Add to Clean Up</span>
                  </button>
                </div>

              </div>

            </div>
            )}

            {/* Bottom Status Bar */}
            <div className="px-4 py-2 bg-white dark:bg-[#0A0B0E] border-t border-[#E2E8F0] dark:border-[#181A22] flex items-center gap-4 text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Scan completed
              </span>
              <span>|</span>
              <span>34,11,904 files analyzed</span>
              <span>|</span>
              <span>403.1 GB mapped</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
