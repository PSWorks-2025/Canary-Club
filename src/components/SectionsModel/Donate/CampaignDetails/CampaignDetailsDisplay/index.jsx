import React from 'react';
import PropTypes from 'prop-types';

const CampaignDetailsDisplay = ({
  campaign_title,
  campaign_description,
  sectionTitles,
}) => {
  return (
    <div className="mt-10 px-6 max-w-3xl mx-auto space-y-6">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-[2.5rem] font-bold text-primary-title tracking-tight">
          {sectionTitles.campaign_details || 'Chi tiết chiến dịch'}
        </h2>
      </div>

      <div className="bg-white/90 border border-gray-200 shadow-md rounded-2xl p-5">
        {/* Campaign Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
          {campaign_title || 'Tiêu đề của quỹ sẽ hiển thị ở đây.'}
        </h3>

        {/* Campaign Description */}
        <p className="text-base sm:text-lg text-gray-700 whitespace-pre-line leading-relaxed">
          {campaign_description || 'Mô tả của quỹ sẽ hiển thị ở đây.'}
        </p>
      </div>

      {/* Campaign Description */}
    </div>
  );
};

CampaignDetailsDisplay.propTypes = {
  campaign_title: PropTypes.string,
  campaign_description: PropTypes.string,
  sectionTitles: PropTypes.object.isRequired,
};

export default CampaignDetailsDisplay;
