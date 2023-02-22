import "./sliderText.css";

const SliderText = (props) => {
  return (
    <div className="sliderContainer">
      <div className="sliderHeader">{props.header}</div>
      <div className="sliderPara">{props.para}</div>
      <button className="sliderBtn">Buy Now</button>
    </div>
  );
};

export default SliderText;