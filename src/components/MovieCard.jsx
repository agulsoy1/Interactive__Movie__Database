import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function MovieCard({ movie, search }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const poster = movie.Poster
    ? movie.Poster
    : "/images/placeholder-movie-poster.png";

  function handleClick() {
    navigate(`/movie_details/${movie.imdbID}`, {
      // state: { from: location.pathname + location.search},
      state: { from: `/movies?search=${search}`},
    });
  }

  return (
    <section id="movie">
      <div className="container">
        <div className="row">
          <div className="movie__card" onClick={handleClick}>
            {loading ? (
              <figure className=".loading__state">
                <FontAwesomeIcon icon={faSpinner} />
              </figure>
            ) : (
              <div className="movie__container">
                <img src={poster} alt="" className="movie__poster" />
                <div className="movie__title">{movie.Title}</div>
                <div className="movie__year">{movie.Year}</div>
              </div>
            )}
          </div>
          {/* {loading ? (
            <figure className=".loading__state">
              <FontAwesomeIcon icon={faSpinner} />
            </figure>
          ) : (
            <div className="movie__container">
              <figure className="movie_poster--wrapper">
                <img
                  src="/images/back_to_the_future_poster.png"
                  alt=""
                  className="movie__poster"
                />
              </figure>
              <div className="movie__title">Back to the Future</div>
              <div className="movie__release-date">1985</div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}
