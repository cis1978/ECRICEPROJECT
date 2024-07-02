import React from "react";
import "@styles/globals.css";
import { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";

// フォント
const notoSerifJP = Noto_Serif_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "RiceDAO",
  description:
    "RiceDAO is a decentralized autonomous organization (DAO) that aims to support the rice industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSerifJP.className}`}>{children}</body>
    </html>
  );
}
