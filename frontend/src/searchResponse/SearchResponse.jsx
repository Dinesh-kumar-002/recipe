import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './searchResponse.css'

function SearchResponse() {
  const apiKey = 'd5caadaed67943d8b0286c5823db5e7e'; 
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            apiKey: apiKey,
            query: 'pizza',
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
  }, [apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div className="items" key={index}>
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
