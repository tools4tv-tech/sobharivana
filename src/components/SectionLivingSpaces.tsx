import React, { useState } from "react";
import { FLOOR_PLANS, FloorPlan } from "../data/floorPlans";
import { FloorPlanModal } from "./FloorPlanModal";
import { trackEvent } from "../utils/analytics";
import { Maximize2, Compass, Check, ArrowRight } from "lucide-react";

interface SectionLivingSpacesProps {
  onOpenEnquiry: (context?: string) => void;
}

const formatArea = (area: string) => {
  const [value, ...unitParts] = area.trim().split(/\s+/);
  const unit = unitParts.join(" ").toUpperCase().replace("SQ.FT.", "SQ. FT.");
  return { value, unit };
};

export const SectionLivingSpaces: React.FC<SectionLivingSpacesProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<"3 BED" | "4 BED">("3 BED");
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan | null>(null);

  const filteredPlans = FLOOR_PLANS.filter((plan) => plan.category === activeCategory);

  const handlePlanClick = (plan: FloorPlan) => {
    trackEvent("floor_plan_view", { planId: plan.id, type: plan.typeName });
    setSelectedPlan(plan);
  };

  return (
    <section id="residences" className="py-24 sm:py-32 bg-[#0C0D0E] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Living Spaces &amp; Configurations
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Designed Around The Way You Live
            </h2>
            <p className="text-base text-[#D0CBC0] font-normal mt-2.5 max-w-[620px] leading-[1.6]">
              Discover considered floor plans shaped around daylight, privacy, and the quiet pleasure of coming home.
            </p>
          </div>

          {/* Configuration Segmented Tabs (Functional filter buttons per anti-slop rules) */}
          <div className="mt-6 md:mt-0 flex w-full md:w-auto items-center p-1 bg-[#161719] border border-[#2B2C2F]">
            <button
              onClick={() => setActiveCategory("3 BED")}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                activeCategory === "3 BED"
                  ? "bg-[#C9A875] text-[#080909] shadow-sm font-semibold"
                  : "text-[#A0A0A0] hover:text-[#F4F0E8]"
              } flex-1 px-3 sm:px-6`}
            >
              3 Bed Residences
            </button>
            <button
              onClick={() => setActiveCategory("4 BED")}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                activeCategory === "4 BED"
                  ? "bg-[#C9A875] text-[#080909] shadow-sm font-semibold"
                  : "text-[#A0A0A0] hover:text-[#F4F0E8]"
              } flex-1 px-3 sm:px-6`}
            >
              4 Bed Residences
            </button>
          </div>
        </div>

        {/* Floor Plan Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="residence-card bg-[#111214] border border-[#242528] hover:border-[#C9A875] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {/* Header & Orientation */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A875] font-semibold block mb-1">
                      {plan.category} RESIDENCE
                    </span>
                    <h3
                      className="residence-title text-xl sm:text-2xl font-semibold text-[#F4F0E8] group-hover:text-[#C9A875] transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {plan.typeName}
                    </h3>
                  </div>
                  <div className="flex min-w-0 max-w-full sm:max-w-[44%] items-center gap-1.5 text-[11px] text-[#C5C0B6] font-mono bg-[#18191B] px-2.5 py-1 border border-[#26272A] shrink-0">
                    <Compass className="w-3.5 h-3.5 text-[#C9A875]" />
                    <span className="truncate">{plan.orientation}</span>
                  </div>
                </div>

                <p className="text-xs text-[#A8A49C] font-normal mb-6">
                  {plan.category === "3 BED"
                    ? "A generous three-bedroom layout with room to gather, retreat, and breathe."
                    : "A composed four-bedroom address for unhurried family living and effortless hosting."}
                </p>

                {/* Key Area & Specification Metrics Grid */}
                <div className="residence-metrics grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 bg-[#161719] border border-[#222325] mb-6 text-center">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#8E8E93] block mb-0.5">
                      Saleable Area
                    </span>
                    <span className="metric-value text-xs sm:text-sm font-medium text-[#F4F0E8]">
                      {formatArea(plan.saleableArea).value} <small>{formatArea(plan.saleableArea).unit}</small>
                    </span>
                  </div>
                  <div className="border-l sm:border-x border-[#242528]">
                    <span className="text-[9px] uppercase tracking-wider text-[#8E8E93] block mb-0.5">
                      Carpet Area
                    </span>
                    <span className="metric-value text-xs sm:text-sm font-medium text-[#F4F0E8]">
                      {formatArea(plan.carpetArea).value} <small>{formatArea(plan.carpetArea).unit}</small>
                    </span>
                  </div>
                  <div className="border-t sm:border-t-0 sm:border-r border-[#242528] pt-2 sm:pt-0">
                    <span className="text-[9px] uppercase tracking-wider text-[#8E8E93] block mb-0.5">
                      Bedrooms
                    </span>
                    <span className="metric-value text-xs sm:text-sm font-medium text-[#F4F0E8]">
                      {plan.bedrooms} Bed
                    </span>
                  </div>
                  <div className="border-t sm:border-t-0 border-[#242528] pt-2 sm:pt-0">
                    <span className="text-[9px] uppercase tracking-wider text-[#8E8E93] block mb-0.5">
                      Bathrooms
                    </span>
                    <span className="metric-value text-xs sm:text-sm font-medium text-[#C9A875]">
                      {plan.bathrooms} Bath
                    </span>
                  </div>
                </div>

                <div className="residence-meta text-xs text-[#B8B4AA] font-normal flex items-center justify-between px-1 gap-3">
                  <span>Balcony &amp; Utility: <strong className="text-[#F4F0E8] font-medium">{formatArea(plan.balconyUtilityArea).value} {formatArea(plan.balconyUtilityArea).unit}</strong></span>
                  <span className="text-[#C9A875]">Verified Layout</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 sm:px-8 py-4 bg-[#141517] border-t border-[#222325] flex items-center justify-between gap-4">
                <button
                  onClick={() => handlePlanClick(plan)}
                  className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#F4F0E8] hover:text-[#C9A875] transition-colors cursor-pointer group/btn"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#C9A875] group-hover/btn:scale-110 transition-transform" />
                  <span>VIEW FLOOR PLAN</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(`Residence Enquiry: ${plan.typeName}`)}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A875] hover:text-[#F4F0E8] transition-colors cursor-pointer font-semibold"
                >
                  <span>REQUEST PRICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global floor plan pack CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#888888] mb-3">
            Looking for unit availability or custom architectural layouts?
          </p>
          <button
            onClick={() => onOpenEnquiry("Floor Plan Pack Request")}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer"
          >
            <span>REQUEST COMPLETE FLOOR PLAN PORTFOLIO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <FloorPlanModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
        onEnquire={(ctx) => onOpenEnquiry(ctx)}
      />
    </section>
  );
};
