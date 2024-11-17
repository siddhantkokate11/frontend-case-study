import React from 'react';
import { Link } from 'react-router-dom';
import './profileCard.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-img" />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Link to={`/profile/${profile.id}`} className="view-summary-btn">View Summary</Link>
    </div>
  );
};

export default ProfileCard;
