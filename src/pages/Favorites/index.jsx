import React from 'react'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { MovieCard } from '../../components/MovieCard'
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from 'react';
import { globalContext } from '../../provider/GlobalStore/GlobalProvider';


export const Favorites= () => {
// let favArray=JSON.parse(localStorage.getItem("favArray"))??[];
// favArray=props.favs;

// localStorage.setItem("favArray",JSON.stringify(favArray));
// console.log("local",favArray);
// console.log("favoritepage",props.favs);

const {favs,handleFavs}=useContext(globalContext)

// console.log(favs);
  return (
    <div>
        <Header/>
        <Nav/>
        <h1 className='text-primary text-center mt-3 mb-3'>Your Favorites</h1>
      
        {/* <p>Coming soon</p> */}
     <div className='d-flex flex-wrap justify-content-center gap-3'>  {
          favs.map((item)=>{
let isFav=favs.find(el=>el.imdbID===item.imdbID)

            return <MovieCard  key={item.imdbID} setFavs={()=>handleFavs(item)} btn={isFav}  {...item} />
          })
        }</div> 
        </div>
  )
}
