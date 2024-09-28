import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchResponse.css';

function SearchResponse({ searchValue }) {
  const apiKey = 'YOUR_API_KEY'; // Make sure to replace this with your actual API key
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!searchValue) return; // Don't fetch if searchValue is empty

      setLoading(true);
      setError('');

      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            apiKey: 'd5caadaed67943d8b0286c5823db5e7e',
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
  }, [searchValue]); // Run effect when searchValue changes

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
