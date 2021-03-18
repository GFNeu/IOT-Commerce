import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOne } from '../state/product'
import { addProduct } from '../state/carrito'
import { getReviewsByProduct } from '../state/reviews'
import { Link } from 'react-router-dom'
import s from './ProductDetail.module.css';
import Rating from 'react-rating'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductDetail = ( {id} ) => {
   
    const dispatch = useDispatch()
    const [cantidad, setCantidad] = useState(0)
    const product = useSelector(state => state.product)
    const reviews = useSelector(state => state.reviews)

    let rating =reviews.length ? reviews.reduce((acc,item)=>item.puntaje + acc,0 )/reviews.length : 0

    useEffect(()=>{
        dispatch(getReviewsByProduct(id))
        dispatch(getOne(id))
    },[dispatch])

    const handleSubmit = ()=>{
        dispatch(addProduct({id, name: product[0].name, photo: product[0].photo, price: product[0].price, cantidad}))
        setCantidad(0)
    }

    return (

    <div className="container container-fluid">
        { product.length ? 
         <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid mt-5" id="product_image">
                <img src={product[0].photo} className={s.foto}/>
            </div>

         <div className="col-12 col-lg-5 mt-5">
             <h3>{product[0].name}</h3>
             <p id="product_id">{`Producto Id: ${product[0].id}`}</p>

             <hr/>

             <div className="rating">
             <Rating 
                          readonly 
                          initialRating={rating}
                          emptySymbol={<FaRegStar style={{color: "#cfcfcf"}}/>}
                          fullSymbol={<FaStar style={{color: "#ffc107"}}/>}
                          fractions={2}
            />
                <p id="product_id">{rating>0 ?`Rating: ${rating}` :'No rating'}</p> 
                   
             </div>

             <hr/>

             <p id="product_price">{`$${product[0].price}`}</p>
             <div className={`${s.stockCounter} d-inline`}>
                 <span className="btn btn-dark minus mr-1" onClick={()=> setCantidad(x => {if(x>0) return x-1})}>-</span>

                 <input type="number" className="form-control d-inline" value={cantidad} readOnly />
                 
                 <span className="btn btn-dark plus ml-1" onClick={()=> setCantidad(x => x+1)}>+</span>
             </div>
              <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={()=>handleSubmit()}>Add to Cart</button>
              <Link to={`/products/${product[0].id}/reviews`}><button type="button" id="cart_btn" className="btn btn-warning d-inline ml-4" >Reviews</button></Link>
             <hr/>

             <p>Status: <span id="stock_status">{product[0].stock > 0? `En stock: ${product[0].stock}` : "Sin stock"}</span></p>

             <hr/>

             <h4 className="mt-2">Descripción</h4>
             <p>{product[0].description}</p>
             
             <hr/>
        
             
         </div>

        </div> :'loading'}
       
    </div>
    )
}

export default ProductDetail;
