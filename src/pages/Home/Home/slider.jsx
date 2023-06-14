// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper">
      <SwiperSlide>
        <img src="https://i.ibb.co/1q3SdMY/64899ffcec9176334b59be5f.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/mNwX491/6489a4dc8c533d0013f70d61.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
