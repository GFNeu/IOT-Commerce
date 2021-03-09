import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        
    },
});


export default store