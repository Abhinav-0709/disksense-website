import React from "react";
import { Laptop, Layers, Brush, Shield } from "lucide-react";

export const CapabilityStrip: React.FC = () => {
  const items = [
    {
      icon: Laptop,
      title: "Local First",
      desc: "All analysis happens on your PC.",
    },
    {
      icon: Layers,
      title: "Disk Visualization",
      desc: "See your storage in a clear, visual way.",
    },
    {
      icon: Brush,
      title: "Smart Cleanup",
      desc: "Find and review removable files.",
    },
    {
      icon: Shield,
      title: "User Control",
      desc: "You decide what to keep or remove.",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#000000] select-none transition-colors">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#DCE1EA] dark:divide-[#27292E]">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`p-2.5 xs:p-3 sm:px-6 sm:py-6 lg:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 hover:bg-[#F9FAFB] dark:hover:bg-[#0B0C0E] transition-colors group cursor-default bg-white dark:bg-[#000000] ${
                index === 1 ? "border-t-0" : ""
              }`}
            >
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg flex items-center justify-center shrink-0 text-[#174BFF] dark:text-[#3B82F6] bg-[#F0F4FD] dark:bg-[#151619] group-hover:scale-105 transition-transform">
                <Icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-5 sm:h-5 stroke-[1.75]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] xs:text-[11.5px] sm:text-[14px] font-bold text-[#101828] dark:text-[#F8FAFC] tracking-tight leading-snug transition-colors">
                  {item.title}
                </span>
                <span className="text-[8.5px] xs:text-[9.5px] sm:text-[12px] text-[#667085] dark:text-[#9EA2AD] leading-tight sm:leading-normal mt-0.5 transition-colors line-clamp-2 sm:line-clamp-none">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
