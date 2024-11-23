import EmblaCarousel from './Embla/contactUsCarousel/contactUsCarousel';
import {
  FilmsSection,
  GetInTouchCarouselImagesCollection,
} from '../types/pages/Memories.types';
import { FORM_URL } from '@/utils/urls';
import { useNavigate } from 'react-router-dom';

interface Props {
  portraitImageForBackground: FilmsSection;
  getInTouchCarouselImagesCollection: GetInTouchCarouselImagesCollection;
  getInTouchText: string;
}

export default function CelebrationChapter(props: Props) {
  const nav = useNavigate();
  return (
    <div className="relative">
      <div className="relative mb-24 flex items-center justify-center overflow-hidden py-56">
        <div className="touch__carousel absolute inset-0 z-[-1] overflow-hidden xs:hidden md:block">
          <EmblaCarousel slides={[]} {...props} />
        </div>
        <div className="touch__carousel absolute inset-0 z-[-1] h-[1300px] overflow-hidden xs:block md:hidden">
          <img
            src={props.portraitImageForBackground.url}
            alt=""
            className="h-full object-cover"
          />
        </div>
        <div className="mx-4 w-full rounded-2xl bg-white bg-opacity-40 p-12 py-24 text-center shadow-lg md:w-[min(80%,900px)] md:rounded-[100px]">
          <h1 className="font-serif mx-auto mb-6 font-metropolis text-4xl md:w-3/4 md:text-5xl lg:text-6xl">
            LET'S CELEBRATE TOGETHER
          </h1>
          <p className="text-md mx-auto mb-8 flex items-center justify-center font-century md:w-3/4">
            {props.getInTouchText}
          </p>
          <div className="flex items-center justify-center gap-4 font-century xs:flex-col sm:flex-row">
            <button
              onClick={() => window.open(FORM_URL, '_blank')}
              className="cursor-pointer rounded-full bg-white px-8 py-3 text-lg text-black transition-colors hover:bg-slate-300 xs:w-full sm:w-auto"
            >
              Get Quote
            </button>
            <button
              onClick={() => {
                nav('/contact');
              }}
              className="cursor-pointer rounded-full bg-black px-8 py-3 text-lg text-white transition-colors hover:bg-gray-800 xs:w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// first
// xs:py-4 xs:pt-0 sm:py-14 sm:pt-44
