import type { Metadata } from "next";
import localFont from "next/font/local";
import "./style/globals.css";
import "./style/normalize.css";
import Footer from "./components/footer/page";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Diario de Notas",
  description: "Diario de notas do professor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
