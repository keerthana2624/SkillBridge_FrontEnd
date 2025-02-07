import React, { useState } from 'react';
import axios from 'axios';
import GoogleLoginButton from './GoogleLoginButton';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', credentials); // Backend endpoint
      // Assuming response includes token
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  const handleGoogleLogin = (response) => {
    // Send Google login response to backend for verification
  };

  const handleGoogleLoginError = () => {
    alert('Google login failed');
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

      <GoogleLoginButton onSuccess={handleGoogleLogin} onError={handleGoogleLoginError} />
    </div>
  );
}

export default Login;