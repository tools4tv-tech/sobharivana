// Configuration and Official Project Constants for SOBHA Rivana
// All information strictly derived from official SOBHA material

export const CURRENT_STARTING_PRICE = "₹2.74 Cr.*";
export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || "+91 9800001645";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "+918010009002";
export const FORM_API_ENDPOINT = import.meta.env.VITE_FORM_API_ENDPOINT || "https://formsubmit.co/ajax/bhavya.tierravista@gmail.com";
export const RERA_REGISTRATION = "UPRERAPRJ313638/03/2026";
export const AGENT_RERA_REGISTRATION = "UPRERAAGT24612";
export const LAUNCH_DATE = "25-03-2026";
export const PRICE_LIST_EFFECTIVE = "24 March 2026";

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-SOBHARIVANA";
export const GTM_ID = import.meta.env.VITE_GTM_ID || "GTM-RIVANA";
export const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || "SOBHA_PIXEL_DEFAULT";

export const HERO_VIDEO_PATH =
  import.meta.env.VITE_HERO_VIDEO_URL || "/assets/videos/Rivana Revealer Film with RERA.mp4";

export interface ProjectStat {
  value: string;
  label: string;
  detail: string;
}

export const PROJECT_STATS: ProjectStat[] = [
  {
    value: "11.76",
    label: "ACRES",
    detail: "Approximate expansive project area",
  },
  {
    value: "8",
    label: "TOWERS",
    detail: "Majestic high-rise architectural landmarks",
  },
  {
    value: "1,364",
    label: "RESIDENCES",
    detail: "Exclusively planned luxury units",
  },
  {
    value: "35,000",
    label: "SQ. FT.",
    detail: "Signature lifestyle clubhouse pavilion",
  },
  {
    value: "40+",
    label: "AMENITIES",
    detail: "Curated lifestyle, sports & nature experiences",
  },
  {
    value: "80%",
    label: "OPEN CAMPUS",
    detail: "Dedicated to lush greenery & recreation",
  },
];

export interface PaymentMilestone {
  stage: string;
  percentage: string;
  timing: string;
}

export const CONTRACTUAL_PAYMENT_SCHEDULE: PaymentMilestone[] = [
  { stage: "Booking Application Amount", percentage: "9%", timing: "At the time of booking application" },
  { stage: "Allotment Milestone", percentage: "15%", timing: "Within 30 days of booking" },
  { stage: "First Installment", percentage: "5%", timing: "Within 60 days of booking" },
  { stage: "Second Installment", percentage: "5%", timing: "Within 90 days of booking" },
  { stage: "Raft / Foundation Completion", percentage: "10%", timing: "Upon completion of foundation raft" },
  { stage: "5th Floor Slab Casting", percentage: "10%", timing: "Upon completion of 5th floor roof slab" },
  { stage: "15th Floor Slab Casting", percentage: "10%", timing: "Upon completion of 15th floor roof slab" },
  { stage: "25th Floor Slab Casting", percentage: "10%", timing: "Upon completion of 25th floor roof slab" },
  { stage: "Terrace Slab Completion", percentage: "10%", timing: "Upon completion of top terrace structure" },
  { stage: "Flooring & Internal Plastering", percentage: "10%", timing: "Upon finishing of internal plastering & tile flooring" },
  { stage: "Notice of Possession", percentage: "6%", timing: "On intimation of possession & final handover" },
];

export const CAMPAIGN_OFFER = {
  title: "A Smarter Financial Journey",
  subtitle: "Make A WORLD ABOVE THE REST Yours with a limited-period offer.",
  tranches: [
    {
      percentage: "30%",
      label: "NOW",
      description: "Enjoy payment holiday during initial construction phase",
    },
    {
      percentage: "20%",
      label: "DURING 2028 & 2029",
      description: "Construction-linked milestone payment scheme",
    },
    {
      percentage: "50%",
      label: "ON COMPLETION",
      description: "Pay remaining balance on final possession and handover",
    },
  ],
  supportingNote: "Calculated as per the staggered payment plan.",
  disclaimer:
    "*Offer, terms and conditions subject to applicable project documentation and prevailing terms. Please verify the latest payment plan and offer with the authorised sales representative.",
};

export const SOBHA_LEGACY_DATA = {
  tagline: "Passion. Inked with Perfection.",
  headline: "Perfection, Inevitably Yours.",
  establishedYear: "1995",
  projectsCompleted: "581+",
  totalAreaDeveloped: "150.13 Million Sq. Ft.",
  qualityChecksCount: "1,456",
  nationalFootprint: "27 Cities in 14 States",
  workforce: "15,650+",
  awards: "265+ Prestigious Awards",
  backwardIntegrationNote:
    "SOBHA introduced Backward Integration — a first-of-its-kind philosophy where every discipline, from engineering to interiors, is mastered in-house.",
  harvardCaseStudy: "Featured as a landmark Harvard Business School case study on uncompromised operational excellence.",
};
