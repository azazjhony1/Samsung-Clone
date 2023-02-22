import "./slider.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = (props) => {
  const [swiper, setSwiper] = useState();
  const [swiperBtn, setSwiperBtn] = useState();
  const [color, setColor] = useState(false);
  const [active, setActive] = useState();

  const handleChangeSlide = (index) => {
    swiper.slideTo(index, 500);
    setTimeout(() => {
      swiperBtn.slideTo(index, 500);
    }, 250);
  };

  useEffect(() => {
    setActive(0);
  }, []);
  return (
    <>
      <div className="slider-Container">
        <div
          className={
            props.mobCss
              ? `mobContainer sliderTextContainer`
              : "sliderTextContainer"
          }
        >
          <Swiper
            loop={true}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {props.tv.map((elem, index) => {
              return (
                <SwiperSlide key={`slide-` + { index }}>
                  <img
                    className={
                      props.mobCss ? `mobSliderImg` : "tvSliderImg"
                    }
                    src={elem}
                    alt={`slide 1`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="headUiContainer headUiCenter">
          <div className="mobHeadingContainer">
            <h2
              className={
                color
                  ? " mobHeading mobHeadFont styleChange"
                  : "mobHeading mobHeadFont"
              }
            >
              {props.compHeading}
            </h2>
          </div>
          <div className="mobUlContainer">
            <ui className={color ? "mobLists styleChange" : "mobLists"}>
              {props.title.map((elem, index) => {
                return (
                  <li
                    className={
                      active === index && props.mobCss ? `mobList pad active` : "mobList pad" &&
                      active === index && (index + 1 > 2) ? `mobList pad active borderColor` : "mobList pad" &&
                      active === index ? `mobList pad active` : "mobList pad" 
                    }
                    onClick={
                      props.noColorChange
                        ? () => {
                            handleChangeSlide(index + 1);
                            setColor(false);
                            setActive(index);
                          }
                        : () => {
                            handleChangeSlide(index + 1);
                            index + 1 > 2 ? setColor(true) : setColor(false);
                            setActive(index);
                          }
                    }
                  >
                    {elem}
                  </li>
                );
              })}
            </ui>
          </div>
        </div>
      </div>

      <div className="sliderBtnContainer">
        <Swiper
          loop={true}
          onSwiper={(swiper) => {
            setSwiperBtn(swiper);
          }}
        >
          {props.heading.map((elem, index) => {
            return (
              <SwiperSlide key={`btn-1`}>
                <div className="sliderTextContainer">
                  <p
                    className={color ? "sliderText styleChange" : "sliderText"}
                  >
                    {elem}
                  </p>
                  <p
                    className={
                      color ? "sliderText2 styleChange" : "sliderText2"
                    }
                  >
                    {props.descExist ? props.desc[index] : ""}
                  </p>

                  <button
                    className={props.btnExist ? `homeAppBtn ` : "sliderTextBtn"}
                  >
                    Learn more
                  </button>
                  {props.btnExist ? (
                    <button className="sliderTextBtn">
                      {" "}
                      {index > 0
                        ? "See All Refrigerators"
                        : "See all Washing Machines"}{" "}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </SwiperSlide>
            );
          })}
          ;
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
