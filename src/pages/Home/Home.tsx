import { Carousel } from "../../components/Caro";
import React from "react";
import lq from "../../assets/9.svg";
import rq from "../../assets/10.svg";
import { useQuery } from "@apollo/client";
import { QuoteQuery } from "../../schema/quote.query";
import { Data } from "../../types/pages/Home.types";
export const Home = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  return (
    <main>
      <div className="quote">
        {/* <img src={lq} className="quote__lq" />
        {data?.quoteCollection.items[0].quote.slice(0, 15)}
        <span>{data?.quoteCollection.items[0].quote.slice(15)}</span>
        <img className="quote__rq" src={rq} /> */}
        <div className="container">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>
                {data?.quoteCollection.items[0].quote +
                  "Lorem Ispusm des kksed fesf sdfr fer"}
                <span></span>
              </h1>
            </div>
          </div>
          <div className="role">
            <div className="block"></div>
            <p></p>
          </div>
        </div>
        {/* <div className="escape">
          {data?.quoteCollection.items[0].quote.split(" ")[0]}
        </div>
        <div className="escape1">
          <span className="something">
            {data?.quoteCollection.items[0].quote.slice(
              data?.quoteCollection.items[0].quote.split(" ")[0].length + 1
            )}
          </span>
        </div> */}
      </div>

      <Carousel />
      {/* <Carousel */}
      <div
        style={{
          textAlign: "center",

          marginTop: "2rem",
          width: "100%",
          padding: ".5rem 0",
          backgroundColor: "black",
          color: "white",
        }}
      >
        © 2022 Madhuraj Photography
      </div>
    </main>
  );
};
