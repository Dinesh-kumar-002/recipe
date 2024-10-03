import React, { useEffect, useState, useRef } from 'react';
import './RecipeList.css';
import axios from 'axios';
import { IoArrowBack } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';

function RecipeList() {
  const navigate = useNavigate();
  const { recipeCategory } = useParams(); 
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  const api1 = '11479ad6a5704e14bb46eb8c51098184';
  const api2 = 'd5caadaed67943d8b0286c5823db5e7e';
  const api3 = '69a9c392dce54fae88e629cae29f2639';

  function handleClick() {
    navigate(-1);
  }

  function handleRecipeClick(id) {
    navigate(`/recipe/${id}`);
  }

  function handleLikeClick(e, id) {
    e.stopPropagation();
    
    setLikedRecipes((prevLiked) =>
      prevLiked.includes(id) ? prevLiked.filter((recipeId) => recipeId !== id) : [...prevLiked, id]
    );
  }

  const fetchRecipes = async () => {
    if (!recipeCategory) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          apiKey:api1,
          query: recipeCategory,
          number: 10,
          offset: offset,
        },
      });

      setCategory((prevCategory) => [...prevCategory, ...response.data.results]); // Append new recipes
      setHasMore(response.data.results.length === 10); // Check if more recipes are available
    } catch (err) {
      console.error(err);
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(); // Fetch initial recipes when category changes
  }, [recipeCategory]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 10); // Update offset for next fetch
    fetchRecipes(); // Fetch next batch of recipes
  };

  return (
    <>
      <div className="back" onClick={handleClick}>
        <IoArrowBack />
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center position-absolute top-50 start-50" style={{ transform: "translate(-50%,-50%)" }}>{error}</p>
      ) : category && category.length > 0 ? (
        <>
          {category.map((cat, index) => (
            <div className="recipelist" key={index} onClick={() => { handleRecipeClick(cat.id); }}>
              <div className="card">
                <figure>
                  <img src={cat.image} alt={cat.title} />
                </figure>
                <div className="card__container">
                  <p className="card__title">{cat.title}</p>
                  <i className='like' onClick={(e) => handleLikeClick(e, cat.id)}>
                    {likedRecipes.includes(cat.id) ? <FaHeart /> : <FaRegHeart />}
                  </i>
                </div>
              </div>
            </div>
          ))}
          {hasMore && (
            <div className="loadmore">
              <button onClick={handleLoadMore}>Load more</button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center position-absolute top-50 start-50" style={{ transform: "translate(-50%,-50%)" }}>
          No recipes found for {recipeCategory}.
        </p>
      )}
    </>
  );
}

export default RecipeList;
