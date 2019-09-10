import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const app_id = "2bb60424"
  const app_key = "6baf6987331936261a6fd6690a8a1292"
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
        />
        <button className="search-button" type="submit">
            Search
        </button>
      </form>
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
  )
}
export default App;
