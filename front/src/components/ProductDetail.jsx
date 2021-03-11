import React from 'react';
import './ProductDetail.css';

const ProductDetail = ( ) => {
    

    return (
    <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img src="https://www.geekfactory.mx/wp-content/uploads/ad8232-modulo-ecg-monitor-de-pulso-cardiaco.jpg" height="450" width="350"/>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>ADXL335 Acelerómetro analógico 3 ejes</h3>
                <p id="product_id">Product # sklfjdk35fsdf5090</p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>

                <hr/>

                <p id="product_price">$108.00</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus">-</span>

                    <input type="number" className="form-control count d-inline" value="1" readOnly />

                    <span className="btn btn-primary plus">+</span>
                </div>
                 <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

                <hr/>

                <p>Status: <span id="stock_status">In Stock</span></p>

                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>El ADXL335 es un acelerómetro de salida analógica con rango de +/- 3G y salidas acondicionadas. Está montado en un módulo que facilita su conexión.
                </p>
                
                <hr/>
           
				
            </div>

        </div>

    </div>
    )
}

export default ProductDetail;
