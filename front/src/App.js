import React from 'react';
import axios from 'axios';
import AppBar from './components/AppBar.jsx'
import Home from './views/Home.jsx'
<<<<<<< HEAD
import React from 'react';

import { Switch, Route } from "react-router-dom";
=======
import {useDispatch} from "react-redux"
import {setUser} from "./state/user"
import { BrowserRouter, Switch, Route } from "react-router-dom";
>>>>>>> 7c0b8e36d1cec5bbd7e2fbb0ef2473955029a732
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
<<<<<<< HEAD
import Cart from './components/Cart';
=======
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
<<<<<<< HEAD
import axios from 'axios';
import {useDispatch} from "react-redux"
import {setUser} from "./state/user"
>>>>>>> 0fbcfb1837105bdffbe581da14af8f9dd06548bf
=======
import './App.css';
import NoDisponible from './components/NoDisponible.jsx'
>>>>>>> 7c0b8e36d1cec5bbd7e2fbb0ef2473955029a732


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
<<<<<<< HEAD
        
        <Route path ='/products/detail' component={ProductDetail}/>
        <Route path ='/products'><Products /></Route>
        <Route path ='/cart'><Cart /></Route>
=======
        <Route path = '/products/:id' render={({match}) => <ProductDetail id={match.params.id} />}/>
        <Route path ='/products'><Products /></Route>
        <Route path ='/cart'><Cart /></Route>
        <Route path ='/courses/:id'><NoDisponible /></Route>
        {/* <Route path ="/products/detail" component={ProductDetail}/> */}
>>>>>>> 0fbcfb1837105bdffbe581da14af8f9dd06548bf
        
        </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default App;
