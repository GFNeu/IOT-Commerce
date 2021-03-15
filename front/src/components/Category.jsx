import React, { useState, useEffect, useHistory } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOne } from '../state/product'
import { Link } from 'react-router-dom'
import {getCategoryProducts} from "../state/product"
import axios from 'axios';

const ProductDetail = ( {id} ) => {
    useEffect(()=>{
        axios.get(`/api/products/byCategory/${id}`).then(respuesta=> dispatch(getCategoryProducts(respuesta.data)))
    },[])
    const dispatch = useDispatch()
    

    const product = useSelector(state => state.product)
    console.log(product)
    

    return (
            <div>Holaaaa</div>
    )
}

export default ProductDetail;
