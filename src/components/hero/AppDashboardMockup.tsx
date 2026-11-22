"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Folder,
  LayoutGrid,
  GitFork,
  Building2,
  CircleDot,
  Sparkles,
  PackageCheck,
  Search,
  RotateCw,
  Moon,
  ChevronDown,
  ChevronRight,
  File,
  HardDrive,
  PanelRightClose,
  PanelRightOpen,
  Trash2,
  Minus,
  Square,
  X,
  Layers,
  CornerDownRight,
} from "lucide-react";

interface StorageRow {
  id: string;
  name: string;
  path: string;
  size: string;
  pct: number;
  barColor: string;
  items: string;
  modified: string;
  type: "folder" | "file";
}

const STORAGE_ROWS: StorageRow[] = [
  {
    id: "users",
    name: "Users",
    path: "C:\\Users",
    size: "217.7 GB",
    pct: 54.0,
    barColor: "#3B66FF",
    items: "21,77,626",
    modified: "—",
    type: "folder",
  },
  {
    id: "personal_project",
    name: "Personal Project",
    path: "C:\\Personal Project",
    size: "54.3 GB",
    pct: 13.5,
    barColor: "#4F6BFF",
    items: "7,99,668",
    modified: "—",
    type: "folder",
  },
  {
    id: "windows",
    name: "Windows",
    path: "C:\\Windows",
    size: "43 GB",
    pct: 10.7,
    barColor: "#8B5CF6",
    items: "1,91,853",
    modified: "—",
    type: "folder",
  },
  {
    id: "program_files",
    name: "Program Files",
    path: "C:\\Program Files",
    size: "18.7 GB",
    pct: 4.6,
    barColor: "#10B981",
    items: "58,944",
    modified: "—",
    type: "folder",
  },
  {
    id: "program_files_x86",
    name: "Program Files (x86)",
    path: "C:\\Program Files (x86)",
    size: "18.5 GB",
    pct: 4.6,
    barColor: "#F59E0B",
    items: "80,797",
    modified: "—",
    type: "folder",
  },
  {
    id: "pagefile",
    name: "pagefile.sys",
    path: "C:\\pagefile.sys",
    size: "18 GB",
    pct: 4.5,
    barColor: "#EA580C",
    items: "1",
    modified: "2 weeks ago",
    type: "file",
  },
  {
    id: "program_data",
    name: "ProgramData",
    path: "C:\\ProgramData",
    size: "12.7 GB",
    pct: 3.1,
    barColor: "#0284C7",
    items: "10,371",
    modified: "—",
    type: "folder",
  },
  {
    id: "recovery",
    name: "Recovery",
    path: "C:\\Recovery",
    size: "6.6 GB",
    pct: 1.6,
    barColor: "#3B82F6",
    items: "474",
    modified: "—",
    type: "folder",
  },
  {
    id: "esupport",
    name: "eSupport",
    path: "C:\\eSupport",
    size: "6 GB",
    pct: 1.5,
    barColor: "#6366F1",
    items: "3,028",
    modified: "—",
    type: "folder",
  },
  {
    id: "flutter",
    name: "Flutter",
    path: "C:\\Flutter",
    size: "3.1 GB",
    pct: 0.8,
    barColor: "#7388FF",
    items: "10,296",
    modified: "—",
    type: "folder",
  },
];

// Yellow Amber SVG Folder Icon matching desktop app
const YellowFolderIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M2.5 7C2.5 5.61929 3.61929 4.5 5 4.5H9.2C10.05 4.5 10.85 4.9 11.35 5.6L12.4 7H19C20.3807 7 21.5 8.11929 21.5 9.5V17C21.5 18.3807 20.3807 19.5 19 19.5H5C3.61929 19.5 2.5 18.3807 2.5 17V7Z"
      fill="#F59E0B"
    />
    <path
      d="M2.5 10C2.5 8.61929 3.61929 7.5 5 7.5H19C20.3807 7.5 21.5 8.61929 21.5 10V17C21.5 18.3807 20.3807 19.5 19 19.5H5C3.61929 19.5 2.5 18.3807 2.5 17V10Z"
      fill="#FBBF24"
    />
  </svg>
);

