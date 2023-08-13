import React from 'react';
import { Link } from 'react-router-dom';
// import './components/verticalNavBar.css'; // Import the CSS file


const VerticalNavBar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/artwork">Artwork</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default VerticalNavBar;
