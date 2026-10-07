import React from "react";
import heroImage from "../assets/images/Hero section Image.png";
import mobileHeroImage from "../assets/images/hero section image for mobile view.png";
import { trackEvent } from "../utils/analytics";

interface HeroProps {
  onOpenEnquiry?: (context?: string) => void;
  onOpenSiteVisit?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEnquiry,
  onOpenSiteVisit,
}) => {
  return (
    <section className="hero-section relative w-full h-svh min-h-[560px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#071b3d]">
      <div className="hero-image-frame absolute inset-0 w-full h-full overflow-hidden">
        <picture className="block w-full h-full">
          <source media="(max-width: 639px)" srcSet={mobileHeroImage} />
          <img
            src={heroImage}
            alt="SOBHA Rivana residences in Sector 1, Greater Noida"
            className="hero-media w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* CTA Buttons */}
      <div className="absolute bottom-24 left-4 right-4 z-10 flex flex-col items-stretch justify-center gap-3 sm:bottom-10 sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2 sm:flex-row sm:items-center sm:gap-4">
        <button
          onClick={() => {
            trackEvent("site_visit_click", {
              action: "book_site_visit_hero",
            });
            onOpenSiteVisit?.();
          }}
          className="w-full whitespace-nowrap px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-brand-black bg-brand-champagne hover:bg-[#B99662] transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-[#B8955A]/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8955A] outline-none sm:w-auto sm:px-8 sm:tracking-[0.22em]"
        >
          BOOK A PRIVATE SITE VISIT
        </button>

        <button
          onClick={() => {
            trackEvent("hero_cta_click", {
              action: "request_callback_hero",
            });
            onOpenEnquiry?.("Hero Primary CTA");
          }}
          className="w-full whitespace-nowrap px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-brand-black bg-brand-champagne hover:bg-[#B99662] transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-[#B8955A]/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B8955A] outline-none sm:w-auto sm:px-8 sm:tracking-[0.22em]"
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>
  );
};