import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Layout component (kept as static import since it's used in multiple places)
import Layout from "../components/layout/Layout";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const LegalPage = lazy(() => import("../pages/LegalPage/legal"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const Services = lazy(() => import("@/pages/Services/Services"));
const SoftwareSolutions = lazy(() => import("@/pages/Services/software-solution/SoftwareSolutions"));
const CloudSolutions = lazy(() => import("@/pages/Services/cloudsolutions/CloudSolutions"));
const AIML = lazy(() => import("@/pages/Services/ai-ml/AIML"));
const MobileAppDevelopment = lazy(() => import("@/pages/Services/mobileapp/MobileAppDevelopment"));

// Loading component (can be customized further)
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);




const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<LegalPage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Service Routes */}
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/SoftwareSolutions" element={<SoftwareSolutions />} />
        <Route path="/Services/AIML" element={<AIML />} />
        <Route path="/Services/CloudSolutions" element={<CloudSolutions />} />
        <Route path="/Services/MobileAppDevelopment" element={<MobileAppDevelopment />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes