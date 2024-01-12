
export type Props = {
    imgSrc: string,
    imgWidth: string,
    imgHeight: string,
    title: string,
    link: string

}

export function FilmCard(props: Props) {
  const {imgSrc, imgWidth, imgHeight, title, link} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={imgSrc}
          alt={title}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={link}>
          {title}
        </a>
      </h3>
    </article>
  );
}
