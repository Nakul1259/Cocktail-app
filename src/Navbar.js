import React from 'react'
import logo from "./logo.svg"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='nav-center'>
      <Link to="/">
        <img src={logo} alt="" />
      
      </Link>
        <div className="nav-links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar