import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const getReviewsByProduct = createAsyncThunk("GET_REVIEWS_BY_PRODUCT",(data)=>{
    return axios.get(`/api/products/${data}/reviews`).then(res=> res.data)
})

const reviewsReducer = createReducer([],{
    [getReviewsByProduct.fulfilled]: (state, action) => action.payload,


});

export default reviewsReducer