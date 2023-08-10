import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import MovieCard from "./MovieCard"
import "../components/ContentMovieCard.css"

const ContentMovieCard = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      get('/discover/movie').then((data) => {
        console.log(data.results)
        setMovies(data.results)
      })

    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <ul className="container">
      {
        movies.map(movie => (
          <MovieCard movie={movie} key={movie?.id} />
        ))
      }
    </ul>
  )
}

export default ContentMovieCard