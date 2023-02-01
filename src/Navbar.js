import React, { Component, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import language, {
  ChangeLangaugetoEnglish,
  ChangeLangaugetoGujarati,
} from "./reducers/Texttospeech";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.jpg";
import logo3 from "./images/n.gif";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);

  // useEffect(() => {
  // }, [lang]);

  const changelang = () => {
    lang == "en"
      ? dispatch(ChangeLangaugetoGujarati())
      : dispatch(ChangeLangaugetoEnglish());
  };

  return (
    <>
      {/* {console.log(`hii ${lang}`)} */}
      <nav className="navbar">
        <div className="brand-title">
          <Link to="/">
            <img
              height={"60px"}
              width={"125px"}
              src={logo1}
              style={{ paddingRight: "10px" }}
            />
          </Link>

          <img height={"60px"} width={"125px"} src={logo2} />
        </div>
        <Link
          className="toggle-button"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>

        <div className={sidebar ? "navbar-links active" : "navbar-links"}>
          <ul>
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/schemes"}>Schemes</CustomLink>
            <CustomLink to={"/About"}>About</CustomLink>
            <CustomLink to={"/Contact"}>Contact</CustomLink>

            <li
              className="language"
              onClick={() => {
                changelang();
              }}
            >
              change language to {lang == "en" ? "Gujarati" : "English"}
            </li>
          </ul>
        </div>
      </nav>

      <PlayPause />
      <marquee className="marque">
        <img src={logo3}></img>
        <p> Some news information</p>
      </marquee>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
