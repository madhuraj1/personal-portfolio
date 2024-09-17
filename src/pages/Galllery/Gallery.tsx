import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GetMemoryById } from "../../types/pages/Memories.types";
import { getGalleryQuery, getMemoriesdById } from "../../schema/Query";
import { Spinner } from "../../components/Spinner";
import { GalleryImageCollection } from "../../types/pages/Gallery.types";

export const Gallery = () => {
  const [itemsPerRow, setItemsPerRow] = useState(0);
  const [row, setRow] = useState(1);
  const [rowData, setRowData] = useState<Array<Array<string>> | null>(null);

  const { loading, error, data } = useQuery<GalleryImageCollection>(
    getGalleryQuery,
    {
      variables: { id: "6hNEIBo2R4cfkgoHQW5iyf" },
      onCompleted: (res) => {
        const screenWidth = window.innerWidth;
        console.log(res);

        const length = res.galleryCollection.items.length;
        if (screenWidth > 1100) {
          setItemsPerRow(length / 3);
          setRow(3);
          getGalleryRows(3);
        } else if (screenWidth > 600) {
          setItemsPerRow(length / 2);
          setRow(2);
          getGalleryRows(2);
        } else {
          setItemsPerRow(length);
          setRow(1);
          getGalleryRows(1);
        }

        function allotSlots(slots: number) {
          const arbitrarySlots = [];
          const storageSlots: Array<Array<string>> = [];
          for (let i = 0; i < slots; i++) {
            arbitrarySlots.push({ index: i, height: 0 });
            storageSlots.push([]);
          }
          return { arbitrarySlots, storageSlots };
        }

        function getSmallest(slotsArray: { index: number; height: number }[]) {
          slotsArray.sort(function (a, b) {
            return a.height - b.height;
          });
        }

        function getGalleryRows(rowSize: number) {
          const { arbitrarySlots, storageSlots } = allotSlots(rowSize);

          res.galleryCollection.items[0].imagedForGalleryCollection.items.forEach(
            (item) => {
              console.log(item);

              storageSlots[arbitrarySlots[0].index].push(item.url);
              arbitrarySlots[0].height += item.height;
              getSmallest(arbitrarySlots);
            }
          );

          setRowData(storageSlots);
        }
      },
    }
  );

  if (loading) return <Spinner />;

  return (
    <>
      <div className="gallery">
        <div className="gallery__heading">
          {data?.galleryCollection.items[0].introduction}
        </div>
        <div className="gallery__wrapper">
          {rowData?.map((i, index) => {
            return (
              <div key={i[index]} className="gallery__row">
                {i.map((itm) => {
                  return <img src={itm} alt={itm} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
