import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speak, setText, pause, resume } from "../reducers/Texttospeech";

export default function AboutGuj() {
  const dispatch = useDispatch();
  const data = useRef("");
  const data1 = useRef("");
  var string = "";
  var text = useSelector((state) => state.text);
  var myTimeout;

  // function myTimer() {
  //   window.speechSynthesis.pause();
  //   window.speechSynthesis.resume();
  //   myTimeout = setTimeout(myTimer, 10000);
  // }

  // const handlePlay = () => {
  //   dispatch(speak());
  //   console.log("inside handle play");
  //   // Timer();
  // };

  useEffect(() => {
    // console.log("inside use effect");
    string = data.current.textContent + data1.current.textContent;
    dispatch(setText(string));
    // console.log(string);
  }, []);
  return (
    <>
      <h2>about guajrati</h2>

      <p ref={data}>
        text: "મિત્રો અહી આપના માટે ગુજરાતી સાહિત્યની શ્રેષ્ઠ 101 વાર્તાઓ નો
        સંગ્રહ મુકી રહ્યા છીએ. 101 best Gujarati stories collection, શ્રેષ્ઠ
        ગુજરાતી વાર્તાઓ pdf, gujarati varta pdf, પ્રેરણાદાયી ટૂંકી વાર્તા pdf,
        ગુજરાતી વાર્તા pdf, હિતોપદેશની વાર્તાઓ pdf, મહેનત વાર્તા pdf, શ્રેષ્ઠ
        પ્રેરક કથા, બોધ વાર્તા pdf, ગુજરાતી બોધ વાર્તા pdf, ગુજરાતી સાહિત્ય
        વાર્તા, પ્રેરણાદાયી ટૂંકી વાર્તા, ગુજરાતી વાર્તા સંગ્રહ, વાર્તા gujarati
        pdf, varta gujarati pdf, ગુજરાતી પ્રેરક વાર્તા pdf, નવી વાર્તા pdf,
        વાર્તા ગુજરાતી સાહિત્ય, બોધ વાર્તા ગુજરાતી, ગુજરાતી વાર્તાઓનો ખજાનો,
        ધૂમકેતુ, પન્નાલાલ પટેલ, ઝવેરચંદ મેઘાણી અને અન્ય લેખકોની શ્રેષ્ઠ વાર્તાઓ,
        Story books in Gujarati pdf, gujarati books to read online free, આ સિવાય
        જનરલ નોલેજ, બાળ ગીત, બાળવાર્તાઓ, જુની નવી કવિતાઓ, જોડકણા, ઉખાણા નિયમીત
        મુકવામાં આવે છે.",
      </p>

      <p ref={data1}>dfafsdafdf</p>
      {/* <button onClick={() => dispatch(speak())}>tap</button> */}
      {/* <button
        onClick={() => {
          handlePlay();
        }}
      >
        tap
      </button>
      <button onClick={() => dispatch(pause())}>pause</button>
      <button onClick={() => dispatch(resume())}>resume</button> */}
    </>
  );
}
