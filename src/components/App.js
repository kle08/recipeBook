import React, { useState } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()

function App() {
  const sampleRecipes = [
    {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookingTime: '1:45',
      instructions: "1. blah\n2. blah? blah?",
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          amount: '2 lbs'
        },
        {
          id: 2,
          name: 'Salt',
          amount: '2 Tbls'
        }
      ]
    },
    {
      id: 2,
      name: 'Pizza',
      servings: 5,
      cookingTime: '2:00',
      instructions: '1. make pizza\n 2. blah? blah?',
      ingredients: [
        {
          id: 1,
          name: 'dough',
          amount: '2 lbs'
        },
        {
          id: 2,
          name: 'sauce',
          amount: '2 Tbls'
        }
      ]
    }
  ]
  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      serving: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          amount: '1 Tsp'
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  )
}

export default App;
