import React from "react";

export const SectionRivanaStory: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0C0D0E] border-y border-[#1E1F21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Motif Visual Carrier (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Concentric subtle rings */}
              <div className="absolute inset-0 rounded-full border border-[#262626]/60 animate-pulse duration-3000" />
              <div className="absolute inset-6 rounded-full border border-[#C9A875]/20" />
              <div className="absolute inset-16 rounded-full border border-[#C9A875]/40" />

              {/* Four Inward Graceful Curves Motif (The Rivana Geometry) */}
              <svg
                viewBox="0 0 200 200"
                className="w-48 h-48 sm:w-56 sm:h-56 text-[#C9A875]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Curve 1: Top Right inward */}
                <path
                  d="M100 20 C144 20 180 56 180 100 C150 100 120 100 100 100"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-90"
                />
                {/* Curve 2: Bottom Right inward */}
                <path
                  d="M180 100 C180 144 144 180 100 180 C100 150 100 120 100 100"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-90"
                />
                {/* Curve 3: Bottom Left inward */}
                <path
                  d="M100 180 C56 180 20 144 20 100 C50 100 80 100 100 100"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-90"
                />
                {/* Curve 4: Top Left inward */}
                <path
                  d="M20 100 C20 56 56 20 100 20 C100 50 100 80 100 100"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="opacity-90"
                />

                {/* Central waterdrop node representing the rivulet */}
                <circle cx="100" cy="100" r="5" fill="#C9A875" />
                <circle cx="100" cy="100" r="14" stroke="#C9A875" strokeWidth="0.75" strokeDasharray="2 3" />
              </svg>

              {/* Subdued corner coordinates */}
              <span className="absolute top-2 left-2 text-[10px] font-mono tracking-widest text-[#555555]">
                MOTIF // 01
              </span>
              <span className="absolute bottom-2 right-2 text-[10px] font-mono tracking-widest text-[#C9A875]/80">
                RIVULET INSPIRATION
              </span>
            </div>
          </div>

          {/* Narrative Content (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Project Story
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] leading-tight"
              style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}
            >
              RIVANA
            </h2>

            <p className="text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug max-w-[620px]">
              A distinctive residential address shaped by refined architecture, open spaces and a thoughtfully planned lifestyle.
            </p>

            <p className="text-base text-[#D0CBC0] font-normal leading-[1.65] max-w-[600px]">
              Drawing inspiration from the natural flow of water, the four graceful curves of the Rivana motif reflect spatial harmony between residential towers, landscaped gardens, and vibrant community living.
            </p>

            <div className="pt-4 flex flex-wrap gap-8 text-xs uppercase tracking-[0.2em] text-[#A8A49C] font-medium border-t border-[#222326]">
              <div>
                <span className="text-[#F4F0E8] block text-sm font-semibold">Waterway Inspired</span>
                <span className="text-[12px] text-[#A8A49C]">Natural Flow</span>
              </div>
              <div className="w-[1px] h-8 bg-[#2A2A2D]" />
              <div>
                <span className="text-[#F4F0E8] block text-sm font-semibold">Four Curves</span>
                <span className="text-[12px] text-[#A8A49C]">Spatial Harmony</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
