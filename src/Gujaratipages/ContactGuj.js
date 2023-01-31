import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText, speak } from "../reducers/Texttospeech";

export default function ContactGuj() {
  const dispatch = useDispatch();
  const data = useRef("");
  const data1 = useRef("");
  var string = "";
  var text = useSelector((state) => state.text);

  useEffect(() => {
    console.log("inside use effect");
    string = data.current.textContent;
    dispatch(setText(string));
    // console.log(string);
  }, []);
  return (
    <>
      <h2>contact gujarati</h2>
      <p ref={data}>hello from contact</p>
    </>
  );
}
