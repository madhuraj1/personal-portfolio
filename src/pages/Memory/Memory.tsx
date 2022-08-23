import { MinimalFooter } from "../../layout/MinimalFooter";
import { useLocation, useNavigate } from "react-router-dom";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { GetMemoryById } from "../../types/pages/Memories.types";
import { useQuery } from "@apollo/client";
import { getMemoriesdById, MemoryQuery } from "../../schema/Query";
import { Spinner } from "../../components/Spinner";

export const Memory = () => {
  const location = useLocation();
  const router = useNavigate();
  const [myData, setMyData] = useState<[[], []]>([[], []]);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const { loading, error } = useQuery<GetMemoryById>(getMemoriesdById, {
    variables: { id: location.state },
    onCompleted: (res) => {
      const result: any = [[], []];
      let j: number = 0; //we create it, then we'll fill it
      const len = res.memories.memoryCollectionCollection.items.length;
      for (let i = 0; i < len; i++) {
        j == 2 ? (j = 0) : (j = j);
        const value = res.memories.memoryCollectionCollection.items[i];
        result[j++].push(value);
      }
      setMyData(result);
    },
  });
  useEffect(() => {
    if (!loading && !error) {
      const le = ref1.current?.children.length ?? 0;
      const le2 = ref1.current?.children.length ?? 0;
      let h1 = 0;
      let h2 = 0;
      let last1 = 0;
      let last2 = 0;
      // for (last1; last1 < le; last1++) {
      //   h1 = h1 + ref1.current?.children[last1].clientHeight;
      // }
      // for (last2; last2 < le2; last2++) {
      //   h2 = h2 + ref2.current?.children[last2].clientHeight;
      // }
      const height = h2 - h1;
      // const node = document.createElement("img");
      // node.style.width = "100%";
      // node.setAttribute("src", data?.memories.coverImage.url);
      // node.style.height = height < 0 ? `${-height}px` : `${height}px`;
      // h2 < h1
      //   ? ref2.current?.appendChild(node)
      //   : ref1.current?.appendChild(node);
    }
  }, [myData, ref1.current, ref2.current]);
  React.useEffect(() => {
    if (!location.state) router("/");
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && !error && (
        <>
          <div className="container">
            <div className="box">
              {
                <>
                  <div ref={ref1} className="dream">
                    {myData[0].map((d: any) => {
                      return (
                        <img
                          alt="madhuraj Photography"
                          loading="lazy"
                          src={d.url}
                        />
                      );
                    })}
                  </div>

                  <div ref={ref2} className="dream">
                    {myData[1].map((d: any) => {
                      return (
                        <img
                          alt="madhuraj Photography"
                          loading="lazy"
                          src={d.url}
                        />
                      );
                    })}
                  </div>
                </>
              }
            </div>
          </div>
          {/* <div className="memory">
            <div className="memory__card">
              <figure className="memory__card__fig">
                <img
                  alt={"Madhuraj Photography"}
                  src={data?.memories.coverImage.url}
                ></img>
                <figcaption className="memory__card__caption">
                  {data?.memories.name}
                </figcaption>
              </figure>
            </div>
            <div className="memory__desc">{data?.memories.caption}</div>
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
          </div> */}
          <MinimalFooter />
        </>
      )}
    </>
  );
};
