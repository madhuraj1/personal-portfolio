import { useQuery } from "@apollo/client";
import React, { Profiler } from "react";
import profile from "../../assets/image.png";
import { Footer } from "../../layout/Footer";
import { Aboutquery } from "../../schema/about.query";
import { Data } from "../../types/pages/About.types";
export const About = () => {
  const { data } = useQuery<Data>(Aboutquery);

  React.useEffect(() => {
    console.log(data?.aboutCollection.items[0].name);
  }, [data]);

  return (
    <>
      <div className="about">
        <div className="about_details">
          <h4 className="about_details__sec1">Hey, I am</h4>
          <h4 className="about_details__sec2">Madhuraj</h4>
          <h6 className="about_details__sec3">
            A professional <span>Photograher</span>
          </h6>
          <p className="about_details__sec4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sit amet velit at ipsum tincidunt elementum. Quisque nulla magna,
            volutpat sit amet elementum eget, gravida et neque. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aenean posuere vitae erat in iaculis. Sed porta mollis
            lacus, eu maximus orci accumsan ac. Maecenas convallis congue urna
            nec lacinia
          </p>
        </div>
        <div className="about__picture">
          <div className="about__picture__cont">
            <img src={profile} />
          </div>
        </div>
      </div>
      <img src="" />
      <Footer />
    </>
  );
};
