import type { Metadata } from "next";
import { BUSINESS } from "./constants";

type MetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
};

const defaultTitle = `${BUSINESS.name} | Modern Comfort Food Restaurant`;
const defaultDescription = `${BUSINESS.name} Restaurant in ${BUSINESS.city} serves premium comfort food favorites for dine-in, takeout, quick delivery, and casual reservations.`;

export function createMetadata(options: MetadataOptions = {}): Metadata {
  const title = options.title ?? defaultTitle;
  const description = options.description ?? defaultDescription;
  const path = options.path ?? "/";
  const url = `https://stopeatgo.example${path}`;

  return {
    metadataBase: new URL("https://stopeatgo.example"),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: BUSINESS.name,
      locale: "en_PH",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    keywords: [
      `${BUSINESS.name} Restaurant in ${BUSINESS.city}`,
      "Tacloban City restaurant",
      "comfort food restaurant",
      "order online Tacloban",
      "restaurant reservations Tacloban",
    ],
  };
}
