import React from 'react';
import logo from '../assets/dummy.png';
import { FaSearch, FaMoon } from "react-icons/fa";
import './Search.css';

function Search({ searchValue, setSearchValue }) {
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='search-div'>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <div className="d-flex justify-content-center">
            <input
              className="form-control border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
              value={searchValue}
            />
            {/* <button className="btn border-white text-light border-0" type="submit">
              <FaSearch />
            </button> */}
          </div>
          <button className='border-0 bg-dark text-light rounded-circle p-2 d-flex justify-content-center align-content-center'>
            <FaMoon />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Search;
