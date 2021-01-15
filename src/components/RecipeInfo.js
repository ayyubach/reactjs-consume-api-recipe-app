import React from 'react'
import {Link} from 'react-router-dom'
import {ListGroupItem,ListGroup} from 'reactstrap'

const RecipeInfo = (props) => {

    const getRecipe =  (props) => {
    const json =    localStorage.getItem("recipes");
    const recipes =  JSON.parse(json);
    return recipes;
    }

    const rec = getRecipe();
    const recipes = rec[props.match.params.id];

    return (
       <div className='container recipeinfo'>
                 <div>
<img src={recipes.recipe.image} alt={recipes.recipe.label}  className='img' />
<h6 className='recipe-label'>{recipes.recipe.label}</h6>     
<h6 className='recipe-calories'>Calories : {recipes.recipe.calories.toFixed(2)}</h6>
<ListGroup className='listgroup'>
   <h6 className='mb-3'>ingredients :</h6> 
    {recipes.recipe.ingredients.map(i=>
        <ListGroupItem key={recipes.recipe.ingredients.indexOf(i)}>{i.text}</ListGroupItem>
    )}
</ListGroup>
<Link to='/' className='btn btn-primary recipeinfo-btn '>Go Home</Link>
        </div>
        </div>
    )
}

export default RecipeInfo
