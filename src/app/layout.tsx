import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeautySalon | Премиум услуги красоты",
  description: "Профессиональные услуги красоты от лучших мастеров. Онлайн-запись, премиум сервис.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-dark">
        <LanguageProvider>
          <CursorGlow />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
