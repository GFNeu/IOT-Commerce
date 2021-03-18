import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import carritoReducer from "./carrito"
import categoriesReducer from "./categories"
import productReducer from "./product"
import userReducer from "./user"
import reviewsReducer from "./reviews"
import allUserReducer from "./allusers"
<<<<<<< HEAD
import allOrdersReducer from "./allorders"

=======
<<<<<<< HEAD
import orderReducer from "./order"

=======
>>>>>>> 5d35bcde0b54ed0f3098834431103f34ab5710d5
import categoriesAdminReducer from "./categoriesAdmin"
>>>>>>> e443fb087773003cea3d8b00347efe1b71efca27

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        carrito: carritoReducer,
        categories: categoriesReducer,
        product: productReducer,
        user: userReducer,
        allUser: allUserReducer,
        reviews : reviewsReducer,
<<<<<<< HEAD
        allOrders: allOrdersReducer,
=======
<<<<<<< HEAD
        orders : orderReducer
=======
>>>>>>> 5d35bcde0b54ed0f3098834431103f34ab5710d5
        categoriesAdmin: categoriesAdminReducer,
>>>>>>> e443fb087773003cea3d8b00347efe1b71efca27
    },
});


export default store