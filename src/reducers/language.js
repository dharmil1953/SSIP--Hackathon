import { createSlice } from "@reduxjs/toolkit";

const language = createSlice({
  name: "language",
  initialState: {
    language: "en",
  },

  reducers: {
    ChangeLangaugetoEnglish: (state, action) => {
      state.language = "en";
    },
    ChangeLangaugetoGujarati: (state, action) => {
      state.language ="guj";

    },
  },
});

export const { ChangeLangaugetoGujarati, ChangeLangaugetoEnglish } = language.actions;
export default language.reducer;
