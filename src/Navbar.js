import React, { Component, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import language, {
  ChangeLangaugetoEnglish,
  ChangeLangaugetoGujarati,
  login,
  logout,
} from "./reducers/Texttospeech";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.jpg";
import logo3 from "./images/n.gif";
import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";
import Login from "./Login";
import axios from "axios";
export default function Navbar() {
  const arr = ["a", "b", "c"];
  const [news, setnews] = useState([]);

  const role = useSelector((state) => state.role);

  const [sidebar, setSidebar] = useState(false);
  const isLoggedin = useSelector((state) => state.isLoggedin);

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/newsfetch ")
      .then((Response) => {
      // console.log(Response.data);
        setnews(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);


  const changelang = () => {
    lang == "en"
      ? dispatch(ChangeLangaugetoGujarati())
      : dispatch(ChangeLangaugetoEnglish());
  };

  const changelogin = () => {
    isLoggedin == true ? dispatch(logout()) : dispatch(login());
  };

  // const marqu = () => {
  //   news.map((data) => {return(
  //     <>
  //     console.log(data);
  //       <img src={logo3}></img>
  //       <span> {data.news}</span>
  //     </>
  //   )});
  // };

  return (
    <>
    {console.log(news.data)}
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
            <span className={role == "admin" ? "" : "user"}>
              <CustomLink to={"/admin"}>admin panel</CustomLink>
            </span>
            <CustomLink to={"/track_status"}>Track status</CustomLink>
            {/* <CustomLink to={"/Download"}>Downlaod</CustomLink> */}
            <CustomLink to={"/Login"} onClick={changelogin}>
              {isLoggedin ? "logout" : "login"}
            </CustomLink>

            <li
              className="language"
              onClick={() => {
                changelang();
              }}
            >
              {lang == "en" ? "Gujarati" : "English"}
            </li>
          </ul>
        </div>
      </nav>

      <PlayPause />
      <marquee className="marque">
        {console.log('rendering marqee')}

        {}
        {/* {news.map(data => {
        return(
          <>
            <img src={logo3}></img>
            <span> {data}</span>
          </>
        )
        })} */}
         
        {/* <img src={logo3}></img>
        <span> {news.data[0].news}</span>  
        <img src={logo3}></img>
        <span> {news.data[1].news}</span>   */}
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
