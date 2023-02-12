import React from "react";
import "../Timetable.css"
export default function TimetableGuj() {
  return (
    <>
      <div className="App">
        <table>
          <tr className="ws">
            <th colSpan="4">પાણી પુરવઠા</th>
          </tr>
          <tr>
            <th>Days</th>
            <th colSpan="3">સમય</th>
          </tr>
          <tr>
            <td></td>
            <td>09:00am</td>
            <td>12:00pm</td>
            <td>05:00pm</td>
          </tr>
          <tr>
            <td>સોમવાર</td>

            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
            <td className="green">ઉપલબ્ધ છે</td>
          </tr>

          <tr>
            <td>મંગળવાર</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
            <td className="red">ઉપલબ્ધ નથી</td>
          </tr>
          <tr>
            <td>બુધવાર</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
            <td className="green">ઉપલબ્ધ છે</td>
          </tr>
          <tr>
            <td>ગુરુવાર</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
          </tr>
          <tr>
            <td>શુક્રવાર</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
            <td className="red">ઉપલબ્ધ નથી</td>
          </tr>
          <tr>
            <td>શનિવાર</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
            <td className="red">ઉપલબ્ધ નથી</td>
          </tr>
          <tr>
            <td>રવિવાર</td>
            <td className="green">ઉપલબ્ધ છે</td>
            <td className="red">ઉપલબ્ધ નથી</td>
            <td className="green">ઉપલબ્ધ છે</td>
          </tr>
          <td>કોઈપણ પ્રશ્નો માટે</td>
          <td>સંપર્ક:</td>
          <td>યક્ષાંગી </td>
          <td>જોષી</td>
        </table>
      </div>
    </>
  );
}
