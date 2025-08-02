// import { createBrowserRouter, Navigate } from "react-router-dom";

// import { basePath } from "./constants/global";

// import "./global.css";

// import Layout from "./layout.jsx";

// import HomePage from "./app/home";
// import AboutPage from "./app/about/page";
// import EventsPage from "./app/events/page";
// import StoriesPage from "./app/stories/page";

// import { mockData } from "./mock/page56MockData.js";

// // import EachStoryPage from "./app/stories/each/page.jsx";
// import DonatePage from "./app/donate/page.jsx";

// // import { mockData, mockStory } from "./mock/page56MockData.js";

// const CreateRoutes = () => {
//   return createBrowserRouter([
//     {
//       path: basePath + "/",
//       element: (
//         <Layout>
//           <HomePage />
//         </Layout>
//       ),
//     },
//     {
//       path: basePath + "/about",
//       element: (
//         <Layout>
//           <AboutPage />
//         </Layout>
//       ),
//     },
//     {
//       path: basePath + "/events",
//       element: (
//         <Layout>
//           <EventsPage />
//         </Layout>
//       ),
//     },
//     {
//       path: basePath + "/stories",
//       element: (
//         <Layout>
//           <StoriesPage />
//         </Layout>
//       ),
//     },
//     {
//       path: basePath + "/donate",
//       element: (
//         <Layout>
//           <DonatePage {...mockData} />
//         </Layout>
//       ),
//     },
//     // {
//     //   path: basePath + "/each-story/:id",
//     //   element: (
//     //     <Layout>
//     //       <EachStoryPage />
//     //     </Layout>
//     //   ),
//     // },
//     {
//       path: "/*",
//       element: <Navigate to={basePath} replace />,
//     },
//   ])
// };

// export default CreateRoutes;
