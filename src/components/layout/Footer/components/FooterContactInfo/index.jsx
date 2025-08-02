import PropTypes from "prop-types";

const FooterContactInfo = ({ contactInfoData }) => {
  return (
    <div className="w-full space-y-2 mt-4 text-sm md:text-base text-secondary-paragraph">
      <div>
        <strong>Hotline:</strong> {contactInfoData.hotline || "Chưa có thông tin"}
      </div>
      <div>
        <strong>Email:</strong> {contactInfoData.email || "Chưa có thông tin"}
      </div>
      <div>
        <strong>Địa chỉ:</strong> {contactInfoData.address || "Chưa có thông tin"}
      </div>
    </div>
  );
};

FooterContactInfo.propTypes = {
  contactInfoData: PropTypes.shape({
    hotline: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};

export default FooterContactInfo;
