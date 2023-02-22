import washineMachine from "../img/washingMachine.png";
import refrigerator from "../img/refrigerator.png";
import './homeAppliance.css';
import Slider from "./slider";
import { useState } from "react";

const HomeApp = () => {
  const [btnExist, setBtnExist] = useState(true);
  
  const compHeading = 'Home Appliances';

  const apps = [
    washineMachine,
    refrigerator
  ];

  const title = [
    "Washing Machine",
    "Refrigerator"
  ];

  const heading = [
    "Efficient Clean, Intelligent Wash",
    "Endless Innovation"
  ];



  return (
    <>
      <div className="slider-Container">
          <Slider 
            compHeading={compHeading}
            tv={apps}
            title={title}
            heading={heading}
            btnExist={btnExist}
          />
      </div>
    </>
  );
};

export default HomeApp;
