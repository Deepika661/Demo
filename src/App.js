import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {routePath} from './constants/routes';
import Home from "./views/Home/Home"
import './App.css';

const App =(props)=>{
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path={routePath.HOME} name="Home Page" component={Home}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
