import React from 'react'
import {Link} from 'react-router-dom'

const Recipe = (props) => {
    return (
        <div className='col-4'>
        <div className='recipe_box'>
        <img src={props.image} alt={props.label}  className='img' />
        <h6 className='recipe-label'>{props.label.length > 35 ? (`${props.label.substring(0,33)}...`):(props.label)}</h6>
        <h6 className='recipe-calories'>Calories : {props.calories.toFixed(2)}</h6>
        <Link to={`/recipeinfo/${props.id}`} className='btn btn-primary recipe-btn' >More Infos</Link>     
        </div>   
        </div>

    )
}

export default Recipe
