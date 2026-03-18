import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import MovieSearch from "../components/MovieSearch";

export default function Movies({ session }) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [alert, setAlert] = useState("");
  const [movieID, setMovieID] = useState("");
  const location = useLocation();
  const [selectedDecade, setSelectedDecade] = useState("None");
  const [selectedGenre, setSelectedGenre] = useState("None");
  const navigate = useNavigate();

  function showAlert() {
    setAlert("Too many results, please use 3 or more letters.");
  }

  function sortByYear(MoviesArray) {
    return [...MoviesArray].sort((a, b) => {
      const YearA = parseInt(a.Year?.slice(0, 4)) || 0;
      const YearB = parseInt(b.Year?.slice(0, 4)) || 0;
      return YearA - YearB; //ascending
    });
  }

  //Year Filter

  function decadeCheck(year, selectedDecade) {
    switch (selectedDecade) {
      case "2020s":
        return year >= 2020 && year <= 2025;
      case "2010s":
        return year >= 2010 && year <= 2019;
      case "2000s":
        return year >= 2000 && year <= 2009;
      case "1990s":
        return year >= 1990 && year <= 1999;
      case "1980s":
        return year >= 1980 && year <= 1989;
      case "1970s":
        return year >= 1970 && year <= 1979;
      case "1960s":
        return year >= 1960 && year <= 1969;
      case "1950s":
        return year >= 1950 && year <= 1959;
      case "1940s":
        return year >= 1940 && year <= 1949;
      case "1930s":
        return year >= 1930 && year <= 1939;
      default:
        return true;
    }
  }

  //Genre Filter

  function genreCheck(selectedGenre) {
    switch (selectedGenre) {
      case "Action":
        return selectedGenre.includes("Action");
      case "Adventure":
        return selectedGenre.includes("Adventure");
      case "Animation":
        return selectedGenre.includes("Animation");
      case "Comedy":
        return selectedGenre.includes("Comedy");
      case "Crime":
        return selectedGenre.includes("Crime");
      case "Documentary":
        return selectedGenre.includes("Documentary");
      case "Drama":
        return selectedGenre.includes("Drama");
      case "Fantasy":
        return selectedGenre.includes("Fantasy");
      case "Horror":
        return selectedGenre.includes("Horror");
      case "Romance":
        return selectedGenre.includes("Romance");
      case "Sci-Fi":
        return selectedGenre.includes("Sci-Fi");
      case "Thriller":
        return selectedGenre.includes("Thriller");
      case "Western":
        return selectedGenre.includes("Western");
      case "Family":
        return selectedGenre.includes("Family");
      case "Musical":
        return selectedGenre.includes("Musical");
      case "Biography":
        return selectedGenre.includes("Biography");
      case "History":
        return selectedGenre.includes("History");
      case "War":
        return selectedGenre.includes("War");
      default:
        return true;
    }
  }

  const filteredMovies = movies.filter((movie) => {
    const year = parseInt(movie.Year?.slice(0, 4)) || 0;

    const decade =
      selectedDecade === "None" ? true : decadeCheck(year, selectedDecade);

    const genre =
      selectedGenre === "None"
        ? true
        : movie.Genre?.split(", ").includes(selectedGenre);

    return decade && genre;
  });

  async function fetchMovies(searchValue = search) {
    if (!searchValue || searchValue.trim().length < 3) {
      showAlert();
      return;
    }
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=6d4005a9&s=${searchValue}`,
      );
      if (!response.data.Search) {
        setMovies([]);
        return;
      }

      // Get detailed info for each movie
      const detailedMovies = await Promise.all(
        response.data.Search.slice(0, 15).map(async (movie) => {
          const res = await axios.get(
            `https://www.omdbapi.com/?apikey=6d4005a9&i=${movie.imdbID}`,
          );
          return res.data;
        }),
      );

      // Duplicate by imdbID
      const uniqueMovies = Array.from(
        new Map(detailedMovies.map((movie) => [movie.imdbID, movie])).values()
      ).slice(0, 10);
      setMovies(sortByYear(uniqueMovies));
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    // Parse the query string into a URLSearchParams object
    const searchTerm = queryParams.get("search") || "";
    //retrieves the search term from the home page

    setSearch(searchTerm);
    if (searchTerm.length >= 3) {
      fetchMovies(searchTerm);
      console.log("MOVIES LENGTH:", movies.length);
    }
  }, [location.search]);

  async function handleKeyDown(event) {
    if (event.key === "Enter") {
      navigate(`/movies?search=${search}`);
      // fetchMovies(search);
    }
  }

  async function searchMovies() {
    navigate(`/movies?search=${search}&t=${Date.now()}`);
    // fetchMovies(search);
  }

  return (
    <div>
      {
        <MovieSearch
          search={search}
          setSearch={setSearch}
          handleKeyDown={handleKeyDown}
          searchMovies={searchMovies}
          selectedDecade={selectedDecade}
          setSelectedDecade={setSelectedDecade}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      }
      <div className="display__movies" key={movieID}>
        {filteredMovies.length === 0 ? (
          <div className="empty__state">
            <p className="empty__state--para">
              No search results were found...
            </p>
            <figure className="empty__state--wrapper">
              <img
                src="/images/empty_state.png"
                alt=""
                className="empty__state--img"
              />
            </figure>
          </div>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} search={search} />
          ))
        )}
      </div>
    </div>
  );
}
