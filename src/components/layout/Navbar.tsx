"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "Product", hasPlus: true, href: "#overview" },
    { label: "Architecture", hasPlus: true, href: "#architecture" },
    { label: "Resources", hasPlus: true, href: "#resources" },
    { label: "Pricing", hasPlus: false, href: "#pricing" },
    { label: "Contact", hasPlus: false, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-[#151619]/95 backdrop-blur-md select-none border-b border-[#DCE1EA] dark:border-[#27292E] transition-colors">
      {/* Central 1200px Container with Vertical Guide Lines */}
      <div className="max-w-[1200px] mx-auto border-l border-r border-[#DCE1EA] dark:border-[#27292E] h-18 sm:h-20 px-6 sm:px-10 flex items-center justify-between relative bg-white/90 dark:bg-[#151619]/90 transition-colors">
        {/* Left: Brand Identity with Official App Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/app-icon.png"
              alt="DiskSense Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="text-[17px] font-semibold tracking-tight text-[#101828] dark:text-white">
            DiskSense
          </span>
        </Link>

        {/* Centre: Nav links with subtle '+' indicator */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-normal text-[#475467] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.hasPlus && (
                <span className="text-[#98A2B3] dark:text-[#5F636F] text-[12px] font-mono leading-none">
                  +
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Actions & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#667085] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white hover:bg-[#F3F4F6] dark:hover:bg-[#000000] transition-colors cursor-pointer"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-[#475467]" />
            )}
          </button>

          <Link
            href="#signin"
            className="text-[13px] font-normal text-[#475467] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white transition-colors"
          >
            Sign in
          </Link>

          <Link
            href="#download"
            className="btn-primary-pill px-4 py-2 text-[13px] font-semibold tracking-tight inline-flex items-center justify-center"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu trigger & Theme toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-[#667085] dark:text-[#9EA2AD]"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#667085] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Bottom Crosshairs on the 100% full-width divider */}
        <span className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20">
          +
        </span>
        <span className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 text-[13px] font-mono font-light text-[#94A3B8] dark:text-[#52555E] select-none pointer-events-none leading-none z-20">
          +
        </span>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DCE1EA] dark:border-[#27292E] bg-white dark:bg-[#151619] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#475467] dark:text-[#9EA2AD] hover:text-[#101828] dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[#EEF0F4] dark:border-[#27292E] flex flex-col gap-2">
            <Link
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-pill flex items-center justify-center w-full py-2.5 text-xs font-semibold"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
