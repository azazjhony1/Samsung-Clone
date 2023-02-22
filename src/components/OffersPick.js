import "./OffersPick.css";
import bigPic from "../img/bigContainer.png";
import s22 from "../img/s22.png";
import a73 from "../img/A73.png";
import lcd from "../img/lcd.png";
import washing from "../img/washing.png";

const OffersPick = () => {
  const img = [bigPic, s22, a73, lcd, washing];

  return (
    
      <div className="gridContainer">
        <div className="gridbox bigbox">
          <img className="gridImg bigImg" src={bigPic}></img>
          <h4 className="gridPara gridImgheading">Samsung Week</h4>
          <h4 className="gridPara gridImgDesc">
            Step into the next chapter, a week of amazing offers awaits
          </h4>
          <button className="sliderTextBtn gridBtn bigBoxGridBtn">
            Learn More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="gridImg smallImg" src={s22}></img>
          <h4 className="gridImgheading gridSmallPara">Galaxy S22</h4>
          <h4 className="gridSmallDesc gridPara gridImgDesc ">
            Buy now and save Rs. 25,000 along with a complimentary 35W charger
          </h4>
          <button className="smallBoxGridBtn sliderTextBtn gridBtn ">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="gridImg smallImg" src={a73}></img>
          <h4 className="gridImgheading gridSmallPara">55” UHD 4K AU7000</h4>
          <h4 className="gridSmallDesc gridPara gridImgDesc ">
            Buy now and get 10% off <br /> Buy two products and enjoy 15% off.
          </h4>
          <button className="sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="gridImg smallImg" src={lcd}></img>
          <h4 className="gridImgheading gridSmallPara">Galaxy A73</h4>
          <h4 className="gridSmallDesc gridPara gridImgDesc ">
            Buy now and save Rs. 12,000
          </h4>
          <button className="sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="gridImg smallImg" src={washing}></img>
          <h4 className="gridImgheading gridSmallPara">
            Washer with Ecobubble, 8 Kg
          </h4>
          <h4 className="gridSmallDesc gridPara gridImgDesc ">
            Buy now and get 10% off <br />
            Buy two products and enjoy 15% off.
          </h4>

          <button className=" sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
      </div>
  );
};

export default OffersPick;
