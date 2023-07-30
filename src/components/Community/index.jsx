import React from "react";
import { telegram, youtube, twitter, linkedin } from "../../assets";

export default function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Join our Coding family
          </div>
          <div className="mt-4 text-2sm leading-6 tracking-wide text-gray-500">
            If you would like to keep up on the latest posts and courses, <br />
            come by and connect with us on the following links.
          </div>
        </div>
        <div className="mx-auto max-w-3xl sm:max-w-2xl py-28 grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <a href="https://www.youtube.com/@CodeWithSunchitDudeja" target="_blank" rel="noopener noreferrer">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <img src={youtube} alt="YouTube" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-black">Youtube</h3>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/codingdecoded/" target="_blank" rel="noopener noreferrer">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <img src={linkedin} alt="LinkedIn" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-black">LinkedIn</h3>
            </a>
          </div>
          <div>
            <a href="https://t.me/codingdecoded" target="_blank" rel="noopener noreferrer">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <img src={telegram} alt="Telegram" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-black">Telegram</h3>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/DecodedCoding" target="_blank" rel="noopener noreferrer">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <img src={twitter} alt="Twitter" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-black">Twitter</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
