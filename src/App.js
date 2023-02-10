import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import PageLayout from './components/layouts/PageLayout'
import Home from './components/pages/Home'



function App() {


  return (

    <Router>
        <Routes>
          <Route 
          element={<Home />}
          path="/"
          />
        </Routes>
    </Router>
  );
}

export default App;
