import React from "react";
import Art from "../assets/Art4.png";
import Art2 from "../assets/Art2.png";
export const Artwork = () => {
  return (
    <div className="art">
      <div className="art__heading">
        <img src={Art} />
      </div>
      <div className="art__work">
        <img src={Art2} />
        <p className="art__work-txt">
          <h1 className="art__work-heading">Heading</h1>
          One final word. There’s just something about wedding films, the magic
          of emotions ,listening to speeches, and watching your loved ones
          dance, essence of culture and what not!! It takes all those hours in
          the lead-up, and all those memories from the day, and eternalizes them
          forever. And that’s where we step in. while we keep it real and raw,
          yet the magical cinematic touch of ours to freeze that day forever in
          your memories. well coming to travel films or travel projects its all
          new world to explore and experience, and just making others to
          experience and feel it visually!!. One final word. There’s just
          something about wedding films, the magic of emotions ,listening to
          speeches, and watching your loved ones dance, essence of culture and
          what not!! It takes all those hours in the lead-up, and all those
          memories from the day, and eternalizes them forever. And that’s where
          we step in. while we keep it real and raw, yet the magical cinematic
          touch of ours to freeze that day forever in your memories. well coming
          to travel films or travel projects its all new world to explore and
          experience, and just making others to experience and feel it
          visually!!.
        </p>
      </div>
    </div>
  );
};
