import type { Metadata } from "next";

export const BASE_URL = "https://xentnexai.com.au";
export const CALENDLY_URL = "https://calendly.com/xentnexai";
export const FORMSPREE_ID = "xlgorlke";

export const SITE_NAME = "XentnexAI";
export const DEFAULT_DESCRIPTION =
  "XentnexAI delivers AI Lead Generation, AI Voice Agents, and GEO Audit Reports for Sunshine Coast businesses. Automate growth with local AI expertise.";

export function buildMetadata(overrides: {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const { title, description = DEFAULT_DESCRIPTION, path = "", ogImage } = overrides;
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? `${BASE_URL}/og-default.png`;

  return {
    title: `${title} | ${SITE_NAME} — Sunshine Coast AI Agency`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
