import React from "react";
import skylineImg from "../assets/images/sobha_rivana_hero_tower_1790589259918.jpg";

export const SectionArchitectureSkyline: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#080909] overflow-hidden">
      {/* Immersive Architectural Horizon Frame */}
      <div className="relative w-full h-[600px] sm:h-[720px] max-h-[85vh] overflow-hidden">
        <img
          src={skylineImg}
          alt="Eight majestic residential towers of SOBHA Rivana rising into the twilight skyline"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          referrerPolicy="no-referrer"
        />

        {/* Minimalist Architectural Overlays & Hairline Grid Lines */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-[#080909]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080909]/80 via-transparent to-[#080909]/40" />

        {/* Subtle Architectural Horizontal & Vertical Guide Wire Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-white/10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-white/10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-12 lg:left-24 w-[1px] bg-white/10 pointer-events-none hidden sm:block" />

        {/* Editorial Floating Inscription */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 w-full">
            <div className="max-w-xl bg-[#080909]/90 backdrop-blur-md p-6 sm:p-8 border border-[#2E2F32]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#C9A875]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                  The Skyline Landmark
                </span>
              </div>

              <h2
                className="text-2xl sm:text-4xl font-semibold text-[#F4F0E8] leading-tight mb-3 tracking-wide"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Architectural Elevation &amp; Skyline Presence
              </h2>

              <p className="text-sm sm:text-base text-[#D0CBC0] font-normal leading-[1.65] mb-5 max-w-[540px]">
                Eight towers rise across the landscaped campus, combining balanced proportions, expansive private balconies, and open skyline views.
              </p>

              <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#A8A49C] font-medium pt-3 border-t border-[#222325]">
                <div>
                  <span className="text-[#C9A875] block font-mono text-sm font-semibold">8 Towers</span>
                  <span className="text-[11px] text-[#A8A49C]">High-Rise Landmark</span>
                </div>
                <div className="w-[1px] h-6 bg-[#333333]" />
                <div>
                  <span className="text-[#C9A875] block font-mono text-sm font-semibold">Private Balconies</span>
                  <span className="text-[11px] text-[#A8A49C]">Panoramic Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
