import React, {useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import {getTopRatedMovies} from '../services/movieApi'
import './Pagination.css'

function Toprated() {
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const getMovies = async () => {
      const response = await getTopRatedMovies(currentPage)
      setMovies(response.data.results)
      setTotalPages(response.data.total_pages)
    }

    getMovies()
  }, [currentPage])

  const onClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const onClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <div className="home">
      <h1>Top Rated</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="pagination-container">
        <button
          type="button"
          className="pagination-btn"
          onClick={onClickPrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <p className="page-number">{currentPage}</p>

        <button
          type="button"
          className="pagination-btn"
          onClick={onClickNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Toprated