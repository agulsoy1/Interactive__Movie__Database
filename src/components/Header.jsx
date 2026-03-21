import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header({ search, setSearch, searchMovies, handleKeyDown }) {

  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="header__info">
            <h1 className="header__title">
              US's Most Awarded Video Rental Service Platform
            </h1>
            <h2 className="header__sub-title">
              KICK BACK AND WATCH A MOVIE{" "}
              <span className="orange">BLINKER</span>
            </h2>
            <div className="header__search">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Search by Title, or Keyword"
                className="header__search--bar"
              />
              <button className="header__search--icon" onClick={() => searchMovies()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img
              src="/images/Watching_TV.png"
              alt=""
              className="header__img"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
