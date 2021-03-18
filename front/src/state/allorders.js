import {
    createReducer,
    createAsyncThunk,
    createAction,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  //FUNCIONES SOLO PARA EL ADMIN
  export const getOrders = createAsyncThunk("GET_ORDERS", () => {
    return axios.get("/api/orders").then((respuesta) => respuesta.data);
  });  
    
  const allOrdersReducer = createReducer([], {
    [getOrders.fulfilled]: (state, action) => action.payload   
  
  });
  
  export default allOrdersReducer;