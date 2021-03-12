import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getOne } from '../state/product'
import { Link } from 'react-router-dom'
import './ProductDetail.css';

const ProductDetail = ( {id} ) => {
    const dispatch = useDispatch()
    const [cantidad, setCantidad] = useState(0)
    const product = useSelector(state => state.product)
    useEffect(()=>{
        dispatch(getOne(id))
    },[dispatch])

    return (
    <div className="container container-fluid">
        {console.log(product)}
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid mt-5" id="product_image">
                <img src={product.photo} height="450" width="350"/>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                <p id="product_id">{`Producto: ${product.id}`}</p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                {/* <span id="no_of_reviews">(5 Reviews)</span> */}

                <hr/>

                <p id="product_price">{`$${product.price}`}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={()=> setCantidad(x => {if(x>0) return x-1})}>-</span>

                    <input type="number" className="form-control count d-inline" value={cantidad} readOnly />

                    <span className="btn btn-primary plus" onClick={()=> setCantidad(x => x+1)}>+</span>
                </div>
                 <Link to="/cart"><button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button></Link>

                <hr/>

                <p>Status: <span id="stock_status">{product.stock > 0? `En stock: ${product.stock}` : "Sin stock"}</span></p>

                <hr/>

                <h4 className="mt-2">Descripción</h4>
                <p>{product.description}</p>
                
                <hr/>
           
				
            </div>

        </div>

    </div>
    )
}

export default ProductDetail;
