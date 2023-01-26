// Rutas
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Animaciones
import {AnimatePresence} from "framer-motion"

// Pages
import Home from "containers/pages/Home";
import Error404 from "containers/errors/Error404";
import Portafolio from "containers/pages/Portafolio";
import About from "containers/pages/About";
import PostDetail from "../../containers/pages/PostDetail";
import Contact from "containers/pages/Contact";

export default function AnimatedRoutes() {
    const location = useLocation()
    return (

      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    {/* Error 404 */}
    <Route path="*" element={<Error404 />} />

    {/* Pages */}
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portafolio />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacto" element={<Contact />} />
    <Route path="/portfolio/:slug" element={<PostDetail />} />


  </Routes>
      </AnimatePresence>

  )
}
