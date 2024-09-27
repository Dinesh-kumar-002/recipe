import React from 'react'
import logo from '../assets/dummy.png'
import './Search.css'

function Search() {
  return (
    <div className='search-div'>
        <nav className="navbar navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand">
                <img src={logo} alt="" />
            </a>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
    </div>
  )
}

export default Search;