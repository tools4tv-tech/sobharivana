import React from "react";
import { Phone } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/projectData";
import { trackEvent } from "../utils/analytics";

interface StickyConversionBarProps {
  onOpenEnquiry: (context?: string) => void;
}

export const StickyConversionBar: React.FC<StickyConversionBarProps> = ({ onOpenEnquiry }) => {
  const cleanPhone = PHONE_NUMBER.replace(/\s+/g, "");
  const cleanWhatsapp = WHATSAPP_NUMBER.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent("Hello SOBHA Rivana Advisor, I would like to receive the official brochure, price list and floor plans for SOBHA Rivana Sector 1 Greater Noida.");

  return (
    <>
      {/* Desktop Floating CTA (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-30 flex-col items-end gap-3">
        <a
          href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "desktop_floating_button" })}
          aria-label="Chat with us on WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
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
            href={`https://wa.me/${cleanWhatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "mobile_sticky_bar" })}
            className="flex min-h-12 flex-col items-center justify-center py-2 px-1 text-center text-[#171717] border border-black/10 hover:border-[#25D366] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] mb-0.5" />
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

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.41 1.27 4.85L2 22l5.3-1.25A9.95 9.95 0 0 0 12.04 22C17.56 22 22.05 17.51 22.05 12S17.56 2 12.04 2Zm0 18.17a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-3.15.74.76-3.07-.2-.32a8.1 8.1 0 1 1 7.04 3.97Zm4.45-6.1c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
);
