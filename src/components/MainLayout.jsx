import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

export default function MainLayout({
  session,
  setSession,
  profile,
  setProfile,
}) {
  const location = useLocation();
  const isMovies = location.pathname === "/movies";

  return (
    <div className="page__container">
      <Nav
        className={isMovies ? "nav__overlay" : ""}
        session={session}
        setSession={setSession}
        profile={profile}
        setProfile={setProfile}
      />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
