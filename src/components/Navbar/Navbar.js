import React from 'react';
import {NavLink, Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
    <div className="container">
      <Link to="/" style={{color: "black"}} className="navbar-brand fw-bold fs-3" href="#">Rick & Morty</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" 
      aria-label="Toggle navigation">

      <style jsx>
           {`

            button[aria-expanded="false" ] >.close {
              display: none;
            }

            button[aria-expanded="true" ] >.open {
              display: none;
            }

           `}</style>

        <span className="fas fa-bars open"></span>
        <span className="fas fa-times close"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

        <div className="navbar-nav fs-5 gap-4 fw-bold">
          <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page" >Characters</NavLink>
          <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
          <NavLink to="/location" className="nav-link">Location</NavLink>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
