// SOBHA Rivana Curated Amenities Directory
// Organized strictly into documented categories: The Club, Outdoor Experiences, Kids' World

export interface AmenityCategory {
  id: string;
  name: string;
  headline: string;
  description: string;
  items: string[];
}

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: "the-club",
    name: "The Club",
    headline: "35,000 Sq. Ft. Clubhouse Pavilion",
    description:
      "A comprehensive clubhouse offering social, fitness, recreation, and wellness spaces for residents of all ages.",
    items: [
      "35,000 sq.ft. Clubhouse Pavilion",
      "Grand Banquet Hall & Pre-Function Space",
      "Co-working Lounge & Meeting Rooms",
      "Library & Reading Lounge",
      "Residents' Social Lounge & Cafe",
      "Fully Equipped Gymnasium & Fitness Centre",
      "Steam & Sauna Rooms",
      "Yoga & Aerobics Room",
      "Indoor Games Room (Billiards & Table Tennis)",
      "Badminton Courts",
      "Squash Court",
      "Multipurpose Activity Rooms",
    ],
  },
  {
    id: "outdoor-experiences",
    name: "Outdoor Experiences",
    headline: "Landscaped Campus & Active Recreation",
    description:
      "An 11.76-acre master-planned campus where approximately 80% open space is dedicated to greenery, water elements, and sports.",
    items: [
      "Approx. 350m Landscaped Waterway",
      "Lap Swimming Pool & Sun Deck",
      "Tennis Courts",
      "Cricket Practice Pitch",
      "Jogging & Walking Track",
      "Central Landscaped Lawns",
      "Outdoor Seating Pavilions",
      "Open-Air Amphitheatre",
      "Reflexology Walkway",
      "Dedicated Pet Zone",
      "Outdoor Fitness Station",
    ],
  },
  {
    id: "kids-world",
    name: "Kids' World",
    headline: "Dedicated Play & Activity Zones",
    description:
      "Thoughtfully planned outdoor and indoor zones where children can safely play, learn, and socialize.",
    items: [
      "Kids' Splash Pool",
      "Children's Outdoor Play Equipment",
      "Soft-Paved Play Area",
      "Indoor Activity & Hobby Room",
      "Skating Area",
      "Toddler Play Zone",
    ],
  },
];

export interface FeaturedAmenity {
  id: string;
  title: string;
  category: string;
  description: string;
  metric: string;
}

export const FEATURED_AMENITIES: FeaturedAmenity[] = [
  {
    id: "rivulet",
    title: "Approx. 350m Waterway",
    category: "Waterway",
    description: "A defining water feature coursing through the central landscaped campus.",
    metric: "~350 Metres",
  },
  {
    id: "clubhouse",
    title: "The Clubhouse Pavilion",
    category: "Clubhouse",
    description: "35,000 sq.ft. dedicated to wellness, recreation, fitness and community life.",
    metric: "35,000 Sq. Ft.",
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool & Deck",
    category: "Recreation",
    description: "Outdoor lap swimming pool accompanied by a kids' splash pool and timber deck.",
    metric: "Lap Pool",
  },
  {
    id: "open-greens",
    title: "80% Open Masterplan",
    category: "Campus",
    description: "Expansive open areas dedicated to greenery, landscaped pathways, and outdoor recreation.",
    metric: "80% Open",
  },
];
