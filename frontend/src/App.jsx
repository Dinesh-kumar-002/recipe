import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Search from './search/Search'
import RecipeList from './recipe/RecipeList'
import logo from './assets/dummy.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Search />
    <div className='main-categories'>
       <div className="cat-1">
        <h5 className='text-center my-4'>Category 1</h5>
          <Swiper
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="country-img">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="country-img">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="country-img">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="country-img">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="country-img">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="country-img">
              <img src={logo} alt="" />
            </div>
          </SwiperSlide>

        </Swiper>
        </div> 
        <div className="cat-2">
        <h5 className='text-center my-4'>Category 2</h5>
          <Swiper
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="categorie-img">
              <img src="src/assets/pasta-horizontal.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="categorie-img">
              <img src="src/assets/pasta-horizontal.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="categorie-img">
              <img src="src/assets/pasta-horizontal.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="categorie-img">
              <img src="src/assets/pasta-horizontal.jpeg" alt="" />
            </div>
          </SwiperSlide>

        </Swiper>
        </div> 
        <div className="cat-3">

        </div> 
        <div className="cat-4">

        </div> 
    </div>


      {/* <RecipeList/> */}
    </div>
  )
}

export default App
