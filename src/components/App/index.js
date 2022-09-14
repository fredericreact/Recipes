// == Import npm
import React from 'react';
import Header from '../Header';

import Ingredients from '../Ingredients';
import Etapes from '../Etapes';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
  <Header/>
  <Ingredients/>
  <Etapes/>
  </div>
);

// == Export
export default App;