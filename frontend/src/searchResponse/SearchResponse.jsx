import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchResponse.css';

function SearchResponse({ searchValue }) {
  const navigate = useNavigate();
  const apiKey = '11479ad6a5704e14bb46eb8c51098184'; 
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
            apiKey: apiKey,
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
        <div className="items" key={recipe.id} onClick={() => handleProductClick(recipe.id)}>
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
