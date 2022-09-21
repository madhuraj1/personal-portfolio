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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          maximus justo ac felis accumsan, in imperdiet tellus pharetra. Duis a
          dolor sed eros fermentum blandit quis quis odio. In luctus augue et
          nunc dapibus molestie. Curabitur dapibus a mauris eu pulvinar.
          Praesent vel risus sed felis gravida volutpat. In rutrum velit nec
          erat commodo viverra. Nullam convallis tellus at interdum egestas.
          Duis efficitur maximus dignissim.
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
      <MinimalFooter />
    </>
  );
};
