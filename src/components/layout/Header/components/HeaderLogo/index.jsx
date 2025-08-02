import { useContext } from 'react';
import GlobalContext from '../../../../../contexts/GlobalContext';
import ImageDisplay from '../../../../core/ImageDisplay';

const HeaderLogo = () => {
  const { logoUrl } = useContext(GlobalContext);


  return (
    <ImageDisplay
      className="absolute top-2 left-6 sm:left-8 md:left-16 lg:left-28 w-12 h-12 sm:w-16 sm:h-16 bg-cover bg-center rounded-full"
      // imagePreview={logoUrl}
      section="logo"
      top="top-2 sm:top-2"
      style={{ backgroundImage: `url(${logoUrl || "https://blog.photobucket.com/hubfs/upload_pics_online.png"})` }}
    />
  );
};

export default HeaderLogo;