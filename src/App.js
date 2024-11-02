import './App.css';
import Home from './screens/Home';
import Login from './screens/Login'; // Import the Login component
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  // Import the dark theme
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
