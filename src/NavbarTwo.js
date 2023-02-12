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

export default function NavbarTwo() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);

  // useEffect(() => {
  // }, [lang]);

  //   const changelang = () => {
  //     lang == "en"
  //       ? dispatch(ChangeLangaugetoGujarati())
  //       : dispatch(ChangeLangaugetoEnglish());
  //   };

  return (
    <>
      {/* {console.log(`hii ${lang}`)} */}
      <nav className="navbar" style={{ height: "95px" }}>
        <div className="brand-title">
          <h1 style={{ color: "black", fontStyle: "bold", fontSize: "35px" }}>
            SmartVillage
          </h1>
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
          <ul
            style={{
              color: "black",
              fontStyle: "bold",
              fontSize: "18px",
              marginTop: "25px",
            }}
          >
            <CustomLink to={"/Grevience"}>Grievance</CustomLink>
            <CustomLink to={"/watersupply"}>Water Supply</CustomLink>
            <CustomLink to={"/education"}>Village Tales</CustomLink>
            {/* <CustomLink to={"/election"}>Election</CustomLink> */}
            {/* <CustomLink to={"/important dates"}>Important dates</CustomLink> */}
          </ul>
        </div>
      </nav>
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
