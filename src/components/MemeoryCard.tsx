import React from "react";

export const MemoryCard = (props: { image: any }) => {
  return (
    <li className="memorycard">
      <figure className="memorycard__fig">
        <img src={props.image}></img>
      </figure>
    </li>
  );
};
