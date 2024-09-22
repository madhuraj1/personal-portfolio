import { SmileIcon } from 'lucide-react';
import EmblaCarousel from './Embla/contactUsCarousel/contactUsCarousel';
import {
  FilmsSection,
  GetInTouchCarouselImagesCollection,
} from '../types/pages/Memories.types';

interface Props {
  portraitImageForBackground: FilmsSection;
  getInTouchCarouselImagesCollection: GetInTouchCarouselImagesCollection;
}

export default function CelebrationChapter(props: Props) {
  return (
    <div className="relative -z-10 bg-stone-100 xs:py-4 xs:pt-0 sm:py-14 sm:pt-44">
      <div className="relative mx-auto mb-24 flex max-w-[1480px] items-center justify-center overflow-hidden py-36 xs:rounded-none sm:rounded-xl">
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
        <div className="mx-4 w-full rounded-2xl bg-white bg-opacity-40 p-12 py-24 text-center shadow-lg md:w-[calc(100vw-30rem)] md:rounded-[100px]">
          <h1 className="mx-auto mb-6 font-serif text-4xl md:w-3/4 md:text-5xl lg:text-6xl">
            LET'S CELEBRATE TOGETHER
          </h1>
          <p className="text-md mx-auto mb-8 flex items-center justify-center md:w-3/4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div className="flex items-center justify-center gap-4 xs:flex-col sm:flex-row">
            <button className="rounded-full bg-white px-8 py-3 text-lg text-black transition-colors hover:bg-slate-300 xs:w-full sm:w-auto">
              Get Quote
            </button>
            <button className="rounded-full bg-black px-8 py-3 text-lg text-white transition-colors hover:bg-gray-800 xs:w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
