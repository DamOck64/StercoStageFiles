
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Brothers from "./Bros.jsx";
import Prop from "./propTest.jsx";
import Toggle from "./CannyToggle.jsx";
import Button from "./CannySwitch.jsx";
import React, {useState} from "react";
import Counter from "./Counter.jsx";


function App() 
{
  return(
    <>
        <Header/>
        <Footer/>
        <Brothers/>
        <Prop Course1 = "Pizzer" Course2 ="Tomato Soup" Course3 = "Creme brule"/>
        <Toggle/>
        <Counter/>
    </>

  );
}

export default App
