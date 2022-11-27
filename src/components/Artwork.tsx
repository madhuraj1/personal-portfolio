import React from "react";
import Art from "../assets/Art4.png";
import Art2 from "../assets/art-min.png";
export const Artwork = () => {
  return (
    <div className="art">
      <div className="art__heading">
        <img alt="Madhuraj Photography" src={Art} />
      </div>
      <div className="art__work">
        <div className="art__work--img">
          <img alt="Madhuraj Photography" src={Art2} />
        </div>

        <p className="art__work-txt">
          <h1 className="art__work-heading">Let's craft love</h1>
          {/* One final word. There’s just something about wedding films, the magic
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
          visually!!. */}
          Come sit with us, let's strike a heart to heart conversation over a
          pizza. A conversation about your memories, about the love that
          happened ages ago. A story about the first time you met, the time you
          held hands and eventually fell in love. Let's talk about the magical
          moment when you decided to spend the rest of your lives together. You
          surely have a great story and a great memory. Give us the opportunity
          to craft your emotions, to capture a million smiles that reflect
          innocence in the face of true love.
          <span>
            What's our story? Our story is everything you want your story to be.
          </span>
        </p>
      </div>
    </div>
  );
};
