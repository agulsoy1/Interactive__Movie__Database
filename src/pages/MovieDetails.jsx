import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  // const location = useLocation();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [prevID, setPrevID] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  function goBack() {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate(-1);
    }
  }

  async function getID() {
    const response = await axios.get(
      `https://omdbapi.com/?apikey=6d4005a9&i=${id}`,
    );
    console.log(response.data);
    setMovie(response.data);
    setPrevID(id);
  }

  useEffect(() => {
    setTimeout(() => {
      getID();
    }, 200);
  }, [id]);

  return (
    <div>
      <div className="back__button">
        <button className="back__icon" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <p className="back__tag">Back to Movies</p>
      </div>
      <div className="card__wrapper">
        <div className="card"></div>
        <figure className="movie__card--poster-wrapper">
          <img src={movie?.Poster} alt="" className="movie__card--poster" />
        </figure>
        <div className="card__info">
          <h1 className="movie__card--title">{movie?.Title}</h1>
          <div className="movie__card--info-wrapper">
            <h2 className="movie__card--info movie__card--subtitle">
              Director: <span className="white">{`${movie?.Director}`}</span>
            </h2>
            <h3 className="movie__card--info movie__card--heading">
              Genre: <span className="white">{`${movie?.Genre}`}</span>
            </h3>
            <h3 className="movie__card--info movie__card--heading">
              Release Date:{" "}
              <span className="white">
                {movie?.Released && movie.Released !== "N/A"
                  ? new Date(movie.Released).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "N/A"}
              </span>
            </h3>
            <h4 className="movie__card--info movie__card--heading">
              Rated: <span className="white">{`${movie?.Rated}`}</span>
            </h4>
            <h4 className="movie__card--info movie__card--subheading">
              Cast: <span className="white">{`${movie?.Actors}`}</span>
            </h4>
            <h5 className="movie__card--info movie__card--subheading">
              Plot: <span className="white">{`${movie?.Plot}`}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
