import React, { useState } from "react";
import Expandablecards from "./Expandablecards";

export default function Schemes() {
  return (
    <>
      <div>
        <div>schemesdfvcdsfd</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          <Expandablecards />
          <Expandablecards />
          <Expandablecards />
          <Expandablecards />
          <Expandablecards />
          <Expandablecards />
        </div>
      </div>
    </>
  );
}
