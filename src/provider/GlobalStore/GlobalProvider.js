import React, { createContext, useState } from 'react'


export const globalContext=createContext()



export const GlobalProvider = ({children}) => {
const [favs,setFavs]=useState([])

function handleFavs(item){

const inFavs=favs.find(i=>i.imdbID===item.imdbID)

if(inFavs){

setFavs(prev=>prev.filter(i=>i.imdbID!==item.imdbID))


}else{
    setFavs(prev=>[...prev,item])
}


}

const values={
    favs,
    setFavs,
    handleFavs,
}
console.log(favs);


  return (
    <globalContext.Provider value={values}>{children}</globalContext.Provider>
  )
}
