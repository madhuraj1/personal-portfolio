import React from "react";
import Image from "../assets/Logo-new.png";

export const FindUs = () => {
  return (
    <div className="find_us">
      <img src={Image} alt="" />
      <p>FIND US ON</p>

      <div className="find_us-scroll">
        <div className="find_us-wrapper">
          <div className="find_us-test">
            {["INSTAGRAM", "YOUTUBE", "WHATSAPP"].map((itm, index) => {
              return (
                <div key={index + itm} className="find_us-item">
                  <span></span>
                  <p>{itm}</p>
                </div>
              );
            })}
            {["INSTAGRAM", "YOUTUBE", "WHATSAPP"].map((itm, index) => {
              return (
                <div key={index + itm} className="find_us-item">
                  <span></span>
                  <p>{itm}</p>
                </div>
              );
            })}
            {["INSTAGRAM", "YOUTUBE", "WHATSAPP"].map((itm, index) => {
              return (
                <div key={index + itm} className="find_us-item">
                  <span></span>
                  <p>{itm}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
