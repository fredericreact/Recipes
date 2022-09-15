// == Import npm
import React from 'react';
import Header from '../Header';

import Ingredients from '../Ingredients';
import Etapes from '../Etapes';

import './styles.css';


import data from '../../data/recipe'

console.log(data);

// == Composant
const App = () => (
  <div className="app">
  <Header 
  title={data.title}
  difficulty={data.difficulty}
  author={data.author}
  image = {data.thumbnail}
  />  
  <Ingredients list={data.ingredients}/>
  <Etapes/>
  </div>
);

// == Export
export default App;