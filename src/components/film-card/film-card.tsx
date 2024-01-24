import { Link } from 'react-router-dom';
import { RoutePathname } from 'src/constants';
import { VideoPlayer } from 'src/components/video-player';
import {TFilmCard} from 'src/types';
import './film-card';

type Props = TFilmCard & {
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  isActive: boolean
};

export function FilmCard(props: Props) {
  const {
    previewImage,
    name,
    id,
    onMouseEnter,
    onMouseLeave,
    isActive,
    previewVideoLink
  } = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image film-preview">
        {isActive && (
          <VideoPlayer
            src={previewVideoLink}
            preview={previewImage}
          />
        )}
        {!isActive && (
          <img src={previewImage} alt={name} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/${RoutePathname.films}/${id}`}
          className="small-film-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}
