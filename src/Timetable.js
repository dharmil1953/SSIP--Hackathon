import React from "react";
import "./Timetable.css";
export default function Timetable() {
  return (
    <>
      <div className="App">
        <table>
          <tr className="ws">
            <th colSpan="4">Water Supply</th>
          </tr>
          <tr>
            <th>Days</th>
            <th colSpan="3">Timings</th>
          </tr>
          <tr>
            <td></td>
            <td>09:00am</td>
            <td>12:00pm</td>
            <td>05:00pm</td>
          </tr>
          <tr>
            <td>Monday</td>

            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="green">Available</td>
          </tr>

          <tr>
            <td>Tuesday</td>
            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="red">Not Available</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="green">Available</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="red">Not Available</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="red">Not Available</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="red">Not Available</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td className="green">Available</td>
            <td className="red">Not Available</td>
            <td className="green">Available</td>
          </tr>
          <td>For any queries</td>
          <td>Contact:</td>
          <td>Yakshangi </td>
          <td>Joshi</td>
        </table>
      </div>
    </>
  );
}
