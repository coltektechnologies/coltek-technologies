import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import LegalPage from "../pages/LegalPage/legal";
import Portfolio from "../pages/Portfolio/Portfolio";


// Service page route import
import "react-toastify/dist/ReactToastify.css";
import Services from "@/pages/Services/Services";
import SoftwareSolutions from "@/pages/Services/software-solution/SoftwareSolutions";
import CloudSolutions from "@/pages/Services/cloudsolutions/CloudSolutions";
import AIML from "@/pages/Services/ai-ml/AIML";
import MobileAppDevelopment from "@/pages/Services/mobileapp/MobileAppDevelopment";




const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="legal" element={<LegalPage />} />
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
      
      {/* Service Routes */}
      <Route path="/Services" element={<Services />} />
      <Route path="/Services/SoftwareSolutions" element={<SoftwareSolutions />} />
      <Route path="/Services/AIML" element={<AIML />} />
      <Route path="/Services/CloudSolutions" element={<CloudSolutions/>} />
      <Route path="/Services/MobileAppDevelopment" element={<MobileAppDevelopment/>} />
    </Routes>
  )
}

export default AppRoutes