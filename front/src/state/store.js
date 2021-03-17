import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import carritoReducer from "./carrito"
import categoriesReducer from "./categories"
import productReducer from "./product"
import userReducer from "./user"
import reviewsReducer from "./reviews"
import allUserReducer from "./allusers"
import categoriesAdminReducer from "./categoriesAdmin"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        carrito: carritoReducer,
        categories: categoriesReducer,
        product: productReducer,
        user: userReducer,
        allUser: allUserReducer,
        reviews : reviewsReducer,
        categoriesAdmin: categoriesAdminReducer,
    },
});


export default store