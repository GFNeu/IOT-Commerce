import React from 'react';
import Products from './Products'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import { getProductsByKeyword } from '../state/product';
const Search = ({match}) => {
    const history= useHistory()
    const dispatch= useDispatch()
    React.useEffect(()=>{
        let keyword= history.location.search.split("=")[1]
        if(keyword){
            console.log(keyword)
            dispatch(getProductsByKeyword(keyword))
        }
    }, [])

    return (
        <div>
            <h1>Resultados de la busqueda</h1>
              <Products/>  
            
        </div>
    )
}

export default Search
