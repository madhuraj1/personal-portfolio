import { useQuery } from '@apollo/client';
import { HomepageVideoQuery, QuoteQuery } from '../../schema/Query';
import { Data } from '../../types/pages/Home.types';
import { Video } from '../../components/Video';

import EmblaCarousel from '../../components/Embla/js/EmblaCarousel';
import { HomePageData, HomepageVideo } from '../../types/pages/Memories.types';
import { Spinner } from '../../components/Spinner';
import CelebrationChapter from '../../components/BookACall';
import { Helmet } from 'react-helmet';

export const Home = () => {
  const { data, loading } = useQuery<Data>(QuoteQuery);
  const { data: videoData, loading: videoloading } =
    useQuery<HomePageData>(HomepageVideoQuery);

  if (loading || videoloading || !data || !videoData) return <Spinner />;
  return (
    <>
      <Helmet>
        <title>Celebration Chapters</title>
        <meta
          property="og:title"
          content="Celebration Chapters - Films & Photos for Your Special Moments"
        />
        <meta
          property="og:description"
          content="Capture your most cherished moments with Celebration Chapters. Explore our stunning photos and heartfelt films today!"
        />
        <meta
          property="og:url"
          content="https://www.celebrationchapters.com/"
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/waibrswxyq0p/3RdXYtqHGWLEGox3EM7fLQ/50aa517250d9da1819f6c43f9bea7a1f/CCP-343.jpg"
        />
        <meta
          property="og:image:alt"
          content="A stunning celebration captured by Celebration Chapters"
        />
      </Helmet>
      <main className="-mt-20">
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
