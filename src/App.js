import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ArtworkDetail from './components/pages/ArtworkDetail';
import VerticalNavBar from './components/verticalNavBar'; // Import VerticalNavBar component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Artwork For Sale</h1>
        </header>
        <div className="App-content">
          {/* Integrate the VerticalNavBar */}
          <VerticalNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

