import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/layout/ClientLayout";
import LocalBusinessSchema from "../components/seo/LocalBusinessSchema";

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Yoder Construction Inc. - Premium Custom Decks & Outdoor Living | Oceanside, CA",
  description: "Precision craftsmanship for Southern California's finest outdoor living spaces. Custom decks, patio covers, and outdoor rooms built to last generations.",
  keywords: "custom decks, patio covers, outdoor living, construction, Oceanside CA, premium decking, hardwood decks, composite decks",
  authors: [{ name: "Yoder Construction Inc." }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoderconstructioninc.com',
    siteName: 'Yoder Construction Inc.',
    title: 'Yoder Construction Inc. - Premium Custom Decks & Outdoor Living',
    description: 'Precision craftsmanship for Southern California\'s finest outdoor living spaces.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoder Construction Inc. - Premium Custom Decks & Outdoor Living',
    description: 'Precision craftsmanship for Southern California\'s finest outdoor living spaces.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${dmSans.variable} font-dm-sans bg-background text-text-primary antialiased`}
      >
        <LocalBusinessSchema />
        <div className="flex flex-col min-h-screen">
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}
