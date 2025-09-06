import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PublicNavbar from '../components/PublicNavbar';
import './Landing.css';

function Landing({ isLoggedIn, userName, handleLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleLogin(formData.email, formData.password); // Wait for handleLogin to complete
    if (success) {
      navigate('/dashboard'); // Redirect to the dashboard after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="landing">
      <PublicNavbar isLoggedIn={isLoggedIn} userName={userName} />
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Education With Planning </h1>
          <p className="banner-subtitle">
            Discover a world of learning with plannig & resources
          </p>
        </div>
      </div>
      <div className="login-container">
        <h2>Focus. Learn. Succeed</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">let's go</button>
        </form>
      </div>
    </div>
  );
}

export default Landing;