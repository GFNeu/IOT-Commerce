import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {addAmount, removeAmount, emptyCarrito, checkout} from '../state/carrito'
import swal from "sweetalert";

const Cart = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const cartItems = useSelector(state=> state.carrito)
    const user = useSelector(state => state.user)

    const handleCheckout = () => {
        if(user.id){
          dispatch(checkout())
              .then(()=>{
                  swal('¡Gracias por su compra!')
                  history.push('/order')
              })
        }else{
          swal('Necesita logearse para poder comprar')
          history.push('/login')
        }
    }

return (
  <div className="d-block w-100">
    <h2 className="m-3 d-block">
      Your Cart: <b> {cartItems.length ? cartItems.length : "No"} items</b>
    </h2>

    {cartItems.length > 0 && (
      <div className="row d-flex justify-content-around w-100">
        <div className="col-12 col-lg-8">
          {cartItems.length &&
            cartItems.map((item) => (
              <div key={item.id}>
                <hr />

                <div className="cart-item" key={item.id}>
                  <div className="row">
                    <div className="col-4 col-lg-2">
                      <img src={item.photo} height="100" width="115" />
                    </div>

                    <div className="col-5 col-lg-5 mt-4 ">
                      <Link to={`/products/${item.id}`}>
                        <p id="card_item_name">
                          <strong>{item.name}</strong>
                        </p>
                      </Link>
                      <p id="card_item_price">${item.price}</p>
                    </div>

                    <div className="col-3 col-lg-3 mt-4">
                      <div className="stockCounter d-inline-flex w-100">
                        <span
                          className="btn btn-dark minus mr-1"
                          onClick={() => dispatch(removeAmount(item.id))}
                        >
                          -
                        </span>

                        <input
                          type="text"
                          className="form-control d-inline"
                          style={{width: "3rem"}}
                          value={item.cantidad}
                          disabled
                        />

                        <span
                          className="btn btn-dark plus ml-1"
                          onClick={() => dispatch(addAmount(item.id))}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          
        </div>

        <div className="col-12 col-lg-3 ">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal:{" "}
              <span className="order-summary-values">{cartItems.length}</span>
            </p>
            <p>
              Est. total:{" "}
              <span className="order-summary-values">{`$${
                cartItems.length &&
                cartItems
                  .reduce((acc, item) => {
                    return (acc += item.price * item.cantidad);
                  }, 0)
                  .toString()
              }`}</span>
            </p>

            <hr />
            <button id="buy_btn" className="btn btn-primary btn-block" onClick={handleCheckout}>
              Checkout
            </button>
            <hr/>
            <button className="btn btn-dark btn-block" onClick={() => dispatch(emptyCarrito())}>Vaciar carrito</button>
          </div>
        </div>
      </div>
    )}
  </div>
);
}

export default Cart



/* const cartItems = [
    {name:' ADXL335 ',id:"#514525",price:499.99},
    {name:' DGCBJS35 ',id:"#585514125",price:299.99},
    {name:' DGCBJS35 ',id:"#585514125",price:299.99},
    {name:' DGCBJS35 ',id:"#585514125",price:299.99},
    {name:' DGCBJS35 ',id:"#585514125",price:299.99}

  ] */