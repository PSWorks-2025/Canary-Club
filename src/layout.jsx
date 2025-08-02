import PropTypes from 'prop-types';

import Header from './components/layout/Header/index.jsx';
import Footer from './components/layout/Footer/index.jsx';
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';
import { Outlet } from 'react-router';

function Layout({ children }) {
  return (
      <GlobalContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    PropTypes.node, // A single React node
  ]),
  page: PropTypes.string,
};

export default Layout;
