import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [userName, setUserName] = useState(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.username : '';
  });
  const [error, setError] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        // Store data in localStorage
        localStorage.setItem('user', JSON.stringify(data)); // Save the entire user object
        localStorage.setItem('token', data.token); // Save token separately if needed

        setIsLoggedIn(true);
        setUserName(data.username); // Assuming the backend returns a `username`
        setError('');
        return true;
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
        return false;
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Landing 
                isLoggedIn={isLoggedIn} 
                userName={userName} 
                handleLogin={handleLogin} 
              />
            )
          }
        />
        
        <Route 
          path="/signup" 
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <SignUp />
            )
          } 
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard userName={userName} handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Catch all route - redirect to dashboard if logged in, otherwise to landing */}
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;