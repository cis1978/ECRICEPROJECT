// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header"; // 必要に応じてパスを調整
import Footer from "../components/Footer"; // 必要に応じてパスを調整

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer /> {/* グローバルに使用する場合はFooterも含めます */}
    </>
  );
}