export const AppDashboardMockup: React.FC = () => {
  const [activeVisualizer, setActiveVisualizer] = useState<string>("folders");
  const [selectedRow, setSelectedRow] = useState<StorageRow>(STORAGE_ROWS[0]);
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [inspectorTab, setInspectorTab] = useState<"overview" | "top_files">("overview");

  const handleRescan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1200);
  };

  return (
    <div className="w-full bg-[#EFF3FD] rounded-t-xl sm:rounded-t-2xl shadow-2xl border-t border-l border-r border-[#CBD5E1] overflow-hidden font-sans text-left text-[#1D1D1F] select-none">
      {/* 01. WINDOWS TITLEBAR */}
      <div className="h-5 sm:h-8 bg-[#F8FAFC] border-b border-[#E2E8F0] px-2 sm:px-3.5 flex items-center justify-between text-xs text-[#6B7280]">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full overflow-hidden shrink-0">
            <Image
              src="/app-icon.png"
              alt="Icon"
              width={14}
              height={14}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[9px] sm:text-[11px] font-semibold text-[#1F2937]">DiskSense</span>
        </div>

        {/* Window controls */}
        <div className="flex items-center">
          <button className="h-5 sm:h-8 px-1.5 sm:px-2 hover:bg-[#E5E7EB] text-[#6B7280] transition-colors flex items-center justify-center">
            <Minus className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5" />
          </button>
          <button className="h-5 sm:h-8 px-1.5 sm:px-2 hover:bg-[#E5E7EB] text-[#6B7280] transition-colors flex items-center justify-center">
            <Square className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5" />
          </button>
          <button className="h-5 sm:h-8 px-1.5 sm:px-2 hover:bg-[#EF4444] hover:text-white text-[#6B7280] transition-colors flex items-center justify-center">
            <X className="w-2 h-2 sm:w-3 sm:h-3" />
          </button>
        </div>
      </div>

      {/* 02. TOP APP CONTROLS ROW */}
      <div className="bg-[#EFF3FD] px-2 sm:px-5 pt-1.5 sm:pt-3.5 pb-1 sm:pb-2.5 flex items-center justify-between gap-1.5 sm:gap-3">
        {/* Left: App Logo + Name + Drive Dropdown */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0">
              <Image
                src="/app-icon.png"
                alt="DiskSense"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden xs:block">
              <h2 className="text-[10px] sm:text-[14px] font-extrabold text-[#111827] leading-none tracking-tight">
                DiskSense
              </h2>
              <span className="text-[7.5px] sm:text-[9px] font-medium text-[#6B7280] block mt-0.5">
                Know Your Storage
              </span>
            </div>
          </div>

          {/* Drive Selector Pill */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-lg sm:rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-colors cursor-pointer text-[8.5px] xs:text-[9px] sm:text-xs font-bold text-[#1F2937] shrink-0">
            <HardDrive className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#2454FF]" />
            <span className="truncate max-w-[65px] xs:max-w-[85px] sm:max-w-none">C:\ Local Disk</span>
            <ChevronDown className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#9CA3AF]" />
          </div>
        </div>

        {/* Center: Search input (hidden on mobile, visible on desktop) */}
        <div className="flex-1 max-w-xs md:max-w-md mx-2 hidden md:block">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#9CA3AF] absolute left-3 top-2.5" />
            <input
              type="text"
              readOnly
              placeholder="Search files, folders..."
              className="w-full pl-8 pr-12 py-1.5 bg-white border border-[#E2E8F0] rounded-2xl text-xs text-[#1F2937] placeholder-[#9CA3AF] focus:outline-hidden"
            />
            <span className="absolute right-2 top-2 px-1.5 py-0.5 rounded bg-[#F3F4F6] text-[9px] font-mono text-[#9CA3AF]">
              Ctrl K
            </span>
          </div>
        </div>

        {/* Right: Rescan Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            onClick={handleRescan}
            className="flex items-center gap-1 px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-lg sm:rounded-2xl bg-[#2454FF] hover:bg-[#174BFF] text-white text-[8.5px] xs:text-[9px] sm:text-xs font-bold shadow-xs active:scale-[0.98] transition-all cursor-pointer"
          >
            <RotateCw className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${isScanning ? "animate-spin" : ""}`} />
            <span>{isScanning ? "Scanning..." : "Rescan"}</span>
          </button>

          <button className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-2xl bg-white border border-[#E2E8F0] text-xs font-semibold text-[#4B5563] shadow-2xs hover:bg-[#F9FAFB] cursor-pointer">
            <Moon className="w-3 h-3" />
            <span>Dark</span>
          </button>
        </div>
      </div>

      {/* 03. VISUALIZER SWITCHER PILLS (Horizontal scrollable on mobile) */}
      <div className="px-2 sm:px-5 pb-1.5 sm:pb-3.5 flex items-center gap-1 sm:gap-1.5 overflow-x-auto text-[8.5px] xs:text-[9px] sm:text-xs font-semibold scrollbar-none">
        {[
          { id: "folders", label: "Folders", icon: Folder },
          { id: "treemap", label: "Treemap", icon: LayoutGrid },
          { id: "flow", label: "Flow", icon: GitFork },
          { id: "skyline", label: "Skyline", icon: Building2 },
          { id: "hotspots", label: "Hotspots", icon: CircleDot },
          { id: "cleanup", label: "Clean Up", icon: Sparkles },
          { id: "appclean", label: "App Clean", icon: PackageCheck },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeVisualizer === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveVisualizer(item.id)}
              className={`flex items-center gap-0.5 sm:gap-1.5 px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-md sm:rounded-xl transition-all cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#2563EB] text-white font-bold shadow-xs"
                  : "text-[#475467] hover:text-[#111827] hover:bg-white/80"
              }`}
            >
              <Icon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* 04. FLOATING WHITE CARDS (Responsive: 1 full-width card on mobile, 2 cards on desktop) */}
      <div className="px-2 sm:px-5 flex gap-2.5 sm:gap-4 min-h-[280px] xs:min-h-[340px] sm:min-h-[480px]">
        {/* ================= CARD 1: MAIN FOLDERS TABLE ================= */}
        <div className="flex-1 bg-white rounded-xl sm:rounded-3xl border border-[#E2E8F0] shadow-xs flex flex-col min-w-0 overflow-hidden">
          {/* Header row inside table card */}
          <div className="px-2.5 sm:px-5 py-1.5 sm:py-4 border-b border-[#F1F5F9] flex items-center justify-between text-xs">
            <span className="font-extrabold text-[#111827] text-xs sm:text-base">C:\</span>
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-[9px] sm:text-xs text-[#6B7280]">
                <strong className="text-[#111827] font-bold">39</strong> items
              </span>
              <span className="text-[9.5px] sm:text-xs font-extrabold text-[#111827]">403.1 GB</span>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-2xs transition-colors cursor-pointer"
              >
                {showDetails ? (
                  <>
                    <PanelRightClose className="w-3.5 h-3.5" />
                    <span>Hide Details</span>
                  </>
                ) : (
                  <>
                    <PanelRightOpen className="w-3.5 h-3.5" />
                    <span>Show Details</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Table Header (Responsive column layout) */}
          <div className="grid grid-cols-12 px-2.5 sm:px-5 py-1 sm:py-2 text-[8.5px] xs:text-[9px] sm:text-[11px] font-bold text-[#6B7280] border-b border-[#F8FAFC]">
            <div className="col-span-5 sm:col-span-4">Name</div>
            <div className="col-span-3 sm:col-span-2 text-right pr-1.5 sm:pr-2">Size</div>
            <div className="col-span-4 sm:col-span-3">Percentage</div>
            <div className="hidden sm:block sm:col-span-2 text-right pr-2">Items</div>
            <div className="hidden md:block md:col-span-1 text-right">Modified</div>
          </div>

          {/* Table Rows (Responsive & Touch-Friendly) */}
          <div className="divide-y divide-[#F8FAFC] text-[9.5px] xs:text-[10px] sm:text-xs">
            {STORAGE_ROWS.map((row) => {
              const isSelected = selectedRow.id === row.id;
              return (
                <div
                  key={row.id}
                  onClick={() => setSelectedRow(row)}
                  className={`grid grid-cols-12 px-2.5 sm:px-5 py-1.5 sm:py-3 items-center transition-colors cursor-pointer group ${
                    isSelected ? "bg-[#EEF2FF]" : "hover:bg-[#F8FAFC]"
                  }`}
                >
                  {/* Name + Icon */}
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-1 sm:gap-2.5 min-w-0 pr-1">
                    {row.type === "folder" ? (
                      <YellowFolderIcon className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                    ) : (
                      <File className="w-3 h-3 text-[#9CA3AF] shrink-0" />
                    )}
                    <span className="truncate text-[#111827] text-[9.5px] xs:text-[10px] sm:text-xs font-bold">
                      {row.name}
                    </span>
                  </div>

                  {/* Size */}
                  <div className="col-span-3 sm:col-span-2 text-right pr-1.5 sm:pr-2 font-bold text-[#111827] font-mono-numbers text-[8.5px] xs:text-[9.5px] sm:text-xs">
                    {row.size}
                  </div>

                  {/* Percentage Progress Pill */}
                  <div className="col-span-4 sm:col-span-3 pr-1 sm:pr-2">
                    <div className="w-full max-w-[85px] xs:max-w-[100px] sm:max-w-[110px] h-3 sm:h-4 bg-[#F1F5F9] rounded sm:rounded-md overflow-hidden relative flex items-center">
                      <div
                        className="h-full rounded sm:rounded-md"
                        style={{
                          width: `${Math.max(row.pct, 6)}%`,
                          backgroundColor: row.barColor,
                        }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-[7.5px] xs:text-[8.5px] sm:text-[10px] font-extrabold text-[#111827] font-mono-numbers">
                        {row.pct.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Items (Desktop) */}
                  <div className="hidden sm:block sm:col-span-2 text-right pr-2 text-[#4B5563] font-mono-numbers text-[10px] sm:text-[11px]">
                    {row.items}
                  </div>

                  {/* Modified (Desktop) */}
                  <div className="hidden md:flex md:col-span-1 items-center justify-end gap-1 text-[11px] text-[#9CA3AF]">
                    <span className="truncate">{row.modified}</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= CARD 2: RIGHT INSPECTOR (Hidden on mobile/tablet, visible on desktop) ================= */}
        {showDetails && (
          <div className="hidden lg:flex w-72 sm:w-80 bg-white rounded-3xl border border-[#E2E8F0] shadow-xs p-5 flex-col justify-between shrink-0">
            <div>
              {/* Big Yellow Folder Header */}
              <div className="flex items-start gap-3.5 pb-4 border-b border-[#F1F5F9]">
                <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7]/60 border border-[#FDE68A]/70 flex items-center justify-center shrink-0">
                  <YellowFolderIcon className="w-8 h-8" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-extrabold text-[#111827] leading-tight truncate">
                    {selectedRow.name}
                  </h3>
                  <div className="text-xs font-bold text-[#111827] mt-0.5 font-mono-numbers">
                    {selectedRow.size} <span className="text-[#6B7280] font-normal">({selectedRow.pct}%)</span>
                  </div>
                  <span className="text-[10px] text-[#9CA3AF] truncate block font-mono mt-0.5">
                    {selectedRow.path}
                  </span>
                </div>
              </div>

              {/* Inspector Tabs */}
              <div className="flex items-center gap-5 border-b border-[#F1F5F9] pt-3 pb-2 text-xs font-bold">
                <button
                  onClick={() => setInspectorTab("overview")}
                  className={`pb-1 transition-colors cursor-pointer ${
                    inspectorTab === "overview"
                      ? "text-[#2563EB] border-b-2 border-[#2563EB]"
                      : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setInspectorTab("top_files")}
                  className={`pb-1 transition-colors cursor-pointer ${
                    inspectorTab === "top_files"
                      ? "text-[#2563EB] border-b-2 border-[#2563EB]"
                      : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  Top Files
                </button>
              </div>

              {/* Metadata rows */}
              <div className="py-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280] flex items-center gap-2">
                    <Folder className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Type</span>
                  </span>
                  <span className="font-semibold text-[#111827]">
                    {selectedRow.type === "folder" ? "File folder" : "System file"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280] flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Size</span>
                  </span>
                  <span className="font-extrabold text-[#111827] font-mono-numbers">
                    {selectedRow.size}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280] flex items-center gap-2">
                    <File className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    <span>Contains</span>
                  </span>
                  <span className="font-semibold text-[#111827] font-mono-numbers">
                    {selectedRow.items} items
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Created</span>
                  <span className="text-[#9CA3AF]">—</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Modified</span>
                  <span className="text-[#9CA3AF]">{selectedRow.modified}</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 Action Buttons */}
            <div className="space-y-2 text-xs pt-4 border-t border-[#F1F5F9]">
              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-white border border-[#E2E8F0] hover:bg-[#F9FAFB] text-[#1F2937] font-bold shadow-2xs transition-colors cursor-pointer">
                <YellowFolderIcon className="w-4 h-4" />
                <span>Open in Explorer</span>
              </button>

              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#EEF2FF] border border-[#C7D2FE] hover:bg-[#E0E7FF] text-[#2563EB] font-bold shadow-2xs transition-colors cursor-pointer">
                <CornerDownRight className="w-3.5 h-3.5" />
                <span>Scan Inside</span>
              </button>

              <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-white border border-[#E2E8F0] hover:bg-[#FEF2F2] hover:text-[#DC2626] hover:border-[#FECACA] text-[#2563EB] font-bold shadow-2xs transition-colors cursor-pointer">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Add to Clean Up</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
