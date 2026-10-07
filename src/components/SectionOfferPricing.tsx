import React, { useState } from "react";
import { CURRENT_STARTING_PRICE } from "../data/projectData";
import { PaymentScheduleModal } from "./PaymentScheduleModal";
import { trackEvent } from "../utils/analytics";
import { FileText, Sparkles } from "lucide-react";

interface SectionOfferPricingProps {
  onOpenEnquiry: (context?: string) => void;
}

export const SectionOfferPricing: React.FC<SectionOfferPricingProps> = ({ onOpenEnquiry }) => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const offerTranches = [
    { percentage: "30%", label: "NOW", note: "Booking & initial stage" },
    { percentage: "20%", label: "DURING 2028 & 2029", note: "Construction-linked milestone" },
    { percentage: "50%", label: "ON COMPLETION", note: "On intimation of possession" },
  ];

  return (
    <section id="offer" className="py-20 sm:py-28 bg-[#0A0B0C] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#C9A875]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
              Campaign Offer
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] tracking-wide mb-3"
            style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}
          >
            LIMITED-PERIOD PAYMENT OFFER
          </h2>

          <p className="text-base text-[#D0CBC0] font-normal leading-relaxed">
            Staggered milestone payment opportunity for 3 &amp; 4 Bed Residences.
          </p>
        </div>

        {/* 30 / 20 / 50 Staggered Visual per Requirement 20 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {offerTranches.map((tranche, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#121316] border border-[#2B2D31] hover:border-[#C9A875] transition-all text-center flex flex-col justify-between"
            >
              <div>
                <span
                  className="text-5xl sm:text-6xl font-light text-[#F4F0E8] tabular-nums block mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {tranche.percentage}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C9A875] font-semibold block mb-2">
                  {tranche.label}
                </span>
                <p className="text-xs text-[#A8A49C] font-normal">
                  {tranche.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price & Action Box per Requirement 21 */}
        <div className="bg-[#141518] border border-[#2B2D31] p-6 sm:p-10 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A875] font-semibold block mb-1">
                Starting Price
              </span>
              <div
                className="text-4xl sm:text-5xl font-normal text-[#f0e8d8] tracking-tight tabular-nums"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {CURRENT_STARTING_PRICE} Onwards
              </div>
              <p className="text-xs text-[#8E8E93] pt-1.5 font-normal">
                3 &amp; 4 Bed Residences · Sector 1, Greater Noida
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => {
                  trackEvent("price_request", { action: "check_eligibility" });
                  onOpenEnquiry("Check Payment Plan Eligibility");
                }}
                className="w-full sm:w-auto px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer text-center"
              >
                CHECK ELIGIBILITY
              </button>

              <button
                onClick={() => {
                  trackEvent("payment_schedule_view", { action: "view_schedule_modal" });
                  setIsScheduleOpen(true);
                }}
                className="payment-schedule-button w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#F4F0E8] border border-[#333336] hover:border-[#C9A875] transition-colors cursor-pointer text-center"
              >
                <FileText className="payment-schedule-icon w-3.5 h-3.5 text-[#e3dcd2]" />
                <span>VIEW PAYMENT SCHEDULE</span>
              </button>
            </div>
          </div>

          <p className="text-[11px] text-[#7E7E84] mt-5 pt-4 border-t border-[#222326] leading-relaxed">
            *Price, availability, taxes, registration and other applicable charges are subject to project terms and may change. The 30/20/50 graphic illustrates a campaign offer and is subject to banking approval and contractual milestones.
          </p>
        </div>
      </div>

      {/* Contractual Payment Schedule Lightbox */}
      <PaymentScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onEnquire={() => onOpenEnquiry("Detailed Payment Schedule Request")}
      />
    </section>
  );
};
