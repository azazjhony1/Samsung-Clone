import "./week.css";
import first from "../img/1.png";
import second from "../img/2.jpg";
import third from "../img/3.jpg";
import fourth from "../img/4.jpg";
import { useEffect, useState } from "react";
import SliderText from "./sliderText";
var count = 0;

var slideIndex = 1;

const Week = () => {
  const [header, setHeader] = useState("");
  const [para, setPara] = useState("");


  function plusDivp() {
    
    if(count === 3){
      count = -1;
    }
    
    count += 1;
    console.log(count)
    plusDivs(1);

  }

  function plusDivn() {
    if(count === 0){
      count = 4;
    }
    count -= 1;
    console.log(count)

    plusDivs(-1);
  }

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (count === 0) {
      setHeader("Samsung Week");
      setPara("Step into next chapter");
    } else if (count === 1) {
      setHeader("Galaxy Z Fold4 | Flip4");
      setPara(
        "Unfold your world. Pre-order today and Save PKR 30,000.<br/>Get 512GB variant at the price of 256GB as a free memory upgrade*"
      );
    } else if (count === 2) {
      setHeader("Score big with an unbeatable offer!");
      setPara(
        "Catch the special cricket season discounts <br/>of up to 17% on selected TVs"
      );
    } else if (count === 3) {
      setHeader("Works smart, stays young");
      setPara("Digital Inverter Technology");
    }

    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }

  useEffect(() => {
    showDivs(slideIndex);
  });

  return (
    <>
      <SliderText header={header} para={para} />
      <div className="container">
        <div className="imgSlider">
          <img className="mySlides" src={first} alt="first"></img>
          <img className="mySlides" src={second} alt="second"></img>
          <img className="mySlides" src={third} alt="third"></img>
          <img className="mySlides" src={fourth} alt="fourth"></img>

          <button
            className="w3-button w3-black w3-display-left btn1"
            onClick={plusDivn}
          >
            &#10094;
          </button>
          <button
            className="w3-button w3-black w3-display-right btn2"
            onClick={plusDivp}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default Week;
