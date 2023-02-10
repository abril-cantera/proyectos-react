import { useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const handlerSubmit = (event) => {
    event.preventDefault();
    const { query } = Object.fromEntries(new window.FormData(event.target));
    console.log(query);
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="page">
      <h1>Buscador de peliculas</h1>
      <form className="form" onSubmit={handlerSubmit}>
        <input
          onChange={handleChange}
          value={query}
          name="query"
          ref={inputRef}
          placeholder="Avengers, Star Wars, The Matrix..."
        />
        <button type="buttom">Buscar</button>
      </form>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
