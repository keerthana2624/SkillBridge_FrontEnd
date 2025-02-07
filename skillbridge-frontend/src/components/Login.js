import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Create navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login
    const fakeToken = 'fake-jwt-token'; // In real scenarios, this would be from the backend
    localStorage.setItem('token', fakeToken); // Store the token
    alert('Login successful');
    navigate('/profile'); // Redirect to Profile page after login
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to Register page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Register Button */}
      <div className="register-link">
        <button onClick={handleRegisterClick}>Don't have an account? Register</button>
      </div>
    </div>
  );
}

export default Login;
