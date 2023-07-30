import React from "react";
import amazonLogo from "../../assets/images/CompanyLogos/amazonLogo.png";
import googleLogo from "../../assets/images/CompanyLogos/mp.png";
import RZPay from "../../assets/images/CompanyLogos/RZPay.png";
import Microsoft from "../../assets/images/CompanyLogos/Microsoft.png";
import Adobe from "../../assets/images/CompanyLogos/Adobe.png";
import Flipkart from "../../assets/images/CompanyLogos/Flipkart.png";
import Goldman from "../../assets/images/CompanyLogos/Goldman.png";
import Meta from "../../assets/images/CompanyLogos/Meta.jpg";
import Walmart from "../../assets/images/CompanyLogos/walmart.png";
import Morganstanley from "../../assets/images/CompanyLogos/morganstanley.png";
import DPWorld from "../../assets/images/CompanyLogos/DPWorld.png";
import Sofi from "../../assets/images/CompanyLogos/Sofi.png";
import Apple from "../../assets/images/CompanyLogos/Apple.png";
import Twitter from "../../assets/images/CompanyLogos/Twitter.png";
import Qualcomm from "../../assets/images/CompanyLogos/Qualcomm.png";

const OSPA = () => {
  const companyImages = [Meta,amazonLogo,Apple, googleLogo, Microsoft,RZPay,Adobe,Flipkart,Twitter, Walmart,Morganstanley,Qualcomm,DPWorld,Goldman, Sofi];

  return (
    <div className="bg-white">

    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:py-24 lg:py-16 lg:px-8 ">
      <div className="placement-container">
        <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl text-black">Our students are placed at</h1>
          <br />
          <br />
        <div className="flex flex-wrap justify-center items-center">
          {companyImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Company ${index + 1}`}
              className={`w-40 h-24 object-contain m-4`}
              style={{ maxHeight: "60px", maxWidth: "100%", margin: "20px 30px" }}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default OSPA;
