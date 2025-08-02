import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdCircle } from 'react-icons/md';
import TextDisplay from '../../../../core/TextDisplay';

// MemberListDisplay component
const MemberListDisplay = ({ listData }) => {
  return (
    <div>
      <TextDisplay
        value="Đội ngũ thành viên"
        className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center"
      />
      <MemberList>
        {listData.map((member, index) => (
          <MemberListItem
            key={`member_${index}`}
            imageUrl={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </MemberList>
    </div>
  );
};

MemberListDisplay.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MemberListDisplay;

// MemberListItem component
function MemberListItem({ imageUrl, name, role }) {
  return (
    <div className="w-64 mr-8 h-full">
      <div
        className="w-full h-64 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="w-full font-bold text-lg pt-2 text-primary-title text-center">
        {name}
      </div>
      <p className="w-full text-base/5 text-primary-paragraph text-center">
        {role}
      </p>
    </div>
  );
}

MemberListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

// MemberList component
function MemberList({ children }) {
  const numberOfPages = Math.ceil(children.length / 4);
  const [page, setPage] = useState(0);

  return (
    <div className="w-full pt-12 flex justify-center">
      <div className="w-280 h-88 relative">
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          className="hover:scale-105 hover:bg-primary-darken-2 transition-all duration-200 w-11 h-11 absolute -left-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer"
        >
          <IoIosArrowBack className="w-5 h-5" />
        </button>
        <button
          onClick={() => setPage(Math.min(page + 1, numberOfPages - 1))}
          className="hover:scale-105 hover:bg-primary-darken-2 transition-all duration-200 w-11 h-11 absolute -right-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer"
        >
          <IoIosArrowForward className="w-5 h-5" />
        </button>
        <div className="w-full h-full overflow-hidden">
          <div
            className="w-100000 h-full flex transition-all duration-750"
            style={{ marginLeft: `calc(${-288 * page} * var(--spacing))` }}
          >
            {children}
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center">
          {Array.from(Array(numberOfPages).keys()).map((index) => (
            <MdCircle
              key={`dot_${index}`}
              onClick={() => setPage(index)}
              className={`w-2.5 h-2.5 mx-0.5 transition-all duration-200 cursor-pointer 
                ${
                  page === index
                    ? 'text-secondary scale-115'
                    : 'text-primary-darken-2'
                }
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

MemberList.propTypes = {
  children: PropTypes.array,
};
