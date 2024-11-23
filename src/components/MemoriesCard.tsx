import { useNavigate } from 'react-router-dom';
import { MemoriesCollectionItem } from '../types/pages/Memories.types';
import { FiArrowRightCircle } from 'react-icons/fi';
export const MemoriesCard = (props: {
  image: any;
  data: MemoriesCollectionItem;
  number: number;
}) => {
  const router = useNavigate();

  return (
    <li
      className="memcard"
      onClick={() => {
        router(`/memories/${props.data.sys.id}`, { state: props.data.sys.id });
      }}
    >
      <figure className="memcard__fig">
        <img alt={'Madhuraj Photography'} src={props.image}></img>
        <figcaption className="memcard__caption">
          <div className="memcard__details">
            <p style={{ visibility: 'hidden' }}>
              {props.number < 9 ? '0' + props.number : props.number}
            </p>
            <FiArrowRightCircle />
          </div>
          <div className="memcard__divider"></div>
          <div className="memcard__name">{props.data.name}</div>
        </figcaption>
      </figure>
    </li>
  );
};
