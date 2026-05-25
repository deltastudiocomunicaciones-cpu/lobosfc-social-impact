import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";

export const metadata = {
  title: "LobosFC Social Impact",
  description: "Corporate Donations Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}