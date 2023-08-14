import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootFooter from "./footer/footer";
import RootHeader from "./header/header";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nier | Clothing App",
  description: "New Clothings by Nier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <RootHeader />
        {children}
        <RootFooter />
      </body>
    </html>
  );
}
