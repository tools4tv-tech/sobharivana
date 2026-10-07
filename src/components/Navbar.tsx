import React, { useState, useEffect } from "react";
import { SobhaLogo } from "./SobhaLogo";
import { Menu, X, PhoneCall } from "lucide-react";
import { trackEvent } from "../utils/analytics";
import { PHONE_NUMBER } from "../data/projectData";

interface NavbarProps {
  onOpenEnquiry: (context?: string) => void;
  onOpenSiteVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenSiteVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Residences", href: "#residences" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
    { label: "Legacy", href: "#legacy" },
    { label: "Offer", href: "#offer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.4, 0.8] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-black/10 py-3.5 shadow-sm"
          : "bg-white border-b border-black/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single element brand wordmark */}
        <a
          href="#"
          className="focus-visible:ring-1 focus-visible:ring-[#C9A875] outline-none"
          aria-label="SOBHA Rivana Home"
        >
          <SobhaLogo variant="dark" className="h-10" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
              className={`nav-link text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:ring-1 focus-visible:ring-[#C9A875] outline-none ${activeSection === link.href.slice(1) ? "text-[#B8955A]" : "text-[#5F5F5F] hover:text-[#B8955A]"}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => {
              trackEvent("hero_cta_click", { action: "book_site_visit_nav" });
              onOpenSiteVisit();
            }}
            className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors duration-200 cursor-pointer whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A875] outline-none"
          >
            Book A Site Visit
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => {
              trackEvent("enquiry_popup_open", { trigger: "mobile_nav_enquire" });
              onOpenEnquiry("Mobile Header");
            }}
            className="px-3 py-2 text-[11px] uppercase tracking-wider font-semibold text-[#171717] bg-[#B8955A] cursor-pointer min-h-11"
          >
            Enquire Now
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#171717] hover:text-[#B8955A] focus-visible:ring-1 focus-visible:ring-[#C9A875] outline-none cursor-pointer min-h-11 min-w-11"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slideout Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-sm uppercase tracking-[0.16em] font-semibold text-[#171717] hover:text-[#B8955A] transition-colors border-b border-black/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSiteVisit();
              }}
              className="w-full py-3 text-center text-xs uppercase tracking-[0.2em] font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors"
            >
              Book A Site Visit
            </button>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-center text-xs uppercase tracking-[0.2em] text-[#171717] border border-[#333333] hover:border-[#C9A875] transition-colors"
              onClick={() => trackEvent("phone_click", { location: "mobile_menu" })}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C9A875]" />
              Direct Sales Line
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
