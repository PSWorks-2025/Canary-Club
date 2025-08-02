import PropTypes from "prop-types";

const FooterSocialLinks = ({ socialLinksData }) => {
  const formattedLinks = socialLinksData
    ? Object.entries(socialLinksData).map(([name, url], index) => ({
        id: `link_${index}`,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        url,
      }))
    : [];

  return (
    <div className="w-full [&>a]:block [&>a]:hover:text-secondary-hover [&>a]:transition">
      <div className="h-16 flex items-center font-bold text-sm md:text-base">Truyền thông</div>
      {formattedLinks.map((link) => (
        <div key={link.id} className="flex gap-2 mb-2 items-center">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-paragraph hover:text-secondary-hover flex items-center gap-2"
            aria-label={link.name}
          >
            <i className={`fab fa-${link.name.toLowerCase()} text-sm md:text-base`} />
            <span className="text-sm md:text-base">{link.name}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

FooterSocialLinks.propTypes = {
  socialLinksData: PropTypes.object.isRequired,
};

export default FooterSocialLinks;
