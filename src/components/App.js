import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css';


export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

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
      instructions: '1. make pizza\n2. blah? blah?',
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
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [selectedRecipeId, setSeclectedRecipedId] = useState();
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    console.log('Rendered');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }


  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id) {
    setSeclectedRecipedId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      serving: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }
    setSeclectedRecipedId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSeclectedRecipedId(undefined)
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}

    </RecipeContext.Provider>
  )
}

export default App;
