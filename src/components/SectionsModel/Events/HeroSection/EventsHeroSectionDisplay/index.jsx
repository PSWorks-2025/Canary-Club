import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImageDisplay from '../../../../core/ImageDisplay';
import TextDisplay from '../../../../core/TextDisplay';

const EventsHeroSectionDisplay = ({ title, description, image }) => {
  return (
    <div>
      <ImageDisplay
        top="top-23"
        right="right-2"
        className="w-full bg-cover bg-bottom flex justify-center items-end bg-blend-multiply hero_section"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)), url("${
            image ||
            'https://blog.photobucket.com/hubfs/upload_pics_online.png'
          }")`,
          height: 'calc(100vh - 5rem)',
        }}
      >
        <div className="w-1/2 absolute left-10 mb-15">
          <TextDisplay
            className="pl-8 w-full text-[2.5rem] font-semibold text-white outline-none bg-transparent"
            value={title}
          />
          <TextDisplay
            type="textarea"
            className="pl-8 pb-6 w-full text-base text-white outline-none bg-transparent resize-none"
            value={description}
            rows="4"
          />
        </div>
      </ImageDisplay>
    </div>
  );
};

EventsHeroSectionDisplay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
  setHeroSections: PropTypes.func.isRequired,
  enqueueImageUpload: PropTypes.func.isRequired,
  setHasChanges: PropTypes.func.isRequired,
};

export default EventsHeroSectionDisplay;
