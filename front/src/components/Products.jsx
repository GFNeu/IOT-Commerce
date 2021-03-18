import React from "react";
import { useDispatch } from "react-redux"
import { addProduct } from "../state/carrito"
import { Link } from "react-router-dom";
import "../Products.css";
import { useSelector } from "react-redux";
import Rating from 'react-rating'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import RatingByProduct from "./RatingByProduct"



const Products = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch()

  

  return (
    <>
      <div className="row no-gutters px-5">
      
          {products.length
            ? products.map((product) => {
                return (   
                <div className="col-sm-6 col-md-5 col-lg-3 col-xl-2 my-3 py-5 px-3">
                  <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto container" src={product.photo}/>
                    <div className="card-body d-flex flex-column ">
                      <h5 className="card-title">
                        <Link to={`/products/${product.id}`}>
                          {product.name}
                        </Link>
                      </h5>
                      <div className="ratings mt-auto">
                      <RatingByProduct product={product}/>
                      </div>
                      <p className="card-text">{`Price: $ ${product.price}`}</p>
                      <Link to={`/product/${product.id}`}>
                        <button id="view_btn">View Product Detail</button>
                      </Link>
                      <hr />
                      
                        <button id="view_btn" onClick={()=>dispatch(addProduct({id: product.id, cantidad: 1, price: product.price, photo: product.photo, name: product.name}))}>Add to Cart</button>
                      
                    </div>
                  </div>
                  </div>
                );
              })
            : <h3>No hay productos que coincidan.</h3>}
        </div>
     
    </>
  );
};

export default Products;
