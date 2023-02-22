
import Week1 from "./week1";
import Week2 from "./week2";
import Week3 from "./week3";
import Week4 from "./week4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


const WeekCombined = () => {

return (
    <div style={{margin: '5em 0'}} className="weekCombinedContainer">
    <Swiper modules={[Navigation]} navigation={true} loop={true}>
        <SwiperSlide>
            <Week1/>
        </SwiperSlide>
        <SwiperSlide>
            <Week2/>
        </SwiperSlide>
        <SwiperSlide>
            <Week3/>
        </SwiperSlide>
        <SwiperSlide>
            <Week4/>
        </SwiperSlide>

    </Swiper>
    </div>
)

}


export default WeekCombined;