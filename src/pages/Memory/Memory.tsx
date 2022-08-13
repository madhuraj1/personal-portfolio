import { MemoryCard } from "../../components/MemeoryCard";
import sm from "../../assets/sm.png";
import lg from "../../assets/21.png";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { MemoryCollectionCollectionItem } from "../../types/pages/Memories.types";

export const Memory = () => {
  const location = useLocation();
  const router = useNavigate();

  React.useEffect(() => {
    if (!location.state) {
      router("/");
    }
  }, []);

  return (
    <>
      <div className="memory">
        <div className="memory__card">
          <figure className="memory__card__fig">
            <img src={location.state.coverImage.url}></img>
            <figcaption className="memory__card__caption">
              {location.state.name}
            </figcaption>
          </figure>
        </div>
        <div className="memory__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          maximus justo ac felis accumsan, in imperdiet tellus pharetra. Duis a
          dolor sed eros fermentum blandit quis quis odio. In luctus augue et
          nunc dapibus molestie. Curabitur dapibus a mauris eu pulvinar.
          Praesent vel risus sed felis gravida volutpat. In rutrum velit nec
          erat commodo viverra. Nullam convallis tellus at interdum egestas.
          Duis efficitur maximus dignissim.
        </div>
        <div className="memory__tag">
          MEM<span>ORIES</span>
        </div>

        <ul className="memory__picture">
          {location.state.memoryCollectionCollection.items.map(
            (row: MemoryCollectionCollectionItem, index: number) => {
              return <MemoryCard image={row.url} />;
            }
          )}
        </ul>
      </div>
      <MinimalFooter />
    </>
  );
};
