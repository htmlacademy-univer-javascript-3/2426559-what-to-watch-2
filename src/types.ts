export type TComment = {
  comment: string,
  date: string,
  id: string,
  rating: number,
  user: string
}


export type PlayerProps = {
  src: string
}

export type TFilm = {
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: string,
  isFavorite: boolean,
  name: string,
  posterImage: string,
  rating: number,
  released: number,
  runTime: number,
  scoresCount: number,
  starring: string[],
  videoSrc: string
}

export type TFilmCard = {
  genre: string,
  id: string,
  name: string,
  previewImage: string,
  previewVideoLink: string
}

export type TFilmPromo = {
  backgroundImage: string,
  genre: string,
  id: string,
  isFavorite: boolean,
  name: string,
  posterImage: string,
  released: number,
  videoLink: string
}

export type TLoginRequest = {
  email: string,
  password: string
}

export type TUser = {
  name: string,
  avatarUrl: string,
  email: string,
  token: string
}

export type TCommentRequest = {
  comment: string,
  rating: number,
  filmId: string
}
