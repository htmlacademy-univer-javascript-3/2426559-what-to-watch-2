import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePathname } from 'src/constants';
import { VideoPlayer } from 'src/components/video-player';
import { TFilmCard } from 'src/types';
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
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/${RoutePathname.films}/${id}`);
  }, [navigate, id]);
  return (
    <article
      className="small-film-card catalog__films-card film-root"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
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
        {name}
      </h3>
    </article>
  );
}
