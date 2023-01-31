import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

function myTimer() {
  console.log("inside timer");
  window.speechSynthesis.pause();
  window.speechSynthesis.resume();
  myTimeout = setTimeout(myTimer, 10000);
}

var myTimeout;
const Texttospeech = createSlice({
  name: "textToSpeech",
  initialState: {
    text: "",
    synth: window.speechSynthesis,
    utterance: null,
    isPlaying: false,
    started: false,
    attempt: 0,
  },
  reducers: {
    ChangeLangaugetoEnglish: (state, action) => {
      state.language = "en";
    },
    ChangeLangaugetoGujarati: (state, action) => {
      state.language = "guj";
    },

    setText: (state, action) => {
      state.text = action.payload;
    },

    speak: (state) => {
      if (state.utterance) {
        console.log("inside if condition");
        state.synth.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(state.text);
      const a = state.synth.getVoices();
      // utterance.lang = "gu-IN";
      utterance.voice = a[12];

      state.synth.speak(utterance);
      console.log("speaking");
      myTimeout = setTimeout(myTimer, 10000);
      state.utterance = utterance;

      console.log("started" + state.started);
      state.isPlaying = true;
      if (state.attempt == 1) {
        state.started = true;
      }
      state.attempt = state.attempt + 1;
      console.log(state.attempt);
    },
    pause: (state) => {
      state.synth.pause();
      clearTimeout(myTimeout);
      console.log(state.utterance);
      state.isPlaying = false;
    },

    resume: (state) => {
      state.synth.resume();
      state.isPlaying = true;
    },
  },
});

export const {
  setText,
  speak,
  pause,
  resume,
  ChangeLangaugetoGujarati,
  ChangeLangaugetoEnglish,
} = Texttospeech.actions;
export default Texttospeech.reducer;
