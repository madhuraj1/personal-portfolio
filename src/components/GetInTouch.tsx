import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useQuery } from "@apollo/client";
import { Carouselquery } from "../schema/Query";
import { Data } from "../types/components/carousel.types";

export const GetInTouch = () => {
  const { loading, data } = useQuery<Data>(Carouselquery);
  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });
    if (loading) return;
    timeline
      .to(".touch__carousel_wrapper", {
        x: "-100vw",
        duration: 1,
        delay: 2,
        ease: "none",
      })
      .to(".touch__carousel_wrapper", {
        x: "-200vw",
        duration: 1,
        delay: 2,
        ease: "none",
      })
      .to(".touch__carousel_wrapper", {
        x: "-300vw",
        duration: 1,
        delay: 2,
        ease: "none",
      });
  }, [loading]);
  return (
    <div className="touch">
      <div className="touch__carousel">
        <div className="touch__carousel_wrapper">
          {data?.slideshowCollection.items.slice(0, 3).map((itm, index) => {
            return <img src={itm.imageBase64.url} alt="" />;
          })}
          <img
            src={data?.slideshowCollection.items[0].imageBase64.url}
            alt=""
          />
        </div>
      </div>
      <div className="touch__inputs">
        <div className="touch__heading">GET IN TOUCH</div>
        <form
          className="touch__form"
          action="https://submit-form.com/CsRObNwPw"
        >
          <div className="touch__form-wrapper">
            <label htmlFor="">NAME</label>
            <input name="name" type="text" />
          </div>
          <div className="touch__form-wrapper">
            <label htmlFor="">PHONE</label>
            <input name="phone" type="text" />
          </div>
          <div className="touch__form-wrapper">
            <label htmlFor="">EMAIL</label>
            <input name="text" type="text" />
          </div>
          <div className="touch__form-wrapper">
            <label htmlFor="">MESSAGE</label>
            <textarea name="message" />
          </div>

          <button className="button-86" role="button">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="touch__image">
        <h4>LET'S CELEBRATE TOGETHER</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
        </p>
      </div>
    </div>
  );
};
