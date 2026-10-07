import React, { useState } from "react";
import heroTowerImg from "../assets/images/sobha_rivana_hero_tower_1790589259918.jpg";
import swimmingPoolImg from "../assets/images/Swimming Pool.webp";
import livingRoomImg from "../assets/images/sobha_rivana_luxury_living_1790589292241.jpg";
import clubhouseImg from "../assets/images/sobha_rivana_clubhouse_1790589305992.jpg";
import craftImg from "../assets/images/sobha_quality_craftsmanship_1790589322407.jpg";
import bedroomImg from "../assets/images/sobha_bedroom_suite_1790589347849.jpg";
import eveningTowerImg from "../assets/images/sobha_tower_evening_1790589381247.jpg";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Architecture" | "Interiors" | "Amenities" | "Landscape";
  image: string;
  aspect: "landscape" | "tall" | "wide";
  caption: string;
}

export const SectionGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "g1",
      title: "Exterior",
      category: "Architecture",
      image: heroTowerImg,
      aspect: "wide",
      caption: "Exterior",
    },
    {
      id: "g2",
      title: "Waterway & Pool",
      category: "Amenities",
      image: swimmingPoolImg,
      aspect: "landscape",
      caption: "Waterway",
    },
    {
      id: "g3",
      title: "Residence Interior",
      category: "Interiors",
      image: livingRoomImg,
      aspect: "landscape",
      caption: "Residence",
    },
    {
      id: "g4",
      title: "Clubhouse",
      category: "Amenities",
      image: clubhouseImg,
      aspect: "landscape",
      caption: "Clubhouse",
    },
    {
      id: "g5",
      title: "Master Suite",
      category: "Interiors",
      image: bedroomImg,
      aspect: "landscape",
      caption: "Master Suite",
    },
    {
      id: "g6",
      title: "Evening Skyline",
      category: "Architecture",
      image: eveningTowerImg,
      aspect: "landscape",
      caption: "Skyline",
    },
    {
      id: "g7",
      title: "Craftsmanship",
      category: "Architecture",
      image: craftImg,
      aspect: "landscape",
      caption: "Craftsmanship",
    },
  ];

  const categories = ["All", "Architecture", "Interiors", "Amenities", "Landscape"];

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#080909] border-b border-[#1E1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#222222]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C9A875]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A875] font-semibold">
                Visual Portfolio
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F0E8] tracking-wide"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Rivana Gallery
            </h2>
            <p className="text-base text-[#D0CBC0] font-normal mt-2.5 max-w-[600px] leading-relaxed">
              Curated perspectives of architecture, interiors, landscape, and amenities.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1 p-1 bg-[#141517] border border-[#242528]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedFilter === cat
                      ? "bg-[#C9A875] text-[#080909] font-medium"
                      : "text-[#8E8E93] hover:text-[#F4F0E8]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="relative group overflow-hidden border border-[#222326] bg-[#121315] cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080909]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Corner Expand Icon */}
                <div className="absolute top-4 right-4 p-2 bg-[#080909]/70 backdrop-blur-sm text-[#F4F0E8] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#C9A875]" />
                </div>

                {/* Bottom Caption Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                 
                  <h3
                    className="text-base font-normal text-[#ece8df] group-hover:text-[#C9A875] transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Gallery Lightbox */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#080909]/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-50 p-2 text-[#A0A0A0] hover:text-[#F4F0E8] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-[#161719]/80 text-[#F4F0E8] hover:text-[#C9A875] transition-colors border border-[#2B2C2E]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-[#161719]/80 text-[#F4F0E8] hover:text-[#C9A875] transition-colors border border-[#2B2C2E]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Visual Presentation */}
          <div className="max-w-6xl max-h-[85vh] p-4 sm:p-6 flex flex-col items-center">
            <img
              src={filteredItems[activeImageIndex].image}
              alt={filteredItems[activeImageIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain border border-[#2B2C2E]"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase font-mono tracking-widest text-[#C9A875]">
                {filteredItems[activeImageIndex].category} · {activeImageIndex + 1} of {filteredItems.length}
              </span>
              <h4
                className="text-xl sm:text-2xl font-normal text-[#F4F0E8] mt-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {filteredItems[activeImageIndex].title}
              </h4>
              <p className="text-xs text-[#A0A0A0] font-light mt-1 max-w-xl">
                {filteredItems[activeImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
