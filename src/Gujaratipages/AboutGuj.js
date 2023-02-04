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
        એક દિવસ અકબર બાદશાહને બધા દરબારીઓએ પુછ્યુ કે તમે બીરબલને સૌથી વધુ
        બુદ્ધિશાળી કેમ સમજો છો ? શુ અમે હોશિયાર નથી ? બાદશાહ અકબરે કહ્યુ કે
        બીરબલ પાસે દરેક સમસ્યાનો ઉકેલ છે તેથી તે મારી નજરમાં બુદ્ધિશાળી છે.
        દરબારીઓએ કહ્યુ તો પછી આજે તેને અમારી એક પરીક્ષા પાસ કરવી પડશે નહી તો અમે
        તેને બુદ્ધિશાળી તરીકે નહી સ્વીકારીએ. એવુ કહીને તેઓ એક થેલો લઈને આવ્યા.
        બાદશાહે પુછ્યું, શું છે આની અંદર? દરબારીએ કહ્યું, આમાં રેતી અને ખાંડ છે.
        તે શેને માટે, બાદશાહે પુછ્યું. માફી માંગુ છુ હુજુર, દરબારી બોલ્યો. પરંતુ
        અમે બિરબલની બુદ્ધિની કસોટી કરવા માંગીએ છીએ, અમે ઈચ્છીએ છીએ કે બીરબર આ
        રેતમાંથી ખાંડને અલગ કરે. બાદશાહે કહ્યું, જોઈ લે બિરબલ રોજ તારી સામે એક
        નવી મુશ્ક્લી મુકવામાં આવે છે, હવે તારે આ રેતને પાણીમાં ગોળ્યા વિના
        તેમાંથી ખાંડને અલગ કરવાની છે. કોઈ વાંધો નહિ જહાઁપનાહ, બીરબલે કહ્યું. આ
        તો મારા ડાબા હાથનો ખેલ છે, કહીને બીરબલે કાચનો વાટકો હાથમાં લીધો અને
        દરબારમાંથી બહાર જતો રહ્યો. બીરબલ બાગમાં જઈને રોકાઈ ગયો અને કાચના
        વાટકામાંનુ મિશ્રણ એક આંબાની આજુબાજુ વેરી દિધું. આ તમે શું કરી રહ્યાં છે?
        એક દરબારીએ પુછ્યું. આ તને કાલે ખબર પડશે, બીરબલે કહ્યું. બીજા દિવસે બધા
        તે આંબા નીચે પહોચ્યાં, જ્યાં હવે માત્ર રેત જ પડી હતી. ખાંડના બધા દાણાને
        કીડીઓએ લઈને પોતાના દરમાં મુકી દિધા હતાં, અમુક કીડીઓ તો હજી પણ ખાંડના
        દાણાને ઘસેડીને લઈ જઈ રહી હતી. પરંતુ બધી ખાંડ ગઈ ક્યાં? એક દરબારીએ
        પુછ્યું. રેતથી અલગ થઈ ગઈ, બીરબલે કહ્યું. બધા જોરથી હસી પડ્યાં. બાદશાહે
        દરબારીને કહ્યું કે, જો હવે તારે ખાંડ જોઈતી હોય તો કીડીઓના દરમાં ઘુસવું
        પડશે. બધા જોરથી હસ્યાં અને બીરબલની ચતુરાઈના વખાણ કર્યા.
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
