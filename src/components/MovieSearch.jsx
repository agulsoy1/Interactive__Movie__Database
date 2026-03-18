import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MovieSearch({
  search,
  setSearch,
  handleKeyDown,
  searchMovies,
  selectedDecade,
  setSelectedDecade,
  selectedGenre,
  setSelectedGenre,
}) {
  return (
    <section id="movies__top">
      <figure className="bg__img--wrapper">
        {/* <div className="bg__img"></div> */}
        <img src="/images/movie__bg__img.png" alt="" className="bg__img" />
        <div className="bg__img--overlay"></div>

        <div className="top__info">
          <h1 className="browse__title">Browse our movies</h1>
          <div className="browse__search--wrapper">
            <div className="browse__search">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={handleKeyDown}
                type="text"
                className="browse__searchbar"
                placeholder="Search by Title, or Keyword"
              />
              <button
                className="browser__search--icon"
                onClick={() => {
                  searchMovies();
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </figure>
      <div className="middle__section--info">
        <h2 className="middle__title">Search results</h2>
        <p className="middle__para">
          <div className="filter__section">
            <label className="filter__options">
              <span className="orange">Genre: </span>
            </label>
            <select
              name="genre"
              id="genre"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="filter"
            >
              <option value="None" className="filter__option">
                None
              </option>
              <option value="Action" key="Action" className="filter__option">
                Action
              </option>
              <option
                value="Adventure"
                key="Adventure"
                className="filter__option"
              >
                Adventure
              </option>
              <option
                value="Animation"
                key="Animation"
                className="filter__option"
              >
                Animation
              </option>
              <option value="Comedy" key="Comedy" className="filter__option">
                Comedy
              </option>
              <option value="Crime" key="Crime" className="filter__option">
                Crime
              </option>
              <option
                value="Documentary"
                key="Documentary"
                className="filter__option"
              >
                Documentary
              </option>
              <option value="Drama" key="Drama" className="filter__option">
                Drama
              </option>
              <option value="Fantasy" key="Fantasy" className="filter__option">
                Fantasy
              </option>
              <option value="Horror" key="Horror" className="filter__option">
                Horror
              </option>
              <option value="Romance" key="Romance" className="filter__option">
                Romance
              </option>
              <option value="Sci-Fi" key="Sci-Fi" className="filter__option">
                Sci-Fi
              </option>
              <option
                value="Thriller"
                key="Thriller"
                className="filter__option"
              >
                Thriller
              </option>
              <option value="Western" key="Western" className="filter__option">
                Western
              </option>
              <option value="Family" key="Family" className="filter__option">
                Family
              </option>
              <option value="Musical" key="Musical" className="filter__option">
                Musical
              </option>
              <option
                value="Biography"
                key="Biography"
                className="filter__option"
              >
                Biography
              </option>
              <option value="History" key="History" className="filter__option">
                History
              </option>
              <option value="War" key="War" className="filter__option">
                War
              </option>
            </select>
          </div>
          <div className="filter__section">
            <label className="filter__options">
              <span className="orange">Decade:</span>
            </label>
            <select
              name="years"
              id="years"
              value={selectedDecade}
              onChange={(e) => setSelectedDecade(e.target.value)}
              className="filter"
            >
              <option value="None" className="filter__option">
                None
              </option>
              <option value="2020s" className="filter__option">
                2020 - 2025
              </option>
              <option value="2010s" className="filter__option">
                2010 - 2019
              </option>
              <option value="2000s" className="filter__option">
                2000 - 2009
              </option>
              <option value="1990s" className="filter__option">
                1990 - 1999
              </option>
              <option value="1980s" className="filter__option">
                1980 - 1989
              </option>
              <option value="1970s" className="filter__option">
                1970 - 1979
              </option>
              <option value="1960s" className="filter__option">
                1960 - 1969
              </option>
              <option value="1950s" className="filter__option">
                1950 - 1959
              </option>
              <option value="1940s" className="filter__option">
                1940 - 1949
              </option>
              <option value="1930s" className="filter__option">
                1930 - 1939
              </option>
            </select>
          </div>
        </p>
      </div>
    </section>
  );
}
