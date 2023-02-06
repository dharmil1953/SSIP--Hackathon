import React from "react";
import axios from "axios";

export default function Test() {
  const data = {
    name: "John Doe",
    email: "johndoe@example.com",
    description: "abcxyz",
  };

  const store = () => {
    console.log("hi");
    axios
      .post("http://127.0.0.1:8000/api/test",data)
      .then((Response) => {
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={store}>click</button>
    </div>
  );
}
