import React, { useEffect, useState } from 'react';
import './RecipeList.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RecipeList() {
  const { recipeCategory } = useParams(); 
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!recipeCategory) return; 

      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            apiKey: '11479ad6a5704e14bb46eb8c51098184',
            query: recipeCategory,
          },
        });
        console.log(response);
        setCategory(response.data.results);  
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
  }, [recipeCategory]); 

  return (
    <>
      {category && category.length > 0 ? category.map((cat, index) => (
        <div className="recipelist" key={index}>
          <div className="card">
            <figure>
              <img src={cat.image} alt={cat.title} />  
            </figure>
            <div className="card__container">
              <i className="far fa-heart fa-lg"></i>
              <p className="card__title">{cat.title}</p>  
              <p className="card__text">This is a delicious recipe!</p>
              
            </div>
          </div>
        </div>
      )) : <p>No recipes found for {recipeCategory}.</p>}

      <div className="loadmore">
        <button>Load more</button>
      </div>
    </>
  );
}

export default RecipeList;
