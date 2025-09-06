import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log("Event : ", e);
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up:', formData);
    // Placeholder for backend API call
   
        axios.post(`http://localhost:8080/users/signup`, formData)
        .then((response) => {
            console.log('Sign Up Successful:', response.data);
            navigate('/');   // Redirect to landing page after sign-up
        }).catch((error) => {
            console.error('Error during sign up:', error);
        });
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h2>Sign Up for StudyFusion</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;