import React, { useState, useEffect } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    avatarUrl: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('userData');
    if (token && storedUser) {
      setProfile(JSON.parse(storedUser)); // Set user profile data from localStorage
    } else {
      window.location.href = '/login'; // Redirect to login if no token is found
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(profile)); // Save updated profile data
    alert('Profile updated');
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

export default Profile;
