import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import "./Admin.css";

export default function Admin() {
  const news = useRef();
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getData() {
      const actualData = await fetch(
        `http://127.0.0.1:8000/api/greviencefetch`
      ).then((response) => response.json());

      console.log(actualData);
      setdata(actualData.data);
    }
    getData();
  }, []);

  const submitHandler = () => {
    const data = {
      news: news.current.value,
    };
    axios
      .post("http://127.0.0.1:8000/api/newsregister ", data)
      .then((Response) => {
        alert("news added succesfully");
        news.current.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      {console.log(data[0])}
      <h1 className="h1">Enter Latest News</h1>
      <textarea rows={4} cols={40} ref={news} />
      {/* <input className="input" placeholder="Type Something" type="textarea" /> */}
      <button className="button" onClick={submitHandler}>
        submit
      </button>
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
                <td>
                  <button>approve</button>
                </td>
              </tr>
              {console.log("hi")}
            </>
          );
        })}
      </table>
    </div>
  );
}
