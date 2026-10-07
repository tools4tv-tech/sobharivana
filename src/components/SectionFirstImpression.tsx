import React from "react";
import firstImpressionImg from "../assets/images/sobha_tower_evening_1790589381247.jpg";

export const SectionFirstImpression: React.FC = () => {
  return (
    <section id="overview" className="relative py-24 sm:py-32 lg:py-40 bg-[#080909] overflow-hidden">
      {/* Editorial Grid Layout with generous negative space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Statement (col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                The First Impression
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] leading-[1.2] tracking-wide"
              style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}
            >
              A World Above <br className="hidden sm:inline" />
              The Rest
            </h2>

            <p className="text-base sm:text-lg text-[#D5D0C5] font-normal leading-[1.65] max-w-[620px]">
              Set in Sector 1, Greater Noida (West), SOBHA Rivana brings together thoughtfully planned residences, landscaped surroundings, and a calm, water-inspired living experience.
            </p>

            <div className="pt-4 border-t border-[#222326] flex items-center justify-between max-w-md text-xs uppercase tracking-[0.2em] text-[#A8A49C] font-medium">
              <span className="text-[#F4F0E8]">3 &amp; 4 Bed Residences</span>
              <span aria-hidden="true" className="text-[#C9A875]">/</span>
              <span>11.76 Acres</span>
              <span aria-hidden="true" className="text-[#C9A875]">/</span>
              <span>Greater Noida</span>
            </div>
          </div>

          {/* Architectural Feature Frame (col-span-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#262626] group">
              <img
                src={firstImpressionImg}
                alt="SOBHA Rivana architectural skyline elevation at evening"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Subtle architectural citation mark */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#F4F0E8]/80 font-mono">
                <span>Architectural Elevation</span>
                <span className="text-[#C9A875]">Sector 1 · Greater Noida</span>
              </div>
            </div>

            {/* Subtle decorative offset border element */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t border-r border-[#C9A875]/30 -z-0 pointer-events-none hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
