// import React from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useQuery } from "@apollo/client";
// import { Carouselquery } from "../schema/Query";
// import { Data } from "../types/components/carousel.types";
// import EmblaCarousel from "./Embla/contactUsCarousel/contactUsCarousel";
// import {
//   FilmsSection,
//   GetInTouchCarouselImagesCollection,
// } from "../types/pages/Memories.types";

// interface Props {
//   portraitImageForBackground: FilmsSection;
//   getInTouchCarouselImagesCollection: GetInTouchCarouselImagesCollection;
// }

// export const GetInTouch = (props: Props) => {
//   const { loading, data } = useQuery<Data>(Carouselquery);
//   useGSAP(() => {
//     const timeline = gsap.timeline({ repeat: -1 });
//     if (loading) return;
//     timeline
//       .to(".touch__carousel_wrapper", {
//         x: "-100vw",
//         duration: 1,
//         delay: 2,
//         ease: "none",
//       })
//       .to(".touch__carousel_wrapper", {
//         x: "-200vw",
//         duration: 1,
//         delay: 2,
//         ease: "none",
//       })
//       .to(".touch__carousel_wrapper", {
//         x: "-300vw",
//         duration: 1,
//         delay: 2,
//         ease: "none",
//       });
//   }, [loading]);
//   return (
//     <div className="touch">
//       <div className="touch__carousel">
//         <EmblaCarousel slides={[]} {...props} />
//       </div>
//       <div className="touch__inputs">
//         <div className="touch__heading">GET IN TOUCH</div>
//         <form
//           className="touch__form"
//           action="https://submit-form.com/CsRObNwPw"
//         >
//           <div className="touch__form-wrapper">
//             <label htmlFor="">NAME</label>
//             <input name="name" type="text" />
//           </div>
//           <div className="touch__form-wrapper">
//             <label htmlFor="">PHONE</label>
//             <input name="phone" type="text" />
//           </div>
//           <div className="touch__form-wrapper">
//             <label htmlFor="">EMAIL</label>
//             <input name="text" type="text" />
//           </div>
//           <div className="touch__form-wrapper">
//             <label htmlFor="">MESSAGE</label>
//             <textarea name="message" />
//           </div>

//           <button className="button-86" role="button">
//             SUBMIT
//           </button>
//         </form>
//       </div>
//       <div className="touch__image">
//         <h4>LET'S CELEBRATE TOGETHER</h4>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's standard
//         </p>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useQuery } from '@apollo/client';
import { Carouselquery } from '../schema/Query';
import { Data } from '../types/components/carousel.types';
import EmblaCarousel from './Embla/contactUsCarousel/contactUsCarousel';
import {
  FilmsSection,
  GetInTouchCarouselImagesCollection,
} from '../types/pages/Memories.types';

interface Props {
  portraitImageForBackground: FilmsSection;
  getInTouchCarouselImagesCollection: GetInTouchCarouselImagesCollection;
}

export const GetInTouch = (props: Props) => {
  const { loading, data } = useQuery<Data>(Carouselquery);
  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    if (loading) return;
    timeline
      .to('.touch__carousel_wrapper', {
        x: '-100vw',
        duration: 1,
        delay: 2,
        ease: 'none',
      })
      .to('.touch__carousel_wrapper', {
        x: '-200vw',
        duration: 1,
        delay: 2,
        ease: 'none',
      })
      .to('.touch__carousel_wrapper', {
        x: '-300vw',
        duration: 1,
        delay: 2,
        ease: 'none',
      });
  }, [loading]);

  return (
    <div className="touch relative mt-14 flex w-full flex-col lg:flex-row">
      {/* Carousel */}
      <div className="touch__carousel absolute inset-0 z-[-1] overflow-hidden">
        <EmblaCarousel slides={[]} {...props} />
      </div>

      {/* Image Section */}
      <div className="flex h-full flex-col items-center justify-center gap-5 px-12 py-20 lg:block lg:w-2/5">
        <h4 className="text-white xs:font-bold sm:px-0 sm:text-xl sm:font-medium lg:text-2xl">
          LET'S CELEBRATE TOGETHER
        </h4>
        <p className="text-justify text-base leading-7 text-white lg:leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>

      {/* Form Section */}
      <div className="hidden w-full py-24 sm:block lg:w-3/5 lg:bg-none lg:py-24">
        <div className="relative pl-20 pt-4 text-start text-4xl font-light text-white">
          GET IN TOUCH
          <div className="absolute -left-16 top-full mt-4 h-1 w-24 rounded-full bg-gray-300 lg:ml-36" />
        </div>

        <form
          className="touch__form flex flex-col gap-5 pt-12"
          action="https://submit-form.com/CsRObNwPw"
        >
          <div className="touch__form-wrapper px-8 pb-4 lg:px-10 xl:px-20">
            <label className="pb-1 text-sm font-light text-white">NAME</label>
            <input
              name="name"
              type="text"
              className="w-full rounded-lg border-none bg-white bg-opacity-30 p-4 text-white"
            />
          </div>
          <div className="touch__form-wrapper px-8 pb-4 lg:px-10 xl:px-20">
            <label className="pb-1 text-sm font-light text-white">PHONE</label>
            <input
              name="phone"
              type="text"
              className="w-full rounded-lg border-none bg-white bg-opacity-30 p-4 text-white"
            />
          </div>
          <div className="touch__form-wrapper px-8 pb-4 lg:px-10 xl:px-20">
            <label className="pb-1 text-sm font-light text-white">EMAIL</label>
            <input
              name="email"
              type="text"
              className="w-full rounded-lg border-none bg-white bg-opacity-30 p-4 text-white"
            />
          </div>
          <div className="touch__form-wrapper px-8 pb-4 lg:px-10 xl:px-20">
            <label className="pb-1 text-sm font-light text-white">
              MESSAGE
            </label>
            <textarea
              name="message"
              className="h-48 w-full rounded-lg border-none bg-white bg-opacity-30 p-4 text-white"
            />
          </div>
          <button className="button-86 ml-8 flex h-10 w-24 items-center justify-center bg-transparent text-base text-white lg:ml-36">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
