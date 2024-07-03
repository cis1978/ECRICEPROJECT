import React from "react";

const Mark = ({ mark }: { mark: string }) => {
  return (
    <div className="flex items-center justify-center bg-lime-50 rounded-full h-24 w-24">
      <p className="text-4xl font-bold text-emerald-600">{mark}</p>
    </div>
  );
};

export default Mark;
