import React, { useState } from "react";
import "./Expandablecards.css";

export default function Expandablecards() {
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
      {console.log(open)}
      
      <div
        className={open ? "containers expand" : "containers"}
        onClick={handleclick}
      >
        <div className="uppers">
          <p>schemes</p>
          <h3>
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
            </svg>
          </h3>
        </div>
        <div className="lowers">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
          <h4>All News</h4>
        </div>
      </div>
    </>
  );
}
