import React from "react";

export const SectionProjectAtAGlance: React.FC = () => {
  const verifiedMetrics = [
    {
      figure: "11.76",
      unit: "ACRES",
      label: "Project Area",
    },
    {
      figure: "8",
      unit: "TOWERS",
      label: "Residential Towers",
    },
    {
      figure: "1,364",
      unit: "RESIDENCES",
      label: "3 & 4 Bed Residences",
    },
    {
      figure: "35,000",
      unit: "SQ. FT.",
      label: "Clubhouse",
    },
    {
      figure: "40+",
      unit: "AMENITIES",
      label: "Lifestyle & Recreation",
    },
    {
      figure: "1,752 - 2,715",
      unit: "SQ. FT.",
      label: "Residence Area Range",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Project At A Glance
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#171717] tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Master Specifications
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs uppercase tracking-[0.2em] text-[#A8A49C] font-mono">
            RERA: UPRERAPRJ313638/03/2026
          </p>
        </div>

        {/* Unboxed Editorial Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-y-12 gap-x-8 lg:gap-x-12">
          {verifiedMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between pt-4 border-t border-[#222325] hover:border-[#C9A875] transition-colors duration-300"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
                  <span
                    className={`text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight tabular-nums ${idx === 5 ? "whitespace-nowrap text-2xl sm:text-4xl lg:text-5xl" : ""}`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {metric.figure}
                  </span>
                  <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#C9A875]">
                    {metric.unit}
                  </span>
                </div>
                <h3 className="text-sm uppercase tracking-wider text-[#716e68] font-medium">
                  {metric.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
