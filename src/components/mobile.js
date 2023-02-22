import "./mobile.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import mobPic1 from "../img/mobPic1.png";
import mobPic2 from "../img/mobPic2.png";
import mobPic3 from "../img/mobPic3.png";
import mobPic4 from "../img/mobPic4.png";
import mobPic5 from "../img/mobPic5.png";
import { useState } from "react";
import Slider from "./slider";

const Mobile = () => {
  const [mobCss, setMobCss] = useState(true);
  const [noColorChange, setNoColorChange] = useState(true);
  const [mobBtnExist, setMobBtnExist] = useState(false);

  const mob = [mobPic1, mobPic2, mobPic3, mobPic4, mobPic5];

  const compHeading = 'Mobile';

  const title = [
    'Galaxy Z Fold4',
    'Galaxy Z Flip4',
    'Galaxy Unpacked Highlight',
    'Galaxy Watch5 | Watch5 Pro',
    'Galaxy Buds2 Pro'
  ];

  const heading = [
    'Galaxy Z Fold4',
    'Galaxy Z Flip4',
    'Unpacked Highlight',
    'Galaxy Watch5 | Watch5 Pro',
    'Galaxy Buds2 Pro'
  ];



  return (
    <>
    <div className="mobContainer">
    <Slider 
          tv={mob}
          title={title}
          compHeading={compHeading}
          heading={heading}
          mobCss={mobCss}
          noColorChange={noColorChange}
          btnExist={mobBtnExist}
    />
    </div>
    </>
  );
};

export default Mobile;
