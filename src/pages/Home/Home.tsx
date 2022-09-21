import { Carousel } from "../../components/Caro";
import React from "react";
import lq from "../../assets/9.svg";
import rq from "../../assets/10.svg";
import { useQuery } from "@apollo/client";
import { QuoteQuery } from "../../schema/Query";
import { Data } from "../../types/pages/Home.types";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { Artwork } from "../../components/Artwork";
import { Footer } from "../../layout/Footer";
export const Home = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  return (
    <>
      <main className="home">
        <div className="quote">
          <q>
            {data?.quoteCollection.items[0].quote.slice(0, 15)}
            <span>{data?.quoteCollection.items[0].quote.slice(15)}</span>
          </q>
        </div>

        <Carousel />
        <Artwork />
        <MinimalFooter />
      </main>
      {/* <Footer /> */}
    </>
  );
};
