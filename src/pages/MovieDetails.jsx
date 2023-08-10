import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { get } from "../data/httpClient"
import getMovieImg from "../utils/getMovieImg"
import "./MovieDetails.css"

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [genero, setGenero] = useState("")
  useEffect(() => {
    setLoading(true)
    get("/movie/" + movieId).then(data => {
      console.log(data)
      setMovie(data)
      setGenero(data.genres[0].name)
      setLoading(false)
    })
  }, [movieId])

  const imageUrl = getMovieImg(movie?.poster_path, 500)

  return (
    loading
      ? (<p>Cargando...</p>)
      :
      (
        <div className="detailsContainer">
          <img src={imageUrl} alt={movie?.title} className="movieImage col" />
          <div className="movieDetails col">
            <p className="title">
              <strong>Título:</strong>
              {movie?.title}
            </p>

            <p>
              <strong>Género:</strong>
              {genero}
            </p>

            <p>
              <strong>
                Descripcion:
              </strong>
              {movie?.overview}
            </p>
          </div>
        </div>
      )

  )
}

export default MovieDetails