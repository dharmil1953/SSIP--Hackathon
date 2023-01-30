import { configureStore } from "@reduxjs/toolkit";
import language from "./language";
import Texttospeech from "./Texttospeech";

export const store = configureStore({
  reducer: Texttospeech,
});
