import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speak, setText } from "../reducers/Texttospeech";

export default function AboutGuj() {
  const dispatch = useDispatch();
  const data = useRef("");
  const data1 = useRef("");
  var string = "";
  var text = useSelector((state) => state.text);

  useEffect(() => {
    console.log("inside use effect");
    string = data.current.textContent + data1.current.textContent;
    dispatch(setText(string));
    // console.log(string);
  }, []);
  return (
    <>
      <h2>about guajrati</h2>

      <p ref={data}>
        Our FREE online Gujarati typing software uses Google transliteration
        typing service. It provides fast and accurate typing - making it easy to
        type the Gujarati language anywhere on the Web.
      </p>

      <p ref={data1}>dfafsdafdf</p>
      <button onClick={() => dispatch(speak())}>tap</button>
    </>
  );
}
