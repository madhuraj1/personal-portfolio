import { Carousel } from "../../components/Carousel";
import React from "react";
import lq from "../../assets/9.svg";
import rq from "../../assets/10.svg";
import { useQuery } from "@apollo/client";
import { QuoteQuery } from "../../schema/quote.query";
import { Data } from "../../types/pages/Home.types";
export const Home = () => {
  const { data } = useQuery<Data>(QuoteQuery);
  return (
    <main>
      <div className="quote">
        <img src={lq} className="quote__lq" />
        {data?.quoteCollection.items[0].quote.slice(0, 15)}
        <span>{data?.quoteCollection.items[0].quote.slice(15)}</span>
        <img className="quote__rq" src={rq} />
      </div>
      <Carousel />
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        © 2022 Madhuraj Photography
      </div>
    </main>
  );
};
