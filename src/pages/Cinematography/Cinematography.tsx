import React from "react";

export const Cinematography = () => {
  return (
    <div className="films">
      <h1 className="films__heading">FILMS</h1>
      <p className="films__desc">
        The bride walking in, the groom winking at his friend, an emotional
        father, some chirpy friends. How much transpires in a wedding! It's a
        celebration of love and coming together of two souls. The magic in your
        story is painted in our galleries. Say Cheese wedding films is one
        cherished work of love.
      </p>
      <div className="films__vid">
        <div className="films__fw">
          <div className="films__videocontainer">
            <iframe src="https://www.youtube.com/embed/d72vXhJDE6M"></iframe>
          </div>
        </div>
        <div className="films__hw">
          <div className="films__videocontainer">
            <iframe src="https://www.youtube.com/embed/d72vXhJDE6M"></iframe>
            <iframe src="https://www.youtube.com/embed/d72vXhJDE6M"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
