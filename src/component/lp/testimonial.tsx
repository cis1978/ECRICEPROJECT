import React from "react";
import Carousel from "@/component/molecule/carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("testimonial");
  const options: EmblaOptionsType = { loop: true };

  const witnesses: string[] = [
    "akiraK",
    "lilyT",
    "daisukeO",
    "shihoK",
    "yukiS",
  ];

  const slides = witnesses.map((witness, index) => (
    <TestimonialCard key={`testimonial-${index}`} witness={witness} />
  ));

  return (
    <div className="bg-testimonial bg-cover text-white py-10">
      <h2 className="text-5xl ml-10 mb-8">{t("title")}</h2>
      <Carousel slides={slides} options={options} />
    </div>
  );
};

const TestimonialCard = ({ witness }: { witness: string }) => {
  const t = useTranslations(`testimonial.contents.${witness}`);
  return (
    <div className="flex flex-col justify-between text-center gap-5 bg-white rounded-3xl text-black aspect-video p-8">
      <h3 className="text-2xl">{t(`comment`)}</h3>
      <div id="personalInfo">
        <p className="text-xl">{t(`name`)}</p>
        <p className="text-sm">{t(`affiliation`)}</p>
      </div>
    </div>
  );
};

export default Testimonial;
