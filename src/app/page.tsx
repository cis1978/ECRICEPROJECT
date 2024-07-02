import React from "react";
import Header from "@lp/header";
import TopImage from "@lp/top-image";
import BusinessModel from "@lp/business-model";
import Testimonial from "@lp/testimonial";
import HowItWorks from "@lp/how-it-works";
import Network from "@lp/network";
import Impact from "@lp/impact";
import Footer from "@lp/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <TopImage />
      <BusinessModel />
      <Testimonial />
      <HowItWorks />
      <Network />
      <Impact />
      <Footer />
    </main>
  );
}
