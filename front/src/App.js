import React from 'react';
import axios from 'axios';
import AppBar from './components/AppBar.jsx'
import Home from './views/Home.jsx'
import {useDispatch} from "react-redux"
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import './App.css';
import NoDisponible from './components/NoDisponible.jsx'
import Category from "./components/Category"
import { setUser } from "./state/user";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reviews from "./components/Reviews.jsx";
import OrderDetail from "./components/OrderDetail.jsx";
import AdminPanel from "./components/admin-views/AdminPanel";
import ProductosAdmin from "./components/admin-views/ProductosAdmin.jsx";
import UsuariosAdmin from "./components/admin-views/UsuariosAdmin.jsx";
import OrdenesAdmin from "./components/admin-views/OrdenesAdmin.jsx";
import OrdenesUsuario from "./components/admin-views/OrdenesUsuario.jsx";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : undefined;
    if (token) {
      axios.defaults.headers.authorization = `${token}`;
      axios.post("/api/auth/me").then((data) => {
        dispatch(setUser(data.data));
      });
    }
  }, []);

  return (
    <div className="App bg-light">
      <AppBar />
      <div className="main">
        <Switch>
          <Route path exact="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
          <Route path="/products/:id/reviews" render={({ match }) => <Reviews id={match.params.id} />}
          />

          <Route path="/products/:id" render={({ match }) => <ProductDetail id={match.params.id} />}
          />
          <Route path="/products"><Products /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route path="/courses/:id"><NoDisponible /></Route>
          {/* <Route path ="/products/detail" component={ProductDetail}/> */}

          <Route exact path="/adminPanel"><AdminPanel /></Route>

          <Route exact path="/adminPanel/productos"><ProductosAdmin />   </Route>

          <Route exact path="/adminPanel/usuarios"><UsuariosAdmin />
          </Route>

          <Route exact path="/adminPanel/ordenes"><OrdenesAdmin />
          </Route>

          <Route exact path="/adminPanel/usuarios/ordenesUsuario">
            <OrdenesUsuario />
          </Route>

          <Route path="/order"><OrderDetail /></Route>
          <Route path = '/categories/:id' render={({match}) => <Category id={match.params.id} />}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
