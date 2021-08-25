import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <ItemListContainer />
        </BrowserRouter>
      </>
    );
}

export default App;
