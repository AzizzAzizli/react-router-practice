import React, { createContext, useState } from "react";

export const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  let localFavs = JSON.parse(localStorage.getItem("Favs")) ?? [];

  const [favs, setFavs] = useState([]);

  function handleFavs(item) {
    const inFavs = localFavs.find((i) => i.imdbID === item.imdbID);
    if (inFavs) {
      setFavs((prev) => prev.filter((i) => i.imdbID !== item.imdbID));
    localFavs = localFavs.filter((el) => el.imdbID !== item.imdbID);
    
      localStorage.setItem("Favs", JSON.stringify(localFavs));
    } else {
      setFavs((prev) => [...prev, item]);
      localFavs.push(item);
      localStorage.setItem("Favs", JSON.stringify(localFavs));
    }
  }

  const values = {
    favs,
    setFavs,
    handleFavs,
  };
  // console.log(favs);

  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  );
};
