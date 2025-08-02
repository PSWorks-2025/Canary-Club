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
  const { setCurrentPage, heroSections, statements, storyOverviews, members, activityHistory, projectOverviews, sectionTitles } =
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
        title={sectionTitles.stories || 'Những kỉ niệm của chúng tôi'}
        listData={storyOverviews || {}}
      />
      <MemberListDisplay
        title={sectionTitles.members || 'Thành viên'}
        listData={members || []}
      />
      <TimelineDisplay
        title={sectionTitles.activity_history || 'Lịch sử hoạt động'}
        listData={activityHistory || []}
      />
      <ProjectHighlightDisplay
        title={sectionTitles.projects || 'Dự án & hoạt động nổi bật đã thực hiện'}
        listData={projectOverviews || {}}
      />
    </div>
  );
}

export default Aboutpage;