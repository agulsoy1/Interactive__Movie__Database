import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Profile from "./pages/Profile";

function App() {
  const [profile, setProfile] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // function goBack() {
  //   if (location.state?.from) {
  //     navigate(location.state.from);
  //   }
  //   // if (window.history.length > 1) {
  //   //   navigate(-1);
  //   // }
  //   else {
  //     navigate("/movies");
  //   }
  // }

  const [session, setSession] = useState(() => {
    const saved = sessionStorage.getItem("session");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    // fetches the initial session
    async function fetchSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    }
    fetchSession();

    // Listens for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    console.log("App session:", session);
  }, [session]);

  useEffect(() => {
    if (session) {
      sessionStorage.setItem("session", JSON.stringify(session));
    } else {
      sessionStorage.removeItem("session");
    }
  }, [session]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp setSession={setSession} />} />
          <Route path="/login" element={<Login setSession={setSession} />} />
          <Route
            element={
              <MainLayout
                session={session}
                setSession={setSession}
                profile={profile}
                setProfile={setProfile}
              />
            }
          >
            <Route
              path="/"
              element={<Home session={session} setSession={setSession} />}
            />
            <Route path="/movies" element={<Movies />} />
            <Route
              path="/movie_details/:id"
              element={<MovieDetails />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile"
              element={
                <Profile
                  session={session}
                  setSession={setSession}
                  profile={profile}
                  setProfile={setProfile}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
