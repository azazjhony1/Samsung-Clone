import "./mobilePick.css";
import bigPic from "../img/s22Ultra.png";
import s22 from "../img/galaxyS22.png";
import a73 from "../img/a735g.png";
import lcd from "../img/watch5.png";
import washing from "../img/earbud.png";

const mobilePick = () => {
  return (
    

      <div className="gridContainer">
        <div className="gridbox bigbox">
          <img className="bigImg gridImg mobileBigImg" src={bigPic}></img>
          <h4 className="mobileGridHead gridPara gridImgheading">
            Galaxy S22 Ultra
          </h4>
          <h4 className="mobileGridHead gridPara gridImgDesc">
            Step into the next chapter, a week of amazing offers awaits
          </h4>
          <button className="sliderTextBtn gridBtn bigBoxGridBtn mobileGridBtn">
            Learn More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="mobSmallImg gridImg smallImg" src={s22}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara ">
            Galaxy S22
          </h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and save Rs. 25,000 along with a complimentary 35W charger
          </h4>
          <button className="mobileGridBtn smallBoxGridBtn sliderTextBtn gridBtn ">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="mobSmallImg gridImg smallImg" src={a73}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara">
            Galaxy A73 5G
          </h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and get 10% off <br /> Buy two products and enjoy 15% off.
          </h4>
          <button className=" mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="mobSmallImg gridImg smallImg" src={lcd}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara">
            Galaxy Watch5
          </h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
            Buy now and get 10% off <br />
            Buy two products and enjoy 15% off.
          </h4>
          <button className="mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy More
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="mobSmallImg gridImg smallImg" src={washing}></img>
          <h4 className="mobileGridHead gridImgheading gridSmallPara">
            Galaxy Buds2 Pro
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

export default mobilePick;
