import { useQuery } from "@apollo/client";
import { Carouselquery } from "../schema/Carousel.query";
import { Data } from "../types/components/carousel.types";
import { Spinner } from "./Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
export const Carousel = () => {
  const { data, loading, error } = useQuery<Data>(Carouselquery);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={true}
        // navigation={true}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
        className="swiper"
      >
        {loading && (
          <div className="carousel__spinner">
            <Spinner />
          </div>
        )}
        {!loading &&
          data?.slideshowCollection.items.map((data) => {
            return (
              <SwiperSlide className="swiper-slide">
                <div>
                  <img src={data.imageBase64.url} />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
