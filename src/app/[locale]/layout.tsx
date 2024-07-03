import React from "react";
import "@styles/globals.css";
import { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={notoSerifJP.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
