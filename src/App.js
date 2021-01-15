import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {Navbar} from 'reactstrap'
import './App.css';

import Home from './components/Home'
import RecipeInfo from './components/RecipeInfo'

function App() {



  const [recipes,setRecipes] = useState([]);
  const [recipeSearch,setRecipeSearch] = useState('null');
  const [nRecipe,setNrecipe] = useState(6);
 


const fetchData = async (nRecipe,recipeSearch)=>{
  if(recipeSearch ===''){
     await setNrecipe(6);
    await fetch(`https://api.edamam.com/search?q=chiken&app_id=APP ID&app_key=API KEY&from=0&to=${nRecipe}`)
    .then(response=>response.json())
    .then(data=>{setRecipes([...data.hits]);localStorage.setItem("recipes", JSON.stringify(data.hits));setRecipeSearch(null);})
    
  }else if(recipeSearch ==='null' ){
    fetch(`https://api.edamam.com/search?q=chiken&app_id=APP ID&app_key=API KEY&from=0&to=${nRecipe}`)
    .then(response=>response.json())
    .then(data=>{setRecipes([...data.hits]);localStorage.setItem("recipes", JSON.stringify(data.hits))})
  
  }else{
    fetch(`https://api.edamam.com/search?q=${recipeSearch}&app_id=APP ID&app_key=API KEY&from=0&to=${nRecipe}`)
    .then(response=>response.json())
    .then(data=>{setRecipes([...data.hits]);localStorage.setItem("recipes", JSON.stringify(data.hits))})
  }
}

  useEffect( () => {
   const check = async ()=>{
 if(recipes.length === nRecipe && recipeSearch == null){
  return recipes;
  }else{
    fetchData(nRecipe,recipeSearch,recipes);
  }
   }
   check();
  }, [nRecipe,recipeSearch]);

 
  return (
    <div >
    <Router>
      <Navbar color='dark'>APP</Navbar>
      <Switch>
      <Route path='/' exact render={(props)=>(<Home setRecipes={setRecipes} setRecipeSearch={setRecipeSearch} setNrecipe={setNrecipe} recipes={recipes} nRecipe={nRecipe} />)}/>
      <Route path='/recipeinfo/:id' exact render={(props)=><RecipeInfo {...props} recipes={recipes[props.match.params.id]} />}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
