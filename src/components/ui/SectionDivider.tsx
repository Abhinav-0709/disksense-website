import React from "react";

interface SectionDividerProps {
  height?: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  height = "h-9 sm:h-11",
  className = "",
}) => {
  return (
    <div className={`w-full relative ${className}`}>
      {/* 100% Full-Width Top Horizontal Dividing Line */}
      <div className="w-full border-t border-[#DCE1EA] dark:border-[#27292E] relative transition-colors">
        {/* Crosshair markers aligned with the 1200px container */}
        <div className="max-w-[1200px] mx-auto relative">
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20 transition-colors">
            +
          </span>
          <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20 transition-colors">
            +
          </span>
        </div>
      </div>

      {/* Hatched Band Section (Background #151619) */}
      <div className="w-full bg-white dark:bg-[#151619] transition-colors">
        <div
          className={`max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] ${height} hatched-band-pattern transition-colors`}
        />
      </div>

      {/* 100% Full-Width Bottom Horizontal Dividing Line */}
      <div className="w-full border-b border-[#DCE1EA] dark:border-[#27292E] relative transition-colors">
        <div className="max-w-[1200px] mx-auto relative">
          <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20 transition-colors">
            +
          </span>
          <span className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20 transition-colors">
            +
          </span>
        </div>
      </div>
    </div>
  );
};
