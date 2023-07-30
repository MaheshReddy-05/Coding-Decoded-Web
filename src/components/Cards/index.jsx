import React, { useEffect, useState } from "react";

function SocialMedia() {
  const [youtubeFollowers, setYoutubeFollowers] = useState(0);
  const [linkedinFollowers, setLinkedinFollowers] = useState(0);
  const [faangHires, setFaangHires] = useState(0);
  const [telegramFollowers, setTelegramFollowers] = useState(0);

  // Set your desired follower counts
  const youtubeCount = 16.1;
  const linkedinCount = 470;
  const faangCount = 500;
  const telegramCount = 2.1;

  useEffect(() => {
    const animateFollowers = () => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setYoutubeFollowers((prevFollowers) => {
            const nextFollowers = prevFollowers + youtubeCount / 100;
            return nextFollowers <= youtubeCount ? nextFollowers : youtubeCount;
          });

          setLinkedinFollowers((prevFollowers) => {
            const nextFollowers = Math.ceil(prevFollowers + linkedinCount / 100);
            return nextFollowers <= linkedinCount ? nextFollowers : linkedinCount;
          });

          setFaangHires((prevFollowers) => {
            const nextFollowers = prevFollowers + faangCount / 100;
            return nextFollowers <= faangCount ? nextFollowers : faangCount;
          });

          setTelegramFollowers((prevFollowers) => {
            const nextFollowers = prevFollowers + telegramCount / 100;
            return nextFollowers <= telegramCount ? nextFollowers : telegramCount;
          });
        }, 10); // Adjust the interval as per your desired animation speed

        setTimeout(() => {
          clearInterval(interval);
        }, 90000); // Delay of 1000ms (1 second) before clearing the interval
      }, 1000); // Delay of 1000ms (1 second) before starting the animation
    };

    animateFollowers();
  }, []);

  return (
    <div className="">
      <div className="container mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-[#2ac6f5] text-4xl font-bold">
                {youtubeFollowers.toFixed(1)}K+
              </h2>
              <p className="text-gray-400 text-xl">YouTube Followers</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-[#2ac6f5] text-4xl font-bold">
                {linkedinFollowers}+
              </h2>
              <p className="text-gray-400 text-xl">LinkedIn Followers</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-[#2ac6f5] text-4xl font-bold">{faangHires}K+</h2>
              <p className="text-gray-400 text-xl">People into FAANG</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-[#2ac6f5] text-4xl font-bold">
                {telegramFollowers.toFixed(1)}K+
              </h2>
              <p className="text-gray-400 text-xl">Telegram Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
