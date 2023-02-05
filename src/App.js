import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Schemes from "./Schemes";
import { useSelector } from "react-redux";
import HomeGuj from "./Gujaratipages/HomeGuj";
import SchemesGuj from "./Gujaratipages/SchemesGuj";
import AboutGuj from "./Gujaratipages/AboutGuj";
import ContactGuj from "./Gujaratipages/ContactGuj";
import NavbarGuj from "./Gujaratipages/NavbarGuj";
import PlayPause from "./PlayPause";
import NavbarTwo from "./NavbarTwo";
import NavbarGujTwo from "./NavbarGujTwo";
function App() {
  const lang = useSelector((state) => state.language);

  return (
    <>
      {lang === "en" ? (
        <div className="container">
          <Routes>
            <Route path="/" element={[<Navbar />, <Home />]} />
            <Route path="/Schemes" element={[<Navbar />, <Schemes />]} />
            <Route path="/About" element={[<Navbar />, <About />]} />
            <Route path="/Contact" element={[<Navbar />, <Contact />]} />
          </Routes>
        </div>
      ) : (
        <div className="container">
          <Routes>
            <Route path="/" element={[<NavbarGuj />, <HomeGuj />]} />
            <Route path="/Schemes" element={[<NavbarGuj />, <SchemesGuj />]} />
            <Route path="/About" element={[<NavbarGuj />, <AboutGuj />]} />
            <Route path="/Contact" element={[<NavbarGuj />, <ContactGuj />]} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
