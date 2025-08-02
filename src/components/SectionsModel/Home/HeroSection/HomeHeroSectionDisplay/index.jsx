import PropTypes from "prop-types";

const HomeHeroSectionDisplay = ({ image }) => {
  return (
    <div
      className="w-full h-178 bg-cover bg-center"
      style={{
        backgroundImage: `url("${image}")`,
        height: "calc(100vh - 5rem)",
      }}
    ></div>
  );
};

HomeHeroSectionDisplay.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HomeHeroSectionDisplay;
