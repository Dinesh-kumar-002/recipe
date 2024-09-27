import React from 'react'
import logo from '../assets/dummy.png'
import { FaSearch } from "react-icons/fa";
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
                <input className="form-control border-0" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn border-white text-light border-0" type="submit">
                <FaSearch />
                </button>
              </form>
          </div>
        </nav>
    </div>
  )
}

export default Search;