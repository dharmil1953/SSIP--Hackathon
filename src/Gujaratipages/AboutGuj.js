import React from "react";
import { useDispatch } from "react-redux";
import { speak } from "../reducers/Texttospeech";
export default function AboutGuj() {
  const dispatch = useDispatch();
  return (
    <>
      <h2>about guajrati</h2>
      <button onClick={()=>dispatch(speak())}>tap</button>
    </>
  );
}
