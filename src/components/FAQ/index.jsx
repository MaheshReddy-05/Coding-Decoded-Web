import React from "react";
const FAQComponent = () => {
  return (
    <section className="bg-gray-200 ">
      <div  className="mx-auto max-w-7xl bg-gray-200 px-2 py-10 md:px-0">

      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          {/* <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p> */}
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-black">
            Does CGPA matter in industry or not?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
Having a good CGPA does give you an edge during the placement process, but once you enter the IT industry, it is never asked for.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">
            Does College matter?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
Tier 1 colleges are known for their placements .However, if you land up at a Tier 2 or Tier 3 college, then you should build your profile so strong that all the colleges are willing to hire you.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">
            I am not from a CS background; can I still get a job in IT?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
Until you have skills and knowledge, your degree really does not matter. However, getting shortlisted for the first company can be challenging
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">
            Importance of System Design for college students?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
Companies do not ask system design questions directly in interviews, however, before you enter the industry, in-depth knowledge of system design can take you miles ahead.
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can't find what you're looking for?{" "}
          <a href="#" title="" className="black font-semibold hover:underline">
            Join Telegram
          </a>
        </p>
      </div>
      </div>
    </section>
  );
};

export default FAQComponent;
