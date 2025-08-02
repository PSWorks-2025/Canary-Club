import React from 'react';
import PropTypes from 'prop-types';
import { MdCircle } from 'react-icons/md';
import { BiSolidRightArrow } from 'react-icons/bi';
import { useContext } from 'react';
import TextDisplay from '../../../../core/TextDisplay';

// Main section component
const TimelineDisplay = ({ title, listData }) => {

  const formatDate = (date) => {
    if (!date || !(date instanceof Date) || isNaN(date)) {
      return 'N/A';
    }
    return date.toLocaleDateString('vi-VN', {
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div>
      <TextDisplay
        value={title || 'Lịch sử hoạt động'}
        className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center"
      />
      <ActivityHistoryList>
        {listData && listData.length > 0 ? (
          listData.map((activity, index) => (
            <ActivityHistoryListItem
              key={`activity_${index}`}
              startDate={formatDate(activity.started_time)}
              endDate={formatDate(activity.ended_time)}
              imageUrl1={activity.image1 || 'https://via.placeholder.com/800/600'}
              imageUrl2={activity.image2 || 'https://via.placeholder.com/800/600'}
              description={activity.text || ''}
            />
          ))
        ) : (
          <div className="text-center text-primary-paragraph">Không có dữ liệu lịch sử hoạt động.</div>
        )}
      </ActivityHistoryList>
    </div>
  );
};

TimelineDisplay.propTypes = {
  title: PropTypes.string,
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      started_time: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([null])]),
      ended_time: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.oneOf([null])]),
      image1: PropTypes.string,
      image2: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default TimelineDisplay;

// Item component
function ActivityHistoryListItem({
  startDate,
  endDate,
  imageUrl1,
  imageUrl2,
  description,
}) {
  return (
    <div className="hidden" data-item aria-hidden="true">
      {startDate} {endDate} {imageUrl1} {imageUrl2} {description}
    </div>
  );
}

ActivityHistoryListItem.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imageUrl1: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// List component
function ActivityHistoryList({ children }) {
  return (
    <div className="w-full">
      {children.map((activity, index) => {
        const { startDate, endDate, imageUrl1, imageUrl2, description } =
          activity.props;

        const isEven = index % 2 === 0;

        return (
          <div
            key={`activity_${index}`}
            className={`w-full h-84 mt-12 flex ${
              isEven ? '' : 'flex-row-reverse'
            }`}
          >
            {/* Image Block */}
            <div className="w-1/2 h-full px-4">
              <div
                className={`w-136 h-full relative ${
                  isEven ? 'float-right' : ''
                }`}
              >
                <div
                  className={`absolute w-88 h-62 bg-cover bg-center rounded-lg top-0 ${
                    isEven ? 'left-0' : 'right-0'
                  }`}
                  style={{ backgroundImage: `url("${imageUrl1}")` }}
                ></div>
                <div
                  className={`absolute w-88 h-47 bg-cover bg-center rounded-lg bottom-0 ${
                    isEven ? 'right-0' : 'left-0'
                  }`}
                  style={{ backgroundImage: `url("${imageUrl2}")` }}
                ></div>
              </div>
            </div>

            {/* Text Block */}
            <div className="w-1/2 h-full px-4">
              <div className={`w-136 h-full ${isEven ? '' : 'float-right'}`}>
                <div className="w-full flex justify-between text-[1.6rem] font-bold text-primary-title">
                  <div>{startDate}</div>
                  <div className="w-83 flex justify-center">{endDate}</div>
                </div>
                <div className="flex items-center py-2">
                  <MdCircle className="w-5 h-5 mr-0.5 text-secondary" />
                  <div className="w-72 h-0.75 rounded-full bg-secondary"></div>
                  <BiSolidRightArrow className="w-3.5 h-3.5 -ml-1 text-secondary" />
                  <MdCircle className="w-5 h-5 mx-0.5 text-secondary" />
                  <div className="w-20 h-0.75 rounded-full bg-secondary"></div>
                </div>
                <div className="w-136 text-base/5 pt-2 text-primary-paragraph">
                  {description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

ActivityHistoryList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};