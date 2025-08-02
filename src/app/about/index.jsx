import { useContext, useEffect } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import AboutHeroSectionDisplay from '../../components/SectionsModel/AboutCanary/HeroSection/AboutHeroSectionDisplay';
import MissionDisplay from '../../components/SectionsModel/AboutCanary/Mission/MissionDisplay';
import VisionDisplay from '../../components/SectionsModel/AboutCanary/Vision/VisionDisplay';
import StoriesHighlightDisplay from '../../components/SectionsModel/AboutCanary/StoriesHighlight/StoriesHighlightDisplay';
import MemberListDisplay from '../../components/SectionsModel/AboutCanary/Member/MemberListDisplay';
import TimelineDisplay from '../../components/SectionsModel/AboutCanary/Timeline/TimelineDisplay';
import ProjectHighlightDisplay from '../../components/SectionsModel/AboutCanary/ProjectsHighlight/ProjectsHighlightDisplay';

function Aboutpage() {
  const { setCurrentPage, heroSections, statements, storyOverviews, members, activityHistory, projectOverviews } =
    useContext(GlobalContext);

  useEffect(() => setCurrentPage('about'), [setCurrentPage]);

  return (
    <div className="w-full">
      <AboutHeroSectionDisplay
        image={heroSections?.about?.coverImage || ''}
        title={heroSections?.about?.title}
        description={heroSections?.about?.description}
      />
      <MissionDisplay
        missionTitle={statements?.mission?.title || ''}
        missionImage={statements?.mission?.imageUrl || ''}
        missionDescription={statements?.mission?.description}
      />
      <VisionDisplay
        visionTitle={statements?.vision?.title || ''}
        visionImage={statements?.vision?.imageUrl || ''}
        visionDescription={statements?.vision?.description}
      />
      <StoriesHighlightDisplay
        title="Các câu chuyện ý nghĩa"
        listData={storyOverviews || {}}
      />
      <MemberListDisplay listData={members || []} />
      <TimelineDisplay
        listData={activityHistory || []}
      />
      <ProjectHighlightDisplay
        listData={projectOverviews || {}}
      />
    </div>
  );
}

export default Aboutpage;
