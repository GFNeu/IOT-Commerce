import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route path exact ='/'> <Home/> </Route>
        <Route path='/login'><Login /></Route>
        <Route path='/register'><Register /></Route>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
