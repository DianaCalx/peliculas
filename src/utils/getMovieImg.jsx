import placeholder from "../img/movie.png"

const getMovieImg = (path, width) => {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder
}

export default getMovieImg