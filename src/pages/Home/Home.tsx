import { useQuery } from '@apollo/client';
import { HomepageVideoQuery, QuoteQuery } from '../../schema/Query';
import { Data } from '../../types/pages/Home.types';
import { Video } from '../../components/Video';

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
      <main className="home mt-20 md:-mt-20">
        {/* <Carousel /> */}
        <EmblaCarousel
          slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}
        />
        <Video
          video={
            videoData?.homePageCollection.items[0].filmsSection.url as string
          }
          text={videoData?.homePageCollection.items[0].filmsSectionText}
        />
        <CelebrationChapter
          getInTouchCarouselImagesCollection={
            videoData?.homePageCollection.items[0]
              .getInTouchCarouselImagesCollection
          }
          getInTouchText={videoData?.homePageCollection.items[0].getInTouchText}
          portraitImageForBackground={
            videoData?.homePageCollection.items[0].portraitImageForBackground
          }
        />
      </main>
    </>
  );
};
