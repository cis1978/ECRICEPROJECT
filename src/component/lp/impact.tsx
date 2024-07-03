import { useTranslations } from "next-intl";
import React from "react";
import DoubleBreak from "../atom/double-break";
import Button from "../atom/button";

const Impact = () => {
  const t = useTranslations("impact");
  return (
    <div className="flex flex-col items-center gap-14 bg-white px-10 py-20">
      <h2 className="text-5xl font-extrabold">{t("title")}</h2>
      <p className="text-lg text-center w-2/3">
        {t.rich("description", { br: () => <DoubleBreak /> })}
      </p>
      <ImpactDiagram />
    </div>
  );
};

const ImpactDiagram = () => {
  const enum customers {
    aspiringFarmer = "aspiringFarmer",
    owner = "owner",
    impactEnthusiast = "impactEnthusiast",
  }

  return (
    <div className="grid grid-cols-2 w-4/5 text-white">
      <div className="flex flex-col justify-between gap-5 bg-emerald-600 rounded-tl-3xl p-5">
        <ImpactCard customer={customers.aspiringFarmer} />
      </div>
      <div className="flex flex-col justify-between gap-5 bg-indigo-900/90 rounded-tr-3xl p-5">
        <ImpactCard customer={customers.owner} />
      </div>
      <div className="flex flex-col justify-between gap-2 bg-gray-300 col-span-2 rounded-b-3xl p-5">
        <ImpactCard customer={customers.impactEnthusiast} />
      </div>
    </div>
  );
};

const ImpactCard = ({ customer }: { customer: string }) => {
  const t = useTranslations("impact.diagram");
  return (
    <>
      <p className="text-sm">{t(`${customer}.to`)}</p>
      <p className="text-xl">{t(`${customer}.description`)}</p>
      <p className="text-sm">{t(`${customer}.learnMore`)}</p>
      <Button
        label={t("details")}
        href=""
        className="bg-inherit border-2 text-sm"
      />
    </>
  );
};

export default Impact;
