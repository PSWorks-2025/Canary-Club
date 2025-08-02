import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { readData } from '../services/firebaseRead';
import { basePath } from '../constants/global';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  // Global and main data
  const [globalData, setGlobalData] = useState({});
  const [mainData, setMainData] = useState({});
  const [loading, setLoading] = useState(true);

  // Theme colors
  const [primaryBackgroundColor, setPrimaryBackgroundColor] = useState('#ffffff');
  const [secondaryBackgroundColor, setSecondaryBackgroundColor] = useState('#4160df');
  const [tertiaryBackgroundColor, setTertiaryBackgroundColor] = useState('#4160df');

  // Footer-specific states
  const [logoUrl, setLogoUrl] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [contactInfoData, setContactInfoData] = useState({
    hotline: null,
    email: null,
    address: null,
  });
  const [socialLinksData, setSocialLinksData] = useState({});

  // Image upload queue (unused in public site but kept for consistency)
  const [imageUploadQueue, setImageUploadQueue] = useState({});

  // Main data states for the main pages
  const [activityHistory, setActivityHistory] = useState([]);
  const [eventOverviews, setEventOverviews] = useState({});
  const [fundraising, setFundraising] = useState({});
  const [heroSections, setHeroSections] = useState({});
  const [highlights, setHighlights] = useState({});
  const [members, setMembers] = useState([]);
  const [orgStats, setOrgStats] = useState({});
  const [projectOverviews, setProjectOverviews] = useState({});
  const [statements, setStatements] = useState({});
  const [storyOverviews, setStoryOverviews] = useState({});
  const [sectionTitles, setSectionTitles] = useState({
    members: 'Thành viên',
    activity_history: 'Lịch sử hoạt động',
    stories: 'Câu chuyện',
    projects: 'Dự án & hoạt động nổi bật đã thực hiện',
    fundraising_header: 'Quỹ Gây Quỹ',
    campaign_details: 'Chi Tiết Chiến Dịch',
    donor_list: 'Danh Sách Ủng Hộ',
    events: 'Sự kiện',
    donate_overview: 'Hãy đồng hành cùng chúng mình', // Added for DonateOverview
    events_overview: 'Tổng kết các sự kiện đã qua', // Added for EventsOverview
  });

  useEffect(() => {
    console.log('Current projectOverviews:', projectOverviews);
  }, [projectOverviews]);

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const res = await readData();
        if (res?.global) {
          setGlobalData(res.global);
          setLogoUrl(res.global.logo || '');
          setPrimaryBackgroundColor(res.global.primaryBackgroundColor || '#ffffff');
          setSecondaryBackgroundColor(res.global.secondaryBackgroundColor || '#4160df');
          setTertiaryBackgroundColor(res.global.tertiaryBackgroundColor || '#4160df');
          setGroupName(res.global.group_name || '');
          setGroupDescription(res.global.description || '');
          setContactInfoData({
            hotline: res.global.hotline || null,
            email: res.global.email || null,
            address: res.global.address || null,
          });
          setSocialLinksData(res.global.social_media || {});
        }
        if (res?.main) {
          setMainData(res.main);
          setActivityHistory(
            res.main.activity_history?.map((activity) => ({
              ...activity,
              started_time: activity.started_time?.toDate
                ? activity.started_time.toDate()
                : activity.started_time || null,
              ended_time: activity.ended_time?.toDate
                ? activity.ended_time.toDate()
                : activity.ended_time || null,
            })) || []
          );
          setEventOverviews(
            Object.entries(res.main.event_overviews || {}).reduce((acc, [key, event]) => {
              acc[key] = {
                ...event,
                started_time: event.started_time?.toDate
                  ? event.started_time.toDate()
                  : event.started_time || null,
              };
              return acc;
            }, {})
          );
          setFundraising({
            ...res.main.fundraising,
            fundraiser_name: res.main.fundraising?.fundraiser_name || res.main.fundraising?.fundraiserName || '',
            campaign_title: res.main.fundraising?.campaign_title || res.main.fundraising?.campaignTitle || '',
            image_url: res.main.fundraising?.image_url || res.main.fundraising?.imageUrl || 'https://via.placeholder.com/300',
          });
          setHeroSections(res.main.hero_sections || {});
          setHighlights(res.main.highlights || {});
          setMembers(res.main.members || []);
          setOrgStats({
            ...res.main.org_stats,
            primary_color: res.main.org_stats?.primary_color || res.main.org_stats?.primaryColor || '#5900ff',
            secondary_color: res.main.org_stats?.secondary_color || res.main.org_stats?.secondaryColor || '#ff0000',
          });
          setProjectOverviews(
            Object.entries(res.main.project_overviews || {}).reduce((acc, [key, project]) => {
              acc[key] = {
                ...project,
                started_time: project.started_time?.toDate
                  ? project.started_time.toDate()
                  : project.started_time || null,
              };
              return acc;
            }, {})
          );
          setStatements(res.main.statements || {});
          setStoryOverviews(
            Object.entries(res.main.story_overviews || {}).reduce((acc, [key, story]) => {
              acc[key] = {
                ...story,
                posted_time: story.posted_time?.toDate
                  ? story.posted_time.toDate()
                  : story.posted_time || null,
              };
              return acc;
            }, {})
          );
          setSectionTitles({
            members: res.main.section_titles?.members || 'Thành viên',
            activity_history: res.main.section_titles?.activity_history || 'Lịch sử hoạt động',
            stories: res.main.section_titles?.stories || 'Câu chuyện',
            projects: res.main.section_titles?.projects || 'Dự án & hoạt động nổi bật đã thực hiện',
            fundraising_header: res.main.section_titles?.fundraising_header || 'Quỹ Gây Quỹ',
            campaign_details: res.main.section_titles?.campaign_details || 'Chi Tiết Chiến Dịch',
            donor_list: res.main.section_titles?.donor_list || 'Danh Sách Ủng Hộ',
            events: res.main.section_titles?.events || 'Sự kiện',
            donate_overview: res.main.section_titles?.donate_overview || 'Hãy đồng hành cùng chúng mình',
            events_overview: res.main.section_titles?.events_overview || 'Tổng kết các sự kiện đã qua',
          });
        }
      } catch (error) {
        console.error('Error in GlobalContextProvider useEffect:', error);
      } finally {
        setLoading(false);
      }
    };
    handleGetData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        globalData,
        setGlobalData,
        mainData,
        setMainData,
        primaryBackgroundColor,
        setPrimaryBackgroundColor,
        secondaryBackgroundColor,
        setSecondaryBackgroundColor,
        tertiaryBackgroundColor,
        setTertiaryBackgroundColor,
        logoUrl,
        setLogoUrl,
        logoFile,
        setLogoFile,
        groupName,
        setGroupName,
        groupDescription,
        setGroupDescription,
        contactInfoData,
        setContactInfoData,
        socialLinksData,
        setSocialLinksData,
        imageUploadQueue,
        setImageUploadQueue,
        activityHistory,
        setActivityHistory,
        eventOverviews,
        setEventOverviews,
        fundraising,
        setFundraising,
        heroSections,
        setHeroSections,
        highlights,
        setHighlights,
        members,
        setMembers,
        orgStats,
        setOrgStats,
        projectOverviews,
        setProjectOverviews,
        statements,
        setStatements,
        storyOverviews,
        setStoryOverviews,
        sectionTitles,
        setSectionTitles,
        currentPage,
        setCurrentPage,
        basePath,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node,
};

export default GlobalContext;