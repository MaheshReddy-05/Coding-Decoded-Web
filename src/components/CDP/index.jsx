import React from "react";
import { ClickBait, NFC, LGT, BeGenuine } from "../../assets";

const CDP = () => {
  return (
    <div className="bg-white">

    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:py-16 lg:py-24 lg:px-8 ">
      <div className="text-center">
        <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Coding Decoded Principles
        </div>
        <div className="mt-4 text-2sm leading-6 tracking-wide text-gray-500">
          We believe in our audience and would value them the most. Your support
          is our biggest assets
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 pt-5 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src={ClickBait} alt="ClickB" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            No Click Baits
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Clicks Baits mislead the audience. We respect the audience time and
            values it the most.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src={BeGenuine} alt="Genuine" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Be Genuine</h3>
          <p className="mt-4 text-sm text-gray-600">
            Our authenticity is our asset. You can question us anytime, and we
            are ready with answers.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src={NFC} alt="FalseC" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            No false claims
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            It is all the game of trust, and we never indulge in giving false
            hopes to anyone.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <img src={LGT} alt="Grow Together" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Let us grow together
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            We believe in growing together. Let us do it for the community and
            build it together.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CDP;
