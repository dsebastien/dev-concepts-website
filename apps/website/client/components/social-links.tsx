import SocialLink from '@/components/social-link';
import { FaGithub, FaLinkedin, FaNewspaper, FaTwitter } from 'react-icons/fa';
import React from 'react';

const SocialLinks = () => {
  return (
    <ul className="flex justify-around space-x-8 text-xl">
      <li>
        <SocialLink
          url="https://twitter.com/dsebastien"
          name="Twitter"
          hideText={true}
          ariaLabelText="Go to my Twitter profile"
          titleText="Go to my Twitter profile"
          icon={<FaTwitter className="inline hover:text-devConceptsBlack text-devConceptsGray-100" />}
        />
      </li>
      <li>
        <SocialLink
          url="https://www.linkedin.com/in/sebastiend"
          name="LinkedIn"
          hideText={true}
          ariaLabelText="Go to my LinkedIn profile"
          titleText="Go to my LinkedIn profile"
          icon={<FaLinkedin className="inline hover:text-devConceptsBlue-500 hover:bg-devConceptsWhite text-devConceptsGray-100" />}
        />
      </li>
      <li>
        <SocialLink
          url="https://github.com/dsebastien"
          name="GitHub"
          hideText={true}
          ariaLabelText="Go to my GitHub profile"
          titleText="Go to my GitHub profile"
          icon={<FaGithub className="inline hover:text-devConceptsBlack text-devConceptsGray-100" />}
        />
      </li>
      <li>
        <SocialLink
          url="https://newsletter.dsebastien.net"
          name="Newsletter"
          hideText={true}
          ariaLabelText="Discover my newsletter"
          titleText="Discover my newsletter"
          icon={<FaNewspaper className="inline dark:hover:text-devConceptsWhite hover:text-devConceptsBlue-400 text-devConceptsGray-100" />}
        />
      </li>
    </ul>
  );
};

export default SocialLinks;
