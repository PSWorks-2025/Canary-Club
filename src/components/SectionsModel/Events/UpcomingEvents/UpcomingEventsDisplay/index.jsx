import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdCircle } from 'react-icons/md';
import PropTypes from 'prop-types';

const UpcomingEventsDisplay = ({ title, listData }) => (
  <div>
    <div className="pt-20 text-center text-[2.5rem] font-bold text-primary-title">
      {title}
    </div>
    <ScrollList>
      {Object.entries(listData).map(([id, detail]) => (
        <ScrollListItem
          key={`story_${id}`}
          id={id}
          imageUrl={detail?.thumbnail?.src || ''}
          title={detail?.title || ''}
          description={detail?.abstract || ''}
        />
      ))}
    </ScrollList>
  </div>
);

UpcomingEventsDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  listData: PropTypes.object.isRequired,
};

export default UpcomingEventsDisplay;

export function ScrollListItem({ imageUrl, title, description, id }) {
  const navigate = useNavigate();

  return (
    <div className="w-[22rem] shrink-0">
      <div
        className="h-60 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="pt-5 text-2xl font-bold text-primary-title">{title}</div>
      <p className="py-5 text-base/5 text-primary-paragraph">{description}</p>
      <button
        onClick={() =>
          navigate('/detail-page', {
            state: {
              id,
              title: title,
              thumbnail: imageUrl,
            },
          })
        }
        className="text-secondary font-semibold transition hover:text-secondary-hover hover:translate-x-1"
      >
        Đọc thêm <IoIosArrowForward className="inline-block mb-0.5" />
      </button>
    </div>
  );
}

ScrollListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export function ScrollList({ children }) {
  const ITEMS_PER_PAGE = 3;
  const ITEM_WIDTH = 352 + 32; // width (22rem = 352px) + gap (2rem = 32px)
  const pages = Math.ceil(React.Children.count(children) / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);

  return (
    <div className="w-full pt-12 flex justify-center">
      <div className="relative w-[1120px] h-[448px]">
        {/* Arrows */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="absolute left-[-24px] top-1/2 transform -translate-y-1/2 w-11 h-11 rounded-full bg-primary-darken flex items-center justify-center hover:scale-105 hover:bg-primary-darken-2 z-10"
        >
          <IoIosArrowBack className="w-5 h-5" />
        </button>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, pages - 1))}
          className="absolute right-[-24px] top-1/2 transform -translate-y-1/2 w-11 h-11 rounded-full bg-primary-darken flex items-center justify-center hover:scale-105 hover:bg-primary-darken-2 z-10"
        >
          <IoIosArrowForward className="w-5 h-5" />
        </button>

        {/* Scrollable List */}
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex gap-x-8 transition-all duration-700"
            style={{ transform: `translateX(-${page * 3 * ITEM_WIDTH}px)` }}
          >
            {children}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-2 w-full flex justify-center">
          {Array.from({ length: pages }).map((_, i) => (
            <MdCircle
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 mx-0.5 cursor-pointer transition-transform 
                ${
                  page === i
                    ? 'text-secondary scale-115'
                    : 'text-primary-darken-2'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ScrollList.propTypes = {
  children: PropTypes.node,
};
