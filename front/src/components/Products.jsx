import React from 'react';
import { Link } from 'react-router-dom'
import '../Products.css'


const Products = () => {
    const products = [
        {
        id: 0,
        name:' ACS712 ',
        image :[],
        description:'',
        numOfReviews:0,
        price:0,

        }
    ];
    const rating =[1,2,3,4,5]
    
    return (
    <>
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <h2>List of Products</h2>

            <div className="card p-3 rounded">
                <img className="card-img-top mx-auto" src="https://www.geekfactory.mx/wp-content/uploads/2013/06/acs712_modulo_sensor_de_corriente_20_a.jpg"/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title"><Link to={`/products/${products[0].id}`}>{products[0].name}</Link></h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <label htmlFor="rating"> Rate this Product:</label>
                            <select>
                            {
                                rating.map(i => {
                                return <option >{`${i} ⭐`}</option>
                                })
                            }</select>
                        </div>
                        <span id="no_of_reviews">({products[0].numOfReviews} Reviews)</span>
                        
                    </div>
                    <p className="card-text">{`Name: ${products[0].name}`}</p>
                    <p className="card-text">{`Price: $ ${products[0].price}`}</p>
                    <Link to={`/product/${products[0].id}`}><button id="view_btn">View Product Detail</button></Link>
                    <hr/>
                    <Link to={`/product/${products[0].id}`}><button id="view_btn">Buy</button></Link>
                </div>
            </div>
        </div>
    </>    
    )
}

export default Products
