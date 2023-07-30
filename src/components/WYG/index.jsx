import React from "react";
import { DS, LLD, TS } from "../../assets";
import NewSection from "./newSection/NewSection";

export default function CodingDecoded() {
  return (
    <div className="bg-[#1c262c]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:py-24 lg:py-24 lg:px-8">
        <div>
          <div className="text-center">
            <div className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Why Coding Decoded?
            </div>
            <div className="mt-4 text-2xl leading-6 tracking-wide text-[#717c9b]">
            </div>
          </div>
          <div className="pt-10">
            <NewSection
              title="Data Structures"
              imageSrc={DS}
              description="A strong understanding of data structures allows candidates to
                  solve complex problems and demonstrate their ability to write
                  efficient code. We have detailed step by step detailed videos
                  to build DSA concepts (Link to SDE revision sheet)"
            />
            <NewSection
              title="Low Level System Design"
              imageSrc={LLD}
              description="Protect your content from unauthorized use and plagiarism with
                  regular scans. Stay ahead of the rapid creation of new content
                  by automatically monitoring and safeguarding your work. Gain
                  peace of mind knowing that your content is secure and
                  protected against unlawful duplication, ensuring its integrity
                  and originality."
                  imageOnLeft={true}
            />
            <NewSection
              title="Enhance your technical skills"
              imageSrc={TS}
              description="Protect your content from unauthorized use and plagiarism with
                  regular scans. Stay ahead of the rapid creation of new content
                  by automatically monitoring and safeguarding your work. Gain
                  peace of mind knowing that your content is secure and
                  protected against unlawful duplication, ensuring its integrity
                  and originality."
            />

            <NewSection
              title="Strongest referral community"
              imageSrc={DS} 
              description="Protect your content from unauthorized use and plagiarism with
                  regular scans. Stay ahead of the rapid creation of new content
                  by automatically monitoring and safeguarding your work. Gain
                  peace of mind knowing that your content is secure and
                  protected against unlawful duplication, ensuring its integrity
                  and originality."
                  imageOnLeft={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
