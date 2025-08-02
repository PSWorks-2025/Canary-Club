import { MdCircle } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import PropTypes from "prop-types";

export function ActivityHistoryListItem({
  startDate,
  endDate,
  imageUrl1,
  imageUrl2,
  description,
}) {
  // this does nothing but clear annoying "unused" warnings
  const clearAnnoyingWarning = () => [
    startDate,
    endDate,
    imageUrl1,
    imageUrl2,
    description,
  ];
  clearAnnoyingWarning();

  return null;
}

ActivityHistoryListItem.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imageUrl1: PropTypes.string.isRequired,
  imageUrl2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export function ActivityHistoryList({ children }) {
  return (
    <div className="w-full">
      {children.map((activity, index) =>
        index % 2 === 0 ? (
          <div key={`activity_${index}`} className="w-full h-84 mt-12 mt-8 flex">
            <div className="w-1/2 h-full px-4">
              <div className="w-136 h-full float-right relative">
                <div
                  className="absolute w-88 h-62 bg-cover bg-center rounded-lg top-0 left-0"
                  style={{
                    backgroundImage: `url("${activity.props.imageUrl1}")`,
                  }}
                ></div>
                <div
                  className="absolute w-88 h-47 bg-cover bg-center rounded-lg bottom-0 right-0"
                  style={{
                    backgroundImage: `url("${activity.props.imageUrl2}")`,
                  }}
                ></div>
              </div>
            </div>
            <div className="w-1/2 h-full px-4">
              <div className="w-136 h-full">
                <div className="w-83 flex justify-between text-[1.6rem] font-bold text-primary-title">
                  <div>{activity.props.startDate}</div>
                  <div className="w-0 flex justify-center">
                    {activity.props.endDate}
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <MdCircle className="w-5 h-5 mr-0.5 text-secondary" />
                  <div className="w-72 h-0.75 rounded-full bg-secondary"></div>
                  <BiSolidRightArrow className="w-3.5 h-3.5 -ml-1 text-secondary" />
                  <MdCircle className="w-5 h-5 mx-0.5 text-secondary" />
                  <div className="w-20 h-0.75 rounded-full bg-secondary"></div>
                </div>
                <div className="w-136 text-base/5 pt-2 text-primary-paragraph">
                  {activity.props.description}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={`activity_${index}`}
            className="w-full h-84 mt-12 flex flex-row-reverse"
          >
            <div className="w-1/2 h-full px-4">
              <div className="w-136 h-full relative">
                <div
                  className="absolute w-88 h-62 bg-cover bg-center rounded-lg top-0 right-0"
                  style={{
                    backgroundImage: `url("${activity.props.imageUrl1}")`,
                  }}
                ></div>
                <div
                  className="absolute w-88 h-47 bg-cover bg-center rounded-lg bottom-0 left-0"
                  style={{
                    backgroundImage: `url("${activity.props.imageUrl2}")`,
                  }}
                ></div>
              </div>
            </div>
            <div className="w-1/2 h-full px-4">
              <div className="w-136 h-full float-right">
                <div className="w-83 flex justify-between text-[1.6rem] font-bold text-primary-title">
                  <div>{activity.props.startDate}</div>
                  <div className="w-0 flex justify-center">
                    {activity.props.endDate}
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <MdCircle className="w-5 h-5 mr-0.5 text-secondary" />
                  <div className="w-72 h-0.75 rounded-full bg-secondary"></div>
                  <BiSolidRightArrow className="w-3.5 h-3.5 -ml-1 text-secondary" />
                  <MdCircle className="w-5 h-5 mx-0.5 text-secondary" />
                  <div className="w-20 h-0.75 rounded-full bg-secondary"></div>
                </div>
                <div className="w-136 text-base/5 pt-2 text-primary-paragraph">
                  {activity.props.description}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

ActivityHistoryList.propTypes = {
  children: PropTypes.array,
};
