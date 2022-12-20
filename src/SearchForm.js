import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

function SearchForm() {

  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

useEffect(() => {
  searchValue.current.focus()
},[])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="search-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h3>

          Search your favorite cocktail
            </h3>
          <input type="text"
          name="name"
          id="name"
          ref={searchValue}
          onChange = {searchCocktail}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
