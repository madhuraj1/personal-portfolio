import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MemoriesCollectionItem } from "../types/pages/Memories.types";

export const MemoriesCard = (props: {
  image: any;
  data: MemoriesCollectionItem;
}) => {
  const router = useNavigate();
  return (
    <li
      className="memcard"
      onClick={() => {
        router("/memories/couple", { state: props.data });
      }}
    >
      <figure className="memcard__fig">
        <img src={props.image}></img>
        <figcaption className="memcard__caption">{props.data.name}</figcaption>
      </figure>
    </li>
  );
};
