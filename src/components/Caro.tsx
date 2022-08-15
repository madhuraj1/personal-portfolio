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

// import "./styles.css";

export const Carousel = () => {
  const { data, loading, error } = useQuery<Data>(Carouselquery);

  return (
    <>
      <Swiper
        slidesPerView={1}
        // spaceBetween={30}
        // loop={true}
        allowTouchMove={true}
        // mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2000,
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
                <img  alt={"Madhuraj Photography"} src={data.imageBase64.url} />
                {/* </div> */}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
