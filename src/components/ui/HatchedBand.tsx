import React from "react";

interface HatchedBandProps {
  className?: string;
  height?: string;
}

export const HatchedBand: React.FC<HatchedBandProps> = ({
  className = "",
  height = "h-7 sm:h-9",
}) => {
  return (
    <div
      className={`relative w-full ${height} border-t border-b border-[#DCE1EA] bg-[#FBFBFC] [background-image:repeating-linear-gradient(-45deg,#E2E8F0_0,#E2E8F0_1px,transparent_0,transparent_8px)] ${className}`}
    >
      {/* Corner crosshairs at intersections */}
      <span className="absolute -top-[9px] -left-[5px] text-[11px] font-mono text-[#94A3B8] select-none leading-none pointer-events-none">
        +
      </span>
      <span className="absolute -top-[9px] -right-[5px] text-[11px] font-mono text-[#94A3B8] select-none leading-none pointer-events-none">
        +
      </span>
      <span className="absolute -bottom-[9px] -left-[5px] text-[11px] font-mono text-[#94A3B8] select-none leading-none pointer-events-none">
        +
      </span>
      <span className="absolute -bottom-[9px] -right-[5px] text-[11px] font-mono text-[#94A3B8] select-none leading-none pointer-events-none">
        +
      </span>
    </div>
  );
};

