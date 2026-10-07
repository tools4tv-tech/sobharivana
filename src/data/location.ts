// Location & Arterial Connectivity for SOBHA Rivana, Sector 1, Greater Noida

export interface ConnectivityPoint {
  id: string;
  name: string;
  category: "Expressway" | "Corridor" | "Transit & Aviation" | "Commercial Hub";
  detail: string;
}

export const CONNECTIVITY_HIGHLIGHTS: ConnectivityPoint[] = [
  {
    id: "char-murti",
    name: "Char Murti Chowk",
    category: "Commercial Hub",
    detail: "Primary regional intersection connecting Greater Noida West, Noida, and Ghaziabad.",
  },
  {
    id: "fng",
    name: "FNG Expressway",
    category: "Expressway",
    detail: "Regional connectivity via the Faridabad–Noida–Ghaziabad expressway corridor.",
  },
  {
    id: "noida-gn-exp",
    name: "Noida–Greater Noida Expressway",
    category: "Expressway",
    detail: "Arterial link to commercial centers, corporate parks, and institutional districts.",
  },
  {
    id: "nh9",
    name: "NH-9",
    category: "Corridor",
    detail: "Direct regional connectivity towards East Delhi and the wider National Capital Region.",
  },
  {
    id: "yamuna-exp",
    name: "Yamuna Expressway",
    category: "Expressway",
    detail: "Corridor connecting Greater Noida with upcoming regional nodes and Southern NCR.",
  },
  {
    id: "delhi-dnd",
    name: "Delhi / DND Flyway",
    category: "Corridor",
    detail: "Vehicular access towards South and Central Delhi via arterial city connectors.",
  },
  {
    id: "jewar-airport",
    name: "Noida International Airport (Jewar)",
    category: "Transit & Aviation",
    detail: "Regional aviation and logistics hub being developed to serve Greater Noida and NCR.",
  },
];

export const LOCATION_COORDINATES = {
  address: "Sector 1, Greater Noida (West), Uttar Pradesh 201306",
  lat: 28.5985,
  lng: 77.4475,
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.238495029352!2d77.4350!3d28.5985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6777a83709%3A0xb1b643a6d713c7bb!2sSector%201%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711280000000!5m2!1sen!2sin",
};
