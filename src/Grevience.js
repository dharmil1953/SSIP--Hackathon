import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./grevience.css";

export default function Grevience() {
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const navigate = useNavigate();
    const names = useRef();
    const email = useRef();
    const number = useRef();
    const top = useRef();
    const description = useRef();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

    const data = {
      name: names.current.value,  
      email: email.current.value,
      number: number.current.value,
      top: top.current.value,
      description: description.current.value,

  };

  axios
      .post("http://127.0.0.1:8000/api/register ", data)
      .then((Response) => {
      alert("data stored succesfully")
      names.current.value="";
      email.current.value="";
      number.current.value="";
      top.current.value="";
      description.current.value="";
        // console.log(Response.data);
      })
      .catch((error) => {
      alert("error occured please try again");
          names.current.value="";
      email.current.value="";
      number.current.value="";
      top.current.value="";
      description.current.value="";
        
      });
  }

  const redirect = () => {
    alert("you must be login ");
    navigate("/Login");
  };

  useEffect(() => {
    isLoggedin ? console.log("/login") : redirect();
  }, []);

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Name must be same as username</label>
            <input type="text" name="name" required ref={names} />
          </div>
          <div className="input-container">
            <label>Email </label>
            <input type="text" name="email" required ref={email} />
          </div>
          <div className="input-container">
            <label>Phone </label>
            <input type="text" name="phone" required ref={number} />
          </div>
          <div className="input-container">
            <label>Area name </label>
            <input type="text" name="areaname" required ref={top} />
          </div>
          <div className="input-container">
            <label>Which type of problem you are facing? </label>
            <textarea rows={5} cols={40} ref={description} />

            {/* <input type="textarea" name="problem" required ref={description} /> */}
          </div>

          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
