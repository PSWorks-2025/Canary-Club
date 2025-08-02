import { useContext } from 'react';
import FooterContactInfo from './components/FooterContactInfo';
import FooterSocialLinks from './components/FooterSocialLinks';
import GlobalContext from '../../../contexts/GlobalContext';
import FooterLogoAndGroupInfo from './components/FooterLogoAndGroupInfo';

const Footer = () => {
  const {
    tertiaryBackgroundColor,
    logoUrl,
    groupName,
    groupDescription,
    contactInfoData,
    socialLinksData,
  } = useContext(GlobalContext);

  return (
    <div
      className="w-full px-4 sm:px-6 lg:px-16 py-10 text-secondary-paragraph"
      style={{ backgroundColor: tertiaryBackgroundColor }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left column: Logo, name, description, contact info */}
        <div className="w-full md:w-1/2 space-y-6">
          <FooterLogoAndGroupInfo
            logoUrl={logoUrl}
            groupName={groupName}
            groupDescription={groupDescription}
          />
          <FooterContactInfo contactInfoData={contactInfoData} />
        </div>

        {/* Right column: Social Links */}
        <div className="w-full md:w-1/2">
          <FooterSocialLinks socialLinksData={socialLinksData} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
