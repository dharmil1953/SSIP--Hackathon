import React, { Component, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import language, {
  ChangeLangaugetoEnglish,
  ChangeLangaugetoGujarati,
  login,
  logout,
} from "../reducers/Texttospeech";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/n.gif";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "../PlayPause";

export default function NavbarGuj() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLoggedin);

  const lang = useSelector((state) => state.language);

  // useEffect(() => {
  // }, [lang]);

  const changelang = () => {
    lang == "en"
      ? dispatch(ChangeLangaugetoGujarati())
      : dispatch(ChangeLangaugetoEnglish());
    // console.log(lang);
  };

    const changelogin = () => {
      isLoggedin == true ? dispatch(logout()) : dispatch(login());
    };

  return (
    <>
    {console.log(lang)}
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
            <CustomLink to={"/"}>ઘર</CustomLink>
            <CustomLink to={"/schemes"}>યોજનાઓ</CustomLink>
            <CustomLink to={"/About"}>વિશે</CustomLink>
            {/* <CustomLink to={"/Contact"}>સંપર્ક કરો</CustomLink> */}
            <CustomLink to={"/Login"}>
              {isLoggedin ? "logout Guj" : "login Guj"}
            </CustomLink>

            <li
              className="language"
              onClick={() => {
                changelang();
              }}
            >
              {lang == "en" ? "Gujara ti" : "English"}
            </li>
          </ul>
        </div>
      </nav>

      <PlayPause />
      <marquee className="marque">
        <img src={logo3}></img>
        <p> Some news information </p>
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
