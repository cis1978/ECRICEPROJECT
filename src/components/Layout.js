import Header from "components/Header";
import Footer from "components/Footer"; // Corrected import statement for Footer

export default function Layout({ children }) {
  return (
    <>
      <Header /> {/* ページの上部に Header を含めると仮定します */}
      <main>{children}</main>{" "}
      {/* ここで Home コンポーネントがレンダリングされます */}
      <Footer /> {/* ページの下部に Footer を含めると仮定します */}
    </>
  );
}
