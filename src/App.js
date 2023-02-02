import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import PageLayout from './components/layouts/PageLayout'
import Home from './components/pages/Home'
import HomeMobile from './components/pages/HomeMobile'



function App() {

  const [width, setWindowWidth] = useState()

  useEffect(() => {

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize",updateDimensions);

  }, [])

  const updateDimensions = () => {
    const innerWidth = window.innerWidth
    setWindowWidth(innerWidth)
  }

  const responsive = {
      showTopNavMenu: width > 1023
  }

  return (

    <Router>
        <Routes>
        {responsive.showTopNavMenu ? (
          <Route 
          element={<Home />}
          path="/"
          />
        
        ) : (
          <Route 
          element={<HomeMobile />}
          path="/"
          />
        )}
        </Routes>
    </Router>
  );
}

export default App;
