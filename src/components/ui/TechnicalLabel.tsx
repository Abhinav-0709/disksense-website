import React from "react";

interface TechnicalLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const TechnicalLabel: React.FC<TechnicalLabelProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center px-5 py-1.5 bg-[#F4F6F9] dark:bg-[#000000] rounded-[4px] select-none transition-colors ${className}`}
    >
      {/* Top Left Corner */}
      <span className="absolute -top-[2px] -left-[2px] w-2.5 h-2.5 border-t border-l border-[#101828] dark:border-[#FFFFFF] transition-colors" />
      {/* Top Right Corner */}
      <span className="absolute -top-[2px] -right-[2px] w-2.5 h-2.5 border-t border-r border-[#101828] dark:border-[#FFFFFF] transition-colors" />
      {/* Bottom Left Corner */}
      <span className="absolute -bottom-[2px] -left-[2px] w-2.5 h-2.5 border-b border-l border-[#101828] dark:border-[#FFFFFF] transition-colors" />
      {/* Bottom Right Corner */}
      <span className="absolute -bottom-[2px] -right-[2px] w-2.5 h-2.5 border-b border-r border-[#101828] dark:border-[#FFFFFF] transition-colors" />

      <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#101828] dark:text-[#FFFFFF] tracking-[0.2em] uppercase transition-colors">
        {children}
      </span>
    </div>
  );
};
