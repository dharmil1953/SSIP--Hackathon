import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Schemes from "./Schemes";
import { useSelector } from "react-redux";
import HomeGuj from "./images/HomeGuj";
import SchemesGuj from "./Gujaratipages/SchemesGuj";
import AboutGuj from "./Gujaratipages/AboutGuj";
import ContactGuj from "./Gujaratipages/ContactGuj";
import NavbarGuj from "./Gujaratipages/NavbarGuj";
import PlayPause from "./PlayPause";
import NavbarTwo from "./NavbarTwo";
import NavbarGujTwo from "./NavbarGujTwo";
import Test from "./Test";
import Downlaod from "./Downlaod";
import Login from "./Login";
import Grevience from "./Grevience";
import Timetable from "./Timetable";
import TimetableGuj from "./Gujaratipages/TimetableGuj";
import Admin from "./Admin";
import Trackstatus from "./Trackstatus";
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
            {/* <Route path="/Download" element={[<Navbar />, <Downlaod />]} /> */}
            <Route path="/Login" element={[<Navbar />, <Login />]} />
            <Route path="/Grevience" element={[<Navbar />, <Grevience />]} />
            <Route path="/watersupply" element={[<Navbar />, <Timetable />]} />
            <Route path="/admin" element={[<Navbar />, <Admin />]} />
            <Route path="/track_status" element={[<Navbar />, <Trackstatus />]} />
            <Route path="/test" element={[<Test />]} />
          </Routes>
        </div>
      ) : (
        <div className="container">
          <Routes>
            <Route path="/" element={[<NavbarGuj />, <HomeGuj />]} />
            <Route path="/Schemes" element={[<NavbarGuj />, <SchemesGuj />]} />
            <Route path="/About" element={[<NavbarGuj />, <AboutGuj />]} />
            {/* <Route path="/Contact" element={[<NavbarGuj />, <ContactGuj />]} /> */}
            {/* <Route path="/Download" element={[<Navbar />, <Downlaod />]} /> */}
            <Route
              path="/watersupply"
              element={[<Navbar />, <TimetableGuj />]}
            />
            <Route path="/Grevience" element={[<Navbar />, <Grevience />]} />
            <Route path="/Login" element={[<Navbar />, <Login />]} />
            <Route path="/test" element={[<Test />]} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
