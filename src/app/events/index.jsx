import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import './styles.css';
import EventsHeroSectionDisplay from '../../components/SectionsModel/Events/HeroSection/EventsHeroSectionDisplay';
import SingleProjectOverviewDisplay from '../../components/SectionsModel/Events/SingleProjectOverview/SingleProjectOverviewDisplay';
import DonateOverviewDisplay from '../../components/SectionsModel/Events/DonateOverview/DonateOverviewDisplay';
import RecentProjectDisplay from '../../components/SectionsModel/Events/RecentProjects/RecentProjectsDisplay';
import UpcomingEventsDisplay from '../../components/SectionsModel/Events/UpcomingEvents/UpcomingEventsDisplay';

function EventsPage() {
  const {
    setCurrentPage,
    heroSections,
    projectOverviews,
    eventOverviews,
    secondaryBackgroundColor,
  } = useContext(GlobalContext);

  const donateOverview = {
    heading: 'Hãy đồng hành cùng chúng mình',
    title1: 'Đặt mua bánh chưng',
    title2: 'Ủng hộ hiện kim',
    images: ['https://picsum.photos/800/600', 'https://picsum.photos/800/600'],
  };

  useEffect(() => setCurrentPage('events'), [setCurrentPage]);
console.log(heroSections)
  return (
    <div className="w-full">
      <EventsHeroSectionDisplay
        title={heroSections?.events?.title}
        description={heroSections?.events?.description}
        image={heroSections?.events?.image || ''}
      />
      {/* <SingleProjectOverviewDisplay
      // title="Tổng quan dự án"
      // listData={projectOverviews || {}}
      /> */}
      <DonateOverviewDisplay
        pageData={heroSections.donate || donateOverview}
        buttonColor={secondaryBackgroundColor}
      />
      <RecentProjectDisplay listData={projectOverviews || {}} />
      <UpcomingEventsDisplay
        title="Các sự kiện sắp diễn ra"
        listData={eventOverviews || {}}
      />
    </div>
  );
}

export default EventsPage;
