import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageDisplay from '../../../../core/ImageDisplay';
import TextDisplay from '../../../../core/TextDisplay';

const FundraisingHeroSectionDisplay = ({
  imageUrl = 'https://picsum.photos/3000/1000',
  fundraiserName = 'Chương trình quyên góp',
  amountRaised = 20,
  goalAmount = 30,
  qrCodeUrl = 'https://picsum.photos/300',
  buttonColor = '#4160DF',
}) => {
  const [showQRModal, setShowQRModal] = useState(false);

  const progressPercentage = Math.min((amountRaised / goalAmount) * 100, 100);

  return (
    <div className="mt-[64px] w-full">
      <ImageDisplay
        src={imageUrl}
        className="rounded-xl shadow-xl relative w-full h-[400px] flex items-center justify-end bg-cover bg-center text-dark p-8"
      >
        <div className="bg-white/90 p-6 rounded-2xl shadow-xl max-w-md w-full space-y-4">
          {/* Title */}
          <TextDisplay
            value={fundraiserName}
            className="text-3xl font-bold text-center text-gray-800"
          />

          {/* Progress Bar */}
          <div className="border-2 p-0.5 border-gray-400  rounded-full">
            <div className="relative w-full h-5 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor: buttonColor,
                }}
              />
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex justify-between text-sm text-gray-700 font-medium">
            <TextDisplay value={`${amountRaised.toLocaleString()} VND`} />
            <TextDisplay value={`${progressPercentage.toFixed(0)}%`} />
          </div>

          {/* Goal */}
          <TextDisplay
            value={`Cần đạt được: ${goalAmount.toLocaleString()} VND`}
            className="text-sm text-gray-600 text-center"
          />

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <button
              className="px-6 py-2 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
              style={{ backgroundColor: buttonColor }}
              onClick={() => setShowQRModal(true)}
            >
              Ủng hộ ngay
            </button>
          </div>
        </div>
      </ImageDisplay>

      {/* QR Modal */}
      {showQRModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowQRModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-center mb-4">
              Cảm ơn bạn đã ủng hộ
            </h2>
            <img
              src={qrCodeUrl || 'https://via.placeholder.com/300'}
              alt="QR Code"
              className="w-full h-auto object-contain"
            />
            <button
              className="mt-4 w-full text-white bg-blue-600 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowQRModal(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

FundraisingHeroSectionDisplay.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  fundraiserName: PropTypes.string.isRequired,
  amountRaised: PropTypes.number.isRequired,
  goalAmount: PropTypes.number.isRequired,
  qrCodeUrl: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
};

export default FundraisingHeroSectionDisplay;
