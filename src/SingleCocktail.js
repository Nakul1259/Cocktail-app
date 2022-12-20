import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

// const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`;

export default function SingleCocktail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)
  
    useEffect(() => { 
      setLoading(true)
      async function getCocktail() {
        try {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          )
          const data = await response.json()
          if (data.drinks) {
            const {
              strDrink: name,
              strDrinkThumb: image,
              strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5, 
            } = data.drinks[0]
              const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
              ]
            const newCocktail = {
              name,
              image,
              info,
              category,
              glass,
              instructions,
              ingredients,
            }
            setCocktail(newCocktail)
          } else {
            setCocktail(null)
          }
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }
      getCocktail()
    }, [id])
    if (loading) {
        <Loading />
    }
    if (!cocktail) {
      return <h2 className='section-title'>no cocktail to display</h2>
    } else {
      const {
        name,
        image,
        category,
        info,
        glass,
        instructions,
        ingredients,
      } = cocktail

    return (
        <>
        <Link to="/" className="home-btn">
            back home
        </Link>
        <div className="single-cocktail">
        <div className="single-cocktail-title">
          <h1>{name}</h1>
        </div>
        <div className="drinks">
          <img
            src={image}
          />
          <div className="cocktail-description">
            <p>
              <span>Name:</span> {name}
            </p>

            <p>
              <span>Category:</span> {category}
            </p>

            <p>
              <span>Info:</span> {info}
            </p>

            <p>
              <span>Glass:</span> {glass}
            </p>

            <p>
              <span>Instruction:</span> {instructions}
            </p>

            <p>
              <span>Ingredients:</span> 
              {ingredients.map((item, index) => {
                return item ? <span className="ingredients" key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </div>
      </>
  );
}
}

