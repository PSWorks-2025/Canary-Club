import React from 'react';
import { useNavigate } from 'react-router';
// import SectionWrap from '../../../SectionWrap';

const EventsHighlightDisplay = ({
  listData,
  tertiaryBackgroundColor,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
        {title || 'Các sự kiện nổi bật'}
      </div>

      <div className="w-full flex flex-col items-center px-2 sm:px-4">
        {Object.entries(listData || {})
          .map(([key, event]) => ({
            key,
            title: event.title,
            description: event.abstract,
            imageUrl: event?.thumbnail?.src,
            started_time: event.started_time,
            id: event.id || key
          }))
          .sort((a, b) => new Date(b.started_time) - new Date(a.started_time))
          .map(({ key, title, description, imageUrl, id }) => (
            <div
              key={key}
              className="w-full md:w-[80%] xl:w-[70%] max-w-400 mt-12 flex flex-col md:flex-row relative"
            >
              <div className="w-full md:w-1/2 h-80 md:h-84 px-2 md:px-4 mb-4 md:mb-0">
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url("${
                      imageUrl ||
                      'https://blog.photobucket.com/hubfs/upload_pics_online.png'
                    }")`,
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 h-auto px-2 md:px-4 flex flex-col">
                <div className="w-full font-bold text-xl md:text-2xl text-primary-title mb-2">
                  {title || (
                    <span className="italic text-gray-400">
                      Chưa có tiêu đề
                    </span>
                  )}
                </div>
                <div className="w-full text-base md:text-base/5 py-4 md:py-6 text-primary-paragraph whitespace-pre-line">
                  {description || (
                    <span className="italic text-gray-400">Chưa có mô tả</span>
                  )}
                </div>
                <button
                  className="py-2 px-5 rounded-full font-semibold text-secondary-title mt-2 text-sm md:text-base w-fit cursor-default"
                  style={{ backgroundColor: tertiaryBackgroundColor }}
                  onClick={() =>
                    navigate('/detail-page', {
                      state: {
                        id,
                        title: title,
                        thumbnail: imageUrl,
                      },
                    })
                  }
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default EventsHighlightDisplay;
