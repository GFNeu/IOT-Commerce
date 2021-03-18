import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import carritoReducer from "./carrito"
import categoriesReducer from "./categories"
import productReducer from "./product"
import userReducer from "./user"
import reviewsReducer from "./reviews"
import allUserReducer from "./allusers"
<<<<<<< HEAD
import orderReducer from "./order"

=======
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
        orders : orderReducer
=======
        categoriesAdmin: categoriesAdminReducer,
>>>>>>> e443fb087773003cea3d8b00347efe1b71efca27
    },
});


export default store