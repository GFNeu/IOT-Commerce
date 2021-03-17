import React,{ useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import "../Products.css";
import { useSelector } from "react-redux";


const Products = () => {
  const products = useSelector((state) => state.product);
  
  return (
    <>
      <div className="row no-gutters px-5">
      
          {products.length
            ? products.map((product) => {
                return (   <div className="col-sm-12 col-md-3 my-3 py-5 px-3 ">
                  <div className="card p-3 rounded">
                    <img className="card-img-top mx-auto container" src={product.photo} />
                    <div className="card-body d-flex flex-column ">
                      <h5 className="card-title">
                        <Link to={`/products/${product.id}`}>
                          {product.name}
                        </Link>
                      </h5>
                      <div className="ratings mt-auto">
                        <span>Rating:</span>
                      </div>
                      <p className="card-text">{`Price: $ ${product.price}`}</p>
                      <Link to={`/product/${product.id}`}>
                        <button id="view_btn">View Product Detail</button>
                      </Link>
                      <hr />
                      <Link to={`/product/cart`}>
                        <button id="view_btn">Add to Cart</button>
                      </Link>
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
