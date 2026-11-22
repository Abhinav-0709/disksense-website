import React from "react";
import { PageContainer } from "../components/layout/PageContainer";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/hero/HeroSection";
import { FrustrationSection } from "../components/frustration/FrustrationSection";
import { IntelligentCleanupSection } from "../components/cleanup/IntelligentCleanupSection";
import { ProductShowcaseSection } from "../components/showcase/ProductShowcaseSection";
import { VisualizerShowcaseSection } from "../components/visualizers/VisualizerShowcaseSection";
import { HowItWorksSection } from "../components/workflow/HowItWorksSection";
import { PricingSection } from "../components/pricing/PricingSection";
import { FAQSection } from "../components/faq/FAQSection";
import { CTASection } from "../components/cta/CTASection";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <PageContainer>
      {/* 01. Full-Width Navbar */}
      <Navbar />

      {/* 02. Hero Section with 100% Horizontal Dividers and Dither Shader */}
      <HeroSection />

      {/* 03. The Frustration & Solution Comparison Section */}
      <FrustrationSection />

      {/* 04. Intelligent Cleanup Section: Install It. Use It. Forget The Leftovers. */}
      <IntelligentCleanupSection />

      {/* 05. Product Showcase Section: Built For Windows (3 Cards with App Mockups) */}
      <ProductShowcaseSection />

      {/* 06. Interactive Visualizers Section: Folders, Treemap, Flow, Skyline, Hotspots (Auto 3s + Manual) */}
      <VisualizerShowcaseSection />

      {/* 07. How It Works Section: 3-Step Workflow (Scan your drive, Find the biggest, Keep drilling) */}
      <HowItWorksSection />

      {/* 08. Pricing Section: Expect more and pay less ($5 / ₹399 Launch Pricing with Cache Icons Explosion) */}
      <PricingSection />

      {/* 09. Frequently Asked Questions Section (Matching Accordion with Left-Aligned Chevron) */}
      <FAQSection />

      {/* 10. CTA Section: A tool to create visual themes, customize spacing, and build interfaces */}
      <CTASection />

      {/* 11. Footer Section: Minimal links, X only, & Giant disksense bottom mark */}
      <Footer />
    </PageContainer>
  );
}
