import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';

import './embla.css';
import { DotButton, useDotButton } from '../js/EmblaCarouselDotButton';

import {
  FilmsSection,
  GetInTouchCarouselImagesCollection,
} from '../../../types/pages/Memories.types';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  portraitImageForBackground: FilmsSection;
  getInTouchCarouselImagesCollection: GetInTouchCarouselImagesCollection;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {
    options,
    portraitImageForBackground,
    getInTouchCarouselImagesCollection,
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true,
    },
    [Fade({}), Autoplay({ playOnInit: true, delay: 4000 })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla max-w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {getInTouchCarouselImagesCollection &&
            getInTouchCarouselImagesCollection.items.map((itm, index) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img embla__slide__number h-full"
                  src={itm.url}
                  alt="Celebration Chapters"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? 'embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
