
import { Route, Routes } from "react-router";
import "./style/index.css";
import { HomePage } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Detail } from "./pages/Detail";
function App() {
  return (
    <>
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/favorites" element={<Favorites/>}/>
  <Route path="/:id" element={<Detail/>}/>
 </Routes>
    </>
  );
}

export default App;
