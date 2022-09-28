import { useQuery } from "@apollo/client";
import React from "react";
import { QuoteQuery } from "../schema/Query";
import { Data } from "../types/pages/Home.types";

export const Quote = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  return (
    <div className="quote">
      <q>
        {data?.quoteCollection.items[0].quote.slice(0, 15)}
        <span>{data?.quoteCollection.items[0].quote.slice(15)}</span>
      </q>
    </div>
  );
};
