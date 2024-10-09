import React, { useCallback, useEffect, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  EmblaOptionsType,
  EmblaCarouselType,
  EmblaEventType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import '../css/embla.css';
import { useQuery } from '@apollo/client';
import { Data } from '../../../types/components/carousel.types';
import { Carouselquery } from '../../../schema/Query';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const TWEEN_FACTOR_BASE = 0.08;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const { data } = useQuery<Data>(Carouselquery);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true,
    },
    [
      Fade({}),
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnInteraction: false,
        stopOnLastSnap: true,
      }),
    ]
  );
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          console.log(tweenNode);

          // tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {data &&
            data.slideshowCollection.items.map((itm, index) => (
              <div
                className="embla__slide h-auto w-screen md:h-[calc(100vh+5rem)]"
                key={index}
              >
                <img
                  className="embla__slide__img embla__slide__number h-full w-full object-cover"
                  src={itm.imageBase64.url}
                  alt="Celebration Chapters"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

// 2xl:max-w-[1440px)] max-w-[calc(100vw-1rem)] md:max-w-[calc(100vw-5rem)] lg:max-w-[calc(100vw-10rem)] xl:max-w-[calc(100vw-10rem)]

// embla slide
// h-[300px] sm:h-[400px] md:h-[500px] lg:h-[100vh-20rem] xl:h-[calc(100vh-10rem)]
