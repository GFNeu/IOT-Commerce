import React from 'react';
import {Link} from 'react-router-dom';

const Cart = () => {
   
    const cartItems = [
                        {name:' ADXL335 ',id:"#514525",price:499.99},
                        {name:' DGCBJS35 ',id:"#585514125",price:299.99},
                        {name:' DGCBJS35 ',id:"#585514125",price:299.99},
                        {name:' DGCBJS35 ',id:"#585514125",price:299.99},
                        {name:' DGCBJS35 ',id:"#585514125",price:299.99}

                      ]
return (
    <>
     <h2 className="mt-3">Your Cart: <b> 2 items</b></h2>


    <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-8">

            {cartItems.map(item => (
                <>
                <hr />

                <div className="cart-item" key={item.id}>
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src="https://www.geekfactory.mx/wp-content/uploads/ad8232-modulo-ecg-monitor-de-pulso-cardiaco.jpg" height="100" width="115" />
                        </div>

                        
                        <div className="col-4 col-lg-2 mt-4 ">
                            <p id="card_item_name"><strong>{item.name}</strong></p>
                            <p id="card_item_price">${item.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 ">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus">Remove from Cart-</span>

                                <input type="number" className="form-control count d-inline" value="2"/>

                                <span className="btn btn-primary plus">Add to cart +</span>
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
            </>
            ))}

        </div>

        <div className="col-12 col-lg-3 ">
            <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span class="order-summary-values">{cartItems.length}</span></p>
                    <p>Est. total: <span class="order-summary-values">$1500</span></p>

                    <hr />
                    <button id="buy_btn" class="btn btn-primary btn-block">Checkout</button>
            </div>
        </div> 
    </div>     
</>
)
}

export default Cart
