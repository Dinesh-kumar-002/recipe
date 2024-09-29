import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipecard from './recipecard/Recipecard'
import 'swiper/css';
import Search from './search/Search';
import SearchResponse from './searchResponse/SearchResponse';
import logo from './assets/dummy.png';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState(''); 

  return (
    <Router>
      <div className='app'>
        <Routes>
         
          <Route 
            path="/" 
            element={
              <>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <SearchResponse searchValue={searchValue} />
                <div className='main-categories'>
        <div className="cat-1">
          <h5 className='text-center my-4'>Category 1</h5>
          <div className="row">
            <div className="col-4">
              <div className="country-img">
                <img src={logo} alt="" />
                <p className="text-center">Indian</p>
              </div>
            </div>
            <div className="col-4">
              <div className="country-img">
                <img src={logo} alt="" />
                <p className="text-center">Indian</p>
              </div>
            </div>
            <div className="col-4">
              <div className="country-img">
                <img src={logo} alt="" />
                <p className="text-center">Indian</p>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-4">
              <div className="country-img">
                <img src={logo} alt="" />
                <p className="text-center">Indian</p>
              </div>
            </div>
            <div className="col-4">
              <div className="country-img">
                <img src={logo} alt="" />
                <p className="text-center">Indian</p>
              </div>
            </div>
            <div className="col-4">
              <div className="country-img">
                <img src={logo} alt="" />
                <p className="text-center">Indian</p>
              </div>
            </div>
          </div>
        </div> 
        <div className="cat-2">
          <h5 className='text-center my-4'>Category 2</h5>
          <div className="row">
            <div className="col-6">
              <div className='category-img'>
                <img src="src/assets/pasta-horizontal.jpeg" alt=""/>
                <div className="p">
                  <p className='title'>Pizza</p>
                  <p className='desc'>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='category-img'>
                <img src="src/assets/pasta-horizontal.jpeg" alt=""/>
                <div className="p">
                  <p className='title'>Pizza</p>
                  <p className='desc'>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="cat-3">
          <h5 className='text-center my-4'>Recipe of the Day</h5>
          <div className="row">
            <div className="col-12">
              <div className='category-img'>
                <img src="src/assets/pasta-horizontal.jpeg" alt=""/>
                <div className="p">
                  <p className='title'>Pizza</p>
                  <p className='desc'>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
              </>
            }
          />
          
          <Route path="/recipe/:id" element={<Recipecard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
