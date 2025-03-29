import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Kanine Klans - Dominate Mars with Elemental Power",
  description:
    "Join Kanine Klans, the ultimate strategy game where humanoid canines with elemental powers conquer Mars. Explore, earn rewards, and rise to supremacy!",
  keywords: "Kanine Klans, Mars strategy game, elemental powers, play-to-earn, NFT gaming, blockchain gaming",
  authors: [{ name: "Kanine Klans Team", url: "https://kanineklans.com" }],
  metadataBase: new URL("https://kanineklans.com"),
  alternates: {
    canonical: "https://kanineklans.com",
  },
  openGraph: {
    title: "Kanine Klans - Dominate Mars with Elemental Power",
    description:
      "Join Kanine Klans, the ultimate strategy game where humanoid canines with elemental powers conquer Mars. Explore, earn rewards, and rise to supremacy!",
    url: "https://kanineklans.com",
    siteName: "Kanine Klans",
    type: "website",
    images: [
      {
        url: "https://kanineklans.com/images/logoSeo.png",
        width: 1200,
        height: 630,
        alt: "Kanine Klans - Mars strategy game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanine Klans - Dominate Mars with Elemental Power",
    description:
      "Join Kanine Klans, the ultimate strategy game where humanoid canines with elemental powers conquer Mars. Explore, earn rewards, and rise to supremacy!",
    images: ["https://kanineklans.com/images/logoSeo.png"],
    creator: "@techkanineklans",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};
