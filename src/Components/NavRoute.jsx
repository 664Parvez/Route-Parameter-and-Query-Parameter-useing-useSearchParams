import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import User from './User'
import Post from './Post'

const NavRoute = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/Home' element={ <Home /> }></Route>
                <Route path='/About' element={ <About /> }></Route>
                <Route path='/User' element={ <User /> }></Route>
                <Route path='/User/:id' element={ <User /> }></Route>
                <Route path='/Post' element={ <Post /> }></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default NavRoute