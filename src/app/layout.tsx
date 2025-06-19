
import { Metadata } from "next";
import Header from "@/components/header";
import { Roboto } from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "BeltraGames - tecnology",

};

const roboto = Roboto({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className} >
        <Header />
        {children}
      </body>
    </html>
  );
}
