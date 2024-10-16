import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "./Swiper.css";

export default function ImageCarousel({ imgs }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
      spaceBetween={50}
      // slidesPerView={3}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper bg-gray-900 rounded-xl my-10"
    >
      <div className=" flex justify-center items-center ">
        {imgs.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="h-[35rem] w-[50rem] py-10">
              <img className="object-cover" src={img.img} />
            </div>
          </SwiperSlide>
        ))}
      </div>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}
