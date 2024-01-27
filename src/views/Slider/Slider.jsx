import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Subject } from "./SubjectSlide/SubjectSlide";
import s from "./Slider.module.scss";

import "swiper/css";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [subjectsData, setsubjectsData] = useState(null);

  const API_URL =
    "https://tutor-bed3b-default-rtdb.asia-southeast1.firebasedatabase.app";

  useEffect(() => {
    fetch(`${API_URL}/subjects.json`)
      .then((res) => res.json())
      .then((data) => setsubjectsData(data))
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div className={s.section}>
      <Swiper
        className={s.slider}
        modules={[Navigation, Autoplay]}
        spaceBetween={32}
        slidesPerView={4}
        loop
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
      >
        {subjectsData?.map((data, i) => (
          <SwiperSlide key={i}>
            <Subject {...data} />
          </SwiperSlide>
        ))}

        <button className="custom-swiper-button-prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
          >
            <path
              d="M0.512595 10.7897C-0.170865 11.4591 -0.170865 12.5462 0.512595 13.2157L11.0105 23.4979C11.694 24.1674 12.8039 24.1674 13.4874 23.4979C14.1709 22.8285 14.1709 21.7414 13.4874 21.072L4.22515 12L13.4819 2.92804C14.1654 2.25862 14.1654 1.17148 13.4819 0.502064C12.7985 -0.167355 11.6885 -0.167355 11.0051 0.502064L0.507128 10.7843L0.512595 10.7897Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <button className="custom-swiper-button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
          >
            <path
              d="M13.4874 10.7897C14.1709 11.4591 14.1709 12.5462 13.4874 13.2157L2.98945 23.4979C2.30599 24.1674 1.19606 24.1674 0.512595 23.4979C-0.170865 22.8285 -0.170865 21.7414 0.512595 21.072L9.77485 12L0.518063 2.92804C-0.165397 2.25862 -0.165397 1.17148 0.518063 0.502064C1.20152 -0.167355 2.31146 -0.167355 2.99492 0.502064L13.4929 10.7843L13.4874 10.7897Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};
