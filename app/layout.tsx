import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOSInit from "../components/AOSInit";
import ClientLayout from "../components/ClientLayout";
import BackToTop from "../components/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "Yusuf Olowode | Digital Product Designer",
    template: "%s | Yusuf Olowode",
  },
  description: "Digital Product Designer turning complexity into clarity. Specialized in scalable, user-centered products, research, and systems thinking.",
  keywords: ["Yusuf Olowode", "Product Designer", "UI/UX Designer", "Brand Designer", "Digital Product Designer", "Portfolio"],
  authors: [{ name: "Yusuf Olowode" }],
  creator: "Yusuf Olowode",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yusufolowode.com",
    siteName: "Yusuf Olowode Portfolio",
    title: "Yusuf Olowode | Digital Product Designer",
    description: "Digital Product Designer turning complexity into clarity. Specialized in scalable, user-centered products, research, and systems thinking.",
    images: [
      {
        url: "/logo.svg", // Replace with a specific OG image if available
        width: 1200,
        height: 630,
        alt: "Yusuf Olowode Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusuf Olowode | Digital Product Designer",
    description: "Digital Product Designer turning complexity into clarity.",
    images: ["/logo.svg"], // Replace with a specific OG image if available
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  metadataBase: new URL("https://yusufolowode.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ClientLayout>
          <AOSInit />
          <Navbar />
          <ScrollToTop />
          {children}
          <Footer />
          <BackToTop />
        </ClientLayout>
      </body>
    </html>
  );
}
