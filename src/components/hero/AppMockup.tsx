"use client";

import React, { useState } from "react";
import {
  Sparkles,
  LayoutDashboard,
  Search,
  FileText,
  FolderOpen,
  PieChart,
  HardDrive,
  RefreshCw,
  Folder,
  LayoutGrid,
  GitFork,
  Building2,
  CircleDot,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Trash2,
  ArrowDownToLine,
  Minus,
  Square,
  X,
  PackageCheck,
} from "lucide-react";

export const AppMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("treemap");

  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl shadow-2xl border border-[#DCE1EA] overflow-hidden select-none font-sans text-left transition-all">
      {/* Windows Titlebar */}
      <div className="h-9 bg-[#F4F7FC] border-b border-[#E2E8F0] px-3 flex items-center justify-between text-xs text-[#6B7280]">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-sm bg-[#2454FF] flex items-center justify-center text-white text-[9px] font-bold">
            D
          </div>
          <span className="font-semibold text-[#1D1D1F] text-[11px]">
            DiskSense — Windows Storage Visualizer
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E0E6FF] text-[#174BFF] font-medium ml-1">
            Local v0.1.0
          </span>
        </div>

        {/* Windows Window Controls */}
        <div className="flex items-center">
          <button className="h-9 px-3 hover:bg-[#E5E7EB] text-[#6B7280] transition-colors flex items-center justify-center">
            <Minus className="w-3 h-3" />
          </button>
          <button className="h-9 px-3 hover:bg-[#E5E7EB] text-[#6B7280] transition-colors flex items-center justify-center">
            <Square className="w-2.5 h-2.5" />
          </button>
          <button className="h-9 px-3 hover:bg-[#EF4444] hover:text-white text-[#6B7280] transition-colors flex items-center justify-center">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main App Workspace */}
      <div className="flex h-[440px] sm:h-[480px] bg-[#EFF3FD]">
        {/* App Sidebar (Matches Desktop App's Sidebar.tsx) */}
        <div className="w-48 sm:w-56 bg-white border-r border-[#E2E8F0] p-3 flex flex-col justify-between shrink-0 hidden sm:flex">
          <div>
            {/* Brand in App */}
            <div className="flex items-center gap-2.5 px-2 py-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3F5BEA] to-[#4F6BFF] flex items-center justify-center text-white shadow-sm shadow-indigo-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-xs font-extrabold tracking-tight text-[#1D1D1F] leading-none">
                  DiskSense
                </h1>
                <p className="text-[9px] font-semibold text-[#6B7280] mt-0.5 opacity-80">
                  See a Bigger Picture
                </p>
              </div>
            </div>

            {/* Nav Items */}
            <div className="space-y-1">
              {[
                { id: "overview", label: "Overview", icon: LayoutDashboard, active: false },
                { id: "scan", label: "Scan Results", icon: Search, active: true },
                { id: "large", label: "Large Files", icon: FileText, active: false },
                { id: "empty", label: "Empty Folders", icon: FolderOpen, active: false },
                { id: "types", label: "File Types", icon: PieChart, active: false },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      item.active
                        ? "bg-[#EEF1FF] text-[#4F6BFF] font-bold"
                        : "text-[#6B7280] hover:text-[#1D1D1F] hover:bg-[#F4F7FC]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Drive Status in Sidebar */}
          <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <div className="flex items-center justify-between text-[10px] text-[#6B7280] mb-1.5 font-medium">
              <span className="flex items-center gap-1">
                <HardDrive className="w-3 h-3 text-[#4F6BFF]" />
                <span>Drive C:</span>
              </span>
              <span className="text-[#101828] font-bold">75%</span>
            </div>
            <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
              <div className="h-full bg-[#4F6BFF] rounded-full" style={{ width: "75%" }} />
            </div>
            <div className="flex justify-between text-[9px] text-[#9CA3AF] mt-1 font-mono-numbers">
              <span>384 GB used</span>
              <span>128 GB free</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#EFF3FD] p-3 sm:p-4 gap-3">
          {/* Top Control Bar with Visualizer Switcher (Matches VisualizerSwitcher.tsx) */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-[#E2E8F0] shadow-xs">
            {/* View Switchers */}
            <div className="flex items-center gap-1 overflow-x-auto py-0.5">
              {[
                { id: "folders", label: "Folders", icon: Folder },
                { id: "treemap", label: "Treemap", icon: LayoutGrid },
                { id: "flow", label: "Flow", icon: GitFork },
                { id: "skyline", label: "Skyline", icon: Building2 },
                { id: "hotspots", label: "Hotspots", icon: CircleDot },
              ].map((view) => {
                const Icon = view.icon;
                const isActive = activeTab === view.id;
                return (
                  <button
                    key={view.id}
                    onClick={() => setActiveTab(view.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#EEF1FF] text-[#4F6BFF] shadow-2xs font-bold"
                        : "text-[#6B7280] hover:text-[#1D1D1F] hover:bg-[#F4F7FC]"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{view.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Smart Cleanup Pill with Alert */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-[11px] font-bold animate-pulse">
                <PackageCheck className="w-3.5 h-3.5 text-[#D97706]" />
                <span>14 Installers Found (28.4 GB)</span>
              </div>
              <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#4F6BFF] hover:bg-[#3F5BEA] text-white text-[11px] font-bold shadow-xs">
                <span>Clean Now</span>
              </button>
            </div>
          </div>

          {/* Drive Health & Metric Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block">
                Total Capacity
              </span>
              <span className="text-base font-extrabold text-[#1D1D1F] font-mono-numbers">
                512.0 GB
              </span>
              <span className="text-[9px] text-[#9CA3AF] block mt-0.5">Samsung 980 Pro NVMe</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block">
                Used Storage
              </span>
              <span className="text-base font-extrabold text-[#4F6BFF] font-mono-numbers">
                384.2 GB
              </span>
              <span className="text-[9px] text-[#4F6BFF] font-medium block mt-0.5">75.0% Allocated</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block">
                Free Space
              </span>
              <span className="text-base font-extrabold text-[#10B981] font-mono-numbers">
                127.8 GB
              </span>
              <span className="text-[9px] text-[#10B981] font-medium block mt-0.5">Safe Threshold</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
              <span className="text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider block">
                Recoverable
              </span>
              <span className="text-base font-extrabold text-[#EA580C] font-mono-numbers">
                34.8 GB
              </span>
              <span className="text-[9px] text-[#EA580C] font-medium block mt-0.5">
                Installers + Caches
              </span>
            </div>
          </div>

          {/* Interactive Storage Treemap Simulation */}
          <div className="flex-1 bg-white rounded-xl border border-[#E2E8F0] p-2 flex flex-col min-h-0 shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 px-1 border-b border-[#F1F5F9] text-[10px] text-[#6B7280]">
              <span className="font-semibold text-[#1D1D1F]">
                Root: <span className="font-mono text-[#4F6BFF]">C:\ (Sorted by Space Consumed)</span>
              </span>
              <span className="font-mono text-[9px] text-[#9CA3AF]">
                Click block to drill down
              </span>
            </div>

            {/* Treemap visual grid layout */}
            <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-1.5 p-1 min-h-0 text-[10px]">
              {/* Block 1: Games & Media (Large Blue Area) */}
              <div className="col-span-6 row-span-6 bg-gradient-to-br from-[#2454FF] to-[#174BFF] text-white p-3 rounded-lg flex flex-col justify-between group hover:brightness-105 transition-all cursor-pointer shadow-xs">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs">C:\XboxGames &amp; Steam</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/20 text-[9px] font-mono font-bold">
                      142.6 GB
                    </span>
                  </div>
                  <p className="text-[10px] text-white/80 mt-1 line-clamp-1">
                    Call of Duty (88 GB), Starfield (54 GB)
                  </p>
                </div>
                <div className="flex items-center justify-between text-[9px] text-white/70">
                  <span>37.1% of Used Space</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Block 2: Forgotten Installers (Orange Alert Target Area) */}
              <div className="col-span-6 row-span-3 bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] border border-[#FDE68A] text-[#92400E] p-2.5 rounded-lg flex flex-col justify-between hover:border-[#F59E0B] transition-all cursor-pointer shadow-2xs relative overflow-hidden">
                <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-[#F59E0B]/10 rounded-full" />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-[11px] text-[#B45309] flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-[#D97706]" />
                      Forgotten Installers
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-[#FDE68A] text-[9px] font-mono font-bold text-[#92400E]">
                      28.4 GB
                    </span>
                  </div>
                  <p className="text-[9px] text-[#92400E]/80 mt-0.5">
                    VS_Community.exe (12.2 GB), Win11_Dev.iso (6.4 GB)...
                  </p>
                </div>
                <div className="flex items-center justify-between text-[9px] font-bold text-[#D97706]">
                  <span>Ready for 1-click cleanup</span>
                  <span className="underline">Review</span>
                </div>
              </div>

              {/* Block 3: Dev Builds & Node Modules */}
              <div className="col-span-3 row-span-3 bg-[#EEF2F6] border border-[#CBD5E1] p-2 rounded-lg flex flex-col justify-between hover:bg-[#E2E8F0] transition-colors cursor-pointer">
                <div>
                  <span className="font-bold text-[10px] text-[#1E293B] block">
                    node_modules &amp; target
                  </span>
                  <span className="text-[9px] text-[#64748B]">58.4 GB</span>
                </div>
                <span className="text-[8px] text-[#94A3B8]">42 project builds</span>
              </div>

              {/* Block 4: Windows & System */}
              <div className="col-span-3 row-span-3 bg-[#F1F5F9] border border-[#E2E8F0] p-2 rounded-lg flex flex-col justify-between hover:bg-[#E2E8F0] transition-colors cursor-pointer">
                <div>
                  <span className="font-bold text-[10px] text-[#1E293B] block">
                    C:\Windows\WinSxS
                  </span>
                  <span className="text-[9px] text-[#64748B]">44.2 GB</span>
                </div>
                <span className="text-[8px] text-[#94A3B8]">System Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

