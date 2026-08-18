import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CeloHT: Financial Inclusion, Education & Reforestation on Celo",
    template: "%s · CeloHT",
  },
  description:
    "CeloHT empowers communities in Léogâne, Haiti through Web3 education, financial inclusion, and environmental impact, built on the Celo blockchain.",
  metadataBase: new URL("https://celoht.com"),
  openGraph: {
    title: "CeloHT",
    description: "Empowering communities through Web3 education, financial inclusion, and environmental impact.",
    url: "https://celoht.com",
    siteName: "CeloHT",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "CeloHT" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
