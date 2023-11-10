
import { Route, Routes } from "react-router";
import "./style/index.css";
import { HomePage } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Detail } from "./pages/Detail";
import { useState } from "react";
function App() {

  const[favs,setfavs]=useState([])
  return (
    <>
 <Routes>
  <Route path="/" element={<HomePage getFavs={setfavs}/>}/>
  <Route path="/favorites" element={<Favorites favs={favs}/>}/>
  <Route path="/:id" element={<Detail/>}/>
 </Routes>
    </>
  );
}

export default App;
