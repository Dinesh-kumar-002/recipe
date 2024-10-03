import axios from "axios";
import logo from "../assets/dummy.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Recipecard.css";

function ProductDetails() {
  const navigate = useNavigate();
  const [recipeDetail, setrecipeDetail] = useState();
  const { id } = useParams();

  function handleClick() {
    navigate(-1);
  }

  const api1 = "11479ad6a5704e14bb46eb8c51098184";
  const api2 = "d5caadaed67943d8b0286c5823db5e7e";
  const api3 = "69a9c392dce54fae88e629cae29f2639";

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!id) return;

      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`,
          {
            params: {
              apiKey: api1,
              query: id,
            },
          }
        );
        setrecipeDetail(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
  }, [id]);

  return (
    <>
      <div className="back" onClick={handleClick}>
        <IoArrowBack />
      </div>
      <div className="recipeDetail-div container">
        <div className="main-content">
          <h4 className="detail-title">{recipeDetail && recipeDetail.title}</h4>
          <div className="img-container">
            <img
              src={recipeDetail && recipeDetail.image}
              alt=""
              style={{ width: "100%" }}
            />
          </div>

          <p className="detail-desc my-3">
            {" "}
            {recipeDetail && recipeDetail.summary.replace(/<[^>]+>/g, "")}
          </p>
          <p className="likesandprice">
            <span className="like">
              Likes <IoHeartOutline />{" "}
              {recipeDetail && Math.round(recipeDetail.spoonacularScore)}
            </span>
            <span className="price">
              Servings : {recipeDetail && recipeDetail.servings}
            </span>
            <span className="price">
              Preparation : {recipeDetail && recipeDetail.readyInMinutes} min
            </span>
          </p>
          <div className="tags-div">
            {recipeDetail &&
              recipeDetail.dishTypes.map((item,index) => {
                return <span className="tags" key={index}>{item}</span>;
              })}
          </div>
          <h4 className="detail-title">Ingredients :</h4>
          <div className="ingredients-div row">
            {recipeDetail &&
              recipeDetail.extendedIngredients.map((item,index) => {
                return (
                  <div className="ingredients" key={index}>
                    <img
                      src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                      alt=""
                    />
                    <p className="text-center mb-0">{item.name}</p>
                    <div className="measures text-center d-flex justify-content-center">
                      <span>{item.measures.metric.amount}</span>
                      <span>{item.measures.metric.unitShort}</span>
                    </div>
                  </div>
                );
              })}
          </div>

          <h4 className="detail-title">Instruction :</h4>

          {/* <p className='text'>{recipeDetail&&recipeDetail.instructions.replace(/<[^>]+>/g, '')}</p> */}
          <ol>
            {recipeDetail &&
              recipeDetail.analyzedInstructions[0].steps.map((item, index) => {
                return (
                  <li key={item.number} style={{ marginTop: "4px" }}>
                    {item.step}
                  </li>
                );
              })}
          </ol>


          <h4 className='detail-title'>
                    Nutrition Facts : 
            </h4>
            <table>
              <thead>
                <tr>
                  <td>Nutrient</td>
                  <td>Amount</td>
                  <td>DailyNeed</td>

                </tr>
              </thead>
              <tbody>
                {recipeDetail&&recipeDetail.nutrition.nutrients.map((nut,index)=>{
                  return(
                    <tr key={index}>
                      <td>{nut.name}</td>
                      <td>{nut.amount}{nut.unit}</td>
                      <td>{nut.percentOfDailyNeeds}</td>
                  </tr>
                  )
                })}
              </tbody>
            </table>


            {/* source  */}

            <p className="my-3">
              <span>Here you can visit the source website </span><a href={recipeDetail&&recipeDetail.sourceUrl}>{recipeDetail&&recipeDetail.sourceName}</a>
            </p>
                
            {/* source  */}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
