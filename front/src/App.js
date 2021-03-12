import './App.css';
import AppBar from './components/AppBar.jsx'
import Home from './views/Home.jsx'
import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import axios from 'axios';
import {useDispatch} from "react-redux"
import {setUser} from "./state/user"


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
 
      
        <Switch>

        <Route path exact ='/'> <Home/> </Route>
        <Route path ='/login'><Login /></Route>
        <Route path ='/register'><Register /></Route>
        <Route path = '/products/:id' render={({match}) => <ProductDetail id={match.params.id} />}/>
        <Route path ='/products'><Products /></Route>
        <Route path ='/cart'><Cart /></Route>
        {/* <Route path ="/products/detail" component={ProductDetail}/> */}
        
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
