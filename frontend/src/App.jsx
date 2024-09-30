import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipecard from "./recipecard/Recipecard";
import RecipeList from "./recipe/RecipeList";
import CategoryOne from "./categoryOne/CategoryOne";
import "swiper/css";
import Search from "./search/Search";
import SearchResponse from "./searchResponse/SearchResponse";
import logo from "./assets/dummy.png";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const recipeCat = ["pizza", "biriyani", "burger", "chicken", "juice", "dosa"];

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={ 
            <>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <SearchResponse searchValue={searchValue} />
                <div className="main-categories">
                  <div className="cat-1">
                    <CategoryOne recipeCat={recipeCat} />
                  </div>
                </div>
              </>
            }
          />

          <Route path="/recipe/:id" element={<Recipecard />} />
          <Route path="/recipe/category/:recipeCategory" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
