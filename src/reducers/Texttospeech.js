import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// function myTimer() {
//   window.speechSynthesis.pause();
//   window.speechSynthesis.resume();
//   myTimeout = setTimeout(myTimer, 10000);
// }

var myTimeout;
const Texttospeech = createSlice({
  name: "textToSpeech",
  initialState: {
    text: "",
    synth: window.speechSynthesis,
    utterance: null,
    isPlaying: false,
    // const [voice, setVoice] = useState(null)
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
      console.log("speaking");
      if (state.utterance) {
        state.synth.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(state.text);
      const a = state.synth.getVoices();
      // utterance.lang = "gu-IN";
      console.log(utterance);
      utterance.voice = a[12];

      state.synth.speak(utterance);
      // myTimeout = setTimeout(myTimer, 10000);
      state.utterance = utterance;

      state.isPlaying = true;
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
