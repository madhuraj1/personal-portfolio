import { Carousel } from '../../components/Caro';
import React from 'react';
import lq from '../../assets/9.svg';
import rq from '../../assets/10.svg';
import { useQuery } from '@apollo/client';
import { HomepageVideoQuery, QuoteQuery } from '../../schema/Query';
import { Data } from '../../types/pages/Home.types';
import { MinimalFooter } from '../../layout/MinimalFooter';
import { Artwork } from '../../components/Artwork';
import { Footer } from '../../layout/Footer';
import { DynamicCarousel } from '../../components/DynamicCarousel';
import { Video } from '../../components/Video';
import { GetInTouch } from '../../components/GetInTouch';
import { FindUs } from '../../components/FindUs';
import EmblaCarousel from '../../components/Embla/js/EmblaCarousel';
import { HomePageData, HomepageVideo } from '../../types/pages/Memories.types';
import { Spinner } from '../../components/Spinner';
import CelebrationChapter from '../../components/BookACall';

export const Home = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  const { data: videoData, loading: videoloading } =
    useQuery<HomePageData>(HomepageVideoQuery);

  if (loading || videoloading || !data || !videoData) return <Spinner />;
  return (
    <>
      <main className="home">
        {/* <Carousel /> */}
        <EmblaCarousel
          slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
        />
        <Video
          video={
            videoData?.homePageCollection.items[0].filmsSection.url as string
          }
        />
        <CelebrationChapter
          getInTouchCarouselImagesCollection={
            videoData?.homePageCollection.items[0]
              .getInTouchCarouselImagesCollection
          }
          portraitImageForBackground={
            videoData?.homePageCollection.items[0].portraitImageForBackground
          }
        />
        {/* <GetInTouch
          getInTouchCarouselImagesCollection={
            videoData?.homePageCollection.items[0]
              .getInTouchCarouselImagesCollection
          }
          portraitImageForBackground={
            videoData?.homePageCollection.items[0].portraitImageForBackground
          }
        /> */}
      </main>
    </>
  );
};
