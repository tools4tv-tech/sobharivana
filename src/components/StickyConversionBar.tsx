import React from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/projectData";
import { trackEvent } from "../utils/analytics";

interface StickyConversionBarProps {
  onOpenEnquiry: (context?: string) => void;
}

export const StickyConversionBar: React.FC<StickyConversionBarProps> = ({ onOpenEnquiry }) => {
  const cleanPhone = PHONE_NUMBER.replace(/\s+/g, "");
  const cleanWhatsapp = WHATSAPP_NUMBER.replace(/\D/g, "");

  return (
    <>
      {/* Desktop Floating CTA (Bottom Right) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-30">
        <button
          onClick={() => {
            trackEvent("hero_cta_click", { action: "sticky_enquire_desktop" });
            onOpenEnquiry("Desktop Sticky CTA");
          }}
          className="sticky-enquire group flex items-center gap-3 px-6 py-3.5 bg-[#C9A875] hover:bg-[#B99662] text-[#080909] text-xs uppercase tracking-[0.25em] font-medium shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C9A875] outline-none"
        >
          <span>Enquire Now</span>
        </button>
      </div>

      {/* Mobile Fixed Bottom Conversion Bar (<15% viewport height rule) */}
      <div className="mobile-conversion-bar md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-t border-black/10 px-3 py-2.5 shadow-[0_-8px_24px_rgba(23,23,23,0.08)] safe-area-bottom">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call CTA */}
          <a
            href={`tel:${cleanPhone}`}
            onClick={() => trackEvent("phone_click", { location: "mobile_sticky_bar" })}
            className="flex min-h-12 flex-col items-center justify-center py-2 px-1 text-center text-[#171717] border border-black/10 hover:border-[#B8955A] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A875] mb-0.5" />
            <span className="text-[10px] uppercase tracking-wider font-medium">Call</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent("Hello SOBHA Rivana Advisor, I would like to receive the official brochure, price list and floor plans for SOBHA Rivana Sector 1 Greater Noida.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "mobile_sticky_bar" })}
            className="flex min-h-12 flex-col items-center justify-center py-2 px-1 text-center text-[#171717] border border-black/10 hover:border-[#25D366] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] mb-0.5" />
            <span className="text-[10px] uppercase tracking-wider font-medium">WhatsApp</span>
          </a>

          {/* Enquire Now Primary CTA */}
          <button
            onClick={() => {
              trackEvent("enquiry_popup_open", { trigger: "mobile_sticky_bar" });
              onOpenEnquiry("Mobile Sticky Bar");
            }}
            className="flex min-h-12 flex-col items-center justify-center py-2 px-1 text-center bg-[#C9A875] text-[#080909] font-medium"
          >
            <span className="text-[10px] uppercase tracking-wider font-semibold">Enquire</span>
            <span className="text-[8px] uppercase tracking-widest opacity-80">Instant Callback</span>
          </button>
        </div>
      </div>
    </>
  );
};
