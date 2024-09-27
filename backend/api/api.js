var Spoonacular = require('spoonacular');
const path =require('path');
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
  } );

var defaultClient = Spoonacular.ApiClient.instance;
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = process.env.API_KEY;

// apiKeyScheme.apiKeyPrefix['x-api-key'] = "Token"

var api = new Spoonacular.DefaultApi()
var analyzeRecipeRequest = {
    "title":"Spaghetti Carbonara",
    "servings":2,
    "ingredients":["1 lb spaghetti","3.5 oz pancetta","2 Tbsps olive oil","1  egg","0.5 cup parmesan cheese"],
    "instructions":"Bring a large pot of water to a boil and season generously with salt. Add the pasta to the water once boiling and cook until al dente. Reserve 2 cups of cooking water and drain the pasta. "}; 
var opts = {
  'language': "en", 
  'includeNutrition': false, 
  'includeTaste': false 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' +    data);
  }
};
api.analyzeRecipe(analyzeRecipeRequest, opts, callback);
