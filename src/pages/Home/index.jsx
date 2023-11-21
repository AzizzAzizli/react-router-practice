import React, { useContext, useEffect, useRef, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Header } from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./home.module.css";
import { Button } from "../../components/Button";
import { getMovies } from "../../services";
import { Nav } from "../../components/Nav";
import { globalContext } from "../../provider/GlobalStore/GlobalProvider";

export const HomePage = (props) => {
  const [movietitle, setMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { favs, handleFavs } = useContext(globalContext);

  let input = useRef();

  let localFavs = JSON.parse(localStorage.getItem("Favs")) ?? [];

console.log(localFavs);
  useEffect(() => {
    if (!movietitle) return;
    fetchData();
  }, [movietitle]);


  async function fetchData() {
    try {
      setLoading(true);
      let data = await getMovies(movietitle);

      setMovies(data.data.Search);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleInput() {
    const value = input.current.value;

    setMovieTitle(value);
    input.current.value = "";
  }

  return (
    <div>
      <Header />
      <Nav />
      <main>
        <div className={styles.inputarea}>
          <input ref={input} type="search" />
          <Button onClick={handleInput} btn={"Search"} />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {movies.length === 0 ? (
            <h1 className="text-center text-primary">Search any movie</h1>
          ) : (
            <>
              {loading ? (
                <h1 className="text-center text-primary">Loading...</h1>
              ) : (
                <>
                  {movies === undefined ? (
                    <h1 className="text-center text-primary">
                      No movies found.
                    </h1>
                  ) : (
                    movies.map((item) => {
                      let isFav = localFavs.find(
                        (el) => el.imdbID === item.imdbID
                      );


                   
                      return (
                        
                        <MovieCard
                          key={item.imdbID}
                          setFavs={() => handleFavs(item)}
                          btn={isFav}
                          {...item}
                        />
                      );
                    })
                  )}
                </>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};
