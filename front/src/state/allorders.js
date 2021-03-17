import {
    createReducer,
    createAsyncThunk,
    createAction,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  //FUNCIONES SOLO PARA EL ADMIN
  export const getUsers = createAsyncThunk("GET_USERS", () => {
    return axios.get("/api/users").then((respuesta) => respuesta.data);
  });
  
 
  export const busquedaUsuario = createAction("BUSQUEDA_USUARIO");
     
  const allUserReducer = createReducer([], {
    [getUsers.fulfilled]: (state, action) => action.payload, 
    [busquedaUsuario]: (state, action) => action.payload,    
  
  });
  
  export default allUserReducer;