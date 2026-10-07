import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SectionFirstImpression } from "./components/SectionFirstImpression";
import { SectionProjectAtAGlance } from "./components/SectionProjectAtAGlance";
import { SectionLivingSpaces } from "./components/SectionLivingSpaces";
import { SectionResidenceExperience } from "./components/SectionResidenceExperience";
import { SectionAmenities } from "./components/SectionAmenities";
import { SectionLocation } from "./components/SectionLocation";
import { SectionSobhaLegacy } from "./components/SectionSobhaLegacy";
import { SectionOfferPricing } from "./components/SectionOfferPricing";
import { SectionGallery } from "./components/SectionGallery";

import { SectionEnquiryForm } from "./components/SectionEnquiryForm";
import { Footer } from "./components/Footer";
import { StickyConversionBar } from "./components/StickyConversionBar";
import { EnquiryModal } from "./components/EnquiryModal";
import { trackEvent } from "./utils/analytics";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState("Hero Primary CTA");
  const [initialConfig, setInitialConfig] = useState("3 Bed");

  // Initial Page View & 5-Second Modal Automation
  useEffect(() => {
    trackEvent("page_view");

    // Check if user has already seen/dismissed the popup this session
    const hasSeenModal = sessionStorage.getItem("sobha_rivana_modal_dismissed");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setModalContext("5-Second Auto Invitation");
        setIsModalOpen(true);
        trackEvent("enquiry_popup_open", { trigger: "5s_timer" });
        sessionStorage.setItem("sobha_rivana_modal_dismissed", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > section > div"));
    revealItems.forEach((item) => item.classList.add("reveal-ready"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      setShowBackToTop(window.scrollY > window.innerHeight * 0.7);
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  // Scroll depth tracking for performance marketing (50%, 75%, 90%)
  useEffect(() => {
    let tracked50 = false;
    let tracked75 = false;
    let tracked90 = false;

    const handleScrollDepth = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;

      if (scrollPercent >= 50 && !tracked50) {
        tracked50 = true;
        trackEvent("scroll_50");
      }
      if (scrollPercent >= 75 && !tracked75) {
        tracked75 = true;
        trackEvent("scroll_75");
      }
      if (scrollPercent >= 90 && !tracked90) {
        tracked90 = true;
        trackEvent("scroll_90");
      }
    };

    window.addEventListener("scroll", handleScrollDepth, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollDepth);
  }, []);

  const handleOpenEnquiry = (context: string = "Direct Enquiry", config: string = "3 Bed") => {
    setModalContext(context);
    setInitialConfig(config.includes("4") ? "4 Bed" : "3 Bed");
    setIsModalOpen(true);
    trackEvent("enquiry_popup_open", { trigger: context });
  };

  const handleOpenSiteVisit = () => {
    // Scroll smoothly to the booking enquiry section or open modal with site visit context
    const enquirySection = document.getElementById("enquire");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    } else {
      handleOpenEnquiry("Site Visit Reservation");
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans selection:bg-[#B8955A]/30 selection:text-[#171717]">
      <div className="fixed top-0 left-0 z-60 h-0.5 bg-[#B8955A] transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      {/* 1. Header Navigation */}
      <Navbar
        onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Navbar")}
        onOpenSiteVisit={handleOpenSiteVisit}
      />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (100vh cinematic presentation with video/poster fallback) */}
        <Hero
          onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Hero")}
          onOpenSiteVisit={handleOpenSiteVisit}
        />

        {/* 2. The First Impression: A World Above The Rest */}
        <SectionFirstImpression />

        {/* 3. Project At A Glance: Verified Master Specs */}
        <SectionProjectAtAGlance />

        {/* 4 & 18. Living Spaces & Interactive Floor Plans */}
        <SectionLivingSpaces
          onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Living Spaces")}
        />

        {/* 5. Residence Experience: Space, Shaped With Intention */}
        <SectionResidenceExperience />

        {/* 6. The Rivana Lifestyle: 40+ Amenities & The Club */}
        <SectionAmenities
          onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Amenities")}
        />

        {/* 9. Location: Connected To What Matters (Sector 1, Greater Noida) */}
        <SectionLocation
          onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Location")}
        />

        {/* 10, 11 & 12. SOBHA Legacy, Backward Integration & 1,456 Checks */}
        <SectionSobhaLegacy />

        {/* 13, 14 & 15. The Offer (30/20/50), Pricing & Contractual Payment Schedule */}
        <SectionOfferPricing
          onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Offer & Pricing")}
        />

        {/* 16. Curated Editorial Gallery */}
        <SectionGallery />

        {/* 17. High-Conversion Embedded Lead Enquiry Form */}
        <SectionEnquiryForm initialConfiguration={initialConfig} />
      </main>

      {/* Footer with RERA UPRERAPRJ313638/03/2026 and Legal Disclaimers */}
      <Footer />

      {/* Sticky Conversion Bar (Desktop floating CTA & Mobile bottom bar) */}
      <StickyConversionBar onOpenEnquiry={(ctx) => handleOpenEnquiry(ctx || "Sticky Bar")} />

      {/* Reusable Luxury Consultation Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialConfiguration={initialConfig}
        sourceContext={modalContext}
      />

      {showBackToTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 bottom-[5.75rem] md:right-8 md:bottom-24 z-30 w-11 h-11 flex items-center justify-center border border-[#B8955A] bg-white/95 text-[#171717] shadow-lg transition-all hover:bg-[#B8955A] hover:-translate-y-1"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default App;
