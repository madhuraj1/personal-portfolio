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
import { DynamicCarousel } from "../../components/DynamicCarousel";
import { Video } from "../../components/Video";
import { GetInTouch } from "../../components/GetInTouch";
import { FindUs } from "../../components/FindUs";

export const Home = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  return (
    <>
      <main className="home">
        <Carousel />
        <Video />
        <GetInTouch />
        {/* <FindUs /> */}
        {/* <Artwork /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};
