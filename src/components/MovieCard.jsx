import { Link } from "react-router-dom"
import "../components/MovieCard.css"
import getMovieImg from "../utils/getMovieImg"

const MovieCard = ({ movie }) => {

  const imageUrl = getMovieImg(movie?.poster_path, 300)

  return (
    <li className="movieCard">
      <Link to={"/movies/" + movie?.id}>
        <img width={230} height={345} src={imageUrl} alt={movie?.title} className="movieCard__image" />
      </Link>
      <div>{movie.title}</div>
    </li>
  )
}

export default MovieCard