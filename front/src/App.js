import './App.css';
import AppBar from './components/AppBar.jsx'
import Home from './views/Home.jsx'
import React from 'react';

import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
        <AppBar />
 
      
        <Switch>

        <Route path exact ='/'> <Home/> </Route>
        <Route path ='/login'><Login /></Route>
        <Route path ='/register'><Register /></Route>
        
        <Route path ='/products/detail' component={ProductDetail}/>
        <Route path ='/products'><Products /></Route>
        <Route path ='/cart'><Cart /></Route>
        
        </Switch>
      
    </div>
  );
}

export default App;
