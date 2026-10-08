import React, { useState } from "react";
import { SobhaLogo } from "./SobhaLogo";
import { AGENT_RERA_REGISTRATION, RERA_REGISTRATION, LAUNCH_DATE, PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/projectData";
import { ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [showDisclaimers, setShowDisclaimers] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer bg-[#060708] border-t border-[#1A1B1C] text-[#C3C0BA] pt-16 pb-28 md:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Tier: Logo & Navigation Mirror */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#1A1A1D]">
          <SobhaLogo />

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-wider text-[#C3C0BA]">
            <a href="#overview" className="hover:text-[#C9A875] transition-colors">Overview</a>
            <a href="#residences" className="hover:text-[#C9A875] transition-colors">Residences</a>
            <a href="#amenities" className="hover:text-[#C9A875] transition-colors">Amenities</a>
            <a href="#location" className="hover:text-[#C9A875] transition-colors">Location</a>
            <a href="#legacy" className="hover:text-[#C9A875] transition-colors">SOBHA Legacy</a>
            <a href="#offer" className="hover:text-[#C9A875] transition-colors">Payment Offer</a>
            <a href="#enquire" className="hover:text-[#C9A875] transition-colors">Enquiry</a>
          </nav>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C3C0BA] hover:text-[#C9A875] transition-colors cursor-pointer w-fit"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Regulatory & RERA Notice Box */}
        <div className="bg-[#0C0D0E] border border-[#202123] p-6 space-y-3">
          <div className="flex items-center gap-2 text-[#C9A875]">
            <ShieldCheck className="w-4 h-4 text-[#C9A875]" />
            <span className="text-xs uppercase tracking-widest font-mono font-semibold">
              RERA Statutory Registration
            </span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono text-[#E1DDD4]">
            <div>
              <span className="text-[#777777]">Project RERA No: </span>
              <span className="text-[#C9A875]">{RERA_REGISTRATION}</span>
            </div>
            <div>
              <span className="text-[#777777]">Agent RERA No: </span>
              <span className="text-[#C9A875]">{AGENT_RERA_REGISTRATION}</span>
            </div>
            <div>
              <span className="text-[#777777]">Official Launch Date: </span>
              <span>{LAUNCH_DATE}</span>
            </div>
            <div>
              <span className="text-[#777777]">UP RERA Portal: </span>
              <a
                href="https://up-rera.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#C9A875]"
              >
                up-rera.in
              </a>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Disclaimers */}
        <div className={`footer-disclaimers text-[11px] text-[#AAA69E] leading-relaxed max-w-5xl ${showDisclaimers ? "is-expanded" : ""}`}>
          <p className="footer-disclaimer-preview">
            <strong>Disclaimer:</strong> All images, computer-generated visualisations, architectural representations, and interior perspectives are artist’s impressions and indicative concepts unless otherwise stated. They do not constitute an explicit contractual warranty or representation.
          </p>
          <div className="footer-disclaimer-details space-y-3">
            <p>
            Specifications, unit plans, carpet areas, dimensions, landscape configurations, prices, availability, amenities, and development phases are subject to change as may be required by competent statutory authorities or in the interest of continuing architectural enhancement.
            </p>
            <p>
            Please verify the latest details, availability, pricing, and applicable terms with the authorised sales representative prior to taking any financial decision. The promotional 30/20/50 staggered payment scheme is subject to banking eligibility criteria and prevailing contractual agreements.
            </p>
            <p>Terms and conditions apply.</p>
          </div>
          <button
            type="button"
            onClick={() => setShowDisclaimers((visible) => !visible)}
            aria-expanded={showDisclaimers}
            className="mt-3 text-[11px] uppercase tracking-wider font-semibold text-[#B8955A] hover:text-[#171717] transition-colors"
          >
            {showDisclaimers ? "Read less" : "Read more"}
          </button>
          <p className="footer-partner-disclaimer">
            This is not the official website of developer &amp; property, it belongs to authorised channel partner for information purpose only. All rights for logo &amp; images are reserved to developer. Thank you for visiting our website.
          </p>
        </div>

        {/* Copyright & Footnote */}
        <div className="footer-meta pt-6 border-t border-[#303133] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AAA69E]">
          <div>
            © {new Date().getFullYear()} SOBHA Limited. All rights reserved.
          </div>
          <div>
            Sector 1, Greater Noida (West), Uttar Pradesh · Call: {PHONE_NUMBER} · WhatsApp: {WHATSAPP_NUMBER.replace("+91", "+91 ")}
          </div>
        </div>
      </div>
    </footer>
  );
};
