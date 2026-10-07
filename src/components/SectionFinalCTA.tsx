import React from "react";
import finalBgImg from "../assets/images/sobha_tower_evening_1790589381247.jpg";
import { trackEvent } from "../utils/analytics";

interface SectionFinalCTAProps {
  onOpenEnquiry: (context?: string) => void;
  onOpenSiteVisit: () => void;
}

export const SectionFinalCTA: React.FC<SectionFinalCTAProps> = ({ onOpenEnquiry, onOpenSiteVisit }) => {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#080909] overflow-hidden">
      {/* Background Architectural Glow with Deep Fade */}
      <div className="absolute inset-0 z-0">
        <img
          src={finalBgImg}
          alt="SOBHA Rivana towers fading into dark evening"
          className="w-full h-full object-cover filter brightness-30 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-[#080909]/80 to-[#080909]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#C9A875]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
            Sector 1, Greater Noida
          </span>
          <span className="w-8 h-[1px] bg-[#C9A875]" />
        </div>

        <h2
          className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#F4F0E8] tracking-wide mb-4"
          style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}
        >
          LIVE ABOVE THE ORDINARY.
        </h2>

        <p className="text-xl sm:text-2xl text-[#D0CBC0] font-normal max-w-lg mx-auto mb-8">
          Discover SOBHA Rivana.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              trackEvent("site_visit_click", { location: "final_cta" });
              onOpenSiteVisit();
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer shadow-xl"
          >
            BOOK A SITE VISIT
          </button>

          <button
            onClick={() => {
              trackEvent("hero_cta_click", { action: "request_callback_final_cta" });
              onOpenEnquiry("Final CTA Section");
            }}
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#F4F0E8] border border-[#C9A875] hover:bg-[#C9A875]/15 transition-colors cursor-pointer"
          >
            REQUEST A CALLBACK
          </button>
        </div>
      </div>
    </section>
  );
};
