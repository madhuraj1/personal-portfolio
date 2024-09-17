import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Carouselquery } from "../schema/Query";
import { Data } from "../types/components/carousel.types";
import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery";

export const DynamicCarousel = () => {
  const [images, setImage] = useState([]);
  const { loading, error } = useQuery<Data>(Carouselquery, {
    onCompleted: (data) => {
      const collection: any = [];
      data.slideshowCollection.items.map((im) => {
        collection.push({
          original: im.imageBase64.url,
          thumbnail: im.imageBase64.url,
        });
      });
      setImage(collection);
    },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="home__carousel">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};
