import React from "react";

export const MemoryCard = (props: { image: any }) => {
  return (
    <li className="memorycard">
      <figure className="memorycard__fig">
        <a href={props.image} target="_blank">
          <img alt="Madhuraj Photography" src={props.image}></img>
        </a>
      </figure>
    </li>
  );
};
