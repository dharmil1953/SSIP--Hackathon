import React, { useEffect, useState } from "react";

export default function SchemesGuj() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div>Schemes gujarati</div>
      <div>
        {data ? (
          <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
