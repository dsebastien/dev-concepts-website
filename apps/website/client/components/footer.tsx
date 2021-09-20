import React from 'react';
import SocialLinks from "@/components/social-links";
import tw from "twin.macro";
import Link from "next/link";

const StyledDiv = tw.div``;

const Footer = () => {
  return (
    <StyledDiv
      className="px-2 sm:px-8 py-10 sm:pt-16 sm:rounded-t-lg bg-devConceptsBlue-500 text-devConceptsGray-100 flex flex-col text-devConceptsGray-100 shadow-lg">
      <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-start gap-12">
        <div>
          <div>
            <div className="font-semibold text-3xl">Dev Concepts</div>
            <div className="mt-6 w-3/4 wrap">Your guide to the fundamentals of software development.</div>
          </div>
          <div className="mt-6 flex justify-around sm:justify-start">
            <SocialLinks/>
          </div>
        </div>
        <div>
          <div><span className="font-semibold">QUICK LINKS</span></div>
          <ul className="mt-2">
            <li>
              <Link href="/updates">
                <a
                  className=""
                  aria-label="Go to the updates"
                  title="Go to the updates"
                >
                  <div
                    className="text-devConceptsGray-300 visited:text-devConceptsGray-300 hover:text-devConceptsGray-100">Updates
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/table-of-contents">
                <a
                  className=""
                  aria-label="Explore the table of contents"
                  title="Explore the table of contents"
                >
                  <div
                    className="text-devConceptsGray-300 visited:text-devConceptsGray-300 hover:text-devConceptsGray-100">Table
                    of contents
                  </div>
                </a>
              </Link>
            </li>
            {/*
              FIXME add links
            <li>Volume summaries</li>
            <li>Lifetime collection</li>
            <li>What is a software crafter?</li>
            */}
            <li>
              <Link href="mailto:sebastien@developassion.be">
                <a
                  className=""
                  aria-label="Contact me"
                  title="Contact me"
                >
                  <div
                    className="text-devConceptsGray-300 visited:text-devConceptsGray-300 hover:text-devConceptsGray-100">Contact
                    me
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex flex-row items-center justify-center object-center"><span>LOGO GOES HERE</span></div>
      </div>
      <div className="text-center mt-10 sm:mt-16">
        <span className="text-gray-200 font-semibold">© Sébastien Dubois. All rights reserved.</span>
      </div>
    </StyledDiv>
  );
};

export default Footer;
