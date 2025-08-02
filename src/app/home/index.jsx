import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import HomeHeroSectionDisplay from '../../components/SectionsModel/Home/HeroSection/HomeHeroSectionDisplay';
import StatHighlightDisplay from '../../components/SectionsModel/Home/StatHighlight/StatHighlightDisplay';
import EventsHighlightDisplay from '../../components/SectionsModel/Home/EventsHighlight/EventsHighlightDisplay';
import StoriesHighlightDisplay from '../../components/SectionsModel/Home/StoriesHighlight/StoriesHighlightDisplay';

function HomePage() {
  const { setCurrentPage, heroSections, orgStats, eventOverviews, storyOverviews, tertiaryBackgroundColor } = useContext(GlobalContext);

  useEffect(() => setCurrentPage('home'), [setCurrentPage]);

  return (
    <div className="w-full">
      <HomeHeroSectionDisplay
        image={heroSections?.home?.image || ''}
      />
      <StatHighlightDisplay orgStats={orgStats || {}} tertiaryBackgroundColor={tertiaryBackgroundColor} />
      <EventsHighlightDisplay
        title="Các sự kiện đã và đang diễn ra"
        listData={eventOverviews || {}}
        tertiaryBackgroundColor={tertiaryBackgroundColor}
      />
      <StoriesHighlightDisplay
        title="Các câu chuyện ý nghĩa"
        data={storyOverviews || {}}
      />
    </div>
  );
}

export default HomePage;
