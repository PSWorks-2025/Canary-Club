import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

function DonateOverviewDisplay({ pageData, buttonColor }) {
  const navigate = useNavigate();
  const { heading, title1, title2, images = [] } = pageData || {};
  console.log(heading, title1, images)
  return (
    <div className="w-full">
      <div className="w-full text-2xl sm:text-[2.5rem] font-bold text-black text-center mb-4 sm:mb-6">
        {heading || 'Tiêu đề chưa được thiết lập'}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-start gap-6 sm:gap-10 text-center max-w-[1600px] mx-auto">
        {/* First column */}
        <div className="flex flex-col flex-1 items-center">
          <div className="w-full h-[30vh] sm:h-[40vh] bg-gray-600 relative flex flex-col justify-end rounded-lg overflow-hidden">
            <div className="text-sm sm:text-base font-semibold text-white text-center mb-2 px-2">
              {title1 || 'Tiêu đề chưa thiết lập'}
            </div>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{
                backgroundImage: `url("${images[0] || 'https://blog.photobucket.com/hubfs/upload_pics_online.png'}")`,
              }}
            />
          </div>
          <button
            className="mt-2 text-white font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-full hover:opacity-50 transition-opacity duration-200 text-sm sm:text-base"
            style={{ backgroundColor: buttonColor }}
            onClick={() => navigate('/donate')}
          >
            Mua ngay
          </button>
        </div>

        {/* Second column */}
        <div className="flex flex-col flex-1 items-center">
          <div className="w-full h-[30vh] sm:h-[40vh] bg-gray-600 relative flex flex-col justify-end rounded-lg overflow-hidden">
            <div className="text-sm sm:text-base font-semibold text-white text-center mb-2 px-2">
              {title2 || 'Tiêu đề chưa thiết lập'}
            </div>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{
                backgroundImage: `url("${images[1] || 'https://blog.photobucket.com/hubfs/upload_pics_online.png'}")`,
              }}
            />
          </div>
          <button
            className="mt-2 text-white font-medium px-2 sm:px-3 py-1.5 sm:py-2 rounded-full hover:opacity-50 transition-opacity duration-200 text-sm sm:text-base"
            style={{ backgroundColor: buttonColor }}
            onClick={() => navigate('/donate')}
          >
            Ủng hộ
          </button>
        </div>
      </div>
    </div>
  );
}

DonateOverviewDisplay.propTypes = {
  pageData: PropTypes.shape({
    heading: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default DonateOverviewDisplay;
