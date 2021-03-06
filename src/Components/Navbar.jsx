import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <ul>
            <li>
                <NavLink to='/Home'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/About'>About</NavLink>
            </li>
            <li>
                <NavLink to='/User'>User</NavLink>
            </li>
            <li>
                <NavLink to='/Post'>Post</NavLink>
            </li>
        </ul>
    </>
  )
}

export default Navbar