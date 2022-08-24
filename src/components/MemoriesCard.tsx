import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MemoriesCollectionItem } from "../types/pages/Memories.types";
import { Button } from "./Button";

export const MemoriesCard = (props: {
  image: any;
  data: MemoriesCollectionItem;
}) => {
  const router = useNavigate();

  return (
    <li
      className="memcard"
      onClick={() => {
        router(`/memories/${props.data.sys.id}`, { state: props.data.sys.id });
      }}
    >
      <figure className="memcard__fig">
        <img alt={"Madhuraj Photography"} src={props.image}></img>
        <figcaption className="memcard__caption">
          <p>{props.data.name}</p>
          <Button />
        </figcaption>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </figure>
    </li>
  );
};
