import React, { useRef } from "react";

import axios from "axios";

export default function Contact() {
  const names = useRef();
  const email = useRef();
  const number = useRef();
  const top = useRef();
  const description = useRef();

  const handlesumit = () => {
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
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>contact</h2>

      <label>name</label>
      <input type="text" ref={names}></input>

      <label>email</label>
      <input type="text" ref={email}></input>

      <label>phone number</label>
      <input type="text" ref={number}></input>

      <label>type of problem</label>
      <input type="text" ref={top}></input>

      <label>description</label>
      <input type="text" ref={description}></input>

      <button onClick={handlesumit}> submit</button>
    </>
  );
}
