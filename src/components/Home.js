import React, { useState } from 'react'
import {Form,Input,Label,FormGroup,Button} from 'reactstrap'
import Recipes from './Recipes'

const Home = (props) => {

    const {setRecipeSearch,setNrecipe,nRecipe,recipes} = props;
    const [search,setSearch] = useState('');
    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
        }
      
        const showMore = () =>{
        setNrecipe(nRecipe+6);
        }
      
        const showLess = () =>{
          setNrecipe(nRecipe-6);
          }

    const submit = (e)=> {
      e.preventDefault();
      setRecipeSearch(search);
    }
      
    return (
      <>  
    <Form className='ml-4' onSubmit={submit}>
      <FormGroup  className='form-search mt-4'>
      <Label className='form-search-label'>Search</Label>
      <Input type='text' name='search' className='form-input' onChange={onChangeSearch} placeholder='Recipe Name'></Input>
      <Button type='submit' color='primary' className='mt-2 form-search-btn'>Search</Button>
      </FormGroup>
    </Form>
      <Recipes recipes={recipes}  />
      <div className='form-btns'>
      <Button color='primary ' onClick={showMore}>Show More</Button>
      {nRecipe >6 && (<Button color='primary ml-4' onClick={showLess}>Show Less</Button>)}
      </div>
    </>

        
    )
}

export default Home
