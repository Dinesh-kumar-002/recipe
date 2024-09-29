import axios from 'axios';
import logo from '../assets/dummy.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Recipecard.css'

function ProductDetails() {
    const navigate = useNavigate();
    const [recipeDetail,setrecipeDetail]=useState(
    );
    const { id } = useParams(); 

    function handleClick(){
        navigate('/');
    }


  useEffect(()=>{
    const fetchRecipes = async () => {
        if (!id) return; 
  
        try {
          const response = await axios.get(`https://api.spoonacular.com/food/menuItems/${id}`, {
            params: {
              apiKey: '11479ad6a5704e14bb46eb8c51098184',
              query: id,
            },
          });
          setrecipeDetail(response.data);
        console.log(response.data);
        
        
        } catch (err) {
          
          console.error(err);
        }
      };
  
      fetchRecipes();
  },[id])

  

  return (
    <>
        <div className="back" onClick={handleClick}>
                    <IoArrowBack />
        </div>
        <div className='recipeDetail-div'>
            <div className="main-content">
                <div className="img-container">
                    <img src={recipeDetail&&recipeDetail.images[0]} alt="" style={{width:"100%"}} />
                </div>
                <h4 className='detail-title'>
                    {recipeDetail&&recipeDetail.title}
                </h4>
                <p className='detail-desc'> {recipeDetail&&recipeDetail.generatedText}</p>
                <p className='likesandprice'>
                    <span className='like'>
                    Likes <IoHeartOutline /> {recipeDetail&&recipeDetail.likes} 
                    </span>
                    <span className='price'>
                         Preparation cost <FaRupeeSign /> {recipeDetail&&Math.round(recipeDetail.price)}
                    </span>
                </p>
                <div className='tags-div'>
                {recipeDetail&&recipeDetail.badges.map(item=>{
                    return <span className='tags'>{item}</span>
                })}
                </div>
            </div>
        </div>
    </>
  );
}

export default ProductDetails;
