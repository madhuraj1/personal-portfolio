import { useQuery } from "@apollo/client";
import React, { Profiler } from "react";
import { Spinner } from "../../components/Spinner";
import { Footer } from "../../layout/Footer";
import { Aboutquery } from "../../schema/Query";
import { Data } from "../../types/pages/About.types";
export const About = () => {
  const { data, loading, error } = useQuery<Data>(Aboutquery);

  return (
    <>
      {}
      {loading && <Spinner />}
      {!loading && !error && (
        <div className="about">
          <div className="about_details">
            <h4 className="about_details__sec1">Hey, I am</h4>
            <h4 className="about_details__sec2">
              {data?.aboutCollection.items[0].name}
            </h4>
            <h6 className="about_details__sec3">
              A professional <span>Photograher</span>
            </h6>
            <p className="about_details__sec4">
              {data?.aboutCollection.items[0].about}
            </p>
          </div>
          <div className="about__picture">
            <div className="about__picture__cont">
              <img
                alt="Madhuraj Photography"
                src={data?.aboutCollection.items[0].profilePicture.url}
              />
            </div>
          </div>
        </div>
      )}
      <img src="" />
    </>
  );
};
