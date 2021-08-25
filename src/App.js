import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';

function App() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <ItemListContainer />
          <ItemDetailContainer />
        </BrowserRouter>
      </>
    );
}

export default App;
