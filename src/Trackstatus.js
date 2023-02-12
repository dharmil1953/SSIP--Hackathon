import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export default function Trackstatus() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const isLoggedin = useSelector((state) => state.isLoggedin);



  const redirect = () => {
    alert("you must be login ");
    navigate("/Login");
  };


  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `http://127.0.0.1:8000/api/userfetch?name=adi`
      ).then((response) => response.json());

      console.log(actualData);
      setdata(actualData.data);
    }
    getData();
    isLoggedin ? getData() : redirect();
  }, []);

  return (
    <div>
      <h1>Your Queries</h1>

      <table>
        <tr>
          <td>username</td>
          <td>email</td>
          <td>phone number</td>
          <td>area name</td>
          <td>type of problem</td>
          <td>status</td>
        </tr>
        {data.map((i) => {
          return (
            <>
              <tr>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.Phone_Number}</td>
                <td>{i.Type_of_problem}</td>
                <td>{i.description}</td>
                <td>{i.status == 0 ? "pending" : "approved"}</td>
              </tr>
              {console.log("hi")}
            </>
          );
        })}
      </table>
    </div>
  );
}
