import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {

  const app_id = "2bb60424"
  const app_key = "6baf6987331936261a6fd6690a8a1292"
  const [recipes, setRecipes] = useState([])

  useEffect( () => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${ app_id }&app_key=${ app_key }`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
            Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  )
}
export default App;
