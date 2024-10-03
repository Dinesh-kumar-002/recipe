import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchResponse.css';

function SearchResponse({ searchValue }) {
  const navigate = useNavigate();
  const api1='11479ad6a5704e14bb46eb8c51098184';
  const api2='d5caadaed67943d8b0286c5823db5e7e';
  const api3 = "69a9c392dce54fae88e629cae29f2639";


  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleProductClick = (id) => {
    navigate(`/recipe/${id}`);  
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!searchValue) return; 
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            apiKey: api1,
            query: searchValue,
          },
        });
        setRecipes(response.data.results);
      } catch (err) {
        setError('Failed to fetch recipes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchValue]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="recipe-list" style={{ display: searchValue === '' ? 'none' : 'block' }}>
      <div className="info" style={{ display: (loading || error ) ? 'flex' : 'none' }}>
        {(loading)?"loading...":""}
        {(error)?{error}:""}
        
      </div>
      {recipes.map((recipe, index) => (
        <div className="items" key={index} onClick={() => handleProductClick(recipe.id)}>
          <img src={recipe.image} alt={recipe.title} />
          <div className="item-title">
            <p className="text">{recipe.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResponse;
