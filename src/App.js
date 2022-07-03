import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import AppRoutes from './AppRoutes';


// import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <React.Fragment>
    <Router>
    <Header />
    <Nav />
    <AppRoutes />
    </Router>
    </React.Fragment>
  );
}

export default App;
