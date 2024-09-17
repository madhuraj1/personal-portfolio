import { useQuery } from "@apollo/client";
import React, { Profiler, useRef } from "react";
import { Spinner } from "../../components/Spinner";
import { Aboutquery } from "../../schema/Query";
import { Data } from "../../types/pages/About.types";
import Image from "../../assets/Rectangle 103.png";

export const About = () => {
  const { data, loading, error } = useQuery<Data>(Aboutquery);

  return (
    <div className="about">
      <div className="about__us">
        <img src={Image} alt="" />
        <div className="about__wrapper">
          <p>
            An engineer by profession and a photographer by heart. It all
            started when my mother bought a SLR camera home and just like every
            other beginner I too found happiness in clicking flowers with a
            blurred background! Nostalgia isn't it? Right after my high school,
            carelessly I followed the same culture of joining an engineering
            college not knowing what the future had in store. These were the
            days when I assisted photographers for some mad money. I worked for
            a company as an automobile engineer for around three years whereas
            my love for making pictures that I see around remained the same.{" "}
          </p>
          <button>Then, let's talk about your story</button>
        </div>
      </div>
    </div>
  );
};
