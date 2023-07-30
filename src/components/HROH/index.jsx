import React from "react";
import Placed from "./Placed";
export default function HROH() {
  return (
    <div className="bg-[#f3f4f6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:pt-24 lg:pt-24 lg:px-8">
        <div>
          <div className="text-center">
            <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Here are our heroes
            </div>
            <div className="mt-4 text-2sm leading-6 tracking-wide text-gray-500">
            Coding Decoded alumni work at reputed tech organizations and promising startups
            </div>
          </div>
          <div className="pt-10">
            <Placed></Placed>
          </div>
        </div>
      </div>
    </div>
  );
}
