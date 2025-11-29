import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home/home"

// Service page route import
import "react-toastify/dist/ReactToastify.css";
import Services from '@/pages/Home/Services/Services';
import SoftwareSolutions from '@/pages/Home/Services/SoftwareSolutions';
import AIML from '@/pages/Home/Services/AIML';
import CloudSolutions from '@/pages/Home/Services/CloudSolutions';
import MobileAppDevelopment from '@/pages/Home/Services/MobileAppDevelopment';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/Services" element={<Services />} />
      <Route path="/Services/SoftwareSolutions" element={<SoftwareSolutions />} />
      <Route path="/Services/AIML" element={<AIML />} />
      <Route path="/Services/CloudSolutions" element={<CloudSolutions/>} />
      <Route path="/Services/MobileAppDevelopment" element={<MobileAppDevelopment/>} />
    </Routes>
  )
}

export default AppRoutes