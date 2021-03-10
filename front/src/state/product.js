import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

/*Acciones:
Traer favoritos ======= que seria esto???
Traer un producto
Traer por categoría
Agregar review
Admin: agregar producto
Admin: modificar producto
Admin: eliminar producto
*/
export const getProducts= createAsyncThunk("GET_PRODUCTS", (data)=>{
    return axios.get("/api/products/", data).then((respuesta)=>respuesta.data)
  })

export const getOne= createAsyncThunk("GET_ONE_PRODUCT", (data)=>{
    /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.get("/api/products/productId").then((respuesta)=>respuesta.data)
  })

export const getCategoryProducts= createAsyncThunk("GET_CATEGORY_PRODUCTS", (data)=>{
    /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.get(/*ver ruta*/"/api/categories/categoryId/products").then((respuesta)=>respuesta.data)
})

export const addReview= createAsyncThunk("ADD_REVIEW", ()=>{
    /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
  return axios.post(/*ver ruta*/"api/products/productId/reviews").then((respuesta)=>respuesta.data)
})

//FUNCIONES SOLO PARA EL ADMIN
export const addProduct= createAsyncThunk("ADD_PRODUCT", (data)=>{
    return axios.post("/api/products/", data).then((respuesta)=>respuesta.data)
  })

export const changeProduct= createAsyncThunk("CHANGE_PRODUCT", (data)=>{
    /*En algun lugar de la data tiene que venir el id para encontrar la ruta y la info para actualziar*/ 
    return axios.post("/api/products/productId", data).then((respuesta)=>respuesta.data)
  })

export const deleteProduct= createAsyncThunk("DELETE_PRODUCT", (data)=>{
    /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/ 
    return axios.delete("/api/products/productId").then((respuesta)=>respuesta.data)
  })





const productReducer= createReducer([], {
    [getProducts.fulfilled] : (state, action) =>  action.payload,
    [getOne.fulfilled]: (state, action) => action.payload,
    [getCategoryProducts.fulfilled] : (state, action) =>  action.payload, //Devuelve un arreglo con productos
    [addReview.fulfilled] : (state, action) =>  action.payload, //Que devuelva el producto
    [addProduct.fulfilled] : (state, action) =>  [...state, action.payload],
    [changeProduct.fulfilled] : (state, action) =>  action.payload, //Que devuelva todos
    [deleteProduct.fulfilled] : (state, action) =>  action.payload  //Que devuelva todos
})

  
export default productReducer