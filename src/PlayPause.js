import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./playpause.scss";
import { pause, resume, speak } from "./reducers/Texttospeech";

export default function PlayPause() {
  var isPlaying = useSelector((state) => state.isPlaying);
  var started = useSelector((state) => state.started);
  const dispatch = useDispatch();

  return (
    <div>
      {/* {console.log(isPlaying)} */}
      <button
        className={
          isPlaying
            ? "play-pause-button paused playing "
            : "play-pause-button paused "
        }
        // onClick={() => (isPlaying ? dispatch(pause()) : dispatch(speak()))}
        onClick={() =>
          isPlaying
            ? dispatch(pause())
            : started
            ? dispatch(resume())
            : dispatch(speak())
        }
     
      >
        <i>P</i>
        <i>l</i>
        <i>a</i>
        <i>y</i>
        <i>use</i>
      </button>
    </div>
  );
}
