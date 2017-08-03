import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home } from './components';
import { Route } from 'react-router-dom';
import { MovieList } from './components';

const App = () => (
  <div>
    <Navigation />
     <Route exact path="/" component={MovieList}/> 
    

  </div>
)

export default App;
