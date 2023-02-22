import "./week1.css";
import week1 from '../img/week1.png';

const Week1 = () => {
  return (
    <div className="weekContainer">
        <img src={week1}></img>
      <div className="weekTextContainer">
        <h2 className="weekTextHeading">Don’t miss the limited time deals</h2>
        <h2 className="weekTextdesc">Up to 15% off on your favorite products</h2>
        <div className="weekTextBtnContainer">
          <button className="sliderTextBtn weekTextBtn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Week1;
