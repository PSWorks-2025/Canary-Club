import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import ImageDisplay from '../../../../core/ImageDisplay';
import TextDisplay from '../../../../core/TextDisplay';

const StoriesHeroSectionDisplay = ({
  id,
  title,
  description,
  image,
  buttonColor,
}) => {
  const navigate = useNavigate();

  const handleReadMore = (e) => {
    e.stopPropagation();
    navigate('/detail-page', {
      state: {
        id: 'story_hero',
        title,
        thumbnail: image,
      },
    });
  };

  return (
    <ImageDisplay
      className="w-full bg-cover bg-bottom flex justify-center items-end bg-blend-multiply hero_section relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)), url(${
          image || 'https://blog.photobucket.com/hubfs/upload_pics_online.png'
        })`,
        height: '80vh',
      }}
    >
      <div className="w-11/12 sm:w-3/4 lg:w-1/2 absolute bottom-10 left-5 sm:left-10">
        <TextDisplay
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-lg"
          value={title}
        />
        <TextDisplay
          type="textarea"
          className="text-white text-sm sm:text-base leading-relaxed mb-6 bg-transparent outline-none resize-none drop-shadow-sm"
          value={description}
          rows="4"
        />
        <button
          onClick={handleReadMore}
          className={`text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md hover:opacity-80 hover:scale-[1.02] text-sm sm:text-base ml-8 bg-[${buttonColor}]`}
          style={{ backgroundColor: buttonColor }}
        >
          Đọc thêm
        </button>
      </div>
    </ImageDisplay>
  );
};

StoriesHeroSectionDisplay.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  buttonColor: PropTypes.string.isRequired,
};

export default StoriesHeroSectionDisplay;
