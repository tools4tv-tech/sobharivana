// Floor Plans and Residence Configurations for SOBHA Rivana
// Derived strictly from verified project documents and floor-plan specifications

export interface FloorPlan {
  id: string;
  category: "3 BED" | "4 BED";
  typeName: string;
  subTitle: string;
  saleableArea: string;
  carpetArea: string;
  balconyUtilityArea: string;
  bedrooms: number;
  bathrooms: number;
  orientation: string;
  highlights: string[];
  schematicSvg: string; // Vector floorplan architectural representation
}

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: "3b-c1",
    category: "3 BED",
    typeName: "3 Bed Residence Grande — Type C1",
    subTitle: "Well-proportioned 3-bedroom residence with cross-ventilated living space",
    saleableArea: "1,982.91 sq.ft.",
    carpetArea: "1,082.86 sq.ft.",
    balconyUtilityArea: "228.84 sq.ft.",
    bedrooms: 3,
    bathrooms: 3,
    orientation: "East-West Cross Ventilation",
    highlights: [
      "Generous living and dining area opening directly to a private balcony",
      "Master bedroom with dedicated study corner and wardrobe space",
      "Thoughtfully planned kitchen with separate utility and wash area",
      "Defined wet and dry separation in bathrooms",
      "Vastu-compliant entrance foyer layout",
    ],
    schematicSvg: "type-c1",
  },
  {
    id: "3b-c2",
    category: "3 BED",
    typeName: "3 Bed Residence Premier — Type C2",
    subTitle: "Corner 3-bedroom residence with open landscape orientation",
    saleableArea: "2,145.30 sq.ft.",
    carpetArea: "1,176.40 sq.ft.",
    balconyUtilityArea: "244.50 sq.ft.",
    bedrooms: 3,
    bathrooms: 3,
    orientation: "North-East Corner View",
    highlights: [
      "Dual-aspect corner positioning maximizing natural light and airflow",
      "Master suite with spacious washroom and dressing area",
      "Well-appointed powder room for guests",
      "Kitchen with ample counter space and dedicated dry utility zone",
      "Well-separated bedrooms ensuring family privacy",
    ],
    schematicSvg: "type-c2",
  },
  {
    id: "4b-d1",
    category: "4 BED",
    typeName: "4 Bed Residence Luxe — Type D1",
    subTitle: "Expansive 4-bedroom residence designed for multi-generational living",
    saleableArea: "2,685.20 sq.ft.",
    carpetArea: "1,475.60 sq.ft.",
    balconyUtilityArea: "310.50 sq.ft.",
    bedrooms: 4,
    bathrooms: 4,
    orientation: "Dual Aspect Panoramic",
    highlights: [
      "Spacious living and dining layout with separate family lounge area",
      "Primary master suite with walk-in wardrobe space and en-suite bath",
      "Dedicated staff room with independent service access",
      "Deep continuous balcony connecting living and dining areas",
      "Large glazed window openings welcoming natural cross-breezes",
    ],
    schematicSvg: "type-d1",
  },
  {
    id: "4b-d2",
    category: "4 BED",
    typeName: "4 Bed Presidential Residence — Type D2",
    subTitle: "Large 4-bedroom residence offering expansive floor area and panoramic vistas",
    saleableArea: "2,715.00 sq.ft.",
    carpetArea: "1,510.40 sq.ft.",
    balconyUtilityArea: "335.80 sq.ft.",
    bedrooms: 4,
    bathrooms: 5,
    orientation: "Panoramic Skyline & Parkland View",
    highlights: [
      "Private entry foyer welcoming residents into expansive living quarters",
      "Master suite featuring attached private balcony and study area",
      "Well-zoned kitchen with wet preparation counter and utility deck",
      "All bedrooms equipped with dedicated en-suite bathrooms",
      "Balanced spatial flow ensuring privacy and cross ventilation",
    ],
    schematicSvg: "type-d2",
  },
];
