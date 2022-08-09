import { MemoryCard } from "../../components/MemeoryCard";
import sm from "../../assets/sm.png";
import lg from "../../assets/21.png";

export const Memory = () => {
  return (
    <div className="memory">
      <div className="memory__card">
        <figure className="memory__card__fig">
          <img src={lg}></img>
          <figcaption className="memory__card__caption">
            Mrs and Ms Something
          </figcaption>
        </figure>
      </div>
      <div className="memory__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        maximus justo ac felis accumsan, in imperdiet tellus pharetra. Duis a
        dolor sed eros fermentum blandit quis quis odio. In luctus augue et nunc
        dapibus molestie. Curabitur dapibus a mauris eu pulvinar. Praesent vel
        risus sed felis gravida volutpat. In rutrum velit nec erat commodo
        viverra. Nullam convallis tellus at interdum egestas. Duis efficitur
        maximus dignissim.
      </div>
      <div className="memory__tag">
        MEM<span>ORIES</span>
      </div>
      <ul className="memory__picture">
        <MemoryCard image={sm} />
        <MemoryCard image={lg} />
        <MemoryCard image={lg} />
        <MemoryCard image={sm} />
        <MemoryCard image={lg} />
        <MemoryCard image={sm} />
        <MemoryCard image={sm} />
      </ul>
    </div>
  );
};
