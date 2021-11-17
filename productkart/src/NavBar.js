import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({cart}) => {
    return (
        <nav className="navbar navbar-light justify-content-between">
        <Link to="/" className="navbar-brand">ProductKart</Link>
        <Link to="/cart">
        <button
          className="btn btn-outline-success my-2 my-sm-0"
        >
          Cart <b>{cart.length}</b> 
        </button></Link>
      </nav>
    )
}

export default NavBar
