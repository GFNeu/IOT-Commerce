import {createReducer, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const getPastOrders = createAsyncThunk("GET_PAST_ORDERS",(data, thunkAPI)=>{
    const{user} = thunkAPI.getState()
    return axios.get(`/api/users/orders/${user.id}`)
    .then(res => res.data )
  })


const orderReducer = createReducer([],{
    [getPastOrders.fulfilled] : (state,action) => action.payload

});

export default orderReducer