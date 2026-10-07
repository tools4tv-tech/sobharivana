// Analytics & Tracking Layer for SOBHA Rivana
// Supports GA4, GTM, Meta Pixel, and UTM URL query extraction

import { GA_MEASUREMENT_ID, META_PIXEL_ID } from "../data/projectData";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "enquiry_popup_open"
  | "enquiry_popup_close"
  | "form_start"
  | "form_submit"
  | "site_visit_click"
  | "phone_click"
  | "whatsapp_click"
  | "floor_plan_view"
  | "payment_schedule_view"
  | "price_request"
  | "scroll_50"
  | "scroll_75"
  | "scroll_90";

export interface UtmParameters {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  landing_page: string;
}

export const getUtmParameters = (): UtmParameters => {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      gclid: "",
      landing_page: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "organic",
    utm_medium: params.get("utm_medium") || "direct",
    utm_campaign: params.get("utm_campaign") || "sobha_rivana_launch",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    landing_page: window.location.pathname + window.location.search,
  };
};

export const trackEvent = (eventName: AnalyticsEvent, payload?: Record<string, unknown>) => {
  const enrichedPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
    event_category: "Lead Generation",
    project: "SOBHA Rivana",
  };

  // Google Analytics 4
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, {
      send_to: GA_MEASUREMENT_ID,
      ...enrichedPayload,
    });
  }

  // Google Tag Manager dataLayer
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedPayload,
    });
  }

  // Meta Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, enrichedPayload);
  }

  // Dev diagnostic log
  if (process.env.NODE_ENV !== "production") {
    // Quietly log event for verification without UI clutter
    console.debug(`[Analytics:${eventName}]`, enrichedPayload);
  }
};
