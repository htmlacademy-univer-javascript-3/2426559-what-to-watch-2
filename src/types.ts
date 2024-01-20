export type FilmReview = {
  author: string,
  date: Date,
  id: number,
  raiting: number,
  text: string
}

export type FilmCardData = {
    description: string,
    director: string,
    genre: string,
    id: string,
    minutes: number,
    numberOfRatings: number,
    poster: string,
    preview: string,
    raiting: number,
    reviews: FilmReview[],
    starring: string[],
    title: string,
    videoSrc: string,
    year: number
  }

export type PlayerProps = {
    src: string
  }

