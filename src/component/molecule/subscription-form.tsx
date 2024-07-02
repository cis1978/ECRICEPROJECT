import React from "react";
import Button from "@component/atom/button";
import { MailIcon } from "lucide-react";

const SubscriptionForm = () => {
  return (
    <form>
      <label className="text-xl">Get notified</label>
      <div className="flex">
        <input
          type="email"
          className="bg-transparent border-b border-gray-500"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
        />
        <Button label="Subscribe" href="" startIcon={<MailIcon size={20} />} />
      </div>
      <small id="emailHelp">
        We'll never share your email with anyone else.
      </small>
    </form>
  );
};

export default SubscriptionForm;
