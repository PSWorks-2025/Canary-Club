import PropTypes from 'prop-types';
import TextDisplay from '../../../../core/TextDisplay';
import ImageDisplay from '../../../../core/ImageDisplay';

const AboutHeroSectionDisplay = ({ title, description, image }) => {
  return (
    <div className="relative">
      <ImageDisplay
        top="top-23"
        right="right-2"
        className="w-full bg-cover bg-bottom flex justify-center items-end bg-blend-multiply hero_section"
    style={{
  backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)), url(${image})`,
  height: 'calc(100vh - 5rem)',
}}

      />
      <div className="absolute left-5 right-5 bottom-10 md:left-20 md:right-auto md:w-1/2">
        <TextDisplay
          className="w-full text-3xl md:text-5xl font-semibold text-white outline-none bg-transparent"
          value={title}
        />
        <TextDisplay
          type="textarea"
          className="w-full text-base md:text-lg text-white mt-4 outline-none bg-transparent resize-none"
          value={description}
          rows="4"
        />
      </div>
    </div>
  );
};

AboutHeroSectionDisplay.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default AboutHeroSectionDisplay;
