import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const app_id = process.env.REACT_APP_API_ID
  const app_key = process.env.REACT_APP_API_KEY
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect( () => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${ query }&app_id=${ app_id }&app_key=${ app_key }`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form
        className="search-form"
        onSubmit={getSearch}
      >
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search an ingredient..."
        />
        <button className="search-button" type="submit">
            Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={ recipe.recipe.label}
            calories={ recipe.recipe.calories}
            image={ recipe.recipe.image}
            ingredients={ recipe.recipe.ingredients }
          />
        ))}
      </div>
    </div>
  )
}
export default App;
