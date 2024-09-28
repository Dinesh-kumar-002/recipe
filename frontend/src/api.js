// src/api.js
import axios from 'axios';

const API_KEY = process.env.API_KEY; // Replace with your actual API key
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query,
        number: 10, // Number of results to return
      },
    });
    return response.data.results; // Adjust based on the API response structure
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};
