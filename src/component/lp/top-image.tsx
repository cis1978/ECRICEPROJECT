import React from "react";
import SocialMedia from "@component/molecule/social-media";
import Subscription from "@/component/molecule/subscription";
import { useTranslations } from "next-intl";

const TopImage = () => {
  const t = useTranslations("topImage");

  return (
    <div className="bg-top bg-cover h-[832px] ">
      <div className="container flex flex-col gap-6 py-40 px-20 text-white">
        <h1 className="text-7xl">{t("catchphrase")}</h1>
        <p className="text-xl">{t.rich("description", { br: () => <br /> })}</p>
        <SocialMedia />
        <Subscription />
      </div>
    </div>
  );
};

export default TopImage;
