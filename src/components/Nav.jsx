import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Nav({
  session,
  setSession,
  profile,
  setProfile,
  className,
}) {
  const [menuState, setMenuState] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";
  const isMovies = location.pathname === "/movies";
  const colors = [
    "#FFFFFF",
    "#ff004f",
    "#808080",
    "#ff00ff",
    "#fcc200",
    "#7cfc00",
    "#ADD8E6",
    "#FFFF00",
    "#7b68ee",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  console.log("Nav session: ", session);

  async function handleLogout() {
    // Tells Supabase to log user out
    await supabase.auth.signOut();

    // Clear your React state & storage
    setSession(null);
    sessionStorage.removeItem("session");

    // Redirect to login page
    navigate("/login");
  }

  function handleProfile() {
    navigate("/profile");
  }

  function handleSessionDrop() {
    setProfile(!profile);
  }

  function handleMenu() {
    setMenuState(!menuState);
    if (menuState) {
      console.log("menu opened");
    } else {
      console.log("menu closed");
    }
  }

  // `home__nav ${className || ""}`
  return (
    <nav className={`home__nav ${className || ""}`}>
      {
        <div>
          <div className="nav__section--home">
            <figure className="nav__logo--wrapper">
              <img
                src="/images/blinker-icon.4f9b2663.png"
                className="nav__logo"
                alt=""
              />
            </figure>
            {/* {session?.user?.user_metadata?.first_name ? (
              <div className="welcome_message">
                Welcome back {session.user.user_metadata.first_name}!
              </div>
            ) : null} */}
            {/* Welcome back {session?.user?.user_metadata?.first_name}! */}
            <ul className="nav__links">
              <li className="nav__link--item">
                <Link
                  to="/"
                  className="
                        nav__link
                        link__hover-effect 
                        link__hover-effect--white"
                >
                  <span className="white">Home</span>
                </Link>
              </li>
              <li className="nav__link--item">
                <Link
                  to="/movies"
                  className="
                        nav__link 
                        link__hover-effect 
                        link__hover-effect--white"
                >
                  <span className="white">Find your movie</span>
                </Link>
              </li>
              <li className="nav__link--btn">
                <Link to="/contact" className="nav__btn">
                  CONTACT
                </Link>
              </li>
              {session ? (
                <li className="nav__link--btn profile__box">
                  <button
                    onClick={handleSessionDrop}
                    className="nav_btn profile__character"
                    style={{ backgroundColor: randomColor }}
                  >
                    {session.user.user_metadata.first_name.charAt(0)}
                  </button>
                  {profile ? (
                    <div className="profile">
                      <ul className="profile__options">
                        <li className="profile__option">
                          <button
                            className="nav_btn profile_btn"
                            onClick={handleProfile}
                          >
                            Profile
                          </button>
                        </li>
                        <li className="profile__option">
                          <button
                            onClick={handleLogout}
                            className="nav_btn profile_btn"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </li>
              ) : null}
            </ul>

            {/* Small Screen size */}
            <button className="btn__menu" onClick={handleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            {menuState ? (
              <div className="menu__backdrop">
                <button
                  className="btn__menu btn__close--menu"
                  onClick={handleMenu}
                >
                  <FontAwesomeIcon icon={faX} />
                </button>
                <ul className="menu__links">
                  <li className="menu__link">
                    <Link to="/" className="menu__link--anchor" onClick={handleMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="menu__link">
                    <Link
                      to="/movies"
                      className="menu__link--anchor"
                      onClick={handleMenu}
                    >
                      Find your movie
                    </Link>
                  </li>
                  <li className="menu__link">
                    <Link to="/contact" className="menu__link--anchor" onClick={handleMenu}>
                      Contact
                    </Link>
                  </li>
                  <li className="menu__link">
                    <Link className="menu__link--anchor" onClick= {() => {handleMenu(); handleLogout();}}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      }
    </nav>
  );
}
