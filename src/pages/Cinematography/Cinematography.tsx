import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Spinner } from '../../components/Spinner';
import { cinemaQuery, filmsQuery } from '../../schema/Query';
import {
  FilmsIntroductionCollection,
  ICinema,
} from '../../types/pages/Cinema.types';
import Logo from '../../assets/Logo-new.png';

import Carousel from 'react-spring-3d-carousel';
import { config } from '@react-spring/web';
import LeftArrow from '../../assets/Keyboard arrow left.svg';
import RightArrow from '../../assets/Keyboard arrow right.svg';

export const Cinematography = () => {
  const [slidesData, setSlidesData] = useState<
    { key: string; content: string }[]
  >([]);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [length, setLength] = useState(0);
  const { data } = useQuery<FilmsIntroductionCollection>(filmsQuery);
  const { loading } = useQuery<ICinema>(cinemaQuery, {
    onCompleted: (res) => {
      const slides: { key: string; content: string }[] = [];
      setLength(res.youtubeCollection.items?.length ?? 0);
      res.youtubeCollection.items?.forEach((item) => {
        slides.push({
          key: item.youtubeVideoId,
          content: (
            <iframe
              className="films__vid_items"
              src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
            />
          ) as unknown as string,
        });
      });
      slides.map((slide, index) => {
        return { ...slide, onClick: () => setCurrentSlide(index) };
      });
      setSlidesData(slides);
    },
  });
  const nextSlide = () => {
    if (currentSlide === length) setCurrentSlide(1);
    else setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 1) setCurrentSlide(length);
    else setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="films mt-0 md:mt-24">
      <div className="films__video">
        <video
          src={data?.filmsIntroductionCollection?.items[0]?.filmsVideo?.url}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="films__logo hidden md:block">
          <img src={Logo} alt="Home" />
        </div>
      </div>
      <div className="mx-auto max-w-[1500px] pt-20">
        <h4 className="font-century py-8 text-start text-5xl">Films</h4>

        <div className="font-metropolis text-md">
          {data?.filmsIntroductionCollection?.items[0]?.introductionText}
        </div>
      </div>
      {loading && <Spinner />}
      {!loading && (
        <>
          <div className="films__carousel">
            <Carousel
              goToSlide={currentSlide}
              slides={slidesData}
              animationConfig={config.stiff}
              showNavigation={true}
            />
          </div>
          <div className="films__button">
            <button onClick={prevSlide} className="films__button-right">
              <img src={LeftArrow} alt="Left Arrow" />
            </button>
            <p className="films__button-indicator">
              {currentSlide}/{length}
            </p>
            <button onClick={nextSlide} className="films__button-left">
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </>
      )}
    </div>
    // <>
    //   <div className="films">
    //     <h1 className="films__heading">Films</h1>
    //     <p className="films__desc">
    //       One final word. There’s just something about wedding films, the magic
    //       of emotions ,listening to speeches, and watching your loved ones
    //       dance, essence of culture and what not!! It takes all those hours in
    //       the lead-up, and all those memories from the day, and eternalizes them
    //       forever. And that’s where we step in. while we keep it real and raw,
    //       yet the magical cinematic touch of ours to freeze that day forever in
    //       your memories. well coming to travel films or travel projects its all
    //       new world to explore and experience, and just making others to
    //       experience and feel it visually!!.
    //     </p>
    // {loading && <Spinner />}
    // {!loading && (
    //   <div className="films__vid">
    //     <>
    //       {(data?.youtubeCollection.items as ItemsEntity[]).map(
    //         (yt, index) => {
    //           return (
    //             <iframe
    //               className="films__vid_items"
    //               src={`https://www.youtube.com/embed/${yt.youtubeVideoId}`}
    //             ></iframe>
    //           );
    //         }
    //       )}
    //     </>
    //   </div>
    // )}
    //   </div>
    // </>
  );
};
