import React, { useEffect } from "react";
import { MemoriesCard } from "../../components/MemoriesCard";
import sm from "../../assets/sm.png";
import lg from "../../assets/21.png";
import { useQuery } from "@apollo/client";
import { MemoryQuery } from "../../schema/Query";
import { Memory } from "../../types/pages/Memories.types";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { Spinner } from "../../components/Spinner";
import { Footer } from "../../layout/Footer";
export const Memories = () => {
  const { data, loading } = useQuery<Memory>(MemoryQuery);

  return (
    <>
      <div className="memories">
        <h1 className="memories__heading">
          {/* MEMO<span>RIES</span> */}
          Memories
          {/* MEMO<span>RIES</span> */}
        </h1>
        <div className="memories__desc">
          Do you know one of the most expensive travel around the world? It's
          traveling down the memory lane. Who doesn't want to live their "Dream
          come true" moments again and again, and feel the ecstasy run through
          their blood! Each moment we live becomes a memory for future times.
          Photos becomes time capsules. Little precious moments that will be
          captured within a frame, freezing those little smiles, shy looks,
          tearful eyes, peaceful heart forever.
        </div>
        {loading && <Spinner />}
        {!loading && (
          <ul className="memories__picture">
            {data?.memoriesCollection.items.map((coll, index) => {
              return (
                <MemoriesCard
                  number={index}
                  key={index}
                  data={coll}
                  image={coll.coverImage.url}
                />
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
