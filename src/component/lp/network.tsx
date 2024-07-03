import React from "react";
import Carousel from "../molecule/carousel/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl";

const Network = () => {
  const t = useTranslations("network");
  const options: EmblaOptionsType = { loop: true };

  const trophies: string[] = [
    "prefecture",
    "followers",
    "studentAssociation",
    "businessOwner",
    "aspiringFarmer",
  ];

  const slides = trophies.map((trophy, index) => (
    <NetworkCard key={`network-${index}`} trophy={trophy} />
  ));

  return (
    <div className="bg-network bg-cover text-white py-5">
      <h2 className="text-4xl ml-10 mb-5">{t("title")}</h2>
      <Carousel slides={slides} options={options} />
    </div>
  );
};

const NetworkCard = ({ trophy }: { trophy: string }) => {
  const t = useTranslations(`network.contents.${trophy}`);
  return (
    <div className="flex flex-col justify-between text-center gap-5 bg-white rounded-3xl text-black aspect-video p-8">
      <h3 className="text-7xl font-extrabold">{t(`num`)}</h3>
      <div id="personalInfo">
        <p className="text-xl">{t(`unit`)}</p>
      </div>
    </div>
  );
};

export default Network;
