import React from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';

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
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
    </>
  )
}

export default App;
