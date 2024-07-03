import { useTranslations } from "next-intl";
import React from "react";
import Mark from "@component/atom/mark";
import Image from "next/image";

const HowItWorks = () => {
  const t = useTranslations("howItWorks");
  const marks = ["01", "02", "03"];

  return (
    <div className="flex flex-col items-center gap-14 bg-white px-10 py-20">
      <h2 className="text-5xl font-extrabold">{t("title")}</h2>
      {marks.map((mark, index) => (
        <HowItWorksRow key={`howItWorks-${index}`} mark={mark} />
      ))}
    </div>
  );
};

const HowItWorksRow = ({ mark }: { mark: string }) => {
  return (
    <div
      className={"flex items-end".concat(
        mark === "02" ? " flex-row-reverse" : ""
      )}>
      <div className="w-1/2">
        {mark === "03" ? (
          <div className="grid grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <Image
                key={`howItWorks-${index}`}
                src={`/LP/how-it-works/${mark}_${index + 1}.png`}
                alt={`how it works ${mark}-${index + 1}`}
                width={580}
                height={300}
              />
            ))}
          </div>
        ) : (
          <Image
            src={`/LP/how-it-works/${mark}.png`}
            alt={`how it works ${mark}`}
            width={1000}
            height={550}
          />
        )}
      </div>
      <HowItWorksCard mark={mark} />
    </div>
  );
};

const HowItWorksCard = ({ mark }: { mark: string }) => {
  const t = useTranslations(`howItWorks.contents.${mark}`);

  return (
    <div className="flex flex-col justify-center gap-3 w-1/2 p-16">
      <Mark mark={mark} />
      <p className="text-4xl font-bold">{t("title")}</p>
      <p className="text-base">{t("description")}</p>
    </div>
  );
};

export default HowItWorks;
