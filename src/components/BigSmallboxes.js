import "./BigSmallBoxes.css";

const BigSmallBoxes = (props) => {
  return (
    <div className={`monthsContainer`}>
      <div className={"insideMonthsContainer "}>
        <div className="bigContainer pointer">
            <h4 className={`containerHeading ${props.hColor}`}>
              {props.title1}
            </h4>
            <h4
              id="bigConPara"
              className={`containerHeading containerPara ${props.desc}`}
            >
              {props.desc1}
            </h4>
            <button className={`containerBtn ${props.btn} ${props.monaBtn}`}>
              Buy Now
            </button>
          <img
            className={`containerImg ${props.bigImageSize}`}
            src={props.bigImg}
            alt="bigPic"
          />
        </div>
        <div className="smallContainer">
          <div className="small pointer">
            <h4 className={`smConHeading ${props.hColor}`}>{props.title2}</h4>
            <h4 id="smPara" className={`smConHeading smConPara ${props.desc}`}>
              {props.desc2}
            </h4>
            <button className={`containerBtn smConBtn ${props.btn}`}>
              Buy Now
            </button>

            <img
              className={`containerImg ${props.className}`}
              src={props.s22}
              alt="s22"
            />
          </div>
          <div className="small pointer">
            <h4 className={`smConHeading smConHeading1 ${props.hColor}`}>
              {props.title3}
            </h4>
            <h4
              id="smPara1"
              className={`smConHeading smConPara smConPara1 ${props.desc}`}
            >
              {props.desc3}
            </h4>
            <button className={`containerBtn smConBtn smConBtn1 ${props.btn}`}>
              Buy Now
            </button>

            <img
              className={`containerImg ${props.className}`}
              src={props.lcd}
              alt="LCD"
            />
          </div>
          <div className="small pointer">
            <h4 className={`smConHeading smConHeading2 ${props.hColor}`}>
              {props.title4}
            </h4>
            <h4
              id="smPara2"
              className={`smConHeading smConPara smConPara2 ${props.desc}`}
            >
              {props.desc4}
            </h4>
            <button className={`containerBtn smConBtn smConBtn2 ${props.btn}`}>
              Buy Now
            </button>

            <img
              className={`containerImg ${props.className}`}
              src={props.a73}
              alt="A73"
            />
          </div>
          <div className="small pointer">
            <h4 className={`smConHeading smConHeading3 ${props.hColor}`}>
              {props.title5}
            </h4>
            <h4
              id="smPara3"
              className={`smConHeading smConPara smConPara3 ${props.desc}`}
            >
              {props.desc5}
            </h4>
            <button className={`containerBtn smConBtn1 smConBtn3 ${props.btn}`}>
              Buy Now
            </button>

            <img
              className={`containerImg ${props.className}`}
              src={props.washing}
              alt="washing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSmallBoxes;
