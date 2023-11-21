import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '../Button';
import { useNavigate } from 'react-router';
// import { HomePage } from '../../pages/Home';
import { globalContext } from '../../provider/GlobalStore/GlobalProvider';
// import styles from "./moviecard.module.css"
export const MovieCard= ({Title,Type,Year,Poster,imdbID,setFavs,btn}) => {
const [fav,setfav]=useState(false)
const[imdbid,setimdbid]=useState("")
let navigator=useNavigate()
// const {favs,setFavs}=useContext(globalContext)
function handlefav(id) {



// console.log(id);
}
// console.log(globalDatas);



function detail(id){
  setimdbid(id);
  console.log(id);
  navigator(`/id:${id}`)
}
function uppercase(title=" "){
  return title.split("")[0].toUpperCase()+title.slice(1)
}

  return (

    <div className="card" style={{width: "18rem",cursor:"pointer"}}>
    <img onClick={()=>detail(imdbID)}  style={{height:"350px"}} src={Poster==="N/A"?"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.59acm7M8zfvbkDUNHr6KdQAAAA%26pid%3DApi&f=1&ipt=1b157c711dfa4dbe4661d356503dcdf535da84ef3b6a9ec61a49c6566f7f49f8&ipo=images": Poster} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{Title}</h5>
      <p className="card-text">Year: {Year}</p>
      <p className="card-text">Type: {Type?uppercase(Type):"No Information"} </p>
      <Button onClick={()=>setFavs()} fav={btn} btn={ btn? "Delete  Favorites":"Add Favorites"}/>
      
    </div>
  </div>
  )
}
