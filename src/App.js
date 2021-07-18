import React from 'react';
import './App.css';
import {Navigation} from './components/Navigation'
import { Header } from './components/Header'

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Header />
    </React.Fragment>
  );
}

export default App;
