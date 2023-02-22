import { useState } from "react";
import "./exploreDesc.css";
import ExploreImages from './ExploreImages';
import img1 from '../img/girl.png';
import img2 from '../img/girlStanding.png';
import img3 from '../img/cartoon.png';


const ExploreDesc = () => {
  const imgs = [img1,img2,img3];
  const [imgIndex, setImgIndex] = useState(img1);

  return (
    <>
      <div className="exploreContainer">
        <div className="exploreTitleContainer">
          <h1 className="exploreTitle">Explore #DoWhatYouCant</h1>
        </div>
        <div className="imgTitleContainer">
          <div className="imgContainer border size">
                   <ExploreImages img={imgIndex} />
          </div>
          <div className="imgDescContainer border size">
            <div className="exploreDescContainer">
              <div className="exploreDesc exploreDesc1" onMouseOver={()=>setImgIndex(img1)}>
                <div className="flexContainer">
                  <p className="expContainerNumber">01</p>
                  <p className="expContainerHeading">
                    We Asked, You Answered, We Delivered
                  </p>
                </div>
                <div className={"expBtnContainer"}>
                  <button className="expBtn homeAppBtn">Learn More</button>
                </div>
              </div>
              <div className="exploreDesc exploreDesc2" onMouseOver={()=>setImgIndex(img2)}>
                <div className="flexContainer">
                  <p className="expContainerNumber">02</p>
                  <p className="expContainerHeading">Beyond the Limits</p>
                </div>
                <div className={"expBtnContainer"}>
                  <button className="expBtn homeAppBtn">Learn More</button>
                </div>
              </div>
              <div className="exploreDesc exploreDesc3" onMouseOver={()=>setImgIndex(img3)}>
                <div className="flexContainer">
                  <p className="expContainerNumber">03</p>
                  <p className="expContainerHeading">
                    Meet G·NUSMAS, the curious extraterrestrial
                  </p>
                </div>
                <div className={"expBtnContainer"}>
                  <button className="expBtn homeAppBtn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDesc;
