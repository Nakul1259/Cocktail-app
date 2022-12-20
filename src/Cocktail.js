import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from './context';
import Loading from "./Loading";



function Cocktail() {
    const {cocktail} = useGlobalContext()


  return (
    <>
    {cocktail.map((item) => {
        const {id, name, image, info, glass} = item;
        return (

    <div key={id} className="cocktail-list">
      <div className="img-container">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="cocktail-info">
        <h3 className="title">{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>

      </div>
    </div>
        )
      })}
    </>

);
}

export default Cocktail;
