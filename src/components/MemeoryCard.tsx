import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MemoryCard = (props: { image: any }) => {
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
      </figure>
    </li>
  );
};
