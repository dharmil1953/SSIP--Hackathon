import React, { useState } from "react";
import Expandablecards from "./Expandablecards";
const data = [
  {
    id: 1,
    name: "Educational schemes",
    description: "absdkasdlkas dfkaj adksafm",
    children: [
      {
        id: 1,
        Schemename: "Scheme name 1",
        Link: "link 1",
      },
      {
        id: 2,
        Schemename: "Scheme name 2",
        link: "link 2",
      },

      {
        id: 3,
        Schemename: "Scheme name 3",
        link: "link 3",
      },

      {
        id: 4,
        Schemename: "Scheme name 4",
        link: "link 4",
      },
    ],
  },
  {
    id: 2,
    name: "BPL schemes",
    description: "absdkasdlkas dfkaj adksafm",
    children: [
      {
        id: 1,
        Schemename: "Scheme name 1",
        Link: "link 1",
      },
      {
        id: 2,
        Schemename: "Scheme name 2",
        link: "link 2",
      },
    ],
  },
  {
    id: 3,
    name: "XYZ schemes",
    description: "absdkasdlkas dfkaj adksafm",
    children: [
      {
        id: 1,
        Schemename: "Scheme name 1 dikfjjfdv jfwjfvre fjf rrjfvc  frjidc ndvcvdfuj jfrenm cdskjnv jn fn nr nvr",
        Link: "link 1",
      },
      {
        id: 2,
        Schemename: "Scheme name 2",
        link: "link 2",
      },

      {
        id: 3,
        Schemename: "Scheme name 3",
        link: "link 3",
      },

      {
        id: 4,
        Schemename: "Scheme name 4",
        link: "link 4",
      },

      {
        id: 5,
        Schemename: "Scheme name 5",
        link: "link 5",
      },
    ],
  },
  {
    id: 4,
    name: "PQR schemes",
    description: "absdkasdlkas dfkaj adksafm",
    children: [
      {
        id: 1,
        Schemename: "Scheme name 1",
        Link: "link 1",
      },
      {
        id: 2,
        Schemename: "Scheme name 2",
        link: "link 2",
      },

      {
        id: 3,
        Schemename: "Scheme name 3",
        link: "link 3",
      },

      {
        id: 4,
        Schemename: "Scheme name 4",
        link: "link 4",
      },

      {
        id: 5,
        Schemename: "Scheme name 5",
        link: "link 5",
      },
    ],
  },
  {
    id: 5,
    name: "Educational schemes",
    description: "absdkasdlkas dfkaj adksafm",
    children: [
      {
        id: 1,
        Schemename: "Scheme name 1",
        Link: "link 1",
      },
      {
        id: 2,
        Schemename: "Scheme name 2",
        link: "link 2",
      },

      {
        id: 3,
        Schemename: "Scheme name 3",
        link: "link 3",
      },

      {
        id: 4,
        Schemename: "Scheme name 4",
        link: "link 4",
      },

      {
        id: 5,
        Schemename: "Scheme name 5",
        link: "link 5",
      },
    ],
  },
  {
    id: 6,
    name: "ABC schemes",
    description: "absdkasdlkas dfkaj adksafm",
    children: [
      {
        id: 1,
        Schemename:
          "Scheme name 1 skajdfblkbafvbfvbdf sbvvblfsak vbfkvbndfsahjvbks akvbldsvbc dsavlhbvcdsahl dfshsac shcdsgfcgwdec whq",
        Link: "link 1", 
      },
      {
        id: 2,
        Schemename: "Scheme name 2",
        link: "link 2",
      },

      {
        id: 3,
        Schemename: "Scheme name 3",
        link: "link 3",
      },

      {
        id: 4,
        Schemename: "Scheme name 4",
        link: "link 4",
      },

      {
        id: 5,
        Schemename: "Scheme name 5",
        link: "link 5",
      },
    ],
  },
];

export default function Schemes() {
  return (
    <>
      <div>
        <div>schemesdfvcdsfd</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
          {data.map((Schemes) => (
            <Expandablecards key={Schemes.id} Schemes={Schemes} />
          ))}
        </div>
      </div>
    </>
  );
}
