import React from "react";
import { MemoriesCard } from "../../components/MemoriesCard";
import sm from "../../assets/sm.png";
import lg from "../../assets/21.png";
import { useQuery } from "@apollo/client";
import { MemoryQuery } from "../../schema/Memories.query";
import { Memory } from "../../types/pages/Memories.types";
import { Footer } from "../../layout/Footer";
import { MinimalFooter } from "../../layout/MinimalFooter";
export const Memories = () => {
  const { data } = useQuery<Memory>(MemoryQuery);

  return (
    <>
      <div className="memories">
        <h1 className="memories__heading">
          MEMO<span>RIES</span>
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
        <ul className="memories__picture">
          <MemoriesCard image={sm} />
          <MemoriesCard image={lg} />
          <MemoriesCard image={lg} />
          <MemoriesCard image={sm} />
          <MemoriesCard image={lg} />
          <MemoriesCard image={sm} />
          <MemoriesCard image={sm} />
        </ul>
      </div>
      <MinimalFooter />
    </>
  );
};
