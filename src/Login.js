import React, { useRef, useState } from "react";
import "./Login.css";
import logo1 from "./images/logo1.png";
import axios from "axios";
import { login, logout, role } from "./reducers/Texttospeech";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username.current.value,
      password: password.current.value,
    };

    axios
      .post("http://127.0.0.1:8000/api/login ", data)
      .then((Response) => {
        if (Response.status == 200) {
        alert("login successful");
          dispatch(login());
          dispatch(role(Response.data.role));
          console.log(isLoggedin);
          navigate("/");
        }
      })
      .catch((error) => {
      console.log(error);
        // if (error.response.status == 400) {
        //   alert("invalid username or password");
        //   username.current.value = "";
        //   password.current.value = "";
        //   //   dispatch(logout);
        //   //   console.log(isLoggedin);
        // }

        
      });
  };

  return (
    <>
      <div className="main-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <img src={logo1} className="image"></img>

            <div className="input-container">
              <label>Username </label>
              <input type="text" name="name" required ref={username} />
            </div>
            <div className="input-container">
              <label>Passowrd </label>
              <input type="password" name="areaname" required ref={password} />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


