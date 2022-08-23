import { Carousel } from "../../components/Caro";
import React from "react";
import lq from "../../assets/9.svg";
import rq from "../../assets/10.svg";
import { useQuery } from "@apollo/client";
import { QuoteQuery } from "../../schema/Query";
import { Data } from "../../types/pages/Home.types";
export const Home = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  return (
    <main>
      <div className="quote">
        <q>
          {data?.quoteCollection.items[0].quote.slice(0, 15)}
          <span>{data?.quoteCollection.items[0].quote.slice(15)}</span>
        </q>
        {/* <div className="container">
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
