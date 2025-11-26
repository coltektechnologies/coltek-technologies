import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home/home"

// Service page route import
import "react-toastify/dist/ReactToastify.css";
import Services from '@/pages/Home/Services/Services';
// import Academy from '../pages/Services/Academy';
// import AiMl from '../pages/Services/AiMl';
// import ItConsultant from '../pages/Services/ItConsultant';
// import CloudArchitecture from '../pages/Services/CloudArchitecture';
// import SoftwareDevelopment from '../pages/Services/SoftwareDevelopment';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/services" element={<Services />} />
      {/* <Route path="/services/academy" element={<Academy />} /> */}
      {/* <Route path="/services/ai-ml" element={<AiMl />} />
      <Route path="/services/it-consultant" element={<ItConsultant />} />
      <Route path="/services/cloud-architecture" element={<CloudArchitecture />} />
      <Route path="/services/software-development" element={<SoftwareDevelopment />} /> */}
    </Routes>
  )
}

export default AppRoutes