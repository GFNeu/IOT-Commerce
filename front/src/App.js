import React from 'react';
import axios from 'axios';
import AppBar from './components/AppBar.jsx'
import Home from './views/Home.jsx'

import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import Reviews from './components/Reviews.jsx'
import OrderDetail from './components/OrderDetail.jsx'

import {useDispatch} from "react-redux"
import {setUser} from "./state/user"
import './App.css';
import NoDisponible from './components/NoDisponible.jsx'

function App() {
  const dispatch= useDispatch()
  React.useEffect(()=>{
    const token= localStorage.getItem("token") ? localStorage.getItem("token"): undefined
    if(token){
      axios.defaults.headers.authorization = `${token}`;
      axios.post("/api/auth/me").then(data => {
      dispatch(setUser(data.data))})
    }

    
  }, [])
  return (
    <div className="App">
        <AppBar />
 
        <div className="main">
        <Switch>

        <Route path exact ='/'> <Home/> </Route>
        <Route path ='/login'><Login /></Route>
        <Route path ='/register'><Register /></Route>

        <Route path = '/products/:id/reviews' render={({match})=> <Reviews id={match.params.id}/>}/>
        <Route path = '/products/:id' render={({match}) => <ProductDetail id={match.params.id} />}/>
       
        <Route path ='/products'><Products /></Route>
        <Route path ='/cart'><Cart /></Route>
        <Route path ='/order'><OrderDetail /></Route>
        <Route path ='/courses/:id'><NoDisponible /></Route>
  
        
        </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default App;
