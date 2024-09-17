import React from "react";
import VideoShort from "../assets/video.mp4";
import Image from "../assets/Logo-new.png";
import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import horizontalLoop from "../utils/helpers";
import { Heading } from "./Heading";

export const Video = () => {
  useGSAP(() => {
    gsap.utils.toArray(".find_us-wrapper").forEach((line, i) => {
      const links = line.querySelectorAll(".find_us-item"),
        tl = horizontalLoop(links, {
          repeat: -1,
          speed: 1 + i * 0.5,
          paddingRight: parseFloat(
            gsap.getProperty(links[0], "marginRight", "px")
          ), // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
        });
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => tl.pause());
        link.addEventListener("mouseleave", () => tl.resume());
      });
    });
  });
  return (
    <>
      <div className="quote--slide">
        <p>❝</p>
        <p>"Photography is the simplest thing in the world, </p>
        <p>but it is incredibly complicated to make it really work."</p>
        <span>- Martin Parr</span>
      </div>

      <div className="video">
        <Heading className="">GET A GLIMPSE</Heading>
        <p className="video__info">
          Photography is the simplest thing in the world, but it is incredibly
          complicated to make it really work
        </p>
        <div className="video__logo">
          <video autoPlay muted loop id="myVideo">
            <source src={VideoShort} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </>
  );
};
