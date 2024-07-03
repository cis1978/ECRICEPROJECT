import React from "react";
import Button from "@component/atom/button";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const Subscription = () => {
  const t = useTranslations("subscription");
  return (
    <form>
      <label className="text-xl">{t("label")}</label>
      <div className="flex">
        <input
          type="email"
          className="bg-transparent border-b border-gray-500"
          id="email"
          aria-describedby="emailHelp"
          placeholder={t("placeholder")}
        />
        <Button
          label={t("button")}
          href=""
          startIcon={<MailIcon size={20} />}
        />
      </div>
      <small id="emailHelp">{t("help")}</small>
    </form>
  );
};

export default Subscription;
