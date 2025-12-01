import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import LegalPage from "../pages/LegalPage/legal";
import Portfolio from "../pages/Portfolio/Portfolio";



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
      </Routes>
  )
}

export default AppRoutes