import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {addAmount, removeAmount, emptyCarrito} from '../state/carrito'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state=> state.carrito)

return (
  <>
    <h2 className="mt-3">
      Your Cart: <b> {cartItems.lenght ? cartItems.lenght : "No"} items</b>
    </h2>

    {cartItems.length > 0 && (
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-lg-8">
          {cartItems.length &&
            cartItems.map((item) => (
              <>
                <hr />

                <div className="cart-item" key={item.id}>
                  <div className="row">
                    <div className="col-4 col-lg-3">
                      <img src={item.photo} height="100" width="115" />
                    </div>

                    <div className="col-4 col-lg-2 mt-4 ">
                      <Link to={`/products/${item.id}`}>
                        <p id="card_item_name">
                          <strong>{item.name}</strong>
                        </p>
                      </Link>
                      <p id="card_item_price">${item.price}</p>
                    </div>

                    <div className="col-4 col-lg-3 mt-4">
                      <div className="stockCounter d-inline-flex w-100">
                        <span
                          className="btn btn-danger minus"
                          onClick={() => dispatch(removeAmount(item.id))}
                        >
                          -
                        </span>

                        <input
                          type="text"
                          className="form-control count d-inline"
                          value={item.cantidad}
                          disabled
                        />

                        <span
                          className="btn btn-primary plus "
                          onClick={() => dispatch(addAmount(item.id))}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))}
          <button
            className="btn btn-danger"
            onClick={() => dispatch(emptyCarrito())}
          >
            Vaciar carrito
          </button>
        </div>

        <div className="col-12 col-lg-3 ">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal:{" "}
              <span class="order-summary-values">{cartItems.length}</span>
            </p>
            <p>
              Est. total:{" "}
              <span class="order-summary-values">{`$${
                cartItems.length &&
                cartItems
                  .reduce((acc, item) => {
                    return (acc += item.price * item.cantidad);
                  }, 0)
                  .toString()
              }`}</span>
            </p>

            <hr />
            <button id="buy_btn" class="btn btn-primary btn-block">
              Checkout
            </button>
          </div>
        </div>
      </div>
    )}
  </>
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