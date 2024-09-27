import React from 'react'
import './RecipeList.css'

function RecipeList() {
  return (
    <>
        <div className="recipelist">
        <div className="card">
            <figure>
                <img src="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="salad" />
            </figure>
            <div className="card__container">
                <i className="far fa-heart fa-lg"></i>
                <p className="card__title">Spinach Salad</p>
                <p className="card__text">Simple recipe for a weeknight or a celebration table. I promise it is one of the easiest salads you will ever make!</p>
                <div className="stars" >
                    <div className="rating" id="like">
                        <input type="radio" id="heart_5" name="like" value="5" />
                        <label htmlFor="heart_5" title="Five">&#10084;</label>
                        <input type="radio" id="heart_4" name="like" value="4" />
                        <label htmlFor="heart_4" title="Four">&#10084;</label>
                        <input type="radio" id="heart_3" name="like" value="3" />
                        <label htmlFor="heart_3" title="Three">&#10084;</label>
                        <input type="radio" id="heart_2" name="like" value="2" />
                        <label htmlFor="heart_2" title="Two">&#10084;</label>
                        <input type="radio" id="heart_1" name="like" value="1" />
                        <label htmlFor="heart_1" title="One">&#10084;</label>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="card">
            <figure>
                <img src="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="salad" />
            </figure>
            <div className="card__container">
                <i className="far fa-heart fa-lg"></i>
                <p className="card__title">Spinach Salad</p>
                <p className="card__text">Simple recipe for a weeknight or a celebration table. I promise it is one of the easiest salads you will ever make!</p>
                <div className="stars" >
                    <div className="rating" id="like">
                        <input type="radio" id="heart_5" name="like" value="5" />
                        <label htmlFor="heart_5" title="Five">&#10084;</label>
                        <input type="radio" id="heart_4" name="like" value="4" />
                        <label htmlFor="heart_4" title="Four">&#10084;</label>
                        <input type="radio" id="heart_3" name="like" value="3" />
                        <label htmlFor="heart_3" title="Three">&#10084;</label>
                        <input type="radio" id="heart_2" name="like" value="2" />
                        <label htmlFor="heart_2" title="Two">&#10084;</label>
                        <input type="radio" id="heart_1" name="like" value="1" />
                        <label htmlFor="heart_1" title="One">&#10084;</label>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default RecipeList