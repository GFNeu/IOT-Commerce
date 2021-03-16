import React, { useState, useEffect, useHistory } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOne, getProducts } from '../state/product'
import { Link } from 'react-router-dom'
import {getCategoryProducts} from "../state/product"
import axios from 'axios';
import Products from "./Products"
import {oneCategory} from "../state/categories"

const ProductDetail = ( {id} ) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(id != 6){
            axios.get(`/api/products/byCategory/${id}`).then(respuesta=> dispatch(getCategoryProducts(respuesta.data)))
        }else{
            dispatch(getProducts())
        }
     
    },[id])
    const categories= useSelector(state=> state.categories)
    const idForName = id - 1
    

    return (
        <div>
            {id == 6 ? <h1>All products</h1> : 
            
            categories[idForName] ?
            <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>{categories[idForName].statusDescription}</h1> : "loading name"}
            <Products></Products>
        </div>
    )
}

export default ProductDetail;
