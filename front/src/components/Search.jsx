import React from 'react';
import Products from './Products'
import {useSelector} from 'react-redux'

const Search = () => {

    const productsByKeyword= useSelector(state =>state.product);
    
    return (
        <div>
            <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>Resultados de la busqueda</h1>
              <Products/>  
            
        </div>
    )
}

export default Search
