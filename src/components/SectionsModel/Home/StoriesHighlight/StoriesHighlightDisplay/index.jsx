import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdCircle } from 'react-icons/md';
import { useNavigate } from 'react-router';

const StorySectionDisplay = ({ data, title, buttonColor }) => {
  const navigate = useNavigate()
  const itemsPerPage = 3;
  const sortedStories = Object.entries(data).sort(
    (a, b) => new Date(b[1].posted_time) - new Date(a[1].posted_time)
  );
  const numberOfPages = Math.ceil(sortedStories.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const visibleStories = sortedStories.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
      <h2 className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
        {title}
      </h2>

      <div className="w-full pt-12 flex justify-center">
        <div className="w-280 h-128 relative">
          {/* Pagination Buttons */}
          {numberOfPages > 1 && (
            <>
              <button
                onClick={() => setPage(Math.max(page - 1, 0))}
                className="w-11 h-11 absolute -left-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer z-10"
              >
                <IoIosArrowBack className="w-5 h-5" />
              </button>
              <button
                onClick={() => setPage(Math.min(page + 1, numberOfPages - 1))}
                className="w-11 h-11 absolute -right-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer z-10"
              >
                <IoIosArrowForward className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Story List */}
          <div className="w-full h-full overflow-hidden">
            <div
              className="w-100000 h-full flex transition-all duration-750"
              style={{ marginLeft: `calc(${-288 * page} * var(--spacing))` }}
            >
              {sortedStories.map(([id, story]) => (
                <div key={id} className="w-88 mr-8 h-full">
                  <div
                    className="w-full h-60 bg-cover bg-center rounded-sm"
                    style={{
                      backgroundImage: `url("${story.thumbnail?.src}")`,
                    }}
                  />
                  <div className="w-full font-bold text-2xl pt-5 text-primary-title">
                    {story.title}
                  </div>
                  <div className="w-full text-base/5 py-5 text-primary-paragraph whitespace-pre-wrap">
                    {story.abstract}
                  </div>
                  <button
                    className="font-semibold block mt-2"
                    style={{ color: buttonColor }}
                    onClick={() =>
                      navigate('/detail-page', {
                        state: {
                          id,
                          title: story.title,
                          thumbnail: story.thumbnail.src,
                        },
                      })
                    }
                  >
                    Đọc thêm{' '}
                    <IoIosArrowForward className="inline-block mb-0.5 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="w-full flex justify-center">
            {Array.from({ length: numberOfPages }, (_, index) => (
              <MdCircle
                key={`dot_${index}`}
                className={`w-2.5 h-2.5 mx-0.5 ${
                  page === index ? 'text-secondary' : 'text-primary-darken-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

StorySectionDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
};

export default StorySectionDisplay;
