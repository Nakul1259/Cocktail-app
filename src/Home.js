import React from 'react'
import CocktailList from './CocktailList'
import SearchForm from './SearchForm'

function Home() {
  return (
    <div className='home'>
        <SearchForm />
        <CocktailList />
    </div>
    
  )
}

export default Home