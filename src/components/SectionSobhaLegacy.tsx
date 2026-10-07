import React from "react";
import craftImg from "../assets/images/sobha_quality_craftsmanship_1790589322407.jpg";
import { ShieldCheck, Layers, BookOpen } from "lucide-react";

export const SectionSobhaLegacy: React.FC = () => {
  const legacyMetrics = [
    { figure: "581+", label: "Projects Delivered" },
    { figure: "150.13M+", label: "Sq. Ft. Encompassed" },
    { figure: "1,456", label: "Quality Checks" },
    { figure: "265+", label: "Awards & Recognitions" },
    { figure: "15,650+", label: "In-House Workforce" },
    { figure: "27", label: "Cities" },
    { figure: "14", label: "States" },
  ];

  const backwardSteps = [
    { step: "01", title: "Design" },
    { step: "02", title: "Engineering" },
    { step: "03", title: "Manufacturing" },
    { step: "04", title: "Glazing & Metal" },
    { step: "05", title: "Interiors" },
    { step: "06", title: "1,456 Checks" },
    { step: "07", title: "Handover" },
  ];

  return (
    <section id="legacy" className="py-20 sm:py-28 bg-[#080909] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 17: SOBHA Legacy */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A875]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
              The SOBHA Legacy
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] tracking-wide mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Perfection, Inevitably Yours.
          </h2>
          <p className="text-base text-[#D0CBC0] font-normal leading-relaxed max-w-[620px]">
            Established in 1995, SOBHA is trusted nationwide for uncompromising craftsmanship, engineering control, and on-time delivery.
          </p>
        </div>

        {/* Statistics Grid per Requirement 17 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-20 pb-12 border-b border-[#222325]">
          {legacyMetrics.map((stat, idx) => (
            <div key={idx} className="p-3 bg-[#111214] border border-[#202123]">
              <span
                className="text-2xl sm:text-3xl font-normal text-[#F4F0E8] block mb-1 tabular-nums"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {stat.figure}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#C9A875] font-medium block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section 18: Backward Integration (approx 40-50 words per Requirement 18) */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A875] font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C9A875]" />
                Backward Integration
              </span>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[#F4F0E8]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Built With In-House Control.
              </h3>
              <p className="text-base text-[#D0CBC0] font-normal leading-[1.65] max-w-[600px]">
                SOBHA’s backward-integration model ensures every key stage of development — from architectural design and structural engineering to precast concrete, metal glazing, and interior joinery — is managed in-house to maintain rigorous standards of durability and finish.
              </p>
            </div>

            {/* Harvard Business School Case Study Card */}
            <div className="lg:col-span-5 bg-[#121316] border border-[#2B2D31] p-5 sm:p-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-[#C9A875]/10 text-[#C9A875] shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A875] block mb-1">
                    Harvard Business School
                  </span>
                  <p className="text-xs text-[#C5C0B6] font-normal leading-relaxed">
                    Documented as a landmark study on supply-chain mastery, captive manufacturing, and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Backward Integration Sequence */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {backwardSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#111214] border border-[#222325] text-center"
              >
                <span className="text-[10px] font-mono text-[#C9A875] block mb-0.5">
                  {item.step}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#F4F0E8] font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 19: Quality (Extremely simple per Requirement 19) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#222325]">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A875] font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A875]" />
              QUALITY
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className="text-4xl sm:text-5xl font-normal text-[#F4F0E8] tabular-nums"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                1,456
              </span>
              <span className="text-xs uppercase tracking-wider text-[#C9A875] font-semibold">
                Rigorous Checks
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#D0CBC0] font-normal leading-[1.6]">
              Quality is integrated across key stages of the development and handover process.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden border border-[#26272A] h-52 sm:h-60 group">
              <img
                src={craftImg}
                alt="Precision craftsmanship and captive manufacturing at SOBHA"
                className="w-full h-full object-cover object-center filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-[#e2dfd7] font-mono">
                Captive Manufacturing &amp; Structural Precision
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
