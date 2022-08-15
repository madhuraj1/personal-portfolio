import { MemoryCard } from "../../components/MemeoryCard";
import sm from "../../assets/sm.png";
import lg from "../../assets/21.png";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import {
  GetMemoryById,
  MemoriesCollection,
  MemoriesCollectionItem,
  MemoryCollectionCollectionItem
} from "../../types/pages/Memories.types";
import {useQuery} from "@apollo/client";
import {getMemoriesdById, MemoryQuery} from "../../schema/Query";
import {Spinner} from "../../components/Spinner";


export const Memory = () => {
  const location = useLocation();
  const router  = useNavigate();
  const {data,loading,error} = useQuery<GetMemoryById>(getMemoriesdById,{variables:{id:location.state}})

    React.useEffect(() => {
      if(!location.state)
        router('/')
    }, []);

  return (
    <>
      {
        loading && <Spinner/>
      }
      {
        !loading && !error && <>
            <div className="memory">
              <div className="memory__card">
                <figure className="memory__card__fig">
                  <img alt={"Madhuraj Photography"} src={data?.memories.coverImage.url}></img>
                  <figcaption className="memory__card__caption">
                    {data?.memories.name}
                  </figcaption>
                </figure>
              </div>
              <div className="memory__desc">
                  {
                      data?.memories.caption
                  }
              </div>
              <div className="memory__tag">
                MEM<span>ORIES</span>
              </div>

              <ul className="memory__picture">
                {data?.memories?.memoryCollectionCollection.items.map(
                    (row: MemoryCollectionCollectionItem, index: number) => {
                      return <MemoryCard key={row.url} image={row.url} />;
                    }
                )}
              </ul>
            </div>
            <MinimalFooter />
          </>
      }
    </>
  );
};
