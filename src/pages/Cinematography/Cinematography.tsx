import { useQuery } from "@apollo/client";
import React from "react";
import { Spinner } from "../../components/Spinner";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { cinemaQuery } from "../../schema/Query";
import { ICinema } from "../../types/pages/Cinema.types";

export const Cinematography = () => {
  const { data, loading } = useQuery<ICinema>(cinemaQuery);

  return (
    <>
      <div className="films">
        <h1 className="films__heading">FILMS</h1>
        <p className="films__desc">
          The bride walking in, the groom winking at his friend, an emotional
          father, some chirpy friends. How much transpires in a wedding! It's a
          celebration of love and coming together of two souls. The magic in
          your story is painted in our galleries. Say Cheese wedding films is
          one cherished work of love.
        </p>
        {loading && <Spinner />}
        {!loading && (
          <div className="films__vid">
            <>
              {data?.youtubeLinksCollection.items.map((yt, index) => {
                return (
                  <iframe
                    className="films__vid_items"
                    src="https://www.youtube.com/embed/d72vXhJDE6M"
                  ></iframe>
                );
              })}
            </>
          </div>
        )}
      </div>
      <MinimalFooter />
    </>
  );
};
