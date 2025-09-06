import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function PublicNavbar({ isLoggedIn }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`navbar ${isHomePage ? "home-navbar" : ""}`}>
      <div className="logo">
        <img src="/src/assets/logo.png" alt="StudyFusion Logo" />
        <span className='text'>FocusFusion</span>
      </div>
      <div className="nav-links">
        <Link to="/about" className="about-btn">About Us</Link>  {/* New About Us Button */}
        {isHomePage && !isLoggedIn && (
          <Link to="/signup" className="join-btn">Join Us</Link>
        )}
      </div>
    </nav>
  );
}

export default PublicNavbar;

