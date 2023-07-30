// NewSection.js
import React from "react";

const NewSection = ({ title, imageSrc, description, imageOnLeft }) => {
  return (
    <div className="grid grid-cols-2">
      {imageOnLeft ? (
        <>
          <div className="col-span-1 m-auto w-80">
            <img src={imageSrc} alt="WCD" className="rounded-2xl shadow-3xl" />
          </div>
          <div className="col-span-1 my-auto">
            <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px]">
              {title}
            </div>
            <div className="text-[16px] pt-5 text-[#717c9b]">{description}</div>
          </div>
        </>
      ) : (
        <>
          <div className="col-span-1 my-auto">
            <div className="text-3xl font-bold leading-tight text-rose-500 sm:text-4xl lg:text-[30px]">
              {title}
            </div>
            <div className="text-[16px] pt-5 text-[#717c9b]">{description}</div>
          </div>
          <div className="col-span-1 m-auto w-80">
            <img src={imageSrc} alt="WCD" className="rounded-2xl shadow-3xl" />
          </div>
        </>
      )}
    </div>
  );
};

export default NewSection;
