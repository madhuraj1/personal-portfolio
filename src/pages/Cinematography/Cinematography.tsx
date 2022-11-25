import { useQuery } from "@apollo/client";
import React from "react";
import { Spinner } from "../../components/Spinner";
import { MinimalFooter } from "../../layout/MinimalFooter";
import { cinemaQuery } from "../../schema/Query";
import { ICinema, ItemsEntity } from "../../types/pages/Cinema.types";

export const Cinematography = () => {
  const { data, loading } = useQuery<ICinema>(cinemaQuery);

  return (
    <>
      <div className="films">
        <h1 className="films__heading">Films</h1>
        <p className="films__desc">
          One final word. There’s just something about wedding films, the magic
          of emotions ,listening to speeches, and watching your loved ones
          dance, essence of culture and what not!! It takes all those hours in
          the lead-up, and all those memories from the day, and eternalizes them
          forever. And that’s where we step in. while we keep it real and raw,
          yet the magical cinematic touch of ours to freeze that day forever in
          your memories. well coming to travel films or travel projects its all
          new world to explore and experience, and just making others to
          experience and feel it visually!!.
        </p>
        {loading && <Spinner />}
        {!loading && (
          <div className="films__vid">
            <>
              {(data?.youtubeCollection.items as ItemsEntity[]).map(
                (yt, index) => {
                  return (
                    <iframe
                      className="films__vid_items"
                      src={`https://www.youtube.com/embed/${yt.youtubeVideoId}`}
                    ></iframe>
                  );
                }
              )}
            </>
          </div>
        )}
      </div>
    </>
  );
};
