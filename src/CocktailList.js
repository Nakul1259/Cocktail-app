import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from './context'
import Loading from './Loading'

function CocktailList() {
  const {cocktail, loading} = useGlobalContext()

  if(loading){
    return <Loading />
  }

  if(cocktail.length < 1){
    return (
      <h2>No cocktails matched your search</h2>
    )
  }

  return (
    <>
        <h1>Cocktails</h1>
    <div className='cocktails'>
    <Cocktail />
    </div>
    </>
  )
}

export default CocktailList