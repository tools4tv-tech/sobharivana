import React, { useState } from "react";
import {
  Building2,
  Waves,
  Dumbbell,
  Trophy,
  Smile,
  Trees,
  Users2,
  Check,
} from "lucide-react";
import { trackEvent } from "../utils/analytics";

interface SectionAmenitiesProps {
  onOpenEnquiry: (context?: string) => void;
}

export const SectionAmenities: React.FC<SectionAmenitiesProps> = ({ onOpenEnquiry }) => {
  const amenityCategories = [
    {
      id: "clubhouse",
      icon: Building2,
      name: "Clubhouse",
      highlight: "35,000 Sq. Ft.",
      items: ["Grand Banquet Hall", "Social Lounge & Cafe", "Multi-Activity Rooms"],
    },
    {
      id: "pool",
      icon: Waves,
      name: "Swimming Pool",
      highlight: "Lap Pool & Deck",
      items: ["Outdoor Lap Pool", "Kids' Splash Pool", "Timber Sun Decks"],
    },
    {
      id: "fitness",
      icon: Dumbbell,
      name: "Fitness & Wellness",
      highlight: "Health & Vitality",
      items: ["Equipped Gymnasium", "Yoga & Aerobics Room", "Steam & Sauna Rooms"],
    },
    {
      id: "sports",
      icon: Trophy,
      name: "Sports & Recreation",
      highlight: "Active Living",
      items: ["Indoor Badminton", "Squash Court", "Tennis Courts & Cricket Net"],
    },
    {
      id: "kids",
      icon: Smile,
      name: "Kids' Spaces",
      highlight: "Safe Play Zones",
      items: ["Children's Play Area", "Splash Pool", "Skating Track & Turf"],
    },
    {
      id: "landscape",
      icon: Trees,
      name: "Landscaped Areas",
      highlight: "80% Open Expanse",
      items: ["~350m Waterway", "Jogging & Walking Track", "Central Green Lawns"],
    },
    {
      id: "community",
      icon: Users2,
      name: "Community Spaces",
      highlight: "Social & Work",
      items: ["Executive Co-working", "Reading Lounge", "Open Amphitheatre"],
    },
  ];

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#0C0D0E] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Amenities
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              40+ Amenities
            </h2>
            <p className="text-base text-[#D0CBC0] font-normal mt-2.5 max-w-[620px] leading-[1.6]">
              Thoughtfully planned spaces for fitness, recreation, wellness, and community living.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => {
                trackEvent("hero_cta_click", { action: "request_amenities_list" });
                onOpenEnquiry("Full Amenities Directory Request");
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#080909] bg-[#C9A875] hover:bg-[#B99662] transition-colors cursor-pointer"
            >
              Request Full Directory
            </button>
          </div>
        </div>

        {/* Visual Cards Grid per Requirement 13 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {amenityCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-6 bg-[#111214] border border-[#242528] hover:border-[#C9A875]/70 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-[#18191B] border border-[#2B2C2E] text-[#C9A875]">
                      <Icon className="w-5 h-5 text-[#C9A875]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C9A875]">
                      {cat.highlight}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-semibold text-[#F4F0E8] mb-3 group-hover:text-[#C9A875] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {cat.name}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-[#A8A49C]">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-[#C9A875] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
