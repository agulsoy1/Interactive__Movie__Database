import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({session, setSession}) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function searcMovies() {
    navigate(`/movies?search=${search}`)
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      navigate(`/movies?search=${search}`)
    }
  }

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        handleKeyDown={handleKeyDown}
        searchMovies={searcMovies}
      />
    </div>
  );
}
