import React  from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { MovieCard } from "../../components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { globalContext } from "../../provider/GlobalStore/GlobalProvider";


export const Favorites = () => {
let localFavs = JSON.parse(localStorage.getItem("Favs")) ?? [];

  const { favs, handleFavs } = useContext(globalContext);


  return (
    <div>
      <Header />
      <Nav />
      <h1 className="text-primary text-center mt-3 mb-3">Your Favorites</h1>
  
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {localFavs.length === 0 ? (
          <h1 className="text-danger fs-1 fw-bold mt-5">Empty</h1>
        ) : (
          localFavs.map((item) => {
            let isFav = localFavs.find((el) => el.imdbID === item.imdbID);
  
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
      </div>
    </div>
  );
  
};
