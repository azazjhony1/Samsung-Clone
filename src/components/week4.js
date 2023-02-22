import './week4.css';

import week4 from "../img/week4.png";

const Week4 = () => {
  return (
    <div className="weekContainer">
      <img src={week4}></img>
      <div className="weekTextContainer">
        <h2 style={{color: 'white'}} className="weekTextHeading">Appliances you can 
          <br />
          trust for decades</h2>
        <h2 className="weekTextdesc" style={{color: 'white'}} >
        Now enjoy 20 years warranty
        <br/>
        with Digital Inverter Technology
        </h2>
        <div className="weekTextBtnContainer">

            <button className='homeAppBtn underlineWeek4Btn'>Refrigerators</button>
          <button style={{marginTop: '3em', color: 'black'}} 
            className="sliderTextBtn week4TextBtn" 
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Week4;
