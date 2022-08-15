import React from "react";

export const MinimalFooter = () => {

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        width: "100%",
        padding: ".5rem 0",
        backgroundColor: "black",
        color: "white",
      }}
    >
      © {new Date().getFullYear()} Madhuraj Photography
    </div>
  );
};
