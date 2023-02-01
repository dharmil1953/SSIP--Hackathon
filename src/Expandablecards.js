import React, { useState } from "react";
import "./Expandablecards.css";

export default function Expandablecards({ Schemes }) {
  const [open, setopen] = useState(false);

  const handleclick = () => {
    if (open) {
      setopen(false);
    } else {
      setopen(true);
    }
  };

  return (
    <>

      <div
        className={open ? "containers expand" : "containers"}
        onClick={handleclick}
      >
        <div className="uppers">
          <p>{Schemes.name}</p>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
            </svg>
          </h3>
        </div>
        <div className="lowers">
          <ul>
            {Schemes.children.map((list) => (
              <li>{list.Schemename}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
