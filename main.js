import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.jsx';
import Pokemons from './containers/Pokemons.jsx';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/Pokemons" component={Pokemons}/>
  </Router>)
  , document.getElementById('app'));
