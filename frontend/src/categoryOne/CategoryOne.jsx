import React from "react";
import logo from '../assets/dummy.png';
import { useNavigate } from "react-router-dom";


function CategoryOne({recipeCat}) {
    const navigate = useNavigate();
    const handleClick=(recipeCategory)=>{
        navigate(`/recipe/category/${recipeCategory}`);
        
    }
    
  return (
        <>
          <h5 className='text-center my-4'>Category 1</h5>
          <div className="row">
              {recipeCat.map((recipe,index)=>{  
                  return(
                    <div className="col-4" key={index} style={{ marginTop: "7px" }} onClick={()=>{handleClick(recipe)}}>
                    <div className="country-img">
                        <img src={logo} alt="" />
                        <p className="text-center">{recipe}</p>
                    </div>
                    </div>
                  )
              })}
          </div>
        </>
   
  );
}

export default CategoryOne;
