"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { TechnicalLabel } from "../ui/TechnicalLabel";
import { SectionDivider } from "../ui/SectionDivider";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("privacy");

  const faqs: FAQItem[] = [
    {
      id: "privacy",
      question: "Is DiskSense really 100% offline and private?",
      answer:
        "Yes, absolutely. DiskSense is built with Rust and Tauri. It contains zero telemetry, zero background network calls, and zero tracking code. Your file paths, folder names, disk hierarchies, and cleanup queues never leave your local machine — it runs 100% offline.",
    },
    {
      id: "windirstat",
      question: "How is DiskSense different from WinDirStat or TreeSize?",
      answer:
        "WinDirStat is over 15 years old, single-threaded, and can take 10+ minutes on large drives. DiskSense uses parallel multithreaded directory traversal in Rust, indexing millions of files in seconds. Plus, it features 5 modern interactive visualizers (Folders, Treemap, Flow, Skyline, Hotspots) and automated cleanup recommendations rather than just static text lists.",
    },
    {
      id: "safety",
      question: "Does DiskSense delete anything automatically or without my permission?",
      answer:
        "Never. DiskSense adheres strictly to human-in-the-loop safety. All smart recommendations (such as unused installers, Docker caches, or build targets) are placed in a reviewable Deletion Queue. Files marked for removal are sent safely to the Windows Recycle Bin first, allowing you to restore anything instantly.",
    },
    {
      id: "appclean",
      question: "What is App Clean and how does it detect leftover installers?",
      answer:
        "App Clean scans common download locations and intelligently cross-references installer executables (.exe, .msi) with currently registered Windows applications. When you install software like Docker Desktop or AnyDesk, DiskSense detects that the original setup file is now redundant and lets you reclaim hundreds of megabytes with one click.",
    },
    {
      id: "windows-support",
      question: "Which versions of Windows are supported?",
      answer:
        "DiskSense is compiled natively for 64-bit Windows 10 and Windows 11. It supports both x64 and ARM64 architectures, featuring native dark mode, smooth animations, and zero bloat or third-party background services.",
    },
    {
      id: "free-usage",
      question: "Is DiskSense free to use?",
      answer:
        "Yes! DiskSense is completely free to download and use on Windows. There are no subscriptions, no accounts to create, and no credit card required. All scanning and analysis features run 100% locally on your machine.",
    },
    {
      id: "visualizers",
      question: "What visualizers are included?",
      answer:
        "DiskSense includes 5 distinct visual representations: Folders (detailed percentage-bar tree), Treemap (proportional area nesting), Flow (Sankey-style storage flow), Skyline (3D isometric cityscape where bar height represents folder weight), and Hotspots (density cluster heatmaps).",
    },
    {
      id: "external-drives",
      question: "Can I scan secondary drives, external SSDs, and USB storage?",
      answer:
        "Yes. DiskSense automatically detects all mounted volumes on your Windows machine, including external NVMe SSDs, USB flash drives, and secondary partitions. You can switch between drives anytime via the top-bar selector.",
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full bg-white dark:bg-[#151619] flex flex-col items-center transition-colors">
      {/* 01. Full-Width Lined Partition (Hatched Band with + Crosshairs at top) */}
      <SectionDivider height="h-9 sm:h-12" />

      {/* 02. Header Container */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 lg:px-12 pt-14 sm:pt-20 pb-10 sm:pb-12 text-center transition-colors">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            
            <div className="mb-3.5 sm:mb-4">
              <TechnicalLabel>FREQUENTLY ASKED QUESTIONS</TechnicalLabel>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.03em] text-[#101828] dark:text-[#F8FAFC] leading-[1.14]">
              Frequently asked questions
            </h2>

            <p className="text-xs xs:text-sm sm:text-[15px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed max-w-lg mt-3.5 font-normal">
              Everything you need to know about DiskSense. Have questions or need assistance? Reach out to us on{" "}
              <a
                href="https://x.com/disksense"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] dark:text-[#60A5FA] underline underline-offset-2 hover:text-[#1D4ED8] dark:hover:text-[#93C5FD] font-medium"
              >
                X (@disksense)
              </a>
              .
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

      {/* 04. FAQ Accordion List (Matching media_1794214853588_b1432448.png with left-aligned chevron) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] px-4 xs:px-6 sm:px-10 py-12 sm:py-16 transition-colors">
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#2563EB]/40 dark:border-[#3B82F6]/40 bg-[#F9FBFF] dark:bg-[#0D1017] shadow-xs"
                      : "border-[#E5E7EB] dark:border-[#222428] bg-white dark:bg-[#0B0D12] hover:border-[#CBD5E1] dark:hover:border-[#2D313B]"
                  }`}
                >
                  {/* Question Button (Matches reference image with chevron on the left) */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-3.5 text-left cursor-pointer transition-colors group"
                    aria-expanded={isOpen}
                  >
                    {/* Left Chevron (Direct match to reference image) */}
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 text-[#2563EB] dark:text-[#60A5FA]"
                          : "text-[#64748B] dark:text-[#94A3B8] group-hover:text-[#101828] dark:group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>

                    {/* Question Headline */}
                    <span
                      className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                        isOpen
                          ? "text-[#174BFF] dark:text-[#3B82F6]"
                          : "text-[#101828] dark:text-[#F8FAFC] group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Expandable Answer Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-left pl-[44px] sm:pl-[48px] border-t border-[#E8EEF8] dark:border-[#1A202E]">
                      <div className="text-xs sm:text-[14px] text-[#475467] dark:text-[#9EA2AD] leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

