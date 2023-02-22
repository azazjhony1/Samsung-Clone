import bigPic from "../img/bigContainer.png";
import s22 from "../img/s22.png";
import a73 from "../img/A73.png";
import lcd from "../img/lcd.png";
import washing from "../img/washing.png";

import bigPic1 from "../img/s22Ultra.png";
import s221 from "../img/galaxyS22.png";
import a731 from "../img/a735g.png";
import watch from "../img/watch5.png";
import earbud from "../img/earbud.png";
import "./monthPick.css";
import BigSmallBoxes from "./BigSmallboxes";
import { useState } from "react";

import monaLisa from "../img/monaLisa.png";
import lcd1 from "../img/lcd1.png";
import lcd2 from "../img/lcd2.png";
import lcd3 from "../img/lcd3.png";
import lcd4 from "../img/lcd4.png";

import wash1 from "../img/wash1.png";
import wash2 from "../img/wash2.png";
import wash3 from "../img/wash3.png";
import wash4 from "../img/wash4.png";
import wash5 from "../img/wash5.png";

const MonthsPick = () => {
  const [id, setId] = useState(1);
  const [prevId, setprevId] = useState(1);
  

  if (id === 1) {
    return (
      <>
        <div className="monthsHeading">
          <h1>This Month's Pick</h1>
        </div>
        <div className="monthsProducts">
          <ul className="monthsUl">
            <li
              className="monthsLi"
              onClick={() => {
                setId(1);
                setprevId(1);
              }}
            >
              Offers
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(2);
                setprevId(2);
              }}
            >
              Mobile
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(3);
                setprevId(3);
              }}
            >
              TV & AV
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(4);
                setprevId(4);
              }}
            >
              Home Appliances
            </li>
          </ul>
        </div>

        <BigSmallBoxes
          id={id}
          prevId={prevId}
          bigImg={bigPic}
          s22={s22}
          a73={a73}
          lcd={lcd}
          washing={washing}
          title1="Samsung Week"
          desc1="Step into the next chapter, a week of amazing offers awaits"
          title2="Galaxy S22"
          desc2="Buy now and save Rs. 25,000 along with a complimentary 35W charger"
          title3="55” UHD 4K AU7000"
          desc3={`Buy now and get 10% off. Buy two products and enjoy 15% off.`}
          title4="Galaxy A73"
          desc4="Buy now and save Rs. 12,000"
          title5="Washer with Ecobubble, 8 Kg"
          desc5="Buy now and get 10% off.
                  Buy two products and enjoy 15% off."
        />
      </>
    );
  } else if (id === 2) {
    return (
      <>
        <div className="monthsHeading">
          <h1>This Month's Pick</h1>
        </div>
        <div className="monthsProducts">
          <ul className="monthsUl">
            <li
              className="monthsLi"
              onClick={() => {

                setId(1);
                setprevId(1);
              }}
            >
              Offers
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(2);
                setprevId(2);
              }}
            >
              Mobile
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(3);
                setprevId(3);
              }}
            >
              TV & AV
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(4);
                setprevId(4);
              }}
            >
              Home Appliances
            </li>
          </ul>
        </div>

        <BigSmallBoxes
          bigImageSize="imgResize"
          className="imgResize"
          btn="bgBtn"
          hColor="hColor"
          id={id}
          prevId={prevId}
          bigImg={bigPic1}
          s22={s221}
          a73={earbud}
          lcd={watch}
          washing={a731}
          title1="Galaxy S22 Ultra"
          title2="Galaxy S22"
          title3="Galaxy Watch5"
          title4="Galaxy Buds2 Pro"
          title5="Galaxy A73 5G"
        />
      </>
    );
  } else if (id === 3) {
    return (
      <>
        <div className={"monthsHeading "}>
          <h1>This Month's Pick</h1>
        </div>
        <div className="monthsProducts">
          <ul className="monthsUl">
            <li
              className="monthsLi"
              onClick={() => {
                setId(1);
                setprevId(1);
              }}
            >
              Offers
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(2);
                setprevId(2);
              }}
            >
              Mobile
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(3);
                setprevId(3);
              }}
            >
              TV & AV
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(4);
                setprevId(4);
              }}
            >
              Home Appliances
            </li>
          </ul>
        </div>
        <BigSmallBoxes
          id={id}
          className="imgResize"
          btn="bgBtn"
          hColor="hColor"
          desc="desc"
          prevId={prevId}
          bigImg={monaLisa}
          s22={lcd1}
          a73={lcd2}
          lcd={lcd3}
          washing={lcd4}
          title2={`65" QLED 4K Q60B`}
          desc2="Buy now and save PKR 36,000"
          title3={`65" QLED 4K G736`}
          desc3="Buy now and save PKR 36,000"
          title4={`65” Crystal UHD 4K BU8000`}
          desc4="Buy now and save PKR 36,000"
          title5={`"75" UHD 4K AU7000`}
          desc5="Buy now and save PKR 36,000"
        />
        ;
      </>
    );
  } else if (id === 2) {
    return (
      <>
        <div className="monthsHeading">
          <h1>This Month's Pick</h1>
        </div>
        <div className="monthsProducts">
          <ul className="monthsUl">
            <li
              className="monthsLi"
              onClick={() => {
                setId(1);
                setprevId(1);
              }}
            >
              Offers
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(2);
                setprevId(2);
              }}
            >
              Mobile
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(3);
                setprevId(3);
              }}
            >
              TV & AV
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(4);
                setprevId(4);
              }}
            >
              Home Appliances
            </li>
          </ul>
        </div>

        <BigSmallBoxes
          bigImageSize="imgResize"
          className="imgResize"
          btn="bgBtn"
          hColor="hColor"
          id={id}
          prevId={prevId}
          bigImg={bigPic1}
          s22={s221}
          a73={earbud}
          lcd={watch}
          washing={a731}
          title1="Galaxy S22 Ultra"
          title2="Galaxy S22"
          title3="Galaxy Watch5"
          title4="Galaxy Buds2 Pro"
          title5="Galaxy A73 5G"
        />
      </>
    );
  } else if (id === 4) {
    return (
      <>
        <div className="monthsHeading">
          <h1>This Month's Pick</h1>
        </div>
        <div className="monthsProducts">
          <ul className="monthsUl">
            <li
              className="monthsLi"
              onClick={() => {
                setId(1);
                setprevId(1);
              }}
            >
              Offers
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(2);
                setprevId(2);
              }}
            >
              Mobile
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(3);
                setprevId(3);
              }}
            >
              TV & AV
            </li>
            <li
              className="monthsLi"
              onClick={() => {
                setId(4);
                setprevId(4);
              }}
            >
              Home Appliances
            </li>
          </ul>
        </div>

        <BigSmallBoxes
          bigImageSize="imgResize"
          className="imgResize"
          btn="bgBtn"
          hColor="hColor"
          id={id}
          prevId={prevId}
          bigImg={wash1}
          s22={wash2}
          a73={wash3}
          lcd={wash4}
          washing={wash5}
          title1="WW80J5413 Washer with Ecobubble, 8.0 Kg"
          title2="WA90T5260BWURT Top loading Washer, 9 Kg"
          title3="WA16J6750SVURT Top Loading Washer, 16 Kg"
          title4="AR9500T Wall-mount AC with Wind-Free"
          title5="AR9500T Wall-mount AC with Fast Cooling_AX"
        />
      </>
    );
  }
};

export default MonthsPick;
