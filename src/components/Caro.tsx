import { useQuery } from "@apollo/client";
import { Carouselquery } from "../schema/Query";
import { Data } from "../types/components/carousel.types";
import { Spinner } from "./Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  EffectFade,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

// import "./styles.css";

export const Carousel = () => {
  const { data, loading, error } = useQuery<Data>(Carouselquery);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        allowTouchMove={true}
        keyboard={true}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[
          EffectFade,
          Navigation,
          Pagination,
          Keyboard,
          Mousewheel,
          Autoplay,
        ]}
        className="mySwiper"
      >
        {loading && (
          <div className="carousel__spinner">
            <Spinner />
          </div>
        )}
        {!loading &&
          data?.slideshowCollection.items.map((data) => {
            return (
              <SwiperSlide key={data.order} className="swiper-slide">
                {/* <div> */}
                <img alt={"Madhuraj Photography"} src={data.imageBase64.url} />
                {/* </div> */}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
