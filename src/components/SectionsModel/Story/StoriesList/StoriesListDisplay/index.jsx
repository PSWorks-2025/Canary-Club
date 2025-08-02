import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const StoriesListDisplay = ({ title, listData }) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
        {title}
      </div>
      <div className="w-full pb-20">
        {Object.entries(listData).map(([id, detail]) => (
          <div key={`event_${id}`} className="w-full h-84 mt-12 flex">
            <div className="w-1/2 h-full px-4">
              <div
                className="w-136 h-full bg-cover bg-center float-right rounded-lg"
                style={{
                  backgroundImage: `url("${detail?.thumbnail?.src || ''}")`,
                }}
              ></div>
            </div>
            <div className="w-1/2 h-full px-4">
              <div className="font-bold text-2xl text-primary-title">
                {detail?.title || ''}
              </div>
              <p className="w-136 text-base/5 py-6 text-primary-paragraph">
                {detail?.abstract || ''}
              </p>
              <button
                onClick={() =>
                  navigate('/detail-page', {
                    state: {
                      id,
                      title: detail?.title,
                      thumbnail: detail?.thumbnail?.src,
                    },
                  })
                }
                className="hover:scale-105 hover:bg-secondary-darken transition-all duration-200 py-2 px-5 rounded-full cursor-pointer font-semibold bg-secondary text-secondary-title"
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

StoriesListDisplay.propTypes = {
  title: PropTypes.string.isRequired, // Expecting a string for the title of the list
  listData: PropTypes.object.isRequired, // Expecting an object with event details
};

export default StoriesListDisplay;
