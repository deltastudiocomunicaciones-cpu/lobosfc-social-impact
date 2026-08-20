import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://donacioneslobosfc.com"),
  title: {
    default: "Corporación Deportiva Lobos FC | Impacto Social",
    template: "%s | Lobos FC",
  },
  description: "Portal de impacto social, donaciones y transparencia de la Corporación Deportiva Lobos Fútbol Club.",
  openGraph: {
    title: "Corporación Deportiva Lobos FC",
    description: "Deporte, formación, impacto social y transparencia.",
    images: ["/images/santi-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
