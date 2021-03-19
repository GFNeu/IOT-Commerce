import React, { useState, useEffect, useHistory } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOne, getProducts, getCategoryProducts, getProductsByPage } from '../state/product'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Products from "./Products"
import {oneCategory} from "../state/categoriesAdmin"
import Spinner from 'react-bootstrap/Spinner'
import Pagination from "react-js-pagination";
import Container from 'react-bootstrap/Container'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'


const Category = ( {id} ) => {
    const [isLoading, setIsLoading] = useState(true)
    const [limit, setLimit] = useState(12)
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(null)
    const categories= useSelector(state=> state.categories)
    const category= useSelector(state=> state.categoriesAdmin)
    console.log(category)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(id != 654){
           return axios
            .get(`/api/categories/admin/one/${id}`)
            .then(({ data }) => dispatch(oneCategory(data))).then(()=>axios.get(`/api/products/byCategory/${id}`).then(respuesta=> dispatch(getCategoryProducts(respuesta.data))))
            .then(()=>setIsLoading(false))
        }else{
            dispatch(getProductsByPage({limit: limit, page: page})).then((data)=>{
                console.log("dataa",data)
                setPageQty(Math.ceil(data.payload[1].totalPages))
                setIsLoading(false)})
        }
     
    },[id, limit, page])
    
    const idForName = id - 1
    const products= useSelector(state=> state.product)
    
    const handleLimitChange = (e)=>{
            const value = e.target.value;
            setLimit(value)
    }

    const radios = [
        { name: '12', value: '12' },
        { name: '24', value: '24' },
        { name: '36', value: '36' },
      ];
    
    

    return (
      <div className='text-center'>
        {id == 654 ? (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Todos los productos
          </h1>
        ) : (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {category.statusDescription}
          </h1>
        )}
        {id == 654 && !isLoading && (
          <Container fluid className="d-flex justify-content-end align-items-center mb-3" style={{maxWidth: 1800}}>
            <span className="text-secondary">Cantidad de resultados por página: </span>
            <ButtonGroup toggle size="sm" className="ml-1">
        {id == 654 && !isLoading && radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={limit === radio.value}
            onChange={(e) => setLimit(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
          </Container>
        )}
        {isLoading ? (
          <div className="centerInPage">
            <Spinner animation="border" />
          </div>
        ) : (
          <Products></Products>
        )}
        {id == 654 && !isLoading && (
          <Container className="d-flex justify-content-center mb-3">
            <Pagination
              activePage={page}
              itemsCountPerPage={limit}
              totalItemsCount={limit * pageQty}
              pageRangeDisplayed={5}
              onChange={(p) => setPage(p)}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Container>
        )}
      </div>
    );
}

export default Category;
