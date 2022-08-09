import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { query } from "../schema/about.query";
import { Data } from "../types/components/carousel.types";
import { Spinner } from "./Spinner";
export const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [totalCard, setTotalCard] = useState<any>(0);
  const { data, loading, error } = useQuery<Data>(query);

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
    setTotalCard(data?.slideshowCollection.items.length - 1);
  }, [data]);

  return (
    <>
      <div className="carousel">
        {loading && (
          <div className="carousel__spinner">
            <Spinner />
          </div>
        )}

        {!loading &&
          data?.slideshowCollection.items.map((D, i) => {
            return (
              <div className="carousel__item" style={style}>
                <div>
                  <img
                    className="carousel__item__image"
                    src={D.imageBase64.url}
                  />
                </div>
              </div>
            );
          })}
        {/* <div className="carousel__item" style={style}>
        <div>
          <img className="carousel__item__image" src={home} />
        </div>
      </div> */}
      </div>
      <div className="carousel__controls">
        <div className="carousel__separator"></div>
        <div className="carousel__controls_btn">
          <div
            className="carousel__controls--left"
            onClick={() => changeSlide("left")}
          >
            <AiOutlineLeft />
            <span>Prev</span>
          </div>
          <div
            className="carousel__controls--right"
            onClick={() => changeSlide("right")}
          >
            <span>Next</span>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </>
  );
};
