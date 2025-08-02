import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import './styles.css';
import StoriesHeroSectionDisplay from '../../components/SectionsModel/Story/HeroSection/StoryHeroSectionDisplay';
import StoriesListDisplay from '../../components/SectionsModel/Story/StoriesList/StoriesListDisplay';

function StoriesPage() {
  const { setCurrentPage, heroSections, storyOverviews, sectionTitles, secondaryBackgroundColor } = useContext(GlobalContext);

  useEffect(() => setCurrentPage('stories'), [setCurrentPage]);

  return (
    <div className="w-full">
      <StoriesHeroSectionDisplay      
        title={heroSections?.stories?.title}
        description={heroSections?.stories?.description}
        image={heroSections?.stories?.image || ''}
        id={heroSections?.stories?.id}
        buttonColor={secondaryBackgroundColor}
      />
      <StoriesListDisplay
        title={sectionTitles.stories || 'Những kỉ niệm của chúng tôi'}
        listData={storyOverviews || {}}
      />
    </div>
  );
}

export default StoriesPage;