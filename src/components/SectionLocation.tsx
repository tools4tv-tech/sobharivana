import React from "react";
import { LOCATION_COORDINATES } from "../data/location";
import { MapPin, Navigation, ArrowUpRight, ExternalLink } from "lucide-react";
import { trackEvent } from "../utils/analytics";

interface SectionLocationProps {
  onOpenEnquiry: (context?: string) => void;
}

export const SectionLocation: React.FC<SectionLocationProps> = ({ onOpenEnquiry }) => {
  const keyNodes = [
    { name: "FNG Expressway", time: "3 Mins" },
    { name: "NMRC & DMRC Metro Station", time: "12 Mins" },
    { name: "NH 24 (Delhi–Meerut Expressway)", time: "14 Mins" },
    { name: "Noida–Greater Noida Expressway", time: "16 Mins" },
    { name: "Greater Noida Metro Station", time: "20 Mins" },
    { name: "Pari Chowk", time: "24 Mins" },
    { name: "Yamuna Expressway", time: "25 Mins" },
    { name: "Noida International Airport", time: "45 Mins" },
    { name: "Connaught Place, Delhi", time: "70 Mins" },
  ];

  return (
    <section id="location" className="location-section py-20 sm:py-28 bg-white border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Location
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171717] tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              SECTOR 1, GREATER NOIDA (WEST)
            </h2>
            <div className="flex items-center gap-2 text-sm text-[#C9A875] font-medium mt-2.5">
              <MapPin className="w-4 h-4 text-[#C9A875]" />
              <span>Prime Strategic Address · Masterplanned Connectivity</span>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => {
                trackEvent("site_visit_click", { location: "location_section" });
                onOpenEnquiry("Location & Site Visit Request");
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer"
            >
              Get Location Route
            </button>
          </div>
        </div>

        {/* Map & Arterial Connectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Interactive Google Map Embed Frame */}
          <div className="lg:col-span-7 bg-[#fbfaf8] border border-black/15 p-2 overflow-hidden shadow-2xl">
            <div className="relative w-full h-[300px] sm:h-[520px] overflow-hidden">
              <iframe
                title="SOBHA Rivana Location Map - Sector 1 Greater Noida"
                src={LOCATION_COORDINATES.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Location Badge Overlay */}
             
            </div>

            <div className="p-4 text-xs text-[#5f5f5f] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#B8955A]" />{LOCATION_COORDINATES.address}</span>
              <a
                href="https://maps.google.com/?q=Sector+1+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A875] hover:underline flex items-center gap-1 font-mono font-medium"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Key Connectivity Destinations: Compact Cards */}
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="text-2xl sm:text-3xl text-[#171717]" style={{ fontFamily: "var(--font-serif)" }}>Nearby key destinations</h3>
              <Navigation className="w-5 h-5 text-[#B8955A] shrink-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {keyNodes.map((node, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 min-w-0"
              >
                <MapPin className="w-5 h-5 text-[#B8955A] shrink-0 mt-0.5" fill="currentColor" />
                <p className="text-base text-[#171717] leading-snug min-w-0">
                  {node.name} <span className="whitespace-nowrap">– {node.time}</span>
                </p>
              </div>
            ))}
            </div>
            <a href="https://maps.google.com/?q=Sector+1+Greater+Noida" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B8955A] hover:text-[#171717] transition-colors">
              Explore the wider neighbourhood <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
