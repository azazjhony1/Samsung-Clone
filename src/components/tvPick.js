
import './tvPick.css';
import bigPic from "../img/monaLisa.png";
import s22 from "../img/lcd1.png";
import a73 from "../img/lcd2.png";
import lcd from "../img/lcd3.png";
import washing from "../img/lcd4.png";

const TvPick = () => {

  return (
    
      <div className="gridContainer">
        <div className="gridbox bigbox">
          <img className="bigImg gridImg" src={bigPic}></img>
          <h4 className="tvFrameHead mobileGridHead gridPara gridImgheading">The Frame</h4>
          <h4 className="ownTv mobileGridHead gridPara gridImgDesc">
            Make Your Own TV
          </h4>
          <button className="tvBtn sliderTextBtn gridBtn bigBoxGridBtn mobileGridBtn">
            Learn More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={s22}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara ">65" QLED 4K Q60B</h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and save Rs. 25,000 along with a complimentary 35W charger
          </h4>
          <button className="mobileGridBtn smallBoxGridBtn sliderTextBtn gridBtn ">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={a73}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara">65" QLED 4K G736</h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and get 10% off <br /> Buy two products and enjoy 15% off.
          </h4>
          <button className=" mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={lcd}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara">65” Crystal UHD 4K BU8000</h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and save Rs. 12,000
          </h4>
          <button className="mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={washing}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara">
          75" UHD 4K AU7000
          </h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and get 10% off <br />
            Buy two products and enjoy 15% off.
          </h4>

          <button className="mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
      </div>
  );
};

export default TvPick;
