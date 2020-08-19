import React from 'react';
import RecipeList from './RecipeList';

function App() {
  const sampleRecipes = [
    {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookingTime: '1:45',
      instructions: '1. blah\n 2. blah? blah?'
    },
    {
      id: 2,
      name: 'Pizza',
      servings: 5,
      cookingTime: '2:00',
      instructions: '1. make pizza\n 2. blah? blah?'
    }
  ]
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  )
}

export default App;
