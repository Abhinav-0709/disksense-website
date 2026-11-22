import React from "react";

interface DottedSeparatorProps {
  className?: string;
}

export const DottedSeparator: React.FC<DottedSeparatorProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-4 sm:h-5 border-t border-b border-[#DCE1EA] bg-[#F8FAFC] [background-image:radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:12px_12px] ${className}`}
      aria-hidden="true"
    />
  );
};

