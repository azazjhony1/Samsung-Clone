
import './machinePick.css';
import bigPic from "../img/wash1.png";
import s22 from "../img/wash2.png";
import a73 from "../img/wash3.png";
import lcd from "../img/wash4.png";
import washing from "../img/wash5.png";

const MachinePick = () => {

  return (
   

      <div className="gridContainer">
        <div className="gridbox bigbox">
          <img className="mobileBigImg bigImg gridImg" src={bigPic}></img>
          <h4 className="washGridHead mobileGridHead gridPara gridImgheading">WW80J5413 Washer with Ecobubble, <br/> 8.0 Kg</h4>
          <h4 className=" mobileGridHead gridPara gridImgDesc">
          </h4>
          <button className="sliderTextBtn gridBtn bigBoxGridBtn mobileGridBtn">
            Buy Now
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={s22}></img>
          <h4 className="washGridHead mobileGridHead gridImgheading gridSmallPara ">WA90T5260BWURT <br/> Top loading Washer, 9 Kg</h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
          </h4>
          <button className="washBtn mobileGridBtn smallBoxGridBtn sliderTextBtn gridBtn ">
            Buy Now
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={a73}></img>
          <h4 className="washGridHead mobileGridHead gridImgheading gridSmallPara">WA16J6750SVURT <br/> Top Loading Washer, 16 Kg</h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
          </h4>
          <button className="washBtn mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy Now
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={lcd}></img>
          <h4 className="washGridHead mobileGridHead gridImgheading gridSmallPara">AR9500T Wall-mount AC with Wind-Free</h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
          </h4>
          <button className="washBtn mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy Now
          </button>
        </div>
        <div className="gridbox smallbox">
          <img className="tvSmallImg gridImg smallImg" src={washing}></img>
          <h4 className="washGridHead mobileGridHead gridImgheading gridSmallPara">
          AR9500T Wall-mount AC with Fast Cooling_AX
          </h4>
          <h4 className="mobileGridHead gridSmallDesc gridPara gridImgDesc ">
          </h4>

          <button className="washBtn mobileGridBtn sliderTextBtn gridBtn smallBoxGridBtn">
            Buy Now
          </button>
        </div>
      </div>
  );
};

export default MachinePick;
