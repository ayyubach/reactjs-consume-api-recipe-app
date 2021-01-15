import React from 'react'
import Recipe from './Recipe'


const Recipes = (props) => {

    const {recipes} = props;
    

    return (
        <div className='container p-4'>
            <div className='row'>

    {recipes.map(recipe=>{
        
        return (<Recipe  key ={recipes.indexOf(recipe)} id={recipes.indexOf(recipe)} label ={recipe.recipe.label} image={recipe.recipe.image} calories={recipe.recipe.calories} /> )
       
    })} 

            </div>
         
        </div>
    )
}

export default Recipes
