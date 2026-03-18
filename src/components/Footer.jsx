import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer__movie--section">
      <div className="container">
        <div className="row">
          <div className="footer__background">
            <div className="footer__info">
              <figure className="footer__logo--wrapper">
                <img
                  src="/images/blinker-icon.4f9b2663.png"
                  className="nav__logo"
                  alt=""
                />
              </figure>
              <ul className="footer__nav--links">
                <li className="nav__link--item">
                  <Link
                    to="/"
                    className="footer__nav--link link__hover-effect link__hover-effect--white"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav__link--item">
                  <Link
                    to="/movies"
                    className="
                      footer__nav--link 
                      link__hover-effect 
                      link__hover-effect--white"
                  >
                    Find your movie
                  </Link>
                </li>
                <li className="nav__link--item">
                  <Link
                    to="/contact"
                    className="
                      footer__nav--link 
                      link__hover-effect 
                      link__hover-effect--white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="footer__copyright">
                Copyright <i className="fa-regular fa-copyright"></i> 2026
                Blinker
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
