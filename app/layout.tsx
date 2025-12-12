import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jarvis Company",
  description:
    "Criamos soluções digitais personalizadas com foco em performance e conversão. Microsites profissionais e dashboards inteligentes para escalar seu negócio online.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}


