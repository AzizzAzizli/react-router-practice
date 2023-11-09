import React from 'react'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { MovieCard } from '../../components/MovieCard'
import "bootstrap/dist/css/bootstrap.min.css";


export const Favorites= () => {

  return (
    <div>
        <Header/>
        <Nav/>
        <h1 className='text-primary text-center mt-3 mb-3'>Your Favorites</h1>
        <p>Coming soon</p>
<MovieCard/>
        </div>
  )
}
