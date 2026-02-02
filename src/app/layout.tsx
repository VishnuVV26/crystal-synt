import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Crystal International Trading W.L.L | Steel & Building Materials Bahrain",
  description: "Crystal Trading W.L.L - Bahrain leading steel import, stockiest, trade and distribution company. We provide steel, aluminum, building materials and wood products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexSans.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
