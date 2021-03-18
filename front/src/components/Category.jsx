import React, { useState, useEffect, useHistory } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOne, getProducts } from '../state/product'
import { Link } from 'react-router-dom'
import {getCategoryProducts} from "../state/product"
import axios from 'axios';
import Products from "./Products"
import {oneCategory} from "../state/categoriesAdmin"

const ProductDetail = ( {id} ) => {
    const categories= useSelector(state=> state.categories)
    const category= useSelector(state=> state.categoriesAdmin)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(id != 654){
            return axios
                .get(`/api/categories/admin/${id}`)
                .then(({ data }) => dispatch(oneCategory(data))).then(()=>axios.get(`/api/products/byCategory/${id}`).then(respuesta=> dispatch(getCategoryProducts(respuesta.data))))            
        }else{
            dispatch(getProducts())
        }
     
    },[id])
    
    const idForName = id - 1
    const products= useSelector(state=> state.product)
    console.log(id)
    console.log(products)
    

    return (
        <div>
            {id == 654 ? <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>Todos los productos</h1> : 
             category.length > 0 && <h1 style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>{category[0].statusDescription}</h1>}
            <Products></Products>
        </div>
    )
}

export default ProductDetail;
