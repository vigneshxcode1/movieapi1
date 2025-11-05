import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Home.css";

const API_KEY = "24530631";
const BASE_URL = "https://www.omdbapi.com/";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
       const res = await axios.get(`${BASE_URL}?s=Avengers&apikey=${API_KEY}`);
        // console.log(res.data.Search
        // ); 
        if (res.data.Search) {
          setMovies(res.data.Search);
          setError(null);
        } else {
          setError("No movies found");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
console.log(movies);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE_URL}?s=${encodeURIComponent(searchQuery)}&apikey=${API_KEY}`
      );
      if (res.data.Search) {
        setMovies(res.data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError("No results found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (

        <div className="movies-grid">

          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.imdbID} className="movie-card">
                
                <div className="movie-poster">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </div>
                <div className="movie-info">
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">No movies found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
