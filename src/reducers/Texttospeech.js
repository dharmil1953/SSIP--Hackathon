import { createSlice } from "@reduxjs/toolkit";

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
    // setVoices: (state, action) => {
    //   state.voices = action.payload;
    //   state.selectedVoice = action.payload[12];
    // },
    // setSelectedVoice: (state, action) => {
    //   state.selectedVoice = ;
    // },
    speak: (state) => {
      if (state.utterance) {
        state.synth.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(state.text);
      const a = state.synth.getVoices();
      utterance.voice = a[12];

      console.log(state.text);

      state.synth.speak(utterance);
      state.utterance = utterance;
      state.isPlaying = true;
    },
    pause: (state) => {
      state.synth.pause();
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
