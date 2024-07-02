import React from "react";
import SocialMedia from "@component/molecule/social-media";
import SubscriptionForm from "@component/molecule/subscription-form";

const TopImage = () => {
  return (
    <div className="bg-top h-screen max-h-[832px] ">
      <div className="container flex flex-col gap-6 py-40 px-20 text-white">
        <h1 className="text-7xl">
          <span className="font-bold">RICE DAO </span>
          is the future
          <br />
          of agricultural business
        </h1>
        <p className="text-xl">
          We're on a mission to transfer nearly 340,000 agricultural businesses
          <br />
          struggling with succession issues into the hands of hard-working
          <br />
          aspiring farmers and help generations of business owners retire
          <br />
          confidently.
        </p>
        <SocialMedia />
        <SubscriptionForm />
      </div>
    </div>
  );
};

export default TopImage;
