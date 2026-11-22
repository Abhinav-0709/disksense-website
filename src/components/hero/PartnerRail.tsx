import React from "react";

export const PartnerRail: React.FC = () => {
  const items = [
    { name: "DirectStorage", tag: "Fast IO" },
    { name: "Windows 11", tag: "Shell" },
    { name: "Rust Core", tag: "Native" },
    { name: "Tauri v2", tag: "Lightweight" },
    { name: "NVMe SSD", tag: "Direct Read" },
    { name: "DiskSense", tag: "Local v0.1" },
  ];

  return (
    <div className="w-full bg-white select-none">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 divide-x divide-y sm:divide-y-0 divide-[#DCE1EA]">
        {/* First cell: Label */}
        <div className="p-4 sm:p-5 flex items-center justify-center text-center col-span-2 sm:col-span-1 lg:col-span-1 bg-white">
          <span className="text-[11px] font-normal text-[#667085] leading-tight">
            Trusted by the best Windows power users
          </span>
        </div>

        {/* Logo / Spec cells */}
        {items.map((item) => (
          <div
            key={item.name}
            className="p-4 sm:p-5 flex flex-col items-center justify-center hover:bg-[#F9FAFB] transition-colors group cursor-default"
          >
            <span className="text-[13px] font-semibold text-[#101828] tracking-tight group-hover:text-[#174BFF] transition-colors">
              {item.name}
            </span>
            <span className="text-[9px] text-[#98A2B3] font-mono tracking-wider uppercase mt-0.5">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
