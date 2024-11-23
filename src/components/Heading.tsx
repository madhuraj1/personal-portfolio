import React from "react";

interface Props {
  children: string;
  className?: string;
}

export const Heading = (props: Props) => {
  return (
    <div className={`heading__underline ${props.className}`}>
      {props.children}
    </div>
  );
};
