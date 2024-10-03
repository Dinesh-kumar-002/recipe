import React, { useEffect, useState } from 'react';
import './RecipeList.css';
import axios from 'axios';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function RecipeList() {
  const navigate = useNavigate();
  const { recipeCategory } = useParams(); 
  const [category, setCategory] = useState([]);
  function handleClick(){
    navigate('/');
}
  const api1='11479ad6a5704e14bb46eb8c51098184';
    const api2='d5caadaed67943d8b0286c5823db5e7e';
    const api3 = "69a9c392dce54fae88e629cae29f2639";
  useEffect(() => {
    const fetchRecipes = async () => {
      if (!recipeCategory) return; 

      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            apiKey: api3,
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
      <div className="back" onClick={handleClick}>
                    <IoArrowBack />
        </div>
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
      )) : <p className='text-center position-absolute top-50 start-50 ' style={{transform:"translate(-50%,-50%)"}}>No recipes found for {recipeCategory}.</p>}

      <div className="loadmore" style={{display : (category.length) > 0 ? 'flex': 'none'}}>
        <button>Load more</button>
      </div>
    </>
  );
}

export default RecipeList;
