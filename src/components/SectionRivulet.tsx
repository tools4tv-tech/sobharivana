import React from "react";
import waterImg from "../assets/images/sobha_rivana_rivulet_pool_1790589275273.jpg";
import { Waves } from "lucide-react";

export const SectionRivulet: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#080909] overflow-hidden">
      {/* Full-width Signature Water Panorama */}
      <div className="relative w-full h-[520px] sm:h-[640px] max-h-[80vh] overflow-hidden">
        <img
          src={waterImg}
          alt="Tranquil 350-meter rivulet winding through the lush landscaping at SOBHA Rivana"
          className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Deep Cinematic Water Grading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080909] via-transparent to-[#080909]/60" />
        <div className="absolute inset-0 bg-[#004D50]/20 mix-blend-multiply pointer-events-none" />

        {/* Floating Narrative Inscription Card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-[#080909]/85 backdrop-blur-md p-8 sm:p-10 border border-[#2B2C2E] shadow-2xl max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-3 text-[#C9A875]">
                <Waves className="w-4 h-4 text-[#C9A875]" />
                <span className="text-xs uppercase tracking-[0.3em] font-semibold">
                  Landscape Feature
                </span>
              </div>

              <h2
                className="text-3xl sm:text-5xl font-semibold text-[#edeae4] leading-tight mb-3 tracking-wide"
                style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}
              >
                350M WATERWAY
              </h2>

              <p className="text-base sm:text-lg text-[#D5D0C5] font-normal leading-[1.6] max-w-[500px] mx-auto">
                A distinctive landscape element running through the development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
