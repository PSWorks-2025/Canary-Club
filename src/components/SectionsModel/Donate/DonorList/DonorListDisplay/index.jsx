import React from 'react';
import PropTypes from 'prop-types';

const DonorList = ({ donors = [] }) => {
  const currencyFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <div className="mt-8 max-w-lg mx-auto">
      <div className="text-2xl sm:text-[2.5rem] font-bold text-center">
        Danh sách ủng hộ
      </div>

      {donors.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">Chưa có người ủng hộ nào.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {donors.map((donor, index) => (
            <li
              key={donor.id || index}
              className="border border-gray-200 rounded-xl p-4 flex justify-between items-center bg-white shadow-sm"
            >
              <div className="text-base font-medium text-gray-800">
                {donor.name || 'Ẩn danh'}
              </div>
              <div className="text-green-600 font-semibold">
                {currencyFormatter.format(donor.amount || 0)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DonorList.propTypes = {
  donors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
  buttonColor: PropTypes.string,
};

export default DonorList;
