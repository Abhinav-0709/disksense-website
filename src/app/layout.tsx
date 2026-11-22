import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "DiskSense — Windows Storage Visualizer",
  description:
    "Understand what's taking up your storage. Discover large files, visualize disk usage, and find forgotten installation files — 100% processed locally on your Windows PC.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/app-icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased bg-white dark:bg-[#151619] transition-colors" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-[#151619] text-[#101828] dark:text-[#F8FAFC]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
