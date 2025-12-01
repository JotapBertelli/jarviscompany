import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JARVIS COMPANY | Microsites e Sistemas para Lanchonetes e Restaurantes",
  description:
    "Desenvolvemos microsites e sistemas de gerenciamento com dashboards completos para lanchonetes e restaurantes aumentarem suas vendas e organizarem o negócio."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}


