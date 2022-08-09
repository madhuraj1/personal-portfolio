import { Carousel } from "../../components/Carousel";
import React from "react";
import lq from "../../assets/9.svg";
import rq from "../../assets/10.svg";
export const Home = () => {
  return (
    <main>
      <div className="quote">
        <img src={lq} className="quote__lq" />
        This is The Quote <span>to appear on the front page</span>
        <img className="quote__rq" src={rq} />
      </div>
      <Carousel />
    </main>
  );
};
