import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    role: 'user',
    avatarUrl: '',
  });

  // Fetch user profile on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setProfile(response.data))
        .catch((error) => console.error(error));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put('/api/profile', profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Profile updated');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="file"
          name="avatarUrl"
          onChange={(e) => setProfile({ ...profile, avatarUrl: e.target.files[0] })}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

