import {createAction, createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getCategories= createAction("GET_CATEGORIES")
/*Es solo una accion porque creo que es mejor hacer el axios dentro de un useEffect en la home, y dispatchear
la accion. Se puede transformar a un createasyncthunk*/




//FUNCIONES SOLO PARA EL ADMIN
export const createCategory= createAsyncThunk("CREATE_CATEGORY", (data)=>{
    return axios.post("/api/categories/", data).then((respuesta)=>respuesta.data)
  })

export const changeCategory= createAsyncThunk("CHANGE_CATEGORY", (data)=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.put(/*ver ruta*/"api/categories/categoryId").then((respuesta)=>respuesta.data)
  })

export const deleteCategory= createAsyncThunk("DELETE_CATEGORY", ()=>{
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.delete(/*ver ruta*/"api/categories/categoryId").then((respuesta)=>respuesta.data)
  })



const categoriesReducer= createReducer([], {
    [getCategories] : (state, action) =>  action.payload,
    [createCategory.fulfilled]: (state, action) => [...state, action.payload],
    [changeCategory.fulfilled] : (state, action) =>  action.payload, //deberiamos hacer que en la ruta devuelva todas las categorias
    [deleteCategory.fulfilled] : (state, action) =>  action.payload //deberiamos hacer que en la ruta devuelva todas las categorias
})

  
export default categoriesReducer