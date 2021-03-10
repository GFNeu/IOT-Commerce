import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import NavbarFunc from './components/NavbarFunc';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Switch>
        <Route path exact ='/'> <NavbarFunc/> </Route>
        <Route path='/login'><Login /></Route>
        <Route path='/register'><Register /></Route>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
