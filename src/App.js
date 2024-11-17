import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  // Load profiles from localStorage on app load
  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(savedProfiles);
  }, []);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
  };

  const deleteProfile = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      const updatedProfiles = profiles.filter((profile) => profile.id !== id);
      setProfiles(updatedProfiles);
    }
  };

  return (
    <Router>
      <nav style={{ padding: '10px', background: '#007bff', color: 'white' }}>
        <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Profiles</Link>
        <Link to="/admin" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Admin Panel</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProfileList profiles={profiles} deleteProfile={deleteProfile} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel addProfile={addProfile} />} />
      </Routes>
    </Router>
  );
};

export default App;
