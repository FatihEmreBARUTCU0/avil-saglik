import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Avil Sağlık Bakım | Silivri Evde Sağlık Hizmetleri",
  description: "Avil Sağlık Bakım | Silivri Evde Sağlık Hizmetleri",
  openGraph: {
    title: "Avil Sağlık Bakım | Silivri Evde Sağlık",
    description:
      "Silivri'de profesyonel evde sağlık hizmetleri. Serum, enjeksiyon, pansuman ve daha fazlası.",
    images: ["/og-image.png"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${montserrat.variable} antialiased`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
