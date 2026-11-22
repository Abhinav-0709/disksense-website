import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white dark:bg-[#151619] transition-colors">
      {children}
    </div>
  );
};
