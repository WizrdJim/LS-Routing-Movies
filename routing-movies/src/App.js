import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Movie } from './components';
import { Route } from 'react-router-dom';
import { MovieList } from './components';

const App = (props) => (
  <div>
    <Navigation />
     <Route exact path="/" component={MovieList} /> 
     <Route path="/:id" component ={Movie} />
  </div>
)


export default App;
