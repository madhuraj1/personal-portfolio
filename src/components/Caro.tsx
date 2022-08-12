import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Carouselquery } from "../schema/Carousel.query";
import { Data } from "../types/components/carousel.types";
import { Spinner } from "./Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
export const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [totalCard, setTotalCard] = useState<any>(0);
  const { data, loading, error } = useQuery<Data>(Carouselquery);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeSlideT();
    }, 5000);
    return () => window.clearTimeout(timeout);
  }, [activeCard]);

  const changeSlideT = () => {
    if (activeCard === totalCard) {
      setActiveCard(0);
    } else setActiveCard(activeCard + 1);
  };

  const style = {
    transform: `translateX(-${activeCard * 100}%)`,
  };
  const changeSlide = (indicator: string) => {
    if (indicator === "left")
      if (activeCard === 0) {
        setActiveCard(totalCard);
      } else setActiveCard(activeCard - 1);
    else {
      if (activeCard === totalCard) {
        setActiveCard(0);
      } else setActiveCard(activeCard + 1);
    }
  };

  React.useEffect(() => {
    setTotalCard((data?.slideshowCollection.items.length as any) - 1);
  }, [data]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
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
