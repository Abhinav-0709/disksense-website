"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";
import {
  Search,
  CheckCircle,
  Clock,
  Brush,
  Shield,
  Minus,
  Square,
  X,
  User,
  HardDrive,
  Package,
  RotateCw,
  CheckCircle2,
} from "lucide-react";

export const IntelligentCleanupSection: React.FC = () => {
  // Interactive state for the mockup
  const [mockupState, setMockupState] = useState<"initial" | "cleaned" | "later" | "keep">("initial");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleReviewClean = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setMockupState("cleaned");
    }, 600);
  };

  const handleLater = () => {
    setMockupState("later");
  };

  const handleKeep = () => {
    setMockupState("keep");
  };

  const handleReset = () => {
    setMockupState("initial");
  };

  const steps = [
    {
      icon: Search,
      title: "Detect",
      desc: "Find Windows installation files (setup, .exe, .msi, etc.).",
    },
    {
      icon: CheckCircle,
      title: "Verify",
      desc: "Check if the application was installed successfully.",
    },
    {
      icon: Clock,
      title: "Wait",
      desc: "Give you time to use the application.",
    },
    {
      icon: Brush,
      title: "Recommend",
      desc: "Suggest files that can be safely removed.",
    },
    {
      icon: Shield,
      title: "Decide",
      desc: "Review, Clean Now, Later, or Keep — your choice.",
    },
  ];

  return (
    <section id="intelligent-cleanup" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Content Container (Bounded within 1200px) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-colors">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: HEADLINE, COPY & 5-STEP VERTICAL FLOW             */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="mb-4">
              <TechnicalLabel>INTELLIGENT CLEANUP</TechnicalLabel>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.12] mb-4">
              Install it. Use it.
              <span className="block mt-1 text-[#174BFF] dark:text-[#3B82F6]">
                Forget the leftovers.
              </span>
            </h2>

            <p className="text-xs xs:text-sm sm:text-[15px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed mb-8 max-w-lg font-normal">
              DiskSense detects installation files, verifies successful setup, waits for usage, and
              then recommends safe cleanup — you stay in control.
            </p>

            {/* 5-Step Vertical Process with Circular Icons */}
            <div className="space-y-4 sm:space-y-4.5 w-full">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-start gap-3.5 sm:gap-4 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F0F4FD] dark:bg-[#1A1C24] border border-[#DCE4FD] dark:border-[#262A38] flex items-center justify-center text-[#174BFF] dark:text-[#3B82F6] shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-[14px] font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight">
                        {step.title}
                      </span>
                      <span className="text-[11px] sm:text-[12.5px] text-[#667085] dark:text-[#9EA2AD] leading-snug mt-0.5">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: REFINED ACETERNITY UI CARD (Clean, Reduced 1px Border) */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 w-full flex items-center justify-center relative select-none">
            
            {/* Subtle, Soft Radial Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* The Main Elevated Popup Card — Sleek, Reduced 1px Border */}
            <div className="relative z-10 w-full max-w-[430px] rounded-xl sm:rounded-2xl border border-[#DCE1EA] dark:border-[#22242C] bg-white dark:bg-[#0A0B0E] shadow-xl dark:shadow-[0_1px_1px_rgba(255,255,255,0.05)_inset,0_15px_30px_-10px_rgba(0,0,0,0.8)] overflow-hidden font-sans text-left transition-all">
              
              {/* Windows 11 Titlebar */}
              <div className="h-7 sm:h-8 bg-[#F8FAFC] dark:bg-[#0E0F14] border-b border-[#E2E8F0] dark:border-[#1E2028] px-3.5 flex items-center justify-between text-xs text-[#6B7280]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/app-icon.png"
                      alt="Icon"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#1F2937] dark:text-[#E5E7EB]">
                    DiskSense
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[#9CA3AF]">
                  <span className="w-2.5 h-2.5 flex items-center justify-center">
                    <Minus className="w-2.5 h-2.5" />
                  </span>
                  <span className="w-2.5 h-2.5 flex items-center justify-center">
                    <Square className="w-2 h-2" />
                  </span>
                  <span className="w-2.5 h-2.5 flex items-center justify-center">
                    <X className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col">
                
                {/* Header Icon + Title Row */}
                <div className="flex items-center gap-3 pb-3.5 mb-3.5 border-b border-[#F1F5F9] dark:border-[#1A1C22]">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-800/40 flex items-center justify-center text-[#2454FF] dark:text-[#3B82F6] shrink-0 shadow-2xs">
                    <Package className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-[#F8FAFC] leading-snug">
                      Cleanup Recommendation
                    </h3>
                    <span className="text-[10.5px] sm:text-[11.5px] text-[#6B7280] dark:text-[#9EA2AD]">
                      Installation completed successfully
                    </span>
                  </div>
                </div>

                {/* State: Initial (Metadata rows & Tactile buttons) */}
                {mockupState === "initial" && (
                  <div>
                    {/* Metadata Rows */}
                    <div className="space-y-2.5 mb-5 text-[11.5px] sm:text-xs font-medium">
                      {/* Application Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280] dark:text-[#9EA2AD] flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-[#9CA3AF]" />
                          <span>Application</span>
                        </span>
                        <span className="font-bold text-[#111827] dark:text-[#F8FAFC]">
                          Visual Studio Code
                        </span>
                      </div>

                      {/* Found Files Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280] dark:text-[#9EA2AD] flex items-center gap-2">
                          <HardDrive className="w-3.5 h-3.5 text-[#9CA3AF]" />
                          <span>Found Files</span>
                        </span>
                        <span className="font-bold font-mono text-[#111827] dark:text-[#F8FAFC]">
                          3 files (2.8 GB)
                        </span>
                      </div>

                      {/* Installed Age Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280] dark:text-[#9EA2AD] flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#9CA3AF]" />
                          <span>Installed</span>
                        </span>
                        <span className="font-bold text-[#111827] dark:text-[#F8FAFC]">
                          2 hours ago
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons Row using exact tactile pills from Hero section */}
                    <div className="grid grid-cols-12 gap-2 text-xs font-bold">
                      {/* Review & Clean (Tactile Primary Pill) */}
                      <button
                        onClick={handleReviewClean}
                        disabled={isProcessing}
                        className="btn-primary-pill col-span-6 py-2 px-3 text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        {isProcessing ? (
                          <>
                            <RotateCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Cleaning...</span>
                          </>
                        ) : (
                          <span>Review &amp; Clean</span>
                        )}
                      </button>

                      {/* Later Button (Tactile Secondary Pill) */}
                      <button
                        onClick={handleLater}
                        className="btn-secondary-pill col-span-3 py-2 text-xs inline-flex items-center justify-center cursor-pointer"
                      >
                        Later
                      </button>

                      {/* Keep Button (Tactile Secondary Pill) */}
                      <button
                        onClick={handleKeep}
                        className="btn-secondary-pill col-span-3 py-2 text-xs inline-flex items-center justify-center cursor-pointer"
                      >
                        Keep
                      </button>
                    </div>
                  </div>
                )}

                {/* State: Cleaned */}
                {mockupState === "cleaned" && (
                  <div className="py-3 flex flex-col items-center justify-center text-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#111827] dark:text-[#F8FAFC]">
                      2.8 GB Moved to Recycle Bin
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-[#6B7280] dark:text-[#9EA2AD] max-w-xs leading-relaxed">
                      All 3 residual installer files were safely recycled. Your Visual Studio Code installation remains untouched.
                    </p>
                    <button
                      onClick={handleReset}
                      className="btn-secondary-pill mt-2 px-3 py-1 text-[11px] inline-flex items-center justify-center cursor-pointer"
                    >
                      ← Reset Preview
                    </button>
                  </div>
                )}

                {/* State: Later */}
                {mockupState === "later" && (
                  <div className="py-3 flex flex-col items-center justify-center text-center gap-2">
                    <Clock className="w-7 h-7 text-[#2454FF]" />
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#111827] dark:text-[#F8FAFC]">
                      Reminder Postponed
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-[#6B7280] dark:text-[#9EA2AD] max-w-xs leading-relaxed">
                      DiskSense will wait 24 hours to give you time to verify everything works properly before suggesting cleanup again.
                    </p>
                    <button
                      onClick={handleReset}
                      className="btn-secondary-pill mt-2 px-3 py-1 text-[11px] inline-flex items-center justify-center cursor-pointer"
                    >
                      ← Reset Preview
                    </button>
                  </div>
                )}

                {/* State: Keep */}
                {mockupState === "keep" && (
                  <div className="py-3 flex flex-col items-center justify-center text-center gap-2">
                    <Shield className="w-7 h-7 text-[#6B7280]" />
                    <h4 className="font-extrabold text-xs sm:text-sm text-[#111827] dark:text-[#F8FAFC]">
                      Files Preserved
                    </h4>
                    <p className="text-[10.5px] sm:text-[11px] text-[#6B7280] dark:text-[#9EA2AD] max-w-xs leading-relaxed">
                      You chose to keep these files. DiskSense will never prompt you about this installation package again.
                    </p>
                    <button
                      onClick={handleReset}
                      className="btn-secondary-pill mt-2 px-3 py-1 text-[11px] inline-flex items-center justify-center cursor-pointer"
                    >
                      ← Reset Preview
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
