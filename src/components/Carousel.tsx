import React, { useEffect, useState } from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import home from "../assets/home.png";
export const Carousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeSlideT();
    }, 5000);
    return () => window.clearTimeout(timeout);
  }, [activeCard]);

  const changeSlideT = () => {
    if (activeCard === 3) {
      setActiveCard(0);
    } else setActiveCard(activeCard + 1);
  };

  const style = {
    transform: `translateX(-${activeCard * 100}%)`,
  };
  const changeSlide = (indicator: string) => {
    if (indicator === "left")
      if (activeCard === 0) {
        setActiveCard(3);
      } else setActiveCard(activeCard - 1);
    else {
      if (activeCard === 3) {
        setActiveCard(0);
      } else setActiveCard(activeCard + 1);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__item" style={style}>
        <div>
          <img className="carousel__item__image" src={home} />
        </div>
      </div>
      <div className="carousel__item" style={style}>
        <div>
          <img className="carousel__item__image" src={home} />
        </div>
      </div>
      <div className="carousel__item" style={style}>
        <div>
          <img className="carousel__item__image" src={home} />
        </div>
      </div>
      <div className="carousel__item" style={style}>
        <div>
          <img className="carousel__item__image" src={home} />
        </div>
      </div>
      <div
        className="carousel__controls--left"
        onClick={() => changeSlide("left")}
      >
        <AiOutlineLeft />
      </div>
      <div
        className="carousel__controls--right"
        onClick={() => changeSlide("right")}
      >
        <AiOutlineRight />
      </div>
    </div>
  );
};
