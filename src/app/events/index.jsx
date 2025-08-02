import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import './styles.css';
import EventsHeroSectionDisplay from '../../components/SectionsModel/Events/HeroSection/EventsHeroSectionDisplay';
import DonateOverviewDisplay from '../../components/SectionsModel/Events/DonateOverview/DonateOverviewDisplay';
import RecentProjectDisplay from '../../components/SectionsModel/Events/RecentProjects/RecentProjectsDisplay';
import UpcomingEventsDisplay from '../../components/SectionsModel/Events/UpcomingEvents/UpcomingEventsDisplay';

function EventsPage() {
  const {
    setCurrentPage,
    heroSections,
    projectOverviews,
    eventOverviews,
    sectionTitles,
    secondaryBackgroundColor,
  } = useContext(GlobalContext);

  useEffect(() => {
    console.log('EventsPage heroSections:', heroSections);
    setCurrentPage('events');
  }, [heroSections, setCurrentPage]);

  return (
    <div className="w-full">
      <EventsHeroSectionDisplay
        title={heroSections?.events?.title}
        description={heroSections?.events?.description}
        image={heroSections?.events?.image || ''}
      />
      <DonateOverviewDisplay
        pageData={{
          heading: sectionTitles.donate_overview || 'Hãy đồng hành cùng chúng mình',
          title1: heroSections?.donate?.title1 || 'Đặt mua bánh chưng',
          title2: heroSections?.donate?.title2 || 'Ủng hộ hiện kim',
          images: heroSections?.donate?.images || [
            'https://picsum.photos/800/600',
            'https://picsum.photos/800/600',
          ],
        }}
        buttonColor={secondaryBackgroundColor}
      />
      <RecentProjectDisplay
        title={sectionTitles.projects || 'Dự án & hoạt động nổi bật đã thực hiện'}
        listData={projectOverviews || {}}
      />
      <UpcomingEventsDisplay
        title={sectionTitles.events || 'Sự kiện đang diễn ra'}
        listData={eventOverviews || {}}
      />
    </div>
  );
}

export default EventsPage;