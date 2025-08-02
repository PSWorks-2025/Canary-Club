import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom'; // <-- use 'react-router-dom'
import './global.css';

import Layout from './layout';

import HomePage from './app/home';
import AboutPage from './app/about/';
import FundraisingPage from './app/donate/';
import Events from './app/events/';
import Story from './app/stories/';
import DetailContent from './app/detailPage';

const root = document.getElementById('root');

createRoot(root).render(
  <HashRouter>
    <Routes>
      {/* Layout wraps all children routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="detail-page" element={<DetailContent />} />
        <Route path="donate" element={<FundraisingPage />} />
        <Route path="events" element={<Events />} />
        <Route path="stories" element={<Story />} />
      </Route>
    </Routes>
  </HashRouter>
);
