import "./Tv.css";
import tv1 from "../img/tv1.png";
import tv2 from "../img/tv2.png";
import tv3 from "../img/tv3.png";
import tv4 from "../img/tv4.jpg";
import tv5 from "../img/tv5.png";
import Slider from "./slider";
import { useState } from "react";

const Tv = () => {
  const [btnExist, setBtnExist] = useState(false);
  const [descExist, setDescExist] = useState(true);

  const compHeading = 'TV & Sound';

  const tv = [tv1, tv2, tv3, tv4, tv5];

  const title = [
    "Lifestyle TVs",
    "The Freestyle",
    "Neo QLED",
    "QLED",
    "Crystal UHD",
  ];

  const heading = [
    "Lifestyle TVs",
    "The Freestyle",
    "Greatness never ends, but evolves",
    "Everlasting brilliance, colorful possibilities",
    "The best-in-class, crystal clear choice",
    "More than just a TV",
    "Unexpected joy everywhere",
  ];

  const desc = [
    "More than just a TV", 
  "Unexpected joy everywhere"];

  return (
    <div className="slider-Container tvContainer">
      <Slider
        tv={tv}
        title={title}
        heading={heading}
        desc={desc}
        compHeading={compHeading}
        btnExist={btnExist}
        descExist={descExist}
      />
    </div>
  );
};

export default Tv;
