import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  const navi = {
    ricedao: ["aspiringFarmer", "owner", "impactEnthusiast"],
    about: ["team", "dev", "legal"],
    buyRice: ["search"],
    media: ["news", "topics"],
    project: ["rice", "sake"],
  };

  return (
    <div className="bg-footer bg-cover h-[454px] p-12 flex flex-col justify-between text-white">
      <div id="footer-menu" className="flex">
        <div id="footer-logo" className="basis-1/4 flex-initial">
          <Link href="/">
            <Image src="/LP/logo.png" alt="logo" width={156} height={65} />
          </Link>
        </div>
        <div id="footer-navi" className="basis-3/4 flex justify-between pt-2">
          {Object.keys(navi).map((section, index) => (
            <FooterNaviCard
              key={`navi-${index}`}
              section={section}
              navi={navi[section as keyof typeof navi]}
            />
          ))}
        </div>
      </div>
      <div id="copy-right">
        <hr className="border-t-2 border-white/30 mb-2"></hr>
        <p className="text-center">{t("copyright")}</p>
      </div>
    </div>
  );
};

const FooterNaviCard = ({
  section,
  navi,
}: {
  section: string;
  navi: string[];
}) => {
  const t = useTranslations(`footer.${section}`);
  return (
    <div key={`navi-${section}`} className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">{t("title")}</h3>
      {navi.map((nav, index) => (
        <Link key={`navi-${index}`} href={`/${section}/${nav}`}>
          <p className="text-base">{t(`pages.${nav}`)}</p>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
