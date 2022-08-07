import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MemoriesCard = (props: { image: any }) => {
  const router = useNavigate();
  return (
    <li
      className="memcard"
      onClick={() => {
        router("/memories/a");
      }}
    >
      <figure className="memcard__fig">
        <img src={props.image}></img>
        <figcaption className="memcard__caption">
          Mrs and Ms Something
        </figcaption>
      </figure>
    </li>
  );
};
