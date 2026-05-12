import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProgressBar from "@/components/ProgressBar"; // Composant de barre de chargement

export const metadata: Metadata = {
  title: "Geo Production – Identité visuelle & Vidéo",
  description: "Agence créative à Lomé spécialisée en design, montage vidéo et réseaux sociaux.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ProgressBar />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}