import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
// import logo from "/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HeaderNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '');

  const globalComponentsData = {};
  // const { currentPage, basePath } = useContext(GlobalContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pages = {
    home: 'Home',
    about: 'About',
    events: 'Events',
    stories: 'Stories',
    donate: 'Donate us',
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center text-center h-full px-4">
        <div className="hidden md:block h-full flex-grow">
          <ul className="flex justify-center h-full">
            {Object.entries(pages).map(([pageId, pageName], index) => (
              <li key={`page_${pageId}`} className="w-28 h-full flex flex-row">
                <button
                  type="button"
                  onClick={() =>
                    navigate(pageId === 'home' ? '/' : `/${pageId}`)
                  }
                  className={` w-full h-full transition-colors duration-200 cursor-pointer 
                      ${
                        currentPage === pageId ||
                        (pageId === 'home' && currentPage === '')
                          ? 'text-secondary font-bold hover:text-primary hover:bg-secondary'
                          : 'hover:text-primary-hover hover:bg-primary-darken'
                      }
                      `}
                >
                  {pageName}
                </button>
                {index < Object.entries(pages).length - 1 && (
                  <br className="border-gray-200 border-1 h-1/2 my-auto" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden absolute right-10">
          <button
            onClick={toggleDropdown}
            className="text-primary-paragraph focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="block md:hidden absolute left-0 right-0 bg-primary">
          <ul className="flex flex-col items-center">
            {Object.entries(pages).map(([pageId, pageName], index) => (
              <li
                key={`dropdown_page_${pageId}`}
                className="w-full text-center"
              >
                <button
                  type="button"
                  onClick={() =>
                    navigate(pageId === 'home' ? '/' : `/${pageId}`)
                  }
                  className={` w-full h-full py-3 transition-colors duration-200 cursor-pointer 
                      ${
                        currentPage === pageId
                          ? 'text-secondary font-bold hover:text-primary hover:bg-secondary'
                          : 'hover:text-primary-hover hover:bg-primary-darken'
                      }
                      `}
                >
                  {pageName}
                </button>
                {index < Object.entries(pages).length - 1 && (
                  <hr className="border-gray-300 w-2/3 mx-auto" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

HeaderNavigation.propTypes = {
  currentPage: PropTypes.string,
};

export default HeaderNavigation;
