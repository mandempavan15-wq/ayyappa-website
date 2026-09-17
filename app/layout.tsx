import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ayyappa Car Accessories | Premium Car Accessories Hyderabad",
  description: "Premium car accessories, interiors, alloy wheels, audio systems, lighting, PPF, coating and car styling in Secunderabad, Hyderabad.",
  openGraph: {
    title: "Ayyappa Car Accessories | Premium Car Accessories Hyderabad",
    description: "Premium car accessories, interiors, alloy wheels, audio systems, lighting, PPF, coating and car styling in Secunderabad, Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayyappa Car Accessories | Premium Car Accessories Hyderabad",
    description: "Premium car accessories, interiors, alloy wheels, audio systems, lighting, PPF, coating and car styling in Secunderabad, Hyderabad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ayyappa Car Accessories",
              image: "https://instagram.com/ayyapacaraccessories",
              "@id": "",
              url: "https://ayyapacaraccessories.com",
              telephone: "+919700314415",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1-8-32/66A, Minister Rd, Ramgopalpet",
                addressLocality: "Secunderabad, Hyderabad",
                postalCode: "500003",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans font-normal overflow-x-hidden text-deep-navy bg-white">
        <Header />
        <MobileMenu />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
