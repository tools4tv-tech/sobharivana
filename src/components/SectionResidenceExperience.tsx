import React from "react";
import livingRoomImg from "../assets/images/sobha_rivana_luxury_living_1790589292241.jpg";
import bedroomImg from "../assets/images/sobha_bedroom_suite_1790589347849.jpg";

export const SectionResidenceExperience: React.FC = () => {
  const featureCards = [
    {
      title: "Spacious Bedrooms",
      desc: "Designed for comfort, privacy, and natural light.",
    },
    {
      title: "Private Balconies",
      desc: "Extended outdoor living connected to main rooms.",
    },
    {
      title: "Functional Kitchens",
      desc: "Thoughtfully planned layouts with separate utility.",
    },
    {
      title: "Master Suite",
      desc: "Private quarters with dedicated study and wardrobe space.",
    },
    {
      title: "Natural Light & Airflow",
      desc: "Dual-aspect window openings for cross ventilation.",
    },
    {
      title: "Zoned Bathrooms",
      desc: "Clear separation between shower and dry vanity zones.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080909] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A875]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
              The Residence Experience
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] tracking-wide"
            style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}
          >
            Space, Shaped With Intention
          </h2>
          <p className="text-base text-[#D0CBC0] font-normal mt-2.5 max-w-[620px] leading-[1.6]">
            Thoughtfully planned layouts balancing daily comfort, natural light, and family privacy.
          </p>
        </div>

        {/* Feature Cards Grid (Compact & Easy to scan per Requirement 12) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-[#111214] border border-[#222325] hover:border-[#C9A875]/70 transition-colors"
            >
              <h3 className="text-base font-semibold text-[#F4F0E8] mb-1.5 font-serif">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A49C] font-normal leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Dual Image Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden border border-[#26272A] group">
            <img
              src={livingRoomImg}
              alt="Living and dining space inside SOBHA Rivana"
              className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-[#ece8df] font-medium">
              Living &amp; Dining Area
            </div>
          </div>

          <div className="relative overflow-hidden border border-[#26272A] group">
            <img
              src={bedroomImg}
              alt="Master bedroom with study area"
              className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-wider text-[#ece8df] font-medium">
              Master Bedroom Suite
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
