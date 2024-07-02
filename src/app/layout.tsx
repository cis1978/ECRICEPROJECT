import React from "react";
import "@styles/globals.css";
import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
