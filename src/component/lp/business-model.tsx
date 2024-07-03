import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DoubleBreak from "@component/atom/double-break";

const BusinessModel = () => {
  const t = useTranslations("businessModel");
  const enum Section {
    PROBLEM = "problem",
    SOLUTION = "solution",
  }

  return (
    <div className="bg-white columns-2 px-10 py-12">
      <div id="left" className="pb-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-extrabold">
            {t.rich("title", { br: () => <br /> })}
          </h2>
          <p className="text-lg">{t("description")}</p>
          <BusinessModelCard section={Section.PROBLEM} />
        </div>
      </div>

      <div id="right" className="pt-10">
        <div className="flex flex-col gap-5">
          <Image
            src="/LP/business_model.png"
            alt="business model"
            width={600}
            height={350}
          />
          <BusinessModelCard section={Section.SOLUTION} />
        </div>
      </div>
    </div>
  );
};

const BusinessModelCard = ({ section }: { section: string }) => {
  const t = useTranslations(`businessModel.contents.${section}`);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-extrabold">{t(`title`)}</h3>
      <hr className="border-t-2"></hr>
      <p className="text-8xl text-emerald-700">{t(`number`)}</p>
      <hr className="border-t-2"></hr>
      <p className="font-bold">{t(`complement`)}</p>
      <p>{t.rich(`description`, { br: () => <DoubleBreak /> })}</p>
    </div>
  );
};

export default BusinessModel;
