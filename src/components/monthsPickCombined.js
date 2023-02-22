import "./monthsPickCombined.css";
import { Swiper, SwiperSlide } from "swiper/react";
import OffersPick from "./OffersPick";
import MobilePick from "./mobilePick";
import TvPick from "./tvPick";
import MachinePick from "./machinePick";
import { useState } from "react";

const MonthsPickCombined = () => {
  const [swiper, setSwiper] = useState();
  const [active, setActive] = useState();
  const [pickBtn, setPickBtn] = useState(0);

  const handleChangeSlide = (index) => {
    swiper.slideTo(index, 500);
  };

  return (
    <div className="newPickContainer">
      <div className="newPickHeadingContainer">
        <h1 className="newPickhead">This Month's Picks</h1>
      </div>

      <div className="newPickListsContainer">
        <ul className="newPickLists">
          <li
            className={pickBtn === 0 ? `newPickList active` : "newPickList"}
            onClick={() => {
              handleChangeSlide(1);
              setPickBtn(0);
            }}
          >
            Offers
          </li>
          <li
            className={pickBtn === 1 ? `newPickList active` : "newPickList"}
            onClick={() => {
              handleChangeSlide(2);
              setPickBtn(1);
            }}
          >
            Mobile
          </li>
          <li
            className={pickBtn === 2 ? `newPickList active` : "newPickList"}
            onClick={() => {
              handleChangeSlide(3);
              setPickBtn(2);
            }}
          >
            TV & AV
          </li>
          <li
            className={pickBtn === 3 ? `newPickList active` : "newPickList"}
            onClick={() => {
              handleChangeSlide(4);
              setPickBtn(3);
            }}
          >
            Home Appliances
          </li>
        </ul>
      </div>

      <Swiper
        loop={true}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChange={(index) => setPickBtn(index.realIndex)}
      >
        <SwiperSlide  >
          <OffersPick />
        </SwiperSlide>
        <SwiperSlide>
          <MobilePick />
        </SwiperSlide>
        <SwiperSlide>
          <TvPick />
        </SwiperSlide>
        <SwiperSlide>
          <MachinePick />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MonthsPickCombined;
