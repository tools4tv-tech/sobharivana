import React from "react";
import { X, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { CONTRACTUAL_PAYMENT_SCHEDULE, PRICE_LIST_EFFECTIVE } from "../data/projectData";
import { trackEvent } from "../utils/analytics";

interface PaymentScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const PaymentScheduleModal: React.FC<PaymentScheduleModalProps> = ({
  isOpen,
  onClose,
  onEnquire,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080909]/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#111214] border border-[#2D2E32] shadow-2xl flex flex-col text-[#F4F0E8] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#242528] bg-[#151618]">
          <div className="pr-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A875] block mb-1">
              Official Project Schedule · Effective {PRICE_LIST_EFFECTIVE}
            </span>
            <h2
              id="schedule-modal-title"
              className="text-xl sm:text-2xl font-normal text-[#F4F0E8]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Contractual Milestone Payment Schedule
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close payment schedule dialogue"
            className="p-1.5 text-[#888888] hover:text-[#F4F0E8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Milestone Table Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
            The standard payment plan for SOBHA Rivana is structured systematically around audited civil engineering milestones. Below is the official milestone breakdown:
          </p>

          <div className="border border-[#222326] divide-y divide-[#1F2023] bg-[#141517]">
            {CONTRACTUAL_PAYMENT_SCHEDULE.map((item, index) => (
              <div key={index} className="grid grid-cols-12 p-3 sm:p-4 text-xs items-center gap-2">
                <div className="col-span-2 sm:col-span-1 font-mono text-[#555555]">
                  0{index + 1}
                </div>
                <div className="col-span-7 sm:col-span-6 font-medium text-[#F4F0E8]">
                  {item.stage}
                  <span className="block text-[11px] text-[#7E7E84] font-normal sm:hidden mt-0.5">
                    {item.timing}
                  </span>
                </div>
                <div className="hidden sm:block sm:col-span-3 text-[11px] text-[#8E8E93]">
                  {item.timing}
                </div>
                <div className="col-span-3 sm:col-span-2 text-right font-mono font-medium text-[#C9A875] tabular-nums">
                  {item.percentage}
                </div>
              </div>
            ))}
          </div>

          {/* Statutory Disclaimers */}
          <div className="p-4 bg-[#161719] border border-[#242528] space-y-2 text-[11px] text-[#7E7E84] leading-relaxed">
            <div className="flex items-start gap-2 text-[#C9A875]">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="font-medium text-[#C9A875]">Statutory &amp; Legal Terms</span>
            </div>
            <p>
              • Price list effective from 24 March 2026 as per official project documentation.
            </p>
            <p>
              • Applicable Goods and Services Tax (GST), Stamp Duty &amp; Registration charges, Electrification / Infrastructure charges, Water connection, and Maintenance security charges are payable additionally over and above the base consideration as per prevailing statutory laws.
            </p>
            <p>
              • The 30/20/50 payment offer is a promotional staggered finance structure subject to eligibility criteria and approved banking agreements.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#151618] border-t border-[#242528] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#888888] font-mono">
            RERA: UPRERAPRJ313638/03/2026
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors"
            >
              Enquire For Full Cost Sheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
