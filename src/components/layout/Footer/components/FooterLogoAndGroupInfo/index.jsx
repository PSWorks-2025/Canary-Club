import PropTypes from 'prop-types';
import { useContext } from 'react';
import GlobalContext from '../../../../../contexts/GlobalContext';

const FooterLogoAndGroupInfo = ({ groupName, groupDescription }) => {
  const { logoUrl } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <div className="h-16 flex items-center">
        <div
          className="h-11 w-11 bg-primary rounded-full bg-cover bg-center overflow-hidden flex-shrink-0"
          style={{
            backgroundImage: `url(${
              logoUrl ||
              'https://blog.photobucket.com/hubfs/upload_pics_online.png'
            })`,
          }}
        />
        <div className="ml-4 font-bold text-lg text-primary">
          {groupName}
        </div>
      </div>
      <div className="w-full mt-2 text-base text-secondary-paragraph whitespace-pre-line">
        {groupDescription}
      </div>
    </div>
  );
};

FooterLogoAndGroupInfo.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired,
};

export default FooterLogoAndGroupInfo;
